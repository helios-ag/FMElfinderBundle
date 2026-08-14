<?php

namespace FM\ElfinderBundle\Tests\Loader;

use FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Loader\ElFinderLoader;
use ReflectionProperty;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ElFinderLoaderTest extends \PHPUnit\Framework\TestCase
{
    protected $loader;

    protected $configuratorMock;

    public function setUp(): void
    {
        $this->configuratorMock = $this->createMock(ElFinderConfigurationProviderInterface::class);
        $this->configuratorMock->expects($this->any())
                               ->method('getConfiguration')
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
        $replacement = $this->createMock(ElFinderConfigurationProviderInterface::class);
        $replacement->method('getConfiguration')->willReturn(['swapped' => true]);

        $this->loader->setConfigurator($replacement);

        $this->assertSame(['swapped' => true], $this->loader->configure());
    }

    public function testSetSessionStoresSession(): void
    {
        $session = $this->createMock(SessionInterface::class);
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
            $configurator = $this->createMock(ElFinderConfigurationProviderInterface::class);
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
            array_map('unlink', glob($volumePath . '/*'));
            @rmdir($volumePath);
        }
    }

    public function testInitBridgeRewritesMultiHomeFolderPaths(): void
    {
        $configurator = $this->createMock(ElFinderConfigurationProviderInterface::class);
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
}
