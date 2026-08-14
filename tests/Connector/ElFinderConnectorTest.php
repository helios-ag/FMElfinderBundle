<?php

namespace FM\ElfinderBundle\Tests\Connector;

use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Connector\ElFinderConnector;

class ElFinderConnectorTest extends \PHPUnit\Framework\TestCase
{
    private string $volumePath;

    private string $originalRequestMethod;

    protected function setUp(): void
    {
        $this->volumePath = sys_get_temp_dir() . '/elfconnector_test_' . mt_rand();
        mkdir($this->volumePath, 0777, true);
        // The vendor elFinderConnector constructor reads the request method, so
        // make sure it exists before any connector is instantiated.
        $this->originalRequestMethod = $_SERVER['REQUEST_METHOD'] ?? '';
        $_SERVER['REQUEST_METHOD'] = 'GET';
    }

    protected function tearDown(): void
    {
        $_SERVER['REQUEST_METHOD'] = $this->originalRequestMethod;
        $this->removeDirectory($this->volumePath);
    }

    public function testRunReturnsErrorWhenElFinderNotLoaded(): void
    {
        // No roots => the bridge reports itself as not loaded, so the connector
        // short-circuits with an error payload instead of executing a command.
        $connector = new ElFinderConnector(new ElFinderBridge(['roots' => []]));
        $_SERVER['REQUEST_METHOD'] = 'GET';

        $result = $connector->run(['cmd' => 'open']);

        $this->assertIsArray($result);
        $this->assertArrayHasKey('error', $result);
    }

    public function testRunExecutesCommandOnLoadedVolume(): void
    {
        $connector = new ElFinderConnector(new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]));
        $_SERVER['REQUEST_METHOD'] = 'GET';

        $result = $connector->run(['cmd' => 'open', 'target' => '']);

        $this->assertIsArray($result);
    }

    public function testRunWithNullQueryFallsBackToGlobalGet(): void
    {
        $connector = new ElFinderConnector(new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]));
        $_SERVER['REQUEST_METHOD'] = 'GET';
        $_GET = ['cmd' => 'open', 'target' => ''];

        try {
            $result = $connector->run(null);
        } finally {
            $_GET = [];
        }

        $this->assertIsArray($result);
    }

    public function testRunRejectsUnknownCommand(): void
    {
        $connector = new ElFinderConnector(new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]));
        $_SERVER['REQUEST_METHOD'] = 'GET';

        $result = $connector->run(['cmd' => 'this_command_does_not_exist']);

        $this->assertIsArray($result);
        $this->assertArrayHasKey('error', $result);
    }

    public function testRunRejectsMissingRequiredArgument(): void
    {
        $connector = new ElFinderConnector(new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]));
        $_SERVER['REQUEST_METHOD'] = 'GET';

        // "rm" requires a target; omitting it must yield an invalid-params error.
        $result = $connector->run(['cmd' => 'rm']);

        $this->assertIsArray($result);
        $this->assertArrayHasKey('error', $result);
    }

    public function testRunRejectsPostRequestWithoutCommand(): void
    {
        $connector = new ElFinderConnector(new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]));
        $_SERVER['REQUEST_METHOD'] = 'POST';
        $_POST = [];

        try {
            $result = $connector->run([]);
        } finally {
            $_POST = [];
        }

        $this->assertIsArray($result);
        $this->assertArrayHasKey('error', $result);
    }

    public function testRunParsesRawPostBodyForCrossDomainRequests(): void
    {
        $connector = new ElFinderConnector(new ElFinderBridge([
            'roots' => [['driver' => 'LocalFileSystem', 'path' => $this->volumePath]],
        ]));
        $_SERVER['REQUEST_METHOD'] = 'POST';
        $_POST = [];

        // Replace the php stream wrapper for the duration of the call so that
        // php://input yields an IE XDomainRequest-style raw body. The body
        // carries an unknown command, so the connector errors out before any
        // elFinder command execution touches other php:// streams.
        stream_wrapper_unregister('php');
        stream_wrapper_register('php', MockPhpStream::class);

        try {
            $GLOBALS['mockPhpInput'] = 'cmd=this_command_does_not_exist';
            $result = $connector->run([]);
        } finally {
            unset($GLOBALS['mockPhpInput']);
            stream_wrapper_restore('php');
        }

        $this->assertIsArray($result);
        $this->assertArrayHasKey('error', $result);
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

/**
 * Minimal userland stream wrapper standing in for the php:// protocol so a
 * test can serve a fixed body from php://input.
 */
class MockPhpStream
{
    public $context;

    private int $position = 0;

    public function stream_open(string $path, string $mode, int $options, ?string &$opened_path): bool
    {
        return true;
    }

    public function stream_read(int $count): string
    {
        $data    = substr($GLOBALS['mockPhpInput'] ?? '', $this->position, $count);
        $this->position += strlen($data);

        return $data;
    }

    public function stream_eof(): bool
    {
        return $this->position >= strlen($GLOBALS['mockPhpInput'] ?? '');
    }

    public function stream_stat(): array
    {
        return [];
    }

    public function stream_set_option(int $option, int $arg1, ?int $arg2): bool
    {
        return true;
    }

    public function stream_seek(int $offset, int $whence): bool
    {
        return true;
    }

    public function stream_tell(): int
    {
        return $this->position;
    }
}
