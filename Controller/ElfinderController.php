<?php
namespace FM\ElfinderBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * Loader service for Elfinder backend
 * displays Elfinder
 * @author Al Ganiev <helios.ag@gmail.com>
 * @copyright 2012-2013 Al Ganiev
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
class ElfinderController extends Controller
{
    /**
     * Renders Elfinder
     * @return Response
     */
    public function showAction()
    {
        $parameters = $this->container->getParameter('fm_elfinder');
        $editor = $parameters['editor'];
        $locale = $parameters['locale'];
        $fullscreen = $parameters['fullscreen'];
        $includeAssets = $parameters['include_assets'];
        $compression = $parameters['compression'];
        $prefix = ($compression ? '/compressed' : '');
        switch ($editor){
            case 'ckeditor':
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':ckeditor.html.twig', array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets
                ));
                break;
            case 'tinymce':
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':tinymce.html.twig', array(
                    'locale' => $locale,
                    'tinymce_popup_path' => $this->getAssetsUrl($parameters['tinymce_popup_path']),
                    'includeAssets' => $includeAssets,
                ));
                break;
            case 'tinymce4':
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':tinymce4.html.twig', array(
                    'locale' => $locale,
                    'includeAssets'=>$includeAssets
                ));
                break;
            default:
                return $this->render('FMElfinderBundle:Elfinder'.$prefix.':simple.html.twig', array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'includeAssets' => $includeAssets,
                ));
        }
    }

    /**
     * Loader service init
     */
    public function loadAction()
    {
        $loader = $this->container->get('elfinder_loader');
        $loader->load();
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
