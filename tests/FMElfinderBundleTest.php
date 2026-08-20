<?php

namespace FM\ElfinderBundle\Tests;

use FM\ElfinderBundle\DependencyInjection\Compiler\ElFinderConfigurationPass;
use FM\ElfinderBundle\DependencyInjection\Compiler\TwigFormPass;
use FM\ElfinderBundle\FMElfinderBundle;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class FMElfinderBundleTest extends \PHPUnit\Framework\TestCase
{
    public function testBundle(): void
    {
        $bundle = new FMElfinderBundle();
        $this->assertInstanceOf(Bundle::class, $bundle);
    }

    public function testBuildRegistersCompilerPasses(): void
    {
        $container = new ContainerBuilder();
        (new FMElfinderBundle())->build($container);

        $passes = array_map('get_class', $container->getCompilerPassConfig()->getBeforeOptimizationPasses());

        $this->assertContains(TwigFormPass::class, $passes);
        $this->assertContains(ElFinderConfigurationPass::class, $passes);
    }
}
