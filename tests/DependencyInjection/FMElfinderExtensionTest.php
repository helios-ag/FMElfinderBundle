<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection;

use FM\ElfinderBundle\DependencyInjection\FMElfinderExtension;
use Matthias\SymfonyDependencyInjectionTest\PhpUnit\AbstractExtensionTestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Yaml\Parser;

class FMElfinderExtensionTest extends AbstractExtensionTestCase
{
    public function testServices()
    {
        $this->load();
        $this->assertContainerBuilderHasAlias('fm_elfinder.configurator');
        $this->assertContainerBuilderHasService('fm_elfinder.loader');
        $this->assertContainerBuilderHasService('fm_elfinder.configurator.default');
        $this->assertContainerBuilderHasService('twig.extension.fm_elfinder_init');
        $this->assertContainerBuilderHasServiceDefinitionWithArgument(
            'twig.extension.fm_elfinder_init',
            1,
            'assets'
        );
        $this->assertContainerBuilderHasServiceDefinitionWithArgument(
            'fm_elfinder.form.type',
            0,
            '%fm_elfinder%'
        );
        $this->assertArrayHasKey('instances', $this->container->getParameter('fm_elfinder'));
    }

    public function testTwigExtensionReceivesConfiguredAssetsPath()
    {
        $this->load(['assets_path' => '/custom-assets']);
        $this->assertContainerBuilderHasServiceDefinitionWithArgument(
            'twig.extension.fm_elfinder_init',
            1,
            '/custom-assets'
        );
    }

    public function testMinimumConfiguration()
    {
        $this->container = new ContainerBuilder();
        $loader          = new FMElfinderExtension();
        $loader->load([$this->getMinimalConfiguration()], $this->container);
        $this->assertTrue($this->container instanceof ContainerBuilder);
    }

    protected function getContainerExtensions(): array
    {
        return [
            new FMElfinderExtension(),
        ];
    }

    protected function getMinimalConfiguration(): array
    {
        $yaml = <<<'EOF'
            instances:
                default:
                  locale: '%locale%'
                  editor: simple # other choices are tinymce or simple
                  fullscreen: true
                  connector:
                      debug: true # defaults to false
                      roots:       # at least one root must be defined
                          uploads:
                              driver: LocalFileSystem
                              path: uploads
                              upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                              upload_deny: ['all']
                              upload_max_size: 2M
            EOF;
        $parser = new Parser();

        return $parser->parse($yaml);
    }
}
