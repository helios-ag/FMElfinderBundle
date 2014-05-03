<?php

namespace FM\ElfinderBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * This class contains the configuration information for the bundle
 *
 * This information is solely responsible for how the different configuration
 * sections are normalized, and merged.
 * @author Al Ganiev <helios.ag@gmail.com>
 * @copyright 2012-2013 Al Ganiev
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
                ->scalarNode('locale')->defaultNull()->end()
                ->scalarNode('editor')->defaultValue('simple')->end()
                ->booleanNode('compression')->defaultFalse()->end()
                ->booleanNode('fullscreen')->defaultTrue()->end()
                ->booleanNode('include_assets')->defaultTrue()->end()
                ->scalarNode('tinymce_popup_path')->defaultValue('')->end()
            ->end()
        ;
        $this->addConnectorSection($rootNode);
        return $treeBuilder;
    }

    /**
     * @param ArrayNodeDefinition $rootNode
     */
    private function addConnectorSection(ArrayNodeDefinition $rootNode)
    {
        $rootNode
            ->children()
                ->arrayNode('connector')
                    ->addDefaultsIfNotSet()
                    ->children()
                        ->booleanNode('debug')->defaultValue(false)->end()
                        ->arrayNode('roots')
                            ->isRequired()
                            ->requiresAtLeastOneElement()
                            ->prototype('array')
                                ->children()
                                    ->booleanNode('showhidden')->defaultFalse()->end()
                                    ->scalarNode('driver')->defaultValue('LocalFileSystem')->end()
                                    ->scalarNode('path')->defaultValue('uploads')->end()
                                    ->scalarNode('url')->end()
                                    ->arrayNode('upload_allow')
                                        ->prototype('scalar')->end()
                                        ->defaultValue(array('image'))
                                    ->end()
                                    ->arrayNode('upload_deny')
                                        ->prototype('scalar')->end()
                                        ->defaultValue(array('all'))
                                    ->end()
                                    ->scalarNode('upload_max_size')->defaultValue('2M')->end()
                                ->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
            ->end()
        ;
    }
}
