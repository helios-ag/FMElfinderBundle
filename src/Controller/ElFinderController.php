<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Controller;

use Exception;
use FM\ElfinderBundle\Loader\ElFinderLoader;
use FM\ElfinderBundle\Session\ElFinderSession;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;
use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Twig\Environment;

class ElFinderController
{
    private Environment $twig;
    private array $params;
    private $loader;

    public function __construct(Environment $twig, array $params, $loader)
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
        $efParameters = $this->params;

        if (empty($efParameters['instances'][$instance])) {
            throw new NotFoundHttpException('Instance not found');
        }
        $parameters   = $efParameters['instances'][$instance];

        if (empty($parameters['locale'])) {
            $parameters['locale'] = $request->getLocale();
        }

        $assetsPath      = $efParameters['assets_path'];
        $result          = $this->selectEditor($parameters, $instance, $homeFolder, $assetsPath, $request->get('id'));

        return new Response($this->twig->render($result['template'], $result['params']));
    }

    /**
     * @throws Exception
     */
    private function selectEditor(array $parameters, string $instance, string $homeFolder, string $assetsPath, string $formTypeId = null): array
    {
        $editor         = $parameters['editor'];
        $locale         = $parameters['locale'] ?: $this->container->getParameter('locale');
        $fullScreen     = $parameters['fullscreen'];
        $relativePath   = $parameters['relative_path'];
        $pathPrefix     = $parameters['path_prefix'];
        $theme          = $parameters['theme'];
        // convert to javascript array
        $onlyMimes      = count($parameters['visible_mime_types'])
                              ? "['".implode("','", $parameters['visible_mime_types'])."']"
                              : '[]';
        $result         = [];

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
                ];

                return $result;
            default:
                $result['template'] = '@FMElfinder/Elfinder/simple.html.twig';
                $result['params']   = [
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'prefix'        => $assetsPath,
                    'onlyMimes'     => $onlyMimes,
                    'theme'         => $theme,
                    'pathPrefix'    => $pathPrefix,
                ];

                return $result;
        }
    }

    public function load(SessionInterface $session, HttpKernelInterface $httpKernel, EventDispatcherInterface $eventDispatcher, Request $request, string $instance, string $homeFolder): JsonResponse
    {
        $loader = $this->loader;
        $efParameters = $this->params;
        $loader->initBridge($instance, $efParameters); // builds up the Bridge object for the loader with the given instance

        if ($loader instanceof ElFinderLoader) {
            $loader->setSession(new ElFinderSession($session));
        }

        $preExecutionEvent = new ElFinderPreExecutionEvent($request, $httpKernel, $instance, $homeFolder);
        $eventDispatcher->dispatch($preExecutionEvent);

        $result = $loader->load($request); // the instance is already set

        $postExecutionEvent = new ElFinderPostExecutionEvent($request, $httpKernel, $instance, $homeFolder, $result);
        $eventDispatcher->dispatch($postExecutionEvent);

        // returning result (who may have been modified by a post execution event listener)
        return new JsonResponse($postExecutionEvent->getResult());
    }

    public function mainJS()
    {
        $version = new EmptyVersionStrategy();
        $package = new Package($version);
        $mainUrl = $package->getUrl('/bundles/fmelfinder/js');
        return new Response(
            $this->twig->render('@FMElfinder/Elfinder/helper/main.js.twig',['mainUrl' => $mainUrl]),
            200,
            [
                'Content-type' => 'text/javascript',
            ]
        );
    }
}
