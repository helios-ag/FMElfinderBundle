<?php

namespace FM\ElfinderBundle\Tests\Configuration;

use FM\ElfinderBundle\Configuration\ElFinderConfigurationReader;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class ElFinderConfigurationReaderTest
 * @package FM\ElfinderBundle\Tests\Configuration
 */
class ElFinderConfigurationReaderTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @var ElFinderConfigurationReader
     */
    protected $reader;

    /**
     * @var \FM\ElFinderPHP\Driver\ElFinderVolumeLocalFileSystem
     */
    protected $elFinderVolumeMock;


    protected function setUp()
    {
        /** @var \Symfony\Component\DependencyInjection\ContainerInterface|\PHPUnit_Framework_MockObject_MockObject */
        $containerMock = $this->getMock('Symfony\Component\DependencyInjection\ContainerInterface');

        $this->elFinderVolumeMock = $this->getMock('FM\ElFinderPHP\Driver\ElFinderVolumeLocalFileSystem');

        $containerMock
            ->expects($this->any())
            ->method('has')
            ->will($this->returnValueMap(array(
                array(
                    'elfinder.driver.local',
                    ContainerInterface::EXCEPTION_ON_INVALID_REFERENCE,
                    $this->elFinderVolumeMock,
                )
            )));

        /** @var \Symfony\Component\HttpFoundation\RequestStack $requestStack|\PHPUnit_Framework_MockObject_MockObject */
        $requestStack = $this->getMock('Symfony\Component\HttpFoundation\RequestStack');
        /** @var \Symfony\Component\HttpFoundation\Request $requestObject */
        $requestObject = $this->getMock('Symfony\Component\HttpFoundation\Request');

        $requestObject
            ->expects($this->any())
            ->method('get')
            ->will($this->returnValue(''));

        /** @var \Symfony\Component\HttpFoundation\ParameterBag $attributesObject */
        $attributesObject = $this->getMock('\Symfony\Component\HttpFoundation\ParameterBag');
        $attributesObject
            ->expects($this->any())
            ->method('get')
            ->will($this->returnValue(''));

        $requestObject->attributes = $attributesObject;

        $requestStack
            ->expects($this->any())
            ->method('getCurrentRequest')
            ->will($this->returnValue($requestObject));

        $params = array(
            'instances' => array(
                'default'  => array(
                    'cors_support' => '',
                    'connector' => array(
                        'debug' => '', 'binds' => '', 'plugins'=> '',
                        'roots' => array(
                            'uploads' => array(
                                'flysystem' => array('enabled'=>false),
                                'volume_id' => 0,
                                'show_hidden' => false,
                                'path' => '',
                                'driver' => 'LocalFileSystem',
                                'glide_url' => '',
                                'glide_key' => '',
                                'plugins' => '',
                                'start_path' => '',
                                'alias' => '',
                                'mime_detect' => '',
                                'mimefile' => '',
                                'img_lib' => '',
                                'tmb_path' => '',
                                'tmb_path_mode' => '',
                                'tmb_url' => '',
                                'tmb_size' => '',
                                'tmb_crop' => '',
                                'tmb_bg_color' => '',
                                'copy_overwrite' => '',
                                'copy_join' => '',
                                'copy_from' => '',
                                'copy_to' => '',
                                'upload_overwrite' => '',
                                'upload_allow' => '',
                                'upload_deny' => '',
                                'upload_max_size' => '',
                                'defaults' => '',
                                'attributes' => '',
                                'accepted_name' => '',
                                'disabled_commands' => '',
                                'tree_deep' => '',
                                'check_subfolders' => '',
                                'separator' => '',
                                'time_format' => '',
                                'archive_mimes' => '',
                                'archivers' => ''
                            )
                        ),
                    )
                )
            )
        );

        $this->reader = new ElFinderConfigurationReader($params, $requestStack, $containerMock);
    }

    protected function tearDown()
    {
        unset($this->reader);
    }

    public function testConfiguration()
    {
        $configuration = $this->reader->getConfiguration('default');
        $this->assertArrayHasKey('roots', $configuration);
        $this->assertArrayHasKey('corsSupport', $configuration);
        $this->assertSame('LocalFileSystem', $configuration['roots'][0]['driver']);
    }

    public function testSubClassOfHelper()
    {
        $rc = new \ReflectionClass('FM\ElfinderBundle\Configuration\ElFinderConfigurationReader');

        $this->assertTrue($rc->isSubclassOf('FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface'));
    }

    public function testAccessHidden()
    {
        $hiddenPath = '.hiddenPath';
        $this->assertFalse($this->reader->access('read',$hiddenPath, 'dummy', 'dummy'));
        $this->assertFalse($this->reader->access('write',$hiddenPath, 'dummy', 'dummy'));
    }

    public function testAccessVisible()
    {
        $visiblePath = 'hiddenPath';
        $this->assertNull($this->reader->access('read',$visiblePath, 'dummy', 'dummy'));
        $this->assertNull($this->reader->access('write',$visiblePath, 'dummy', 'dummy'));
    }
}
