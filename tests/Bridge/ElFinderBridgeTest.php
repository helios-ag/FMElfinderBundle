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

    #[\PHPUnit\Framework\Attributes\RunInSeparateProcess]
    public function testCancellationFlagsAreIsolatedBySession(): void
    {
        $first = $this->createStub(SessionInterface::class);
        $first->method('getId')->willReturn('first-session');
        $second = $this->createStub(SessionInterface::class);
        $second->method('getId')->willReturn('second-session');
        $options = ['roots' => [], 'connectionFlagsPath' => $this->volumePath];
        $firstBridge = new ElFinderBridge($options + ['session' => new \FM\ElfinderBundle\Session\ElFinderSession($first)]);
        $secondBridge = new ElFinderBridge($options + ['session' => new \FM\ElfinderBundle\Session\ElFinderSession($second)]);
        $abort = new \ReflectionMethod(ElFinderBridge::class, 'abort');
        $originalMethod = $_SERVER['REQUEST_METHOD'] ?? null;
        $_SERVER['REQUEST_METHOD'] = 'POST';

        try {
            $abort->invoke($firstBridge, ['makeFile' => '1a']);
            $firstFlags = glob($this->volumePath . '/elfreq*');
            self::assertCount(1, $firstFlags);

            $abort->invoke($secondBridge, ['makeFile' => '1a']);
            self::assertCount(2, glob($this->volumePath . '/elfreq*'));

            $abort->invoke($secondBridge, ['id' => '1a']);
            self::assertSame($firstFlags, glob($this->volumePath . '/elfreq*'));

            $abort->invoke($firstBridge, ['id' => '1a']);
            self::assertSame([], glob($this->volumePath . '/elfreq*'));
        } finally {
            if (null === $originalMethod) {
                unset($_SERVER['REQUEST_METHOD']);
            } else {
                $_SERVER['REQUEST_METHOD'] = $originalMethod;
            }
        }
    }

    public function testThumbnailDispatchSkipsImagesAbovePixelLimit(): void
    {
        $volume = $this->createMock(elFinderVolumeDriver::class);
        $volume->method('dimensions')->willReturnMap([
            ['l1_small', '4000x6000'],
            ['l1_large', '4001x6000'],
        ]);
        $volume->expects(self::once())->method('tmb')->with('l1_small')->willReturn('small.png');
        $bridge = $this->getMockBuilder(ElFinderBridge::class)
            ->disableOriginalConstructor()
            ->onlyMethods(['volume'])
            ->getMock();
        $bridge->expects(self::exactly(3))->method('volume')->willReturn($volume);

        $method = new \ReflectionMethod(ElFinderBridge::class, 'tmb');
        self::assertSame(
            ['images' => ['l1_small' => 'small.png']],
            $method->invoke($bridge, ['targets' => ['l1_small', 'l1_large']])
        );
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
