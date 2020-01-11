<?php

namespace FM\ElfinderBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;

class TwigFormPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        if (!$container->hasParameter('twig.form.resources')) {
            return;
        }

        $container->setParameter('twig.form.resources', array_merge(
            ['@FMElfinder/Form/elfinder_widget.html.twig'],
            $container->getParameter('twig.form.resources')
        ));
    }
}
