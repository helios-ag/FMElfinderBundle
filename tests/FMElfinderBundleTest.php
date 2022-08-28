<?php

namespace FM\ElfinderBundle\Tests;

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

    public function testCompilerPasses()
    {
        $containerBuilder = new ContainerBuilder();

        $bundle = new FMElfinderBundle();
        $bundle->build($containerBuilder);

        $passes = $containerBuilder->getCompilerPassConfig()->getPasses();
        self::assertCount(9, $passes);
    }
}
