<?php
namespace FM\ElfinderBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ElfinderController extends Controller
{

    public function showAction()
    {
        $parameters = $this->container->getParameter('fm_elfinder');
        $editor = $parameters['editor'];
        $locale = $parameters['locale'];
        $fullscreen = $parameters['fullscreen'];
        switch ($editor){
            // add more
            case 'ckeditor':
                return $this->render('FMElfinderBundle:Elfinder:ckeditor.html.twig', array('locale'=>$locale, 'fullscreen'=>$fullscreen));
                break;
            case 'tinymce':
                return $this->render('FMElfinderBundle:Elfinder:tinymce.html.twig', array(
                    'locale' => $locale,
                    'fullscreen' => $fullscreen,
                    'tinymce_popup_path' => $parameters['tinymce_popup_path']
                ));
                break;
            default:
                return $this->render('FMElfinderBundle:Elfinder:simple.html.twig', array('locale'=>$locale, 'fullscreen'=>$fullscreen));
        }
    }

    public function loadAction()
    {
        $loader = $this->container->get('elfinder_loader');
        $loader->load();
    }
}
