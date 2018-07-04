<?php

namespace FM\ElfinderBundle\Tests;

use FM\ElfinderBundle\FMElfinderBundle;

/**
 * Class FMElfinderBundleTest.
 *
 * @package FM\ElfinderBundle\Tests
 */
class FMElfinderBundleTest extends \PHPUnit\Framework\TestCase
{
    public function testBundle()
    {
        $bundle = new FMElfinderBundle();
        $this->assertInstanceOf('Symfony\Component\HttpKernel\Bundle\Bundle', $bundle);
    }

    public function testCompilerPasses()
    {
        $containerBuilder = $this->getMockBuilder('Symfony\Component\DependencyInjection\ContainerBuilder')
            ->disableOriginalConstructor()
            ->setMethods(array('addCompilerPass'))
            ->getMock();
        $containerBuilder
            ->expects($this->at(0))
            ->method('addCompilerPass')
            ->with($this->isInstanceOf('FM\ElfinderBundle\DependencyInjection\Compiler\TwigFormPass'))
            ->will($this->returnSelf());
        $containerBuilder
            ->expects($this->at(1))
            ->method('addCompilerPass')
            ->with($this->isInstanceOf('Symfony\Component\EventDispatcher\DependencyInjection\RegisterListenersPass'))
            ->will($this->returnSelf());
        $bundle = new FMElfinderBundle();
        $bundle->build($containerBuilder);
    }
}
