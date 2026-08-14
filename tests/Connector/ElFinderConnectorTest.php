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
        $_SERVER['REQUEST_METHOD']   = 'GET';
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
        $connector                 = new ElFinderConnector(new ElFinderBridge(['roots' => []]));
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
