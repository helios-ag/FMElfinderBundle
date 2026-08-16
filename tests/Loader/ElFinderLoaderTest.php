<?php

namespace FM\ElfinderBundle\Tests\Loader;

use FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Loader\ElFinderLoader;
use ReflectionProperty;
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
