<?php

namespace FM\ElfinderBundle\Tests\Loader;

use elFinderVolumeDriver;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Exception\UploadConfigurationException;
use FM\ElfinderBundle\Loader\ElFinderLoader;
use FM\ElfinderBundle\Loader\ElFinderUploadLoaderInterface;
use ReflectionProperty;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ElFinderLoaderTest extends \PHPUnit\Framework\TestCase
{
    protected $loader;

    protected $configuratorMock;

    public function setUp(): void
    {
        $this->configuratorMock = $this->createStub(ElFinderConfigurationProviderInterface::class);
        $this->configuratorMock->method('getConfiguration')
                               ->willReturn(['parameters' => []]);
        $this->loader = new ElFinderLoader($this->configuratorMock);
        $this->loader->setInstance('minimal');
    }

    public function testConfigure()
    {
        $this->loader->configure();
        $this->assertEquals(['parameters' => []], $this->configuratorMock->getConfiguration('minimal'));
    }

    public function testSetConfiguratorSwapsConfigurator(): void
    {
        $replacement = $this->createStub(ElFinderConfigurationProviderInterface::class);
        $replacement->method('getConfiguration')->willReturn(['swapped' => true]);

        $this->loader->setConfigurator($replacement);

        $this->assertSame(['swapped' => true], $this->loader->configure());
    }

    public function testSetSessionStoresSession(): void
    {
        $session = $this->createStub(SessionInterface::class);
        $this->loader->setSession($session);

        $reflection = new ReflectionProperty(ElFinderLoader::class, 'session');
        $this->assertSame($session, $reflection->getValue($this->loader));
    }

    public function testInitBridgeEncodesAndDecodesPath(): void
    {
        $volumePath = sys_get_temp_dir() . '/elfloader_test_' . mt_rand();
        mkdir($volumePath, 0777, true);
        file_put_contents($volumePath . '/hello.txt', 'hi');

        try {
            $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
            $configurator->method('getConfiguration')->willReturn([
                'corsSupport' => false,
                'roots'       => [['driver' => 'LocalFileSystem', 'path' => $volumePath]],
            ]);
            $loader = new ElFinderLoader($configurator);

            $efParameters = [
                'instances' => [
                    'minimal' => [
                        'where_is_multi'    => [],
                        'multi_home_folder' => false,
                        'folder_separator'  => '/',
                    ],
                ],
            ];

            $loader->initBridge('minimal', $efParameters);

            $full = $volumePath . '/hello.txt';
            $hash = $loader->encode($full);
            $this->assertIsString($hash);
            $this->assertSame($full, $loader->decode($hash));
        } finally {
            $this->removeDirectory($volumePath);
        }
    }

    public function testInitBridgeRewritesMultiHomeFolderPaths(): void
    {
        $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
        $configurator->method('getConfiguration')->willReturn([
            'corsSupport' => false,
            'roots'       => [
                0 => [
                    'driver' => 'LocalFileSystem',
                    'path'   => 'folder||sub',
                    'URL'    => 'http://example.com||path',
                ],
            ],
        ]);
        $loader = new ElFinderLoader($configurator);

        $efParameters = [
            'instances' => [
                'minimal' => [
                    'where_is_multi'    => ['roots' => 0],
                    'multi_home_folder' => true,
                    'folder_separator'  => '||',
                ],
            ],
        ];

        $loader->initBridge('minimal', $efParameters);

        $reflection = new ReflectionProperty(ElFinderLoader::class, 'config');
        $config     = $reflection->getValue($loader);

        $this->assertSame('folder/sub', $config['roots'][0]['path']);
        $this->assertSame('http://example.com/path', $config['roots'][0]['URL']);
    }

    public function testInitBridgeAttachesSessionToBridge(): void
    {
        $volumePath = sys_get_temp_dir() . '/elfloader_session_' . mt_rand();
        mkdir($volumePath, 0777, true);

        try {
            $session = $this->createStub(SessionInterface::class);

            $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
            $configurator->method('getConfiguration')->willReturn([
                'corsSupport' => false,
                'roots'       => [['driver' => 'LocalFileSystem', 'path' => $volumePath]],
            ]);
            $loader = new ElFinderLoader($configurator);
            $loader->setSession($session);

            $loader->initBridge('minimal', [
                'instances' => ['minimal' => [
                    'where_is_multi' => [], 'multi_home_folder' => false, 'folder_separator' => '/',
                ]],
            ]);

            $bridge = (new ReflectionProperty(ElFinderLoader::class, 'bridge'))->getValue($loader);
            $this->assertNotNull($bridge);
        } finally {
            $this->removeDirectory($volumePath);
        }
    }

    public function testLoadRunsConnectorWhenCorsDisabled(): void
    {
        $result = $this->loadWithCors(false);

        $this->assertIsArray($result);
    }

    public function testLoadExecutesConnectorWhenCorsEnabled(): void
    {
        $result = $this->loadWithCors(true);

        $this->assertIsArray($result);
    }

    public function testEncodeReturnsFalseWithoutVolumes(): void
    {
        $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
        $configurator->method('getConfiguration')->willReturn([
            'corsSupport' => false,
            'roots'       => [['driver' => 'NonexistentDriver']],
        ]);
        $loader = new ElFinderLoader($configurator);
        $loader->initBridge('minimal', [
            'instances' => ['minimal' => [
                'where_is_multi' => [], 'multi_home_folder' => false, 'folder_separator' => '/',
            ]],
        ]);

        $this->assertFalse($loader->encode('/nothing'));
    }

    public function testEncodeReturnsArrayOfHashesForMultipleVolumes(): void
    {
        $volumeA = sys_get_temp_dir() . '/elfloader_multi_a_' . mt_rand();
        $volumeB = sys_get_temp_dir() . '/elfloader_multi_b_' . mt_rand();
        mkdir($volumeA, 0777, true);
        mkdir($volumeB, 0777, true);
        file_put_contents($volumeA . '/shared.txt', 'a');
        file_put_contents($volumeB . '/shared.txt', 'b');

        try {
            $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
            $configurator->method('getConfiguration')->willReturn([
                'corsSupport' => false,
                'roots'       => [
                    ['driver' => 'LocalFileSystem', 'path' => $volumeA],
                    ['driver' => 'LocalFileSystem', 'path' => $volumeB],
                ],
            ]);
            $loader = new ElFinderLoader($configurator);
            $loader->initBridge('minimal', [
                'instances' => ['minimal' => [
                    'where_is_multi' => [], 'multi_home_folder' => false, 'folder_separator' => '/',
                ]],
            ]);

            $encoded = $loader->encode($volumeA . '/shared.txt');

            $this->assertIsArray($encoded);
            $this->assertGreaterThanOrEqual(2, count($encoded));
        } finally {
            $this->removeDirectory($volumeA);
            $this->removeDirectory($volumeB);
        }
    }

    public function testUploadUsesTheOnlyReadableVolumeDefaultPathAndResolvesUrl(): void
    {
        $volume = $this->createMock(elFinderVolumeDriver::class);
        $volume->expects($this->once())->method('isReadable')->willReturn(true);
        $volume->expects($this->once())->method('defaultPath')->willReturn('l1_c3RhcnQ');
        [$loader, $bridge] = $this->createUploadLoader([$volume], [
            ['added' => [['hash' => 'l1_cGhvdG8', 'name' => 'photo.png']]],
            ['url' => '/uploads/photo.png'],
        ]);
        $file = $this->createUploadedFile();

        try {
            self::assertInstanceOf(ElFinderUploadLoaderInterface::class, $loader);
            self::assertSame([
                'added'     => [['hash' => 'l1_cGhvdG8', 'name' => 'photo.png']],
                'uploadUrl' => '/uploads/photo.png',
            ], $loader->upload($file));
            self::assertSame('upload', $bridge->calls[0][0]);
            self::assertSame('l1_c3RhcnQ', $bridge->calls[0][1]['target']);
            self::assertSame([
                'name'     => ['photo.png'],
                'type'     => ['image/png'],
                'tmp_name' => [$file->getPathname()],
                'error'    => [UPLOAD_ERR_OK],
                'size'     => [4],
            ], $bridge->calls[0][1]['FILES']['upload']);
            self::assertSame(['url', ['target' => 'l1_cGhvdG8']], $bridge->calls[1]);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadUsesConfiguredStartPathWithoutUiInitialization(): void
    {
        $volume = $this->createMock(elFinderVolumeDriver::class);
        $volume->expects($this->once())->method('isReadable')->willReturn(true);
        $volume->expects($this->once())->method('getOption')->with('startPath')->willReturn('/uploads/articles');
        $volume->expects($this->once())->method('getHash')->with('/uploads/articles')->willReturn('l1_YXJ0aWNsZXM');
        $volume->expects($this->never())->method('defaultPath');
        [$loader, $bridge] = $this->createUploadLoader([$volume], [
            ['added' => [['hash' => 'l1_cGhvdG8', 'name' => 'photo.png']]],
            ['url' => '/uploads/articles/photo.png'],
        ]);
        $file = $this->createUploadedFile();

        try {
            $loader->upload($file);

            self::assertSame('l1_YXJ0aWNsZXM', $bridge->calls[0][1]['target']);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadRequiresExactlyOneReadableVolume(): void
    {
        $unreadable = $this->createStub(elFinderVolumeDriver::class);
        $unreadable->method('isReadable')->willReturn(false);
        [$loader] = $this->createUploadLoader([$unreadable], []);
        $file     = $this->createUploadedFile();

        try {
            $this->expectException(UploadConfigurationException::class);
            $this->expectExceptionMessage('exactly one readable volume');
            $loader->upload($file);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadRejectsMultipleReadableVolumes(): void
    {
        $first = $this->createStub(elFinderVolumeDriver::class);
        $first->method('isReadable')->willReturn(true);
        $second = $this->createStub(elFinderVolumeDriver::class);
        $second->method('isReadable')->willReturn(true);
        [$loader] = $this->createUploadLoader([$first, $second], []);
        $file     = $this->createUploadedFile();

        try {
            $this->expectException(UploadConfigurationException::class);
            $loader->upload($file);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadReturnsElFinderErrorWithoutResolvingUrl(): void
    {
        $volume = $this->createStub(elFinderVolumeDriver::class);
        $volume->method('isReadable')->willReturn(true);
        $volume->method('defaultPath')->willReturn('l1_root');
        [$loader, $bridge] = $this->createUploadLoader([$volume], [
            ['error' => ['File type is not allowed.']],
        ]);
        $file = $this->createUploadedFile();

        try {
            self::assertSame(['error' => ['File type is not allowed.']], $loader->upload($file));
            self::assertCount(1, $bridge->calls);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadReportsMissingAddedFileMetadata(): void
    {
        $volume = $this->createStub(elFinderVolumeDriver::class);
        $volume->method('isReadable')->willReturn(true);
        $volume->method('defaultPath')->willReturn('l1_root');
        [$loader] = $this->createUploadLoader([$volume], [['added' => []]]);
        $file     = $this->createUploadedFile();

        try {
            self::assertSame(
                ['error' => ['Uploaded file metadata is missing.']],
                $loader->upload($file)
            );
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadPreservesElFinderWarningWhenNoFileWasAdded(): void
    {
        $volume = $this->createStub(elFinderVolumeDriver::class);
        $volume->method('isReadable')->willReturn(true);
        $volume->method('defaultPath')->willReturn('l1_root');
        [$loader, $bridge] = $this->createUploadLoader([$volume], [[
            'added'   => [],
            'warning' => ['File type is not allowed.'],
        ]]);
        $file = $this->createUploadedFile();

        try {
            self::assertSame(
                ['error' => ['File type is not allowed.']],
                $loader->upload($file)
            );
            self::assertCount(1, $bridge->calls);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadPropagatesUrlCommandError(): void
    {
        $volume = $this->createStub(elFinderVolumeDriver::class);
        $volume->method('isReadable')->willReturn(true);
        $volume->method('defaultPath')->willReturn('l1_root');
        [$loader] = $this->createUploadLoader([$volume], [
            ['added' => [['hash' => 'l1_file']]],
            ['error' => ['URL command is disabled.']],
        ]);
        $file = $this->createUploadedFile();

        try {
            self::assertSame(['error' => ['URL command is disabled.']], $loader->upload($file));
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadReportsMissingResolvedUrl(): void
    {
        $volume = $this->createStub(elFinderVolumeDriver::class);
        $volume->method('isReadable')->willReturn(true);
        $volume->method('defaultPath')->willReturn('l1_root');
        [$loader] = $this->createUploadLoader([$volume], [
            ['added' => [['hash' => 'l1_file']]],
            ['url' => null],
        ]);
        $file = $this->createUploadedFile();

        try {
            self::assertSame(
                ['error' => ['Uploaded file URL is unavailable.']],
                $loader->upload($file)
            );
        } finally {
            unlink($file->getPathname());
        }
    }

    private function createUploadedFile(): UploadedFile
    {
        $path = tempnam(sys_get_temp_dir(), 'fm_elfinder_upload_');
        file_put_contents($path, 'data');

        return new UploadedFile($path, 'photo.png', 'image/png', UPLOAD_ERR_OK, true);
    }

    private function createUploadLoader(array $volumes, array $responses): array
    {
        $bridge = new class($volumes, $responses) extends ElFinderBridge {
            public array $calls = [];
            private array $testVolumes;
            private array $responses;

            public function __construct(array $volumes, array $responses)
            {
                $this->testVolumes = $volumes;
                $this->responses   = $responses;
            }

            public function getVolumes(): array
            {
                return $this->testVolumes;
            }

            public function exec($command, $arguments)
            {
                $this->calls[] = [$command, $arguments];

                return array_shift($this->responses);
            }
        };
        $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
        $loader       = new class($configurator) extends ElFinderLoader {
            public function useBridge(ElFinderBridge $bridge): void
            {
                $this->bridge = $bridge;
            }
        };
        $loader->useBridge($bridge);

        return [$loader, $bridge];
    }

    private function loadWithCors(bool $cors): array
    {
        $volumePath = sys_get_temp_dir() . '/elfloader_load_' . mt_rand();
        mkdir($volumePath, 0777, true);
        // The connector reads the request method from the global $_SERVER, and
        // Request::create() does not populate it, so set it for the call.
        $previousMethod            = $_SERVER['REQUEST_METHOD'] ?? null;
        $_SERVER['REQUEST_METHOD'] = 'GET';

        try {
            $configurator = $this->createStub(ElFinderConfigurationProviderInterface::class);
            $configurator->method('getConfiguration')->willReturn([
                'corsSupport' => $cors,
                'roots'       => [['driver' => 'LocalFileSystem', 'path' => $volumePath]],
            ]);
            $loader = new ElFinderLoader($configurator);
            $loader->initBridge('minimal', [
                'instances' => ['minimal' => [
                    'where_is_multi' => [], 'multi_home_folder' => false, 'folder_separator' => '/',
                ]],
            ]);

            return $loader->load(Request::create('/elfinder', 'GET', ['cmd' => 'open', 'target' => '']));
        } finally {
            if ($previousMethod === null) {
                unset($_SERVER['REQUEST_METHOD']);
            } else {
                $_SERVER['REQUEST_METHOD'] = $previousMethod;
            }
            $this->removeDirectory($volumePath);
        }
    }

    private function removeDirectory(string $dir): void
    {
        if (!is_dir($dir)) {
            return;
        }

        foreach (array_diff(scandir($dir), ['.', '..']) as $item) {
            $path = $dir . '/' . $item;
            is_dir($path) ? $this->removeDirectory($path) : unlink($path);
        }

        rmdir($dir);
    }
}
