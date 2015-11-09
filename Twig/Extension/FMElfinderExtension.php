<?php

namespace FM\ElfinderBundle\Twig\Extension;

/**
 * Class FMElfinderExtension.
 */
class FMElfinderExtension extends \Twig_Extension
{
    /**
     * @var \Twig_Environment
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
     * {@inheritdoc}
     *
     * @return array
     */
    public function getFunctions()
    {
        $options = array('is_safe' => array('html'));

        return array(
            new \Twig_SimpleFunction('elfinder_tinymce_init', array($this, 'tinymce'), $options),
            new \Twig_SimpleFunction('elfinder_tinymce_init4', array($this, 'tinymce4'), $options),
            new \Twig_SimpleFunction('elfinder_summernote_init', array($this, 'summernote'), $options),
        );
    }

    /**
     * @param string $instance
     * @param array  $parameters
     *
     * @throws \Twig_Error_Runtime
     *
     * @return mixed
     */
    public function tinymce($instance = 'default', $parameters = array('width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'))
    {
        if (!is_string($instance)) {
            throw new \Twig_Error_Runtime('The function can be applied to strings only.');
        }

        return $this->twig->render('FMElfinderBundle:Elfinder/helper:_tinymce.html.twig',
            array(
                'instance' => $instance,
                'width'    => $parameters['width'],
                'height'   => $parameters['height'],
                'title'    => $parameters['title'],
            ));
    }

    /**
     * @param string $instance
     * @param array  $parameters
     *
     * @throws \Twig_Error_Runtime
     *
     * @return mixed
     */
    public function tinymce4($instance = 'default', $parameters = array('width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'))
    {
        if (!is_string($instance)) {
            throw new \Twig_Error_Runtime('The function can be applied to strings only.');
        }

        return $this->twig->render('FMElfinderBundle:Elfinder/helper:_tinymce4.html.twig',
            array(
                'instance' => $instance,
                'width'    => $parameters['width'],
                'height'   => $parameters['height'],
                'title'    => $parameters['title'],
            ));
    }

    /**
     * @param string $instance
     * @param string $selector
     * @param array $parameters
     * @return mixed
     * @throws \Twig_Error_Runtime
     */
    public function summernote($instance = 'default', $selector = '.summenote', $parameters = array('width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'))
    {
        if (!is_string($instance)) {
            throw new \Twig_Error_Runtime('The function can be applied to strings only.');
        }

        return $this->twig->render('FMElfinderBundle:Elfinder/helper:_summernote.html.twig',
            array(
                'instance' => $instance,
                'selector' => $selector,
                'width'    => $parameters['width'],
                'height'   => $parameters['height'],
                'title'    => $parameters['title'],
            ));
    }

    /**
     * (non-PHPdoc).
     *
     * @see Twig_ExtensionInterface::getName()
     */
    public function getName()
    {
        return 'fm_elfinder_init';
    }
}
