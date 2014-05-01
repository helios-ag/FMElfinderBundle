<?php
namespace FM\ElfinderBundle\Controller;

use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Definition\Exception\Exception;
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
     * @param string $instance
     * @return Response
     */
    public function showAction($instance)
    {
        $efParameters = $this->container->getParameter('fm_elfinder');
        $parameters = $efParameters['instances'][$instance];
        $editor = $parameters['editor'];
        $locale = $parameters['locale'] ?: $this->container->getParameter('locale');
        $fullscreen = $parameters['fullscreen'];
        $includeAssets = $parameters['include_assets'];
        $compression = $parameters['compression'];
        $prefix = ($compression ? '/compressed' : '');
        switch ($editor){
            case 'ckeditor':
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':ckeditor.html.twig', array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance' => $instance
                ));
                break;
            case 'tinymce':
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':tinymce.html.twig', array(
                    'locale' => $locale,
                    'tinymce_popup_path' => $this->getAssetsUrl($parameters['tinymce_popup_path']),
                    'includeAssets' => $includeAssets,
                    'instance' => $instance
                ));
                break;
            case 'tinymce4':
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':tinymce4.html.twig', array(
                    'locale' => $locale,
                    'includeAssets'=>$includeAssets,
                    'instance' => $instance
                ));
                break;
            default:
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':simple.html.twig', array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets,
                    'instance' => $instance
                ));
        }
    }

    /**
     * Loader service init
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
