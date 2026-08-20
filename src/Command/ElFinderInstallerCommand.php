<?php

namespace FM\ElfinderBundle\Command;

use ReflectionClass;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Filesystem\Filesystem;

#[AsCommand(
    name: 'elfinder:install',
    description: 'Copies elfinder assets to public directory',
)]
final class ElFinderInstallerCommand extends Command
{
    private const ELFINDER_CSS_DIR = 'css';

    private const ELFINDER_JS_DIR = 'js';

    private const ELFINDER_SOUNDS_DIR = 'sounds';

    private const ELFINDER_IMG_DIR = 'img';

    public function __construct(
        protected Filesystem $fileSystem,
        protected ParameterBagInterface $parameterBag
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('docroot', null, InputOption::VALUE_OPTIONAL, 'Website document root.', 'public')
            ->addOption('elfinder-vendor-dir', null, InputOption::VALUE_REQUIRED, 'Vendor containing elfinder assets', 'studio-42/elfinder')
            ->setHelp(<<<'EOF'
                Default docroot:
                  <info>public</info>

                You can pass docroot:
                  <info>Where to install elfinder</info>
                  <info>php %command.full_name% --docroot=public_html</info>
                EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io        = new SymfonyStyle($input, $output);
        $dr        = $input->getOption('docroot');
        $vendorDir = $input->getOption('elfinder-vendor-dir');
        $io->title('elFinder Installer');
        $io->comment(sprintf('Trying to install elfinder to %s directory', $dr));

        $rootDir = $this->parameterBag->get('kernel.project_dir');

        $publicDir = sprintf('%s/%s/bundles/fmelfinder', $rootDir, $dr);

        $reflection    = new ReflectionClass(\Composer\Autoload\ClassLoader::class);
        $vendorRootDir = dirname($reflection->getFileName(), 3) . '/vendor';

        $io->note(sprintf('Starting to install elfinder to %s folder', $publicDir));

        // validate $vendorDir to match namespace/vendor name
        if (!preg_match('/^([a-z0-9-]+)\/([a-z0-9-]+)$/i', $vendorDir)) {
            $io->error(sprintf('Invalid vendor directory name %s', $vendorDir));

            return Command::FAILURE;
        }

        $this->fileSystem->mirror($vendorRootDir . '/' . $vendorDir . '/' . self::ELFINDER_CSS_DIR, $publicDir . '/css');
        $this->fileSystem->mirror($vendorRootDir . '/' . $vendorDir . '/' . self::ELFINDER_IMG_DIR, $publicDir . '/img');
        $this->fileSystem->mirror($vendorRootDir . '/' . $vendorDir . '/' . self::ELFINDER_JS_DIR, $publicDir . '/js');
        $this->fileSystem->mirror($vendorRootDir . '/' . $vendorDir . '/' . self::ELFINDER_SOUNDS_DIR, $publicDir . '/sounds');
        $this->fileSystem->copy(
            dirname(__DIR__) . '/Resources/public/tinymceElfinder.js',
            $publicDir . '/js/tinymceElfinder.js',
            true
        );

        $io->success('elFinder assets successfully installed');

        return Command::SUCCESS;
    }
}
