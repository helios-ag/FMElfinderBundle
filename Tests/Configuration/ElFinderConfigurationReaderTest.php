<?php

namespace FM\ElfinderBundle\Tests\Configuration;

use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;

class ElFinderConfigurationReaderTest extends \PHPUnit_Framework_TestCase
{
    public function testSubClassOfHelper()
    {
        $rc = new \ReflectionClass('FM\ElfinderBundle\Configuration\ElFinderConfigurationReader');

        $this->assertTrue($rc->isSubclassOf('FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface'));
    }
}