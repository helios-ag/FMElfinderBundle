<?php
namespace FM\ElfinderBundle\Controller;

use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
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
        $result = $this->selectEditor($parameters, $instance, $homeFolder, $request->get("id"));

        return $this->render($result['template'], $result['params']);
    }

    /**
     * @param array  $parameters
     * @param string $instance
     * @param string $homeFolder
     * @param null $formTypeId
     * @return array
     */
    private function selectEditor($parameters, $instance, $homeFolder, $formTypeId = null)
    {
        $editor = $parameters['editor'];
        $locale = $parameters['locale'] ?: $this->container->getParameter('locale');
        $fullscreen = $parameters['fullscreen'];
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
                    'fullscreen'    => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath
                );
                return $result;
            case 'ckeditor':
                $result['template'] = 'FMElfinderBundle:Elfinder:ckeditor.html.twig';
                $result['params'] = array(
                    'locale'        => $locale,
                    'fullscreen'    => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath
                );
                return $result;
            case 'tinymce':
                $result['template'] = 'FMElfinderBundle:Elfinder:tinymce.html.twig';
                $result['params'] = array(
                    'locale'             => $locale,
                    'tinymce_popup_path' => $this->getAssetsUrl($parameters['tinymce_popup_path']),
                    'includeAssets'      => $includeAssets,
                    'instance'           => $instance,
                    'homeFolder'         => $homeFolder
                );
                return $result;
            case 'tinymce4':
                $result['template'] = 'FMElfinderBundle:Elfinder:tinymce4.html.twig';
                $result['params'] = array(
                    'locale'        => $locale,
                    'includeAssets' => $includeAssets,
                    'instance'      => $instance,
                    'homeFolder'    => $homeFolder,
                    'relative_path' => $relativePath
                );
                return $result;
            case 'form':
                $result['template'] = 'FMElfinderBundle:Elfinder:elfinder_type.html.twig';
                $result['params'] = array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance' => $instance,
                    'homeFolder' => $homeFolder,
                    'id' => $formTypeId,
                    'relative_path' => $relativePath
                );
                return $result;
            default:
                $result['template'] = 'FMElfinderBundle:Elfinder:simple.html.twig';
                $result['params'] = array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance' => $instance,
                    'homeFolder' => $homeFolder
                );
                return $result;
        }
    }

    /**
     * Loader service init
     * @param string $instance
     *
     */
    public function loadAction($instance)
    {
        $loader = $this->container->get('fm_elfinder.loader');
        $loader->load($instance);
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
