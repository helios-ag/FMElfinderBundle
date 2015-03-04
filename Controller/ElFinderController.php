<?php
namespace FM\ElfinderBundle\Controller;

use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Loader service for Elfinder backend
 * displays Elfinder
 * @author Al Ganiev <helios.ag@gmail.com>
 * @copyright 2012-2014 Al Ganiev
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
class ElFinderController extends Controller
{

    /**
     * Renders Elfinder
     * @param Request $request
     * @param  string $instance
     * @param  string $homeFolder
     * @return Response
     */
    public function showAction(Request $request, $instance, $homeFolder)
    {
        $efParameters = $this->container->getParameter('fm_elfinder');
        $parameters = $efParameters['instances'][$instance];
        $assetsPath = $efParameters['assets_path'];
        $result = $this->selectEditor($parameters, $instance, $homeFolder, $request->get("id"), $assetsPath);

        return $this->render($result['template'], $result['params']);
    }

    /**
     * @param array $parameters
     * @param string $instance
     * @param string $homeFolder
     * @param $assetsPath
     * @param null $formTypeId
     * @return array
     * @throws Exception
     */
    private function selectEditor($parameters, $instance, $homeFolder, $assetsPath, $formTypeId = null)
    {
        $editor = $parameters['editor'];
        $locale = $parameters['locale'] ?: $this->container->getParameter('locale');
        $fullScreen = $parameters['fullscreen'];
        $relativePath = $parameters['relative_path'];
        $includeAssets = $parameters['include_assets'];
        $result = array();

        switch ($editor) {
            case 'custom':
                if (empty($parameters['editor_template'])) {
                    throw new Exception("Configuration error : 'custom' editor must define 'editor_template' parameter");
                }

                $result['template'] = $parameters['editor_template'];
                $result['params'] = array(
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath
                );
                return $result;
            case 'ckeditor':
                $result['template'] = 'FMElfinderBundle:Elfinder:ckeditor.html.twig';
                $result['params'] = array(
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath
                );
                return $result;
            case 'tinymce':
                $result['template'] = 'FMElfinderBundle:Elfinder:tinymce.html.twig';
                $result['params'] = array(
                    'locale'             => $locale,
                    'tinymce_popup_path' => $this->getAssetsUrl($parameters['tinymce_popup_path']),
                    'includeAssets'      => $includeAssets,
                    'instance'           => $instance,
                    'homeFolder'         => $homeFolder,
                    'prefix'             => $assetsPath
                );
                return $result;
            case 'tinymce4':
                $result['template'] = 'FMElfinderBundle:Elfinder:tinymce4.html.twig';
                $result['params'] = array(
                    'locale'        => $locale,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath
                );
                return $result;
            case 'form':
                $result['template'] = 'FMElfinderBundle:Elfinder:elfinder_type.html.twig';
                $result['params'] = array(
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'id'            => $formTypeId,
                    'relative_path' => $relativePath,
                    'prefix'        => $assetsPath
                );
                return $result;
            default:
                $result['template'] = 'FMElfinderBundle:Elfinder:simple.html.twig';
                $result['params'] = array(
                    'locale'        => $locale,
                    'fullscreen'    => $fullScreen,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'prefix'        => $assetsPath
                );
                return $result;
        }
    }

    /**
     * Loader service init
     * @param string $instance
     * @return JsonResponse/void
     */
    public function loadAction($instance)
    {
        $loader = $this->container->get('fm_elfinder.loader');
        return new JsonResponse($loader->load($instance));
    }

    /**
     * Get url from config string
     *
     * @param string $inputUrl
     *
     * @return string
     */
    protected function getAssetsUrl($inputUrl)
    {
        /** @var $assets \Symfony\Component\Templating\Helper\CoreAssetsHelper */
        $assets = $this->container->get('templating.helper.assets');

        $url = preg_replace('/^asset\[(.+)\]$/i', '$1', $inputUrl);

        if ($inputUrl !== $url) {
            return $assets->getUrl($url);
        }

        return $inputUrl;
    }

}
