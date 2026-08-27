<?php

namespace FM\ElfinderBundle\Command;

use ReflectionClass;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Filesystem\Filesystem;

#[AsCommand(
    name: 'elfinder:install',
    description: 'Prepares elFinder assets for Symfony assets:install',
)]
final class ElFinderInstallerCommand extends Command
{
    private const ASSET_DIRS = ['css', 'img', 'js', 'sounds'];

    public function __construct(protected Filesystem $fileSystem)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('elfinder-vendor-dir', null, InputOption::VALUE_REQUIRED, 'Vendor containing elfinder assets', 'studio-42/elfinder')
            ->setHelp(<<<'EOF'
                Prepares elFinder assets inside FMElfinderBundle.
                Publish them afterwards with:
                  <info>bin/console assets:install</info>
                EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io            = new SymfonyStyle($input, $output);
        $vendorPackage = $input->getOption('elfinder-vendor-dir');
        $io->title('elFinder Installer');

        $reflection    = new ReflectionClass(\Composer\Autoload\ClassLoader::class);
        $vendorRootDir = dirname($reflection->getFileName(), 3) . '/vendor';
        $resourcesDir  = dirname(__DIR__) . '/Resources';
        $publicDir     = $resourcesDir . '/public';
        $adapterSource = $resourcesDir . '/assets/tinymceElfinder.js';

        // validate $vendorDir to match namespace/vendor name
        if (preg_match('/^([a-z0-9-]+)\/([a-z0-9-]+)$/i', $vendorPackage) === 0) {
            $io->error(sprintf('Invalid vendor directory name %s', $vendorPackage));

            return Command::FAILURE;
        }

        $sources = [];
        foreach (self::ASSET_DIRS as $directory) {
            $sources[$directory] = sprintf('%s/%s/%s', $vendorRootDir, $vendorPackage, $directory);
        }

        foreach ([...array_values($sources), $adapterSource] as $source) {
            if ($this->fileSystem->exists($source) === false) {
                $io->error(sprintf('Required asset source "%s" was not found.', $source));

                return Command::FAILURE;
            }
        }

        $io->note(sprintf('Preparing elFinder assets in %s', $publicDir));

        foreach ($sources as $directory => $source) {
            $target = $publicDir . '/' . $directory;
            $this->fileSystem->remove($target);
            $this->fileSystem->mirror($source, $target, null, ['override' => true]);
        }

        $this->fileSystem->copy($adapterSource, $publicDir . '/js/tinymceElfinder.js', true);

        $io->success('elFinder assets successfully prepared.');
        $io->writeln('Next, run "bin/console assets:install" to publish the assets.');

        return Command::SUCCESS;
    }
}
