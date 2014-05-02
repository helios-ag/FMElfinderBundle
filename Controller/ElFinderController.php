<?php
namespace FM\ElfinderBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

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
     * @param  string   $instance
     * @return Response
     */
    public function showAction($instance)
    {
        $efParameters = $this->container->getParameter('fm_elfinder');
        $parameters = $efParameters['instances'][$instance];
        $result = $this->selectEditor($parameters, $instance);

        return $this->render($result['template'], $result['params']);
    }

    /**
     * @param $parameters
     * @param $instance
     * @return array
     */
    private function selectEditor($parameters, $instance)
    {
        $editor = $parameters['editor'];
        $locale = $parameters['locale'] ?: $this->container->getParameter('locale');
        $fullscreen = $parameters['fullscreen'];
        $includeAssets = $parameters['include_assets'];
        $compression = $parameters['compression'];
        $prefix = ($compression ? '/compressed' : '');
        $result = array();

        switch ($editor) {
            case 'ckeditor':
                $result['template'] = 'FMElfinderBundle:Elfinder'.$prefix.':ckeditor.html.twig';
                $result['params'] = array(
                        'locale' => $locale,
                        'fullscreen' => $fullscreen,
                        'includeAssets' => $includeAssets,
                        'instance' => $instance
                );

                return $result;
                break;
            case 'tinymce':
                $result['template'] = 'FMElfinderBundle:Elfinder'.$prefix.':tinymce.html.twig';
                $result['params'] = array(
                    'locale' => $locale,
                    'tinymce_popup_path' => $this->getAssetsUrl($parameters['tinymce_popup_path']),
                    'includeAssets' => $includeAssets,
                    'instance' => $instance
                );

                return $result;
                break;
            case 'tinymce4':
                $result['template'] = 'FMElfinderBundle:Elfinder'.$prefix.':tinymce4.html.twig';
                $result['params'] = array(
                    'locale' => $locale,
                    'includeAssets' => $includeAssets,
                    'instance' => $instance
                );

                return $result;
                break;
            default:
                $result['template'] = 'FMElfinderBundle:Elfinder'.$prefix.':simple.html.twig';
                $result['params'] = array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance' => $instance
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
        $loader = $this->container->get('elfinder.loader');
        $settings = $this->container->getParameter('fm_elfinder');
        $loader->setConfigurator($settings['configuration_provider']);
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
