<?php

namespace FM\ElfinderBundle\Twig\Extension;

use Twig_Error_Runtime;
use Twig_Extension;

/**
 * Class FMElfinderTinymceExtension
 * @package FM\ElfinderBundle\Twig\Extension
 */
class FMElfinderTinymceExtension extends Twig_Extension
{

    /**
     * @var
     */
    protected $twig;

    /**
     * @param \Twig_Environment $twig
     */
    public function __construct(\Twig_Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * (non-PHPdoc)
     * @see Twig_Extension::getFilters()
     * @return array
     */
    public function getFunctions()
    {
        return array(
            'elfinder_tinymce_init' => new \Twig_Function_Method($this, 'tinymce', array('is_safe' => array('html'))),
            'elfinder_tinymce_init4' => new \Twig_Function_Method($this, 'tinymce4', array('is_safe' => array('html')))
        );
    }

    /**
     * @param string $instance
     * @param array $parameters
     * @throws \Twig_Error_Runtime
     * @return mixed
     */
    public function tinymce($instance = 'default', $parameters = array('width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'))
    {
        if (!is_string($instance)) {
            throw new Twig_Error_Runtime('The filter can be applied to strings only.');
        }

        return $this->twig->render('FMElfinderBundle:Elfinder/helper:_tinymce.html.twig',
            array(
                'instance' => $instance,
                'width' => $parameters['width'],
                'height' => $parameters['height'],
                'title' => $parameters['title']
            ));
    }

    /**
     * @param string $instance
     * @param array $parameters
     * @throws \Twig_Error_Runtime
     * @return mixed
     */
    public function tinymce4($instance = 'default', $parameters = array('width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'))
    {
        if (!is_string($instance)) {
            throw new Twig_Error_Runtime('The filter can be applied to strings only.');
        }

        return $this->twig->render('FMElfinderBundle:Elfinder/helper:_tinymce4.html.twig',
            array(
                'instance' => $instance,
                'width' => $parameters['width'],
                'height' => $parameters['height'],
                'title' => $parameters['title']
            ));
    }

    /**
     * (non-PHPdoc)
     * @see Twig_ExtensionInterface::getName()
     */
    public function getName()
    {
        return 'fm_tinymce_init';
    }

}