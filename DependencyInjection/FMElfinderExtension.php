<?php

namespace FM\ElfinderBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\ConfigurableExtension;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\HttpKernel\Kernel;

/**
 * Registration of the extension via DI.
 *
 * @author Al Ganiev <helios.ag@gmail.com>
 * @copyright 2012-2016 Al Ganiev
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
class FMElfinderExtension extends ConfigurableExtension
{
    /**
     * {@inheritdoc}
     */
    public function loadInternal(array $configs, ContainerBuilder $container)
    {
        $config = $this->processConfiguration(new Configuration(), $configs);

        $loader = new Loader\XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('elfinder.xml');
        $loader->load('form.xml');
        $container->setParameter('fm_elfinder', $config);
        $container->setAlias('fm_elfinder.configurator', $config['configuration_provider']);
        $container->setAlias('fm_elfinder.loader', $config['loader']);

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
