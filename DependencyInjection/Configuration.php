<?php

namespace FM\ElfinderBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * This class contains the configuration information for the bundle
 *
 * This information is solely responsible for how the different configuration
 * sections are normalized, and merged.
 * @author Al Ganiev <helios.ag@gmail.com>
 * @copyright 2012 Al Ganiev
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritDoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('fm_elfinder');

        $rootNode
            ->children()
                ->scalarNode('driver')->defaultValue('LocalFileSystem')->end()
                ->scalarNode('path')->defaultValue('uploads')->end()
                ->scalarNode('locale')->defaultValue('en_US.UTF8')->end()
                ->scalarNode('editor')->defaultValue('ckeditor')->end()
                ->scalarNode('showhidden')->defaultValue('false')->end()
            ->end()
        ;

        return $treeBuilder;
    }
}
