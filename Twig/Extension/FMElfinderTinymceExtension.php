<?php

namespace FM\ElfinderBundle\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class FMElfinderTinymceExtension
 * @package FM\ElfinderBundle\Twig\Extension
 */
class FMElfinderTinymceExtension extends \Twig_Extension
{
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    protected $container;

    /**
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
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
     * @return mixed
     */
    public function tinymce()
    {
        return $this->container->get('templating')->render('FMElfinderBundle:Elfinder/helper:_tinymce.html.twig');
    }

    /**
     * @return mixed
     */
    public function tinymce4()
    {
        return $this->container->get('templating')->render('FMElfinderBundle:Elfinder/helper:_tinymce4.html.twig');
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