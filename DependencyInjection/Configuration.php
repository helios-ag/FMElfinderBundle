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
            ->fixXmlConfig('instance')
            ->children()
                ->scalarNode('configuration_provider')->defaultValue('fm_elfinder.configurator.default')->end()
                ->arrayNode('instances')
                    ->isRequired()
                    ->requiresAtLeastOneElement()
                    ->useAttributeAsKey('name')
                    ->prototype('array')
                        ->beforeNormalization()
                            ->ifTrue(function ($v) { return isset($v['enableUserIntegration']); })
                            ->then(function ($v) {
                                $v['enable_user_integration'] = $v['enableUserIntegration'];
                                unset($v['enableUserIntegration']);

                                return $v;
                            })
                        ->end()
                        ->children()
                            ->scalarNode('locale')->defaultNull()->end()
                            ->scalarNode('editor')->defaultValue('simple')->end()
                            ->scalarNode('editor_template')->defaultNull()->end()
                            ->booleanNode('fullscreen')->defaultTrue()->end()
                            ->booleanNode('include_assets')->defaultTrue()->end()
                            ->scalarNode('tinymce_popup_path')->defaultValue('')->end()
                            ->booleanNode('enable_user_integration')->defaultFalse()->end()
                            ->booleanNode('relative_path')->defaultTrue()->end()
                            ->arrayNode('connector')
                                ->addDefaultsIfNotSet()
                                ->fixXmlConfig('root')
                                ->children()
                                    ->booleanNode('debug')->defaultFalse()->end()
                                    ->append($this->createBindNode())
                                    ->append($this->createPluginsNode())
                                    ->arrayNode('roots')
                                        ->isRequired()
                                        ->requiresAtLeastOneElement()
                                        ->useAttributeAsKey('name')
                                        ->prototype('array')
                                            ->children()
                                                ->scalarNode('driver')
                                                    ->isRequired()
                                                    ->defaultValue('LocalFileSystem')
                                                ->end() // driver
                                                ->arrayNode('disabled')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end() // disabled
                                                ->scalarNode('path')->defaultValue('')->end()
                                                ->scalarNode('url')->end()
                                                ->append($this->createPluginsNode())
                                                ->booleanNode('showhidden')->defaultFalse()->end()
                                                ->scalarNode('alias')->defaultValue('')->end()
                                                ->integerNode('treeDeep')->defaultValue(0)->end()
                                                ->scalarNode('accessControl')->defaultNull()->end()
                                                ->arrayNode('upload_allow')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('image'))
                                                ->end() // upload_allow
                                                ->arrayNode('upload_deny')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('all'))
                                                ->end() // upload_deny
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
                                                ->end() // dropbox_settings
                                                ->arrayNode('ftp_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('host')->end()
                                                        ->scalarNode('user')->end()
                                                        ->scalarNode('password')->end()
                                                        ->scalarNode('path')->end()
                                                    ->end()
                                                ->end() // ftp_settings
                                                ->arrayNode('s3_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('accesskey')->end()
                                                        ->scalarNode('secretkey')->end()
                                                        ->scalarNode('bucket')->end()
                                                        ->scalarNode('tmpPath')->end()
                                                    ->end()
                                                ->end() // s3_settings
                                            ->end()
                                        ->end()
                                    ->end() // roots
                                ->end()
                            ->end() // connector
                        ->end()
                    ->end()
                ->end() // instances
            ->end();

        return $treeBuilder;
    }

    /**
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The plugins node.
     */
    private function createPluginsNode()
    {
        return $this
            ->createNode('plugin')
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
        return $this
            ->createNode('bind')
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
