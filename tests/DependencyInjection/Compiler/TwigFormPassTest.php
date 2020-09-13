<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection\Compiler;

use FM\ElfinderBundle\DependencyInjection\Compiler\TwigFormPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class TwigFormPassTest extends \PHPUnit\Framework\TestCase
{
    public function testProcess()
    {
        $container = new ContainerBuilder();
        $pass      = new TwigFormPass();
        $pass->process($container);
        $this->assertFalse($container->hasParameter('twig.form.resources'));
        $container = new ContainerBuilder();
        $container->setParameter('twig.form.resources', []);
        $pass->process($container);
        $this->assertEquals([
            '@FMElfinder/Form/elfinder_widget.html.twig',
        ], $container->getParameter('twig.form.resources'));
    }
}
