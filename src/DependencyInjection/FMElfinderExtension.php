<?php

namespace FM\ElfinderBundle\DependencyInjection;

use FM\ElfinderBundle\Controller\ElFinderController;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader;

final class FMElfinderExtension extends Extension
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $config = $this->processConfiguration(new Configuration(), $configs);

        $loader = new Loader\XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('elfinder.xml');
        $loader->load('form.xml');
        $loader->load('command.xml');
        $container->setParameter('fm_elfinder', $config);

        $repo = $container->getDefinition(ElFinderController::class);
        $repo->replaceArgument(1, $config);
        $container->setAlias('fm_elfinder.configurator', $config['configuration_provider']);
        $container->setAlias('fm_elfinder.loader', $config['loader']);
        $container->getAlias('fm_elfinder.loader')->setPublic(true);
    }

    public function getNamespace(): string
    {
        return 'http://helios-ag.github.io/schema/dic/fm_elfinder';
    }
}
