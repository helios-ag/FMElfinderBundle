<?php

namespace FM\ElfinderBundle\Tests\Command;

use FM\ElfinderBundle\Command\ElFinderInstallerCommand;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Tester\CommandTester;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Filesystem\Filesystem;
use ReflectionClass;

class ElFinderInstallerCommandTest extends TestCase
{
    private Filesystem $fileSystem;
    private ParameterBagInterface $parameterBag;
    private CommandTester $commandTester;
    private string $projectDir;
    private string $vendorDir;

    protected function setUp(): void
    {
        // Calculate real paths
        $reflection = new ReflectionClass(\Composer\Autoload\ClassLoader::class);
        $this->vendorDir = dirname($reflection->getFileName(), 3) . DIRECTORY_SEPARATOR . 'vendor';
        $this->projectDir = dirname($this->vendorDir);

        $this->fileSystem = $this->createMock(Filesystem::class);
        $this->parameterBag = $this->createMock(ParameterBagInterface::class);

        $this->parameterBag
            ->method('get')
            ->willReturnMap([
                ['kernel.project_dir', $this->projectDir]
            ]);

        $application = new Application();
        $command = new ElFinderInstallerCommand($this->fileSystem, $this->parameterBag);
        $application->addCommands([$command]);




        $this->commandTester = new CommandTester($application->find('elfinder:install'));
    }

    public function testExecuteWithDefaultDocroot(): void
    {
        $this->assertFileSystemOperations('public');
        $this->commandTester->execute([]);
        $this->assertCommandOutput();
        $this->assertEquals(0, $this->commandTester->getStatusCode());
    }

    public function testExecuteWithCustomDocroot(): void
    {
        $this->assertFileSystemOperations('custom');
        $this->commandTester->execute(['--docroot' => 'custom']);
        $this->assertCommandOutput();
        $this->assertEquals(0, $this->commandTester->getStatusCode());
    }

    private function assertFileSystemOperations(string $docroot): void
    {
        $expectedCalls = [
            [
                $this->vendorDir . '/studio-42/elfinder/css',
                $this->projectDir . "/$docroot/bundles/fmelfinder/css"
            ],
            [
                $this->vendorDir . '/studio-42/elfinder/img',
                $this->projectDir . "/$docroot/bundles/fmelfinder/img"
            ],
            [
                $this->vendorDir . '/studio-42/elfinder/js',
                $this->projectDir . "/$docroot/bundles/fmelfinder/js"
            ],
            [
                $this->vendorDir . '/studio-42/elfinder/sounds',
                $this->projectDir . "/$docroot/bundles/fmelfinder/sounds"
            ]
        ];

        $callIndex = 0;
        $this->fileSystem
            ->expects($this->exactly(4))
            ->method('mirror')
            ->willReturnCallback(function ($source, $target) use (&$callIndex, $expectedCalls) {
                $this->assertEquals($expectedCalls[$callIndex][0], $source, "Incorrect source path for call $callIndex");
                $this->assertEquals($expectedCalls[$callIndex][1], $target, "Incorrect target path for call $callIndex");
                $callIndex++;
            });
    }

    private function assertCommandOutput(): void
    {
        $output = $this->commandTester->getDisplay();
        $this->assertStringContainsString('elFinder Installer', $output);
        $this->assertStringContainsString('elFinder assets successfully installed', $output);
    }
}
