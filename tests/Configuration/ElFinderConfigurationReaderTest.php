<?php

namespace FM\ElfinderBundle\Tests\Configuration;

use FM\ElfinderBundle\Configuration\ElFinderConfigurationReader;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class ElFinderConfigurationReaderTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var ElFinderConfigurationReader
     */
    protected $reader;

    /**
     * @var \elFinderVolumeLocalFileSystem
     */
    protected $elFinderVolumeMock;

    private function getConfigurationReader(array $attributes = [])
    {
        /* @var \Symfony\Component\DependencyInjection\ContainerInterface|\PHPUnit_Framework_MockObject_MockObject */
        $containerMock = $this->createMock('Symfony\Component\DependencyInjection\ContainerInterface');

        $this->elFinderVolumeMock = $this->createMock('\elFinderVolumeLocalFileSystem');

        $containerMock
            ->expects($this->any())
            ->method('has')
            ->willReturn(true);

        $containerMock
            ->expects($this->any())
            ->method('get')
            ->willReturnMap([
                [
                    'elfinder.driver.local',
                    ContainerInterface::EXCEPTION_ON_INVALID_REFERENCE,
                    $this->elFinderVolumeMock,
                ],
            ]);

        $requestStack = $this->createMock(RequestStack::class);
        // A real Request is used instead of a mock: in Symfony >= 8.1 the
        // ``$attributes`` property is a hooked property, and PHPUnit replaces
        // hooked properties of mock objects with test stubs, which would break
        // the ``homeFolder`` lookup. Overriding the few methods that getURL()
        // relies on yields the same deterministic behaviour as a partial mock.
        $requestObject = new class([], [], $attributes) extends Request {
            public function getScheme(): string
            {
                return 'http';
            }

            public function getHttpHost(): string
            {
                return 'test.com';
            }

            public function getBaseUrl(): string
            {
                return '/unit-test';
            }
        };

        $requestStack
            ->expects($this->any())
            ->method('getCurrentRequest')
            ->willReturn($requestObject);

        $params = [
            'instances' => [
                'default'  => [
                    'cors_support' => '',
                    'connector'    => [
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => [
                            'uploads' => [
                                'flysystem'         => ['enabled' => false],
                                'volume_id'         => 0,
                                'security_voter'    => '',
                                'show_hidden'       => false,
                                'path'              => '',
                                'driver'            => 'LocalFileSystem',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'start_path'        => '',
                                'encoding'          => '',
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
                                'upload_max_conn'   => 3,
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
                                'quarantine'        => null,
                                'trash_hash'        => null,
                            ],
                        ],
                    ],
                ],
                'with_path_with_url'  => [
                    'cors_support' => true,
                    'connector'    => [
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => [
                            'uploads' => [
                                'flysystem'         => ['enabled' => false],
                                'volume_id'         => 1,
                                'security_voter'    => '',
                                'show_hidden'       => false,
                                'path'              => '/home',
                                'driver'            => 'LocalFileSystem',
                                'url'               => 'home-url',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'driver_options'    => '',
                                'start_path'        => '',
                                'encoding'          => '',
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
                                'upload_max_conn'   => 3,
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
                                'quarantine'        => null,
                                'trash_hash'        => null,
                            ],
                        ],
                    ],
                ],
                'without_path_with_url'  => [
                    'cors_support' => true,
                    'connector'    => [
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => [
                            'uploads' => [
                                'flysystem'         => ['enabled' => false],
                                'volume_id'         => 2,
                                'security_voter'    => '',
                                'show_hidden'       => false,
                                'path'              => '',
                                'driver'            => 'LocalFileSystem',
                                'url'               => 'home-url-without-path',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'driver_options'    => '',
                                'start_path'        => '',
                                'encoding'          => '',
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
                                'upload_max_conn'   => 3,
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
                                'quarantine'        => null,
                                'trash_hash'        => null,
                            ],
                        ],
                    ],
                ],
                'without_path_with_url_absolute_homeFolder'  => [
                    'cors_support' => true,
                    'connector'    => [
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => [
                            'uploads' => [
                                'flysystem'         => ['enabled' => false],
                                'volume_id'         => 2,
                                'security_voter'    => '',
                                'show_hidden'       => false,
                                'path'              => '',
                                'driver'            => 'LocalFileSystem',
                                'url'               => 'https://test.com/{homeFolder}',
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'plugins'           => '',
                                'driver_options'    => '',
                                'start_path'        => '',
                                'encoding'          => '',
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
                                'upload_max_conn'   => 3,
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
                                'quarantine'        => null,
                                'trash_hash'        => null,
                            ],
                        ],
                    ],
                ],
            ],
        ];

        return new ElFinderConfigurationReader($params, $requestStack, $containerMock);
    }

    public function testConfiguration(): void
    {
        $reader        = $this->getConfigurationReader();
        $configuration = $reader->getConfiguration('default');
        $this->assertArrayHasKey('roots', $configuration);
        $this->assertArrayHasKey('corsSupport', $configuration);
        $this->assertSame('LocalFileSystem', $configuration['roots'][0]['driver']);
    }

    public function testSubClassOfHelper(): void
    {
        $rc = new \ReflectionClass('FM\ElfinderBundle\Configuration\ElFinderConfigurationReader');

        $this->assertTrue($rc->isSubclassOf('FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface'));
    }

    public function testAccessHidden(): void
    {
        $reader     = $this->getConfigurationReader();
        $hiddenPath = '.hiddenPath';
        $this->assertFalse($reader->access('read', $hiddenPath, 'dummy', 'dummy'));
        $this->assertFalse($reader->access('write', $hiddenPath, 'dummy', 'dummy'));
    }

    public function testAccessVisible()
    {
        $reader      = $this->getConfigurationReader();
        $visiblePath = 'hiddenPath';
        $this->assertNull($reader->access('read', $visiblePath, 'dummy', 'dummy'));
        $this->assertNull($reader->access('write', $visiblePath, 'dummy', 'dummy'));
    }

    public function testPathAndUrlAndHomeFolder(): void
    {
        // with path and without homeFolder
        $reader        = $this->getConfigurationReader();
        $configuration = $reader->getConfiguration('with_path_with_url');
        $this->assertEquals('/home', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url', $configuration['roots'][0]['URL']);

        // with path and with homeFolder
        $reader        = $this->getConfigurationReader(['homeFolder' => 'bob']);
        $configuration = $reader->getConfiguration('with_path_with_url');
        $this->assertEquals('/home/bob', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url/bob', $configuration['roots'][0]['URL']);

        // without path and without homeFolder
        $reader        = $this->getConfigurationReader();
        $configuration = $reader->getConfiguration('without_path_with_url');
        $this->assertEquals('', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url-without-path', $configuration['roots'][0]['URL']);

        // without path and with homeFolder
        $reader        = $this->getConfigurationReader(['homeFolder' => 'bob']);
        $configuration = $reader->getConfiguration('without_path_with_url');
        $this->assertEquals('/bob', $configuration['roots'][0]['path']);
        $this->assertEquals('http://test.com/unit-test/home-url-without-path/bob', $configuration['roots'][0]['URL']);

        // without path and with url absolute and homeFolder
        $reader        = $this->getConfigurationReader(['homeFolder' => 'bob']);
        $configuration = $reader->getConfiguration('without_path_with_url_absolute_homeFolder');
        $this->assertEquals('/bob', $configuration['roots'][0]['path']);
        $this->assertEquals('https://test.com/bob', $configuration['roots'][0]['URL']);
    }

    public function testAccessTmbURLOption(): void
    {
        $reader        = $this->getConfigurationReader();
        $configuration = $reader->getConfiguration('default');
        $this->assertArrayHasKey('tmbURL', $configuration['roots'][0]);
    }
}
