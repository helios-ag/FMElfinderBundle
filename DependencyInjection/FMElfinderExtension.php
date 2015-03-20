<?php

namespace FM\ElfinderBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * Registration of the extension via DI.
 *
 * @author Al Ganiev <helios.ag@gmail.com>
 * @copyright 2012 Al Ganiev
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
class FMElfinderExtension extends Extension
{
    /**
     * {@inheritDoc}
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
//        $container->setAlias('fm_elfinder.assets_path', $config['assets_path']);
    }

    /**
     * @return string
     */
    public function getNamespace()
    {
        return 'http://helios-ag.github.io/schema/dic/fm_elfinder';
    }
}
