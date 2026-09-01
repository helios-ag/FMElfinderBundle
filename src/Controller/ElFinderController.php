<?php

namespace FM\ElfinderBundle\Controller;

use Exception;
use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;
use FM\ElfinderBundle\Exception\UploadConfigurationException;
use FM\ElfinderBundle\Loader\ElFinderLoaderInterface;
use FM\ElfinderBundle\Loader\ElFinderUploadLoaderInterface;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Twig\Environment;

class ElFinderController
{
    protected array $params;
    private Environment $twig;
    private ElFinderLoaderInterface $loader;

    public function __construct(Environment $twig, array $params, ElFinderLoaderInterface $loader)
    {
        $this->twig   = $twig;
        $this->params = $params;
        $this->loader = $loader;
    }

    /**
     * Renders Elfinder.
     *
     * @throws Exception
     */
    public function show(Request $request, string $instance, string $homeFolder): Response
    {
        $this->assertValidHomeFolder($homeFolder);

        $efParameters = $this->params;

        if (empty($efParameters['instances'][$instance])) {
            throw new NotFoundHttpException('Instance not found');
        }
        $parameters = $efParameters['instances'][$instance];

        if (empty($parameters['locale'])) {
            $parameters['locale'] = $request->getLocale();
        }

        $assetsPath = $efParameters['assets_path'];
        $multiple   = ($parameters['multiple'] ?? false) === true;

        if ('form' === $parameters['editor'] && true === $request->query->has('multiple')) {
            $multipleValue = $request->query->get('multiple');

            if (false === in_array($multipleValue, ['0', '1'], true)) {
                throw new BadRequestHttpException('The multiple parameter must be 0 or 1.');
            }

            $multiple = '1' === $multipleValue;
        }

        $result = $this->selectEditor(
            $parameters,
            $instance,
            $homeFolder,
            $assetsPath,
            $request->query->get('id'),
            $multiple
        );

        return new Response($this->twig->render($result['template'], $result['params']));
    }

    public function load(SessionInterface $session, HttpKernelInterface $httpKernel, EventDispatcherInterface $eventDispatcher, Request $request, string $instance, string $homeFolder): JsonResponse
    {
        $this->assertValidHomeFolder($homeFolder);

        $loader       = $this->loader;
        $efParameters = $this->params;
        $loader->setSession($session);
        $loader->initBridge($instance, $efParameters); // builds up the Bridge object for the loader with the given instance

        $preExecutionEvent = new ElFinderPreExecutionEvent($request, $httpKernel, $instance, $homeFolder);
        $eventDispatcher->dispatch($preExecutionEvent);

        $result = $loader->load($request); // the instance is already set

        $postExecutionEvent = new ElFinderPostExecutionEvent($request, $httpKernel, $instance, $homeFolder, $result);
        $eventDispatcher->dispatch($postExecutionEvent);

        // returning result (who may have been modified by a post execution event listener)
        return new JsonResponse($postExecutionEvent->getResult());
    }

    public function upload(
        SessionInterface $session,
        HttpKernelInterface $httpKernel,
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        string $instance,
        string $homeFolder
    ): JsonResponse {
        $this->assertValidHomeFolder($homeFolder);

        $file = $request->files->get('upload');

        if (false === ($file instanceof UploadedFile)) {
            return $this->ckeditorError('No upload file was provided.', 400);
        }

        if (false === $file->isValid()) {
            return $this->ckeditorError('No valid upload file was provided.', 400);
        }

        if (false === ($this->loader instanceof ElFinderUploadLoaderInterface)) {
            return $this->ckeditorError('The configured loader does not support uploads.', 400);
        }

        if (false === isset($this->params['instances'][$instance])) {
            return $this->ckeditorError('Instance not found.', 404);
        }

        $this->loader->setSession($session);
        $this->loader->initBridge($instance, $this->params);
        $request->query->set('cmd', 'upload');

        $preExecutionEvent = new ElFinderPreExecutionEvent($request, $httpKernel, $instance, $homeFolder);
        $eventDispatcher->dispatch($preExecutionEvent);

        try {
            $result = $this->loader->upload($file);
        } catch (UploadConfigurationException $exception) {
            return $this->ckeditorError($exception->getMessage(), 400);
        }

        $postExecutionEvent = new ElFinderPostExecutionEvent($request, $httpKernel, $instance, $homeFolder, $result);
        $eventDispatcher->dispatch($postExecutionEvent);

        return $this->ckeditorResponse(
            $postExecutionEvent->getResult(),
            $file,
            'ckeditor5' === $request->query->get('response_format')
        );
    }

    public function mainJS(): Response
    {
        $version = new EmptyVersionStrategy();
        $package = new Package($version);
        $mainUrl = $package->getUrl(sprintf('%s/bundles/fmelfinder/js', $this->params['assets_path']));

        return new Response(
            $this->twig->render('@FMElfinder/Elfinder/helper/main.js.twig',['mainUrl' => $mainUrl]),
            200,
            [
                'Content-type' => 'text/javascript',
            ]
        );
    }

    private function assertValidHomeFolder(string $homeFolder): void
    {
        if ('' === $homeFolder) {
            return;
        }

        if (str_contains($homeFolder, "\0") ||
            str_contains($homeFolder, '\\') ||
            str_starts_with($homeFolder, '/') ||
            str_ends_with($homeFolder, '/')
        ) {
            throw new BadRequestHttpException('Invalid home folder path.');
        }

        foreach (explode('/', $homeFolder) as $segment) {
            if ('' === $segment || '.' === $segment || '..' === $segment) {
                throw new BadRequestHttpException('Invalid home folder path.');
            }
        }
    }

    private function ckeditorResponse(array $result, UploadedFile $file, bool $ckeditor5Response = false): JsonResponse
    {
        if (true === isset($result['error'])) {
            return $this->ckeditorError($this->flattenElFinderMessage($result['error']));
        }

        $url = $result['uploadUrl'] ?? null;

        if (false === is_string($url) || '' === $url) {
            return $this->ckeditorError('Uploaded file URL is unavailable.');
        }

        $fileName = $result['added'][0]['name'] ?? $file->getClientOriginalName();
        $payload  = [
            'uploaded' => 1,
            'fileName' => true === is_string($fileName) && '' !== $fileName ? $fileName : $file->getClientOriginalName(),
            'url'      => $url,
        ];

        if (true === isset($result['warning'])) {
            $warning = ['message' => $this->flattenElFinderMessage($result['warning'])];

            if (true === $ckeditor5Response) {
                $payload['warning'] = $warning;
            } else {
                $payload['error'] = $warning;
            }
        }

        return new JsonResponse($payload);
    }

    private function ckeditorError(string $message, int $status = 200): JsonResponse
    {
        return new JsonResponse([
            'uploaded' => 0,
            'error'    => ['message' => $message],
        ], $status);
    }

    private function flattenElFinderMessage(mixed $message): string
    {
        if (true === is_array($message)) {
            $parts = array_filter(array_map($this->flattenElFinderMessage(...), $message));

            return [] !== $parts ? implode(' ', $parts) : 'Upload failed.';
        }

        if (false === is_scalar($message)) {
            return 'Upload failed.';
        }

        $normalized = trim(html_entity_decode((string) $message, ENT_QUOTES | ENT_HTML5, 'UTF-8'));

        return '' !== $normalized ? $normalized : 'Upload failed.';
    }

    /**
     * @throws Exception
     */
    private function selectEditor(
        array $parameters,
        string $instance,
        string $homeFolder,
        string $assetsPath,
        ?string $formTypeId = null,
        bool $multiple = false
    ): array {
        $editor       = $parameters['editor'];
        $locale       = $parameters['locale'] ?: $this->container->getParameter('locale');
        $fullScreen   = $parameters['fullscreen'];
        $relativePath = $parameters['relative_path'];
        $pathPrefix   = $parameters['path_prefix'];
        $theme        = $parameters['theme'];
        // convert to javascript array
        $onlyMimes = count($parameters['visible_mime_types'])
                              ? "['" . implode("','", $parameters['visible_mime_types']) . "']"
                              : '[]';
        $result = [];

        switch ($editor) {
            case 'custom':
                if (empty($parameters['editor_template'])) {
                    throw new Exception("Configuration error : 'custom' editor must define 'editor_template' parameter");
                }

                $result['template'] = $parameters['editor_template'];
                $result['params']   = [
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                    'onlyMimes'     => $onlyMimes,
                    'id'            => $formTypeId,
                ];

                return $result;
            case 'callback':
                $callbackFunction = $parameters['callback_function'] ?? null;

                if (false === is_string($callbackFunction) || '' === trim($callbackFunction)) {
                    throw new Exception("Configuration error : 'callback' editor must define 'callback_function' parameter");
                }

                $callbackFunction  = trim($callbackFunction);
                $callbackSegments  = explode('.', $callbackFunction);
                $forbiddenSegments = ['__proto__', 'prototype', 'constructor'];
                $invalidSegments   = array_filter(
                    $callbackSegments,
                    static fn (string $segment): bool => 1 !== preg_match('/^[A-Za-z_$][A-Za-z0-9_$]*$/D', $segment) ||
                        true === in_array($segment, $forbiddenSegments, true)
                );

                if ([] !== $invalidSegments) {
                    throw new Exception("Configuration error : 'callback_function' must be a valid dotted JavaScript path");
                }

                $result['template'] = '@FMElfinder/Elfinder/callback.html.twig';
                $result['params']   = [
                    'locale'           => $locale,
                    'fullscreen'       => $fullScreen,
                    'instance'         => $instance,
                    'homeFolder'       => $homeFolder,
                    'relative_path'    => $relativePath,
                    'prefix'           => $assetsPath,
                    'theme'            => $theme,
                    'pathPrefix'       => $pathPrefix,
                    'onlyMimes'        => $onlyMimes,
                    'callbackFunction' => $callbackFunction,
                    'multiple'         => $multiple,
                ];

                return $result;
            case 'ckeditor':
                $result['template'] = '@FMElfinder/Elfinder/ckeditor.html.twig';
                $result['params']   = [
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                    'onlyMimes'     => $onlyMimes,
                ];

                return $result;
            case 'summernote':
                $result['template'] = '@FMElfinder/Elfinder/summernote.html.twig';
                $result['params']   = [
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                    'onlyMimes'     => $onlyMimes,
                ];

                return $result;
            case 'tinymce':
                $result['template'] = '@FMElfinderBundle/Elfinder/tinymce.html.twig';
                $result['params']   = [
                    'locale'             => $locale,
                    'tinymce_popup_path' => $parameters['tinymce_popup_path'],
                    'instance'           => $instance,
                    'homeFolder'         => $homeFolder,
                    'prefix'             => $assetsPath,
                    'theme'              => $theme,
                    'pathPrefix'         => $pathPrefix,
                    'onlyMimes'          => $onlyMimes,
                ];

                return $result;
            case 'tinymce4':
                $result['template'] = '@FMElfinder/Elfinder/tinymce4.html.twig';
                $result['params']   = [
                    'locale'        => $locale,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                    'onlyMimes'     => $onlyMimes,
                ];

                return $result;
            case 'fm_tinymce':
                $result['template'] = '@FMElfinder/Elfinder/fm_tinymce.html.twig';
                $result['params']   = [
                    'locale'        => $locale,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                    'onlyMimes'     => $onlyMimes,
                ];

                return $result;
            case 'form':
                $result['template'] = '@FMElfinder/Elfinder/elfinder_type.html.twig';
                $result['params']   = [
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'id'            => $formTypeId,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                    'onlyMimes'     => $onlyMimes,
                    'multiple'      => $multiple,
                ];

                return $result;
            case 'tinymce5':
                $result['template'] = '@FMElfinder/Elfinder/tinymce5.html.twig';
                $result['params']   = [
                    'locale'     => $locale,
                    'fullscreen' => $fullScreen,
                    'instance'   => $instance,
                    'homeFolder' => $homeFolder,
                    'prefix'     => $assetsPath,
                    'onlyMimes'  => $onlyMimes,
                    'theme'      => $theme,
                    'pathPrefix' => $pathPrefix,
                ];

                return $result;
            default:
                $result['template'] = '@FMElfinder/Elfinder/simple.html.twig';
                $result['params']   = [
                    'locale'     => $locale,
                    'fullscreen' => $fullScreen,
                    'instance'   => $instance,
                    'homeFolder' => $homeFolder,
                    'prefix'     => $assetsPath,
                    'onlyMimes'  => $onlyMimes,
                    'theme'      => $theme,
                    'pathPrefix' => $pathPrefix,
                ];

                return $result;
        }
    }
}
