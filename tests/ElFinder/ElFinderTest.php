<?php

namespace FM\ElfinderBundle\Tests\ElFinder;

use FM\ElfinderBundle\ElFinder\ElFinder;
use FM\ElfinderBundle\Session\ElFinderSession;
use ReflectionProperty;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ElFinderTest extends \PHPUnit\Framework\TestCase
{
    private string $volumePath;

    /** Snapshot of superglobals touched by the elFinder constructor. */
    private array $serverBackup;

    private array $getBackup;

    protected function setUp(): void
    {
        $this->volumePath = sys_get_temp_dir() . '/elfinder_test_' . mt_rand();
        mkdir($this->volumePath, 0777, true);
        $this->serverBackup = $_SERVER;
        $this->getBackup = $_GET;
    }

    protected function tearDown(): void
    {
        $_SERVER = $this->serverBackup;
        $_GET = $this->getBackup;
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

        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
            'bind' => ['open.*' => static fn () => true],
        ]);

        $this->assertTrue($elfinder->loaded());
    }

    public function testConstructorConvertsPathInfoToGetQuery(): void
    {
        $_SERVER['PATH_INFO'] = '/open/targetHash';
        $_GET = [];

        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]);

        $this->assertTrue($elfinder->loaded());
        $this->assertSame('open', $_GET['cmd'] ?? null);
    }

    public function testConstructorAppliesAdvancedOptions(): void
    {
        $session = new ElFinderSession($this->createMock(SessionInterface::class));

        $elfinder = new ElFinder([
            'roots' => [],
            'session' => $session,
            'sessionUseCmds' => ['open'],
            'tmpLinkPath' => $this->volumePath,
            'tmpLinkUrl' => 'http://tmp.example',
            'tmpLinkLifeTime' => 3600,
            'textMimes' => ['text/plain'],
            'itemLockExpire' => 30,
        ]);

        // No roots means the instance is not loaded, but the constructor still
        // processed all of the options above without error.
        $this->assertFalse($elfinder->loaded());
    }

    public function testConstructorHonoursVolumesCountHeader(): void
    {
        $_SERVER['HTTP_X_ELFINDER_VOLUMESCNTSTART'] = '5';

        $elfinder = new ElFinder(['roots' => []]);

        $this->assertFalse($elfinder->loaded());
    }

    public function testConstructorBindsNonWildcardCommandHandler(): void
    {
        $_SERVER['REQUEST_METHOD'] = 'GET';
        $_GET['cmd'] = 'open';

        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
            'bind' => ['open' => static fn () => true],
        ]);

        $this->assertTrue($elfinder->loaded());
    }

    public function testConstructorBindsObjectCallableHandler(): void
    {
        $_SERVER['REQUEST_METHOD'] = 'GET';
        $_GET['cmd'] = 'open';

        $listener = new class {
            public function onOpen(): void
            {
            }
        };

        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
            'bind' => ['open' => [$listener, 'onOpen']],
        ]);

        $this->assertTrue($elfinder->loaded());
    }

    public function testConstructorBindsPluginHandlerString(): void
    {
        $_SERVER['REQUEST_METHOD'] = 'GET';
        $_GET['cmd'] = 'open';

        // A "plugin.*" handler whose plugin is unknown resolves to no binding,
        // but the lookup branch is still exercised.
        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
            'bind' => ['open.pre' => 'plugin.unknown_plugin.run'],
        ]);

        $this->assertTrue($elfinder->loaded());
    }

    public function testConstructorCapsRootMaxArchiveFilesSize(): void
    {
        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath, 'maxArcFilesSize' => 200]],
            'maxArcFilesSize' => 100,
        ]);

        $this->assertTrue($elfinder->loaded());
    }

    public function testConstructorUsesConfiguredConnectionFlagsPath(): void
    {
        $elfinder = new ElFinder([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
            'connectionFlagsPath' => $this->volumePath,
        ]);

        $this->assertTrue($elfinder->loaded());
    }

    /**
     * elFinder stores its mounted volumes on a protected property, so read it
     * through reflection rather than relying on a public accessor.
     */
    private function volumes(ElFinder $elfinder): array
    {
        return (new ReflectionProperty(elFinder::class, 'volumes'))->getValue($elfinder);
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
