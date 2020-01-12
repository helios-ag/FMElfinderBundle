<?php

namespace FM\ElfinderBundle\Tests\Loader;

use FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Loader\ElFinderLoader;

class ElFinderLoaderTest extends \PHPUnit\Framework\TestCase
{
    protected $loader;

    protected $configuratorMock;

    public function setUp(): void
    {
        $this->configuratorMock = $this->createMock(ElFinderConfigurationProviderInterface::class);
        $this->configuratorMock->expects($this->any())
                               ->method('getConfiguration')
                               ->will($this->returnValue(array('parameters' => array())));
        $this->loader = new ElFinderLoader($this->configuratorMock);
        $this->loader->setInstance('minimal');
    }

    public function testConfigure()
    {
        $this->loader->configure();
        $this->assertEquals(array('parameters' => array()), $this->configuratorMock->getConfiguration('minimal'));
    }
}
