<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection;

use FM\ElfinderBundle\DependencyInjection\FMElfinderExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class FMElfinderExtensionTest extends \PHPUnit_Framework_TestCase
{

    public function testDefault()
    {
        $container = new ContainerBuilder();
        $loader = new FMElfinderExtension();
        $loader->load(array(array()), $container);
        $this->assertTrue($container->hasParameter('fm_elfinder'));

        $parameters = $container->getParameter('fm_elfinder');

        $this->assertNull($parameters['instances']['locale']);
        $this->assertEquals('simple', $parameters['instances']['editor']);

        $this->assertArrayHasKey('connector', $parameters);

        $this->assertArrayHasKey('debug', $parameters['instances']['connector']);
        $this->assertFalse($parameters['connector']['debug']);

        $this->assertArrayHasKey('roots', $parameters['instances']['connector']);
        $this->assertCount(0, $parameters['connector']['roots']);
    }
}
