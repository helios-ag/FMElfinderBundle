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
        self::assertWrappingIndependentContains('Invalid vendor directory name', $this->commandTester->getDisplay());
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
        $display = $this->commandTester->getDisplay();
        self::assertWrappingIndependentContains('Required asset source', $display);
        self::assertWrappingIndependentContains($missingSource, $display);
        self::assertWrappingIndependentContains('was not found.', $display);
    }

    private function expectSourcesExist(string $vendorPackage): void
    {
        $expectedSources = array_map(
            fn (string $directory): string => sprintf('%s/%s/%s', $this->vendorDir, $vendorPackage, $directory),
            ['css', 'img', 'js', 'sounds']
        );
        $expectedSources[] = $this->resourcesDir . '/assets/tinymceElfinder.js';
        $expectedSources[] = $this->resourcesDir . '/assets/elfinderCallback.js';
        $expectedSources[] = $this->resourcesDir . '/assets/ckeditorElfinder.js';
        $callIndex         = 0;

        $this->fileSystem
            ->expects($this->exactly(7))
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

        $expectedAdapters = ['tinymceElfinder.js', 'elfinderCallback.js', 'ckeditorElfinder.js'];
        $copyIndex        = 0;
        $this->fileSystem
            ->expects($this->exactly(3))
            ->method('copy')
            ->willReturnCallback(function (string $source, string $target, bool $overwrite) use (&$copyIndex, $expectedAdapters): void {
                $filename = $expectedAdapters[$copyIndex];
                self::assertSame($this->resourcesDir . '/assets/' . $filename, $source);
                self::assertSame($this->resourcesDir . '/public/js/' . $filename, $target);
                self::assertTrue($overwrite);
                ++$copyIndex;
            });
    }

    private function expectNoDestinationChanges(): void
    {
        $this->fileSystem->expects($this->never())->method('remove');
        $this->fileSystem->expects($this->never())->method('mirror');
        $this->fileSystem->expects($this->never())->method('copy');
    }

    /**
     * SymfonyStyle wraps long values (absolute paths) to the terminal width,
     * breaking them across lines, so compare both sides without whitespace.
     */
    private static function assertWrappingIndependentContains(string $needle, string $display): void
    {
        self::assertStringContainsString(preg_replace('/\s+/', '', $needle), preg_replace('/\s+/', '', $display));
    }

    private function assertCommandOutput(): void
    {
        $output = $this->commandTester->getDisplay();
        self::assertWrappingIndependentContains('elFinder Installer', $output);
        self::assertWrappingIndependentContains('elFinder assets successfully prepared', $output);
        self::assertWrappingIndependentContains('bin/console assets:install', $output);
    }
}
