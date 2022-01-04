<?php

namespace FM\ElfinderBundle\Tests;

use FM\ElfinderBundle\FMElfinderBundle;

class FMElfinderBundleTest extends \PHPUnit\Framework\TestCase
{
    public function testBundle()
    {
        $bundle = new FMElfinderBundle();
        $this->assertInstanceOf('Symfony\Component\HttpKernel\Bundle\Bundle', $bundle);
    }

    public function testCompilerPasses()
    {
        $containerBuilder = new ContainerBuilder();

        $bundle = new FMElfinderBundle();
        $bundle->build($containerBuilder);

        $passes = $container->getCompilerPassConfig()->getBeforeOptimizationPasses();
        self::assertEquals(2, count($passes));
        self::assertInstanceOf(TwigFormPass::class, $passes[2]);

    }
}
