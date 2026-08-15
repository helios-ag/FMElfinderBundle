<?php

namespace FM\ElfinderBundle\Tests\Configuration;

use elFinderVolumeLocalFileSystem;
use Exception;
use FM\ElfinderBundle\Configuration\ElFinderConfigurationReader;
use FM\ElfinderBundle\Security\ElfinderSecurityInterface;
use InvalidArgumentException;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemAdapter;
use League\Flysystem\Local\LocalFilesystemAdapter;
use ReflectionClass;
use stdClass;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class ElFinderConfigurationReaderTest extends \PHPUnit\Framework\TestCase
{
    /** @var ElFinderConfigurationReader */
    protected $reader;

    /** @var elFinderVolumeLocalFileSystem */
    protected $elFinderVolumeMock;

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
        $rc = new ReflectionClass('FM\ElfinderBundle\Configuration\ElFinderConfigurationReader');

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

    #[\PHPUnit\Framework\Attributes\DataProvider('driverConfigurationProvider')]
    public function testConfigureDriver(string $driver, string $settingsKey, array $settings, array $expected): void
    {
        $root               = $this->baseRoot();
        $root['driver']     = $driver;
        $root[$settingsKey] = $settings;

        $rootConfig = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0];

        foreach ($expected as $key => $value) {
            $this->assertSame($value, $rootConfig[$key], sprintf('driver "%s" should map setting "%s"', $driver, $key));
        }
    }

    public static function driverConfigurationProvider(): array
    {
        return [
            'ftp' => ['ftp', 'ftp_settings', [
                'host' => 'ftp.example', 'user' => 'ftp_user', 'password' => 'ftp_pass', 'path' => '/ftp',
            ], [
                'host' => 'ftp.example', 'user' => 'ftp_user', 'pass' => 'ftp_pass', 'path' => '/ftp',
            ]],
            'mysql' => ['mysql', 'mysql_settings', [
                'host'    => 'db.example', 'user' => 'db_user', 'pass' => 'db_pass', 'db' => 'db_name',
                'port'    => '3306', 'socket' => '/var/run/mysqld', 'files_table' => 'elfinder_file',
                'tmbPath' => '/tmb', 'tmpPath' => '/tmp', 'rootCssClass' => 'elfinder', 'noSessionCache' => 'a,b,c',
            ], [
                'host'    => 'db.example', 'user' => 'db_user', 'pass' => 'db_pass', 'db' => 'db_name',
                'port'    => '3306', 'socket' => '/var/run/mysqld', 'files_table' => 'elfinder_file',
                'tmbPath' => '/tmb', 'tmpPath' => '/tmp', 'rootCssClass' => 'elfinder', 'noSessionCache' => ['a', 'b', 'c'],
            ]],
            'dropbox2' => ['dropbox2', 'dropbox2_settings', [
                'app_key'           => 'k', 'app_secret' => 's', 'access_token' => 't', 'aliasFormat' => '%s',
                'path'              => '/db', 'separator' => '/', 'acceptedName' => 'an', 'rootCssClass' => 'rc',
                'publishPermission' => ['all' => true], 'getThumbSize' => 'small',
            ], [
                'app_key' => 'k', 'access_token' => 't', 'path' => '/db', 'getThumbSize' => 'small',
            ]],
            'onedrive' => ['onedrive', 'onedrive_settings', [
                'client_id'         => 'cid', 'client_secret' => 'cs', 'accessToken' => 'tok', 'root' => 'root',
                'OneDriveApiClient' => '', 'path' => '/od', 'separator' => '/', 'tmbPath' => '/t',
                'tmbURL'            => '/tu', 'tmpPath' => '/tmp', 'acceptedName' => 'an', 'rootCssClass' => 'rc',
                'useApiThumbnail'   => true,
            ], [
                'client_id' => 'cid', 'accessToken' => 'tok', 'path' => '/od', 'useApiThumbnail' => true,
            ]],
            'box' => ['box', 'box_settings', [
                'client_id'    => 'cid', 'client_secret' => 'cs', 'accessToken' => 'tok', 'root' => 'root',
                'path'         => '/box', 'separator' => '/', 'tmbPath' => '/t', 'tmbURL' => '/tu',
                'acceptedName' => 'an', 'rootCssClass' => 'rc',
            ], [
                'client_id' => 'cid', 'accessToken' => 'tok', 'path' => '/box',
            ]],
        ];
    }

    public function testConfigureDriverReturnsEmptyForUnknownDriver(): void
    {
        $root           = $this->baseRoot();
        $root['driver'] = 'SomeUnknownDriver';

        $rootConfig = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0];

        $this->assertSame('SomeUnknownDriver', $rootConfig['driver']);
        // The default switch branch returns an empty settings array, so no driver-specific keys leak in.
        $this->assertArrayNotHasKey('host', $rootConfig);
        $this->assertArrayNotHasKey('app_key', $rootConfig);
    }

    public function testQuarantineVolumeIdAndHiddenFileOptions(): void
    {
        $root                = $this->baseRoot();
        $root['quarantine']  = '/quarantine';
        $root['volume_id']   = 5;
        $root['show_hidden'] = true;

        $rootConfig = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0];

        $this->assertSame('/quarantine', $rootConfig['quarantine']);
        $this->assertSame(5, $rootConfig['id']);
        // show_hidden = true disables the accessControl callback attachment.
        $this->assertArrayNotHasKey('accessControl', $rootConfig);
    }

    public function testAccessControlAttachedWhenHiddenFilesNotShown(): void
    {
        $rootConfig = $this->buildReaderWithRoot($this->baseRoot())->getConfiguration('default')['roots'][0];

        $this->assertIsArray($rootConfig['accessControl']);
        $this->assertSame('access', $rootConfig['accessControl'][1]);
    }

    public function testSecurityVoterAppliesDisabledCommandsWhenRoleGranted(): void
    {
        $voter = $this->createMock(ElfinderSecurityInterface::class);
        $voter->method('getConfiguration')->willReturn(['ROLE_ADMIN' => ['rm', 'rename']]);

        $container = $this->securityContainer($voter, new AuthCheckerStub(true));

        $root                   = $this->baseRoot();
        $root['security_voter'] = 'app.voter';

        $disabled = $this->buildReaderWithRoot($root, [], $container)->getConfiguration('default')['roots'][0]['disabled'];

        $this->assertSame(['rm', 'rename'], $disabled);
    }

    public function testSecurityVoterReturnsEmptyWhenNoRoleGranted(): void
    {
        $voter = $this->createMock(ElfinderSecurityInterface::class);
        $voter->method('getConfiguration')->willReturn(['ROLE_ADMIN' => ['rm']]);

        $container = $this->securityContainer($voter, new AuthCheckerStub(false));

        $root                   = $this->baseRoot();
        $root['security_voter'] = 'app.voter';

        $disabled = $this->buildReaderWithRoot($root, [], $container)->getConfiguration('default')['roots'][0]['disabled'];

        $this->assertSame([], $disabled);
    }

    public function testFlysystemRejectsNonFilesystemService(): void
    {
        $container = $this->createMock(ContainerInterface::class);
        $container->method('has')->willReturn(true);
        $container->method('get')->willReturn(new stdClass());

        $root              = $this->baseRoot();
        $root['flysystem'] = ['enabled' => true, 'filesystem' => 'app.fs'];

        $this->expectException(Exception::class);
        $this->expectExceptionMessageMatches('/is not an instance of/');

        $this->buildReaderWithRoot($root, [], $container)->getConfiguration('default');
    }

    public function testConfigureFlysystemLocalAdapter(): void
    {
        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'local',
            'adapter_service' => '',
            'options'         => ['local' => ['path' => sys_get_temp_dir()]],
        ];

        $filesystem = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0]['filesystem'];

        $this->assertInstanceOf(Filesystem::class, $filesystem);
    }

    public function testConfigureFlysystemFtpAdapter(): void
    {
        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'ftp',
            'adapter_service' => '',
            'options'         => ['ftp' => [
                'host'     => '127.0.0.1',
                'username' => 'user',
                'password' => 'pass',
                'port'     => 21,
                'root'     => '/',
                'passive'  => true,
                'ssl'      => false,
                'timeout'  => 30,
            ]],
        ];

        $filesystem = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0]['filesystem'];

        $this->assertInstanceOf(Filesystem::class, $filesystem);
    }

    public function testConfigureFlysystemSftpAdapter(): void
    {
        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'sftp',
            'adapter_service' => '',
            'options'         => ['sftp' => [
                'host'       => '127.0.0.1',
                'port'       => 22,
                'username'   => 'user',
                'password'   => 'pass',
                'privateKey' => '',
                'root'       => '/',
                'timeout'    => 10,
            ]],
        ];

        $filesystem = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0]['filesystem'];

        $this->assertInstanceOf(Filesystem::class, $filesystem);
    }

    public function testConfigureFlysystemCustomAdapter(): void
    {
        $adapter   = $this->createMock(FilesystemAdapter::class);
        $container = $this->createMock(ContainerInterface::class);
        $container->method('has')->willReturn(true);
        $container->method('get')->willReturn($adapter);

        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'custom',
            'adapter_service' => 'app.flysystem_adapter',
            'options'         => [],
        ];

        $filesystem = $this->buildReaderWithRoot($root, [], $container)->getConfiguration('default')['roots'][0]['filesystem'];

        $this->assertInstanceOf(Filesystem::class, $filesystem);
    }

    public function testConfigureFlysystemRejectsNonAdapterCustomService(): void
    {
        $container = $this->createMock(ContainerInterface::class);
        $container->method('has')->willReturn(true);
        $container->method('get')->willReturn(new stdClass());

        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'custom',
            'adapter_service' => 'app.bad_adapter',
            'options'         => [],
        ];

        $this->expectException(Exception::class);
        $this->expectExceptionMessageMatches('/is not an instance of/');

        $this->buildReaderWithRoot($root, [], $container)->getConfiguration('default');
    }

    public function testConfigureFlysystemDropboxAdapter(): void
    {
        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'dropbox',
            'adapter_service' => '',
            'options'         => ['dropbox' => ['token' => 'test-token']],
        ];

        $filesystem = $this->buildReaderWithRoot($root)->getConfiguration('default')['roots'][0]['filesystem'];

        $this->assertInstanceOf(Filesystem::class, $filesystem);
    }

    public function testConfigureFlysystemRejectsRemovedAdapterType(): void
    {
        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'azure',
            'adapter_service' => '',
            'options'         => [],
        ];

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/is not supported by Flysystem v3/');

        $this->buildReaderWithRoot($root)->getConfiguration('default');
    }

    public function testConfigureFlysystemRejectsUnknownAdapterType(): void
    {
        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = [
            'enabled'         => true,
            'filesystem'      => '',
            'type'            => 'some_unknown_type',
            'adapter_service' => '',
            'options'         => [],
        ];

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/is not supported by Flysystem v3/');

        $this->buildReaderWithRoot($root)->getConfiguration('default');
    }

    public function testConfigureFlysystemUsesConfiguredFilesystemService(): void
    {
        $filesystem = new Filesystem(new LocalFilesystemAdapter(sys_get_temp_dir()));
        $container  = $this->createMock(ContainerInterface::class);
        $container->method('has')->willReturn(true);
        $container->method('get')->willReturn($filesystem);

        $root              = $this->baseRoot();
        $root['driver']    = 'Flysystem';
        $root['flysystem'] = ['enabled' => true, 'filesystem' => 'app.fs'];

        $result = $this->buildReaderWithRoot($root, [], $container)->getConfiguration('default')['roots'][0]['filesystem'];

        $this->assertSame($filesystem, $result);
    }

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
                'default' => [
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
                'with_path_with_url' => [
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
                'without_path_with_url' => [
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
                'without_path_with_url_absolute_homeFolder' => [
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

    private function securityContainer(ElfinderSecurityInterface $voter, AuthCheckerStub $checker): ContainerInterface
    {
        $container = $this->createMock(ContainerInterface::class);
        $container->method('has')->willReturn(true);
        $container->method('get')->willReturnCallback(function (string $id) use ($voter, $checker) {
            return match ($id) {
                'app.voter'                      => $voter,
                'security.authorization_checker' => $checker,
                default                          => null,
            };
        });

        return $container;
    }

    private function buildReaderWithRoot(array $root, array $requestAttributes = [], ?ContainerInterface $container = null): ElFinderConfigurationReader
    {
        $params = [
            'instances' => [
                'default' => [
                    'cors_support' => '',
                    'connector'    => [
                        'debug' => '', 'binds' => '', 'plugins' => '',
                        'roots' => ['uploads' => $root],
                    ],
                ],
            ],
        ];

        return new ElFinderConfigurationReader(
            $params,
            $this->buildRequestStack($requestAttributes),
            $container ?? $this->buildContainer()
        );
    }

    private function buildRequestStack(array $attributes = []): RequestStack
    {
        // A real Request is used instead of a mock: see the note in getConfigurationReader().
        $request = new class([], [], $attributes) extends Request {
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
                return '';
            }
        };

        $requestStack = $this->createMock(RequestStack::class);
        $requestStack->method('getCurrentRequest')->willReturn($request);

        return $requestStack;
    }

    private function buildContainer(): ContainerInterface
    {
        $container = $this->createMock(ContainerInterface::class);
        $container->method('has')->willReturn(true);
        $container->method('get')->willReturn(null);

        return $container;
    }

    private function baseRoot(): array
    {
        return [
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
        ];
    }
}

/**
 * Stand-in for Symfony's AuthorizationCheckerInterface, which is not installed
 * in the test environment (the Security component is optional).
 */
class AuthCheckerStub
{
    public function __construct(private readonly bool $granted)
    {
    }

    public function isGranted(mixed $attribute, mixed $subject = null): bool
    {
        return $this->granted;
    }
}
