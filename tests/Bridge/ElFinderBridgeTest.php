<?php

namespace FM\ElfinderBundle\Tests\Bridge;

use elFinderVolumeDriver;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use ReflectionProperty;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ElFinderBridgeTest extends \PHPUnit\Framework\TestCase
{
    private string $volumePath;

    protected function setUp(): void
    {
        $this->volumePath = sys_get_temp_dir() . '/elfbridge_test_' . mt_rand();
        mkdir($this->volumePath, 0777, true);
    }

    protected function tearDown(): void
    {
        $this->removeDirectory($this->volumePath);
    }

    public function testMountsLocalVolume(): void
    {
        $bridge = new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]);

        $this->assertTrue($bridge->loaded());
        $this->assertNotEmpty($bridge->getVolumes());
    }

    public function testMountsPreInstantiatedServiceVolume(): void
    {
        $volume = $this->createStub(elFinderVolumeDriver::class);
        $volume->method('mount')->willReturn(true);
        $volume->method('id')->willReturn('l1_');
        $volume->method('isReadable')->willReturn(true);

        $bridge = new ElFinderBridge(['roots' => [['service' => $volume]]]);

        $this->assertArrayHasKey('l1_', $bridge->getVolumes());
        $this->assertTrue($bridge->loaded());
    }

    public function testSetSessionStoresSession(): void
    {
        $bridge  = new ElFinderBridge(['roots' => []]);
        $session = $this->createStub(SessionInterface::class);

        $bridge->setSession($session);

        $reflection = new ReflectionProperty(ElFinderBridge::class, 'session');
        $this->assertSame($session, $reflection->getValue($bridge));
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
