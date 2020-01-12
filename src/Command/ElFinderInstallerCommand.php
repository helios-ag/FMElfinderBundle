<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Filesystem\Filesystem;

final class ElFinderInstallerCommand extends Command
{
    private const ELFINDER_CSS_DIR    = 'vendor/studio-42/elfinder/css';

    private const ELFINDER_JS_DIR     = 'vendor/studio-42/elfinder/js';

    private const ELFINDER_SOUNDS_DIR = 'vendor/studio-42/elfinder/sounds';

    private const ELFINDER_IMG_DIR    = 'vendor/studio-42/elfinder/img';

    protected static $defaultName = 'elfinder:install';

    protected $fileSystem;

    protected $parameterBag;

    public function __construct(Filesystem $filesystem, ParameterBagInterface $parameterBag)
    {
        $this->fileSystem   = $filesystem;
        $this->parameterBag = $parameterBag;
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Copies elfinder assets to public directory')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $publicDir = $this->parameterBag->get('kernel.project_dir').'/public/bundles/fmelfinder';

        $this->fileSystem->mirror(self::ELFINDER_CSS_DIR, $publicDir.'/css');
        $this->fileSystem->mirror(self::ELFINDER_IMG_DIR, $publicDir.'/img');
        $this->fileSystem->mirror(self::ELFINDER_JS_DIR, $publicDir.'/js');
        $this->fileSystem->mirror(self::ELFINDER_SOUNDS_DIR, $publicDir.'/sounds');

        $output->writeln('elFinder assets successfully installed');

        return 0;
    }
}
