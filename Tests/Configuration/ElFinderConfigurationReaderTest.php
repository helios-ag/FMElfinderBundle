<?php

namespace FM\ElfinderBundle\Tests\Configuration;

use FM\ElfinderBundle\Configuration\ElFinderConfigurationReader;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class ElFinderConfigurationReaderTest.
 *
 * @package FM\ElfinderBundle\Tests\Configuration
 */
class ElFinderConfigurationReaderTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var ElFinderConfigurationReader
     */
    protected $reader;

    /**
     * @var \FM\ElFinderPHP\Driver\ElFinderVolumeLocalFileSystem
     */
    protected $elFinderVolumeMock;

    private function getConfigurationReader($attributesObject)
    {
        /* @var \Symfony\Component\DependencyInjection\ContainerInterface|\PHPUnit_Framework_MockObject_MockObject */
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
                ),
            )));

        /** @var \Symfony\Component\HttpFoundation\RequestStack $requestStack|\PHPUnit_Framework_MockObject_MockObject */
        $requestStack = $this->getMock('Symfony\Component\HttpFoundation\RequestStack');
        /** @var \Symfony\Component\HttpFoundation\Request $requestObject */
        $requestObject = $this->getMock('Symfony\Component\HttpFoundation\Request');

        $requestObject
            ->expects($this->any())
            ->method('get')
            ->will($this->returnValue(''));
        $requestObject
            ->expects($this->any())
            ->method('getScheme')
            ->will($this->returnValue('http'));
        $requestObject
            ->expects($this->any())
            ->method('getHttpHost')
            ->will($this->returnValue('test.com'));
        $requestObject
            ->expects($this->any())
            ->method('getBasePath')
            ->will($this->returnValue('/unit-test'));

        $requestObject->attributes = $attributesObject;

        $requestStack
            ->expects($this->any())
            ->method('getCurrentRequest')
            ->will($this->returnValue($requestObject));

        $params = array(
            'instances' => array(
                'default'  => array(
                    'cors_support' => '',
                    'connector'    => array(
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => array(
                            'uploads' => array(
                                'flysystem'         => array('enabled' => false),
                                'volume_id'         => 0,
                                'show_hidden'       => false,
                                'path'              => '',
                                'driver'            => 'LocalFileSystem',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'start_path'        => '',
                                'alias'             => '',
                                'mime_detect'       => '',
                                'mimefile'          => '',
                                'img_lib'           => '',
                                'tmb_path'          => '',
                                'tmb_path_mode'     => '',
                                'tmb_url'           => '',
                                'tmb_size'          => '',
                                'tmb_crop'          => '',
                                'tmb_bg_color'      => '',
                                'copy_overwrite'    => '',
                                'copy_join'         => '',
                                'copy_from'         => '',
                                'copy_to'           => '',
                                'upload_overwrite'  => '',
                                'upload_allow'      => '',
                                'upload_deny'       => '',
                                'upload_max_size'   => '',
                                'defaults'          => '',
                                'attributes'        => '',
                                'accepted_name'     => '',
                                'disabled_commands' => '',
                                'tree_deep'         => '',
                                'check_subfolders'  => '',
                                'separator'         => '',
                                'time_format'       => '',
                                'archive_mimes'     => '',
                                'archivers'         => '',
                                'fileMode'          => '',
                            ),
                        ),
                    ),
                ),
                'with_path_with_url'  => array(
                    'cors_support' => true,
                    'connector'    => array(
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => array(
                            'uploads' => array(
                                'flysystem'         => array('enabled' => false),
                                'volume_id'         => 1,
                                'show_hidden'       => false,
                                'path'              => '/home',
                                'driver'            => 'LocalFileSystem',
                                'url'               => 'home-url',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'driver_options'    => '',
                                'start_path'        => '',
                                'alias'             => '',
                                'mime_detect'       => '',
                                'mimefile'          => '',
                                'img_lib'           => '',
                                'tmb_path'          => '',
                                'tmb_path_mode'     => '',
                                'tmb_url'           => '',
                                'tmb_size'          => '',
                                'tmb_crop'          => '',
                                'tmb_bg_color'      => '',
                                'copy_overwrite'    => '',
                                'copy_join'         => '',
                                'copy_from'         => '',
                                'copy_to'           => '',
                                'upload_overwrite'  => '',
                                'upload_allow'      => '',
                                'upload_deny'       => '',
                                'upload_max_size'   => '',
                                'defaults'          => '',
                                'attributes'        => '',
                                'accepted_name'     => '',
                                'disabled_commands' => '',
                                'tree_deep'         => '',
                                'check_subfolders'  => '',
                                'separator'         => '',
                                'time_format'       => '',
                                'archive_mimes'     => '',
                                'archivers'         => '',
                                'fileMode'          => '',
                            ),
                        ),
                    ),
                ),
                'without_path_with_url'  => array(
                    'cors_support' => true,
                    'connector'    => array(
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => array(
                            'uploads' => array(
                                'flysystem'         => array('enabled' => false),
                                'volume_id'         => 2,
                                'show_hidden'       => false,
                                'path'              => '',
                                'driver'            => 'LocalFileSystem',
                                'url'               => 'home-url-without-path',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'driver_options'    => '',
                                'start_path'        => '',
                                'alias'             => '',
                                'mime_detect'       => '',
                                'mimefile'          => '',
                                'img_lib'           => '',
                                'tmb_path'          => '',
                                'tmb_path_mode'     => '',
                                'tmb_url'           => '',
                                'tmb_size'          => '',
                                'tmb_crop'          => '',
                                'tmb_bg_color'      => '',
                                'copy_overwrite'    => '',
                                'copy_join'         => '',
                                'copy_from'         => '',
                                'copy_to'           => '',
                                'upload_overwrite'  => '',
                                'upload_allow'      => '',
                                'upload_deny'       => '',
                                'upload_max_size'   => '',
                                'defaults'          => '',
                                'attributes'        => '',
                                'accepted_name'     => '',
                                'disabled_commands' => '',
                                'tree_deep'         => '',
                                'check_subfolders'  => '',
                                'separator'         => '',
                                'time_format'       => '',
                                'archive_mimes'     => '',
                                'archivers'         => '',
                                'fileMode'          => '',
                            ),
                        ),
                    ),
                ),
            ),
        );

        return new ElFinderConfigurationReader($params, $requestStack, $containerMock);
    }

    private function getDefaultAttributesObject()
    {
        /** @var \Symfony\Component\HttpFoundation\ParameterBag $attributesObject */
        $attributesObject = $this->getMock('\Symfony\Component\HttpFoundation\ParameterBag');
        $attributesObject
            ->expects($this->any())
            ->method('get')
            ->will($this->returnValue(''));

        return $attributesObject;
    }

    private function getHomeFolderAwareAttributesObject()
    {
        /** @var \Symfony\Component\HttpFoundation\ParameterBag $attributesObject */
        $attributesObject = $this->getMock('\Symfony\Component\HttpFoundation\ParameterBag');
        $attributesObject
            ->expects($this->any())
            ->method('get')
            ->with($this->equalTo('homeFolder'))
            ->will($this->returnValue('bob'));

        return $attributesObject;
    }

    public function testConfiguration()
    {
        $reader        = $this->getConfigurationReader($this->getDefaultAttributesObject());
        $configuration = $reader->getConfiguration('default');
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
        $reader     = $this->getConfigurationReader($this->getDefaultAttributesObject());
        $hiddenPath = '.hiddenPath';
        $this->assertFalse($reader->access('read', $hiddenPath, 'dummy', 'dummy'));
        $this->assertFalse($reader->access('write', $hiddenPath, 'dummy', 'dummy'));
    }

    public function testAccessVisible()
    {
        $reader      = $this->getConfigurationReader($this->getDefaultAttributesObject());
        $visiblePath = 'hiddenPath';
        $this->assertNull($reader->access('read', $visiblePath, 'dummy', 'dummy'));
        $this->assertNull($reader->access('write', $visiblePath, 'dummy', 'dummy'));
    }

    public function testPathAndUrlAndHomeFolder()
    {
        // with path and without homeFolder
        $reader        = $this->getConfigurationReader($this->getDefaultAttributesObject());
        $configuration = $reader->getConfiguration('with_path_with_url');
        $this->assertEquals('/home', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url/', $configuration['roots'][0]['URL']);

        // with path and with homeFolder
        $reader        = $this->getConfigurationReader($this->getHomeFolderAwareAttributesObject());
        $configuration = $reader->getConfiguration('with_path_with_url');
        $this->assertEquals('/home/bob', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url/bob', $configuration['roots'][0]['URL']);

        // without path and without homeFolder
        $reader        = $this->getConfigurationReader($this->getDefaultAttributesObject());
        $configuration = $reader->getConfiguration('without_path_with_url');
        $this->assertEquals('', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url-without-path/', $configuration['roots'][0]['URL']);

        // without path and with homeFolder
        $reader        = $this->getConfigurationReader($this->getHomeFolderAwareAttributesObject());
        $configuration = $reader->getConfiguration('without_path_with_url');
        $this->assertEquals('/bob', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url-without-path/bob', $configuration['roots'][0]['URL']);
    }

    public function testAccessTmbURLOption()
    {
        $reader        = $this->getConfigurationReader($this->getDefaultAttributesObject());
        $configuration = $reader->getConfiguration('default');
        $this->assertArrayHasKey('tmbURL', $configuration['roots'][0]);
    }
}
