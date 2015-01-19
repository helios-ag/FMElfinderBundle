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
 * @copyright 2012-2014 Al Ganiev
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
                ->scalarNode('configuration_provider')->defaultValue('fm_elfinder.configurator.default')->end()
                ->arrayNode('instances')
                    ->isRequired()
                    ->requiresAtLeastOneElement()
                    ->prototype('array')
                        ->children()
                            ->scalarNode('locale')->defaultNull()->end()
                            ->scalarNode('editor')->defaultValue('simple')->end()
                            ->scalarNode('editor_template')->defaultNull()->end()
                            ->booleanNode('fullscreen')->defaultTrue()->end()
                            ->booleanNode('include_assets')->defaultTrue()->end()
                            ->scalarNode('tinymce_popup_path')->defaultValue('')->end()
                            ->booleanNode('enableUserIntegration')->defaultFalse()->end()
                            ->booleanNode('relative_path')->defaultTrue()->end()
                            ->arrayNode('connector')
                                ->addDefaultsIfNotSet()
                                ->children()
                                    ->booleanNode('debug')->defaultFalse()->end()
                                    ->append($this->createBindNode())
                                    ->append($this->createPluginsNode())
                                    ->arrayNode('roots')
                                        ->isRequired()
                                        ->requiresAtLeastOneElement()
                                        ->prototype('array')
                                            ->children()
                                                ->scalarNode('driver')
                                                    ->isRequired()
                                                    ->defaultValue('LocalFileSystem')->end()
                                                ->arrayNode('disabled')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end()
                                                ->scalarNode('path')->defaultValue('')->end()
                                                ->scalarNode('url')->end()
                                                ->append($this->createPluginsNode())
                                                ->booleanNode('showhidden')->defaultFalse()->end()
                                                ->scalarNode('alias')->defaultValue('')->end()
                                                ->integerNode('treeDeep')->defaultValue(0)->end()
                                                ->scalarNode('accessControl')->defaultNull()->end()
                                                ->arrayNode('upload_allow')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('image'))
                                                ->end()
                                                ->arrayNode('upload_deny')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('all'))
                                                ->end()
                                                ->scalarNode('upload_max_size')->defaultValue('2M')->end()
                                                ->arrayNode('dropbox_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('consumerKey')->end()
                                                        ->scalarNode('consumerSecret')->end()
                                                        ->scalarNode('accessToken')->end()
                                                        ->scalarNode('accessTokenSecret')->end()
                                                        ->scalarNode('dropboxUid')->end()
                                                        ->scalarNode('metaCachePath')->end()
                                                    ->end()
                                                ->end()
                                                ->arrayNode('ftp_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('host')->end()
                                                        ->scalarNode('user')->end()
                                                        ->scalarNode('password')->end()
                                                        ->scalarNode('path')->end()
                                                    ->end()
                                                ->end()
                                                ->arrayNode('s3_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('accesskey')->end()
                                                        ->scalarNode('secretkey')->end()
                                                        ->scalarNode('bucket')->end()
                                                        ->scalarNode('tmpPath')->end()
                                                    ->end()
                                                ->end()
                                            ->end()
                                        ->end()
                                    ->end()
                                ->end()
                            ->end()
                ->end();

        return $treeBuilder;
    }

    /**
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The plugins node.
     */
    private function createPluginsNode()
    {
        return $this->createNode('plugin')
            ->useAttributeAsKey('name')
                ->prototype('array')
                ->useAttributeAsKey('name')
                ->prototype('variable')->end()
            ->end();
    }

    /**
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The plugins node.
     */
    private function createBindNode()
    {
        return $this->createNode('bind')
            ->useAttributeAsKey('name')
                ->prototype('array')
                ->useAttributeAsKey('name')
                ->prototype('variable')->end()
            ->end();
    }

    /**
     * Creates a node.
     *
     * @param string $name The node name.
     *
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The node.
     */
    private function createNode($name)
    {
        return $this->createTreeBuilder()->root($name);
    }

    /**
     * Creates a tree builder.
     *
     * @return \Symfony\Component\Config\Definition\Builder\TreeBuilder The tree builder.
     */
    private function createTreeBuilder()
    {
        return new TreeBuilder();
    }
}
