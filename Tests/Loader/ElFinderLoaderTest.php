<?php

namespace FM\ElfinderBundle\Tests\Loader;

use FM\ElfinderBundle\Loader\ElFinderLoader;
use InvalidArgumentException;
use stdClass;

class ElFinderLoaderTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @var ElFinderLoader
     */
    protected $loader;

    /**
     * @var
     */
    protected $configuratorMock;

    public function setUp()
    {
        $this->configuratorMock = $this->getMock('FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface');
        $this->configuratorMock->expects($this->any())
                               ->method('getConfiguration')
                               ->will($this->returnValue(array('parameters'=>array())));
        $this->loader = new ElFinderLoader($this->configuratorMock);
        $this->loader->setInstance('minimal');
    }

    public function testConfigure()
    {
        $this->loader->configure();
        $this->assertEquals(array('parameters'=>array()), $this->configuratorMock->getConfiguration('minimal'));
    }
}