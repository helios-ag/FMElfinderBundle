<?php

namespace FM\ElfinderBundle\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
/**
 *
 */
class FMElfinderTinymceExtension extends \TwigExtension
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
            'elfinder_tinymce_init' => new \Twig_Function_Method($this, 'tinymce', array('is_safe' => array('html')))
        );
    }

    /**
     *
     */
    public function tinymce()
    {
        return $this->container->get('templating')->render('FMElfinderBundle:Elfinder:_tinymce.html.twig');
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