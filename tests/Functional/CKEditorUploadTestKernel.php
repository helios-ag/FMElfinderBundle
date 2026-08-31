<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Tests\Functional;

use FM\ElfinderBundle\FMElfinderBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

final class CKEditorUploadTestKernel extends Kernel
{
    use MicroKernelTrait;

    public function registerBundles(): iterable
    {
        yield new FrameworkBundle();

        yield new TwigBundle();

        yield new FMElfinderBundle();
    }

    public function getCacheDir(): string
    {
        return self::testRoot() . '/cache';
    }

    public function getLogDir(): string
    {
        return self::testRoot() . '/log';
    }

    public static function testRoot(): string
    {
        return sys_get_temp_dir() . '/fm_elfinder_ckeditor_upload_test';
    }

    public static function uploadRoot(): string
    {
        return self::testRoot() . '/volume';
    }

    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->extension('framework', [
            'secret'  => 'ckeditor-upload-test',
            'test'    => true,
            'session' => [
                'storage_factory_id' => 'session.storage.factory.mock_file',
            ],
        ]);
        $container->extension('fm_elfinder', [
            'instances' => [
                'ckeditor_upload' => [
                    'editor'    => 'ckeditor',
                    'connector' => [
                        'roots' => [
                            'uploads' => [
                                'driver'       => 'LocalFileSystem',
                                'path'         => self::uploadRoot(),
                                'url'          => '/media',
                                'start_path'   => self::uploadRoot() . '/articles',
                                'upload_allow' => ['image/png'],
                                'upload_deny'  => ['all'],
                                'upload_order' => ['deny', 'allow'],
                            ],
                        ],
                    ],
                ],
            ],
        ]);
    }

    protected function configureRoutes(RoutingConfigurator $routes): void
    {
        $routes->import(dirname(__DIR__, 2) . '/src/Resources/config/routing.yaml');
    }
}
