<?php

namespace FM\ElfinderBundle\Tests\Command;

use FM\ElfinderBundle\Command\ElFinderInstallerCommand;
use PHPUnit\Framework\TestCase;
use ReflectionClass;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Tester\CommandTester;
use Symfony\Component\Filesystem\Filesystem;

final class ElFinderInstallerCommandTest extends TestCase
{
    private Filesystem $fileSystem;
    private CommandTester $commandTester;
    private string $vendorDir;
    private string $resourcesDir;

    protected function setUp(): void
    {
        $reflection         = new ReflectionClass(\Composer\Autoload\ClassLoader::class);
        $this->vendorDir    = dirname($reflection->getFileName(), 3) . '/vendor';
        $this->resourcesDir = dirname(__DIR__, 2) . '/src/Resources';
        $this->fileSystem   = $this->createMock(Filesystem::class);

        $application = new Application();
        $application->addCommands([new ElFinderInstallerCommand($this->fileSystem)]);

        $this->commandTester = new CommandTester($application->find('elfinder:install'));
    }

    public function testExecuteStagesAssetsInBundlePublicDirectory(): void
    {
        $this->expectSourcesExist('studio-42/elfinder');
        $this->expectFileSystemOperations('studio-42/elfinder');

        $this->commandTester->execute([]);

        self::assertSame(Command::SUCCESS, $this->commandTester->getStatusCode());
        $this->assertCommandOutput();
    }

    public function testExecuteSupportsCustomElfinderVendorDirectory(): void
    {
        $this->expectSourcesExist('custom/elfinder');
        $this->expectFileSystemOperations('custom/elfinder');

        $this->commandTester->execute(['--elfinder-vendor-dir' => 'custom/elfinder']);

        self::assertSame(Command::SUCCESS, $this->commandTester->getStatusCode());
        $this->assertCommandOutput();
    }

    public function testExecuteFailsWithInvalidVendorDir(): void
    {
        $this->fileSystem->expects($this->never())->method('exists');
        $this->expectNoDestinationChanges();

        $this->commandTester->execute(['--elfinder-vendor-dir' => 'invalid!name']);

        self::assertSame(Command::FAILURE, $this->commandTester->getStatusCode());
        self::assertStringContainsString('Invalid vendor directory name', $this->commandTester->getDisplay());
    }

    public function testExecuteValidatesAllSourcesBeforeReplacingAssets(): void
    {
        $missingSource = $this->vendorDir . '/studio-42/elfinder/sounds';

        $this->fileSystem
            ->expects($this->exactly(4))
            ->method('exists')
            ->willReturnCallback(static fn (string $path): bool => $missingSource !== $path);
        $this->expectNoDestinationChanges();

        $this->commandTester->execute([]);

        self::assertSame(Command::FAILURE, $this->commandTester->getStatusCode());
        self::assertStringContainsString('Required asset source', $this->commandTester->getDisplay());
        self::assertStringContainsString($missingSource, $this->commandTester->getDisplay());
        self::assertStringContainsString('was not found.', $this->commandTester->getDisplay());
    }

    private function expectSourcesExist(string $vendorPackage): void
    {
        $expectedSources = array_map(
            fn (string $directory): string => sprintf('%s/%s/%s', $this->vendorDir, $vendorPackage, $directory),
            ['css', 'img', 'js', 'sounds']
        );
        $expectedSources[] = $this->resourcesDir . '/assets/tinymceElfinder.js';
        $callIndex         = 0;

        $this->fileSystem
            ->expects($this->exactly(5))
            ->method('exists')
            ->willReturnCallback(function (string $path) use (&$callIndex, $expectedSources): bool {
                self::assertSame($expectedSources[$callIndex], $path);
                ++$callIndex;

                return true;
            });
    }

    private function expectFileSystemOperations(string $vendorPackage): void
    {
        $directories = ['css', 'img', 'js', 'sounds'];
        $removeIndex = 0;
        $mirrorIndex = 0;

        $this->fileSystem
            ->expects($this->exactly(4))
            ->method('remove')
            ->willReturnCallback(function (string $path) use (&$removeIndex, $directories): void {
                self::assertSame($this->resourcesDir . '/public/' . $directories[$removeIndex], $path);
                ++$removeIndex;
            });

        $this->fileSystem
            ->expects($this->exactly(4))
            ->method('mirror')
            ->willReturnCallback(function (string $source, string $target, $iterator, array $options) use (&$mirrorIndex, $directories, $vendorPackage): void {
                $directory = $directories[$mirrorIndex];
                self::assertSame(sprintf('%s/%s/%s', $this->vendorDir, $vendorPackage, $directory), $source);
                self::assertSame($this->resourcesDir . '/public/' . $directory, $target);
                self::assertNull($iterator);
                self::assertSame(['override' => true], $options);
                ++$mirrorIndex;
            });

        $this->fileSystem
            ->expects($this->once())
            ->method('copy')
            ->with(
                $this->resourcesDir . '/assets/tinymceElfinder.js',
                $this->resourcesDir . '/public/js/tinymceElfinder.js',
                true
            );
    }

    private function expectNoDestinationChanges(): void
    {
        $this->fileSystem->expects($this->never())->method('remove');
        $this->fileSystem->expects($this->never())->method('mirror');
        $this->fileSystem->expects($this->never())->method('copy');
    }

    private function assertCommandOutput(): void
    {
        $output = $this->commandTester->getDisplay();
        self::assertStringContainsString('elFinder Installer', $output);
        self::assertStringContainsString('elFinder assets successfully prepared', $output);
        self::assertStringContainsString('bin/console assets:install', $output);
    }
}
