<?php

namespace FM\ElfinderBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\HttpKernel\Kernel;

/**
 * Class FMElfinderExtension.
 */
class FMElfinderExtension extends Extension
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
        $container->setParameter('fm_elfinder', $config);
        $container->setAlias('fm_elfinder.configurator', $config['configuration_provider']);
        $container->setAlias('fm_elfinder.loader', $config['loader']);
        $container->getAlias('fm_elfinder.loader')->setPublic(true);

        if (Kernel::VERSION_ID < 30000) {
            $container->getDefinition('fm_elfinder.form.type')
                ->clearTag('form.type')
                ->addTag('form.type', array('alias' => 'elfinder'));
        }
    }

    /**
     * @return string
     */
    public function getNamespace()
    {
        return 'http://helios-ag.github.io/schema/dic/fm_elfinder';
    }
}
