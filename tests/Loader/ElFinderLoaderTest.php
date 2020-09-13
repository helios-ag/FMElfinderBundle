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
                               ->will($this->returnValue(['parameters' => []]));
        $this->loader = new ElFinderLoader($this->configuratorMock);
        $this->loader->setInstance('minimal');
    }

    public function testConfigure()
    {
        $this->loader->configure();
        $this->assertEquals(['parameters' => []], $this->configuratorMock->getConfiguration('minimal'));
    }
}
