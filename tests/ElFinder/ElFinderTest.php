<?php

namespace FM\ElfinderBundle\Tests\ElFinder;

use FM\ElfinderBundle\ElFinder\ElFinder;
use ReflectionProperty;

class ElFinderTest extends \PHPUnit\Framework\TestCase
{
    private string $volumePath;

    protected function setUp(): void
    {
        $this->volumePath = sys_get_temp_dir() . '/elfinder_test_' . mt_rand();
        mkdir($this->volumePath, 0777, true);
    }

    protected function tearDown(): void
    {
        $this->removeDirectory($this->volumePath);
    }

    public function testConstructsWithLocalVolumeAndLoads(): void
    {
        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]);

        $this->assertTrue($elfinder->loaded());
        $this->assertNotEmpty($this->volumes($elfinder));
    }

    public function testConstructorWithoutRootsIsNotLoaded(): void
    {
        $elfinder = new ElFinder([]);

        $this->assertFalse($elfinder->loaded());
        $this->assertSame([], $this->volumes($elfinder));
    }

    public function testConstructorRecordsMountErrorForUnknownDriver(): void
    {
        $elfinder = new ElFinder([
            'roots' => [['driver' => 'NonexistentDriver']],
        ]);

        $this->assertFalse($elfinder->loaded());
        $this->assertNotEmpty($elfinder->mountErrors);
    }

    public function testConstructorRegistersWildcardBindHandlers(): void
    {
        $_GET['cmd'] = 'open';

        try {
            $elfinder = new ElFinder([
                'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
                'bind'  => ['open.*' => static fn () => true],
            ]);

            $this->assertTrue($elfinder->loaded());
        } finally {
            unset($_GET['cmd']);
        }
    }

    /**
     * elFinder stores its mounted volumes on a protected property, so read it
     * through reflection rather than relying on a public accessor.
     */
    private function volumes(ElFinder $elfinder): array
    {
        return (new ReflectionProperty(ElFinder::class, 'volumes'))->getValue($elfinder);
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
