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
                ->scalarNode('loader')->defaultValue('fm_elfinder.loader.default')->end()
                ->arrayNode('instances')
                    ->isRequired()
                    ->requiresAtLeastOneElement()
                    ->prototype('array')
                        ->children()
                            ->scalarNode('locale')->defaultNull()->end()
                            ->booleanNode('cors_support')->defaultFalse()->end()
                            ->scalarNode('editor')->defaultValue('simple')->end()
                            ->scalarNode('editor_template')->defaultNull()->end()
                            ->booleanNode('fullscreen')->defaultTrue()->end()
                            ->booleanNode('include_assets')->defaultTrue()->end()
                            ->scalarNode('tinymce_popup_path')->defaultValue('')->end()
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
                                                ->arrayNode('flysystem')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('type')->defaultValue('')->end()
                                                        ->append($this->createFlysystemNode())
                                                    ->end()
                                                ->end()
                                                ->scalarNode('glide_url')->defaultValue('')->end()
                                                ->scalarNode('glide_key')->defaultValue('')->end()
                                                ->arrayNode('disabled_commands')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end()
                                                ->scalarNode('path')->defaultValue('')->end()
                                                ->scalarNode('url')->end()
                                                ->append($this->createPluginsNode())
                                                ->booleanNode('show_hidden')->defaultFalse()->end()
                                                ->scalarNode('alias')->defaultValue('')->end()
                                                ->integerNode('tree_deep')->defaultValue(0)->end()
                                                ->arrayNode('upload_allow')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('image'))
                                                ->end()
                                                ->arrayNode('upload_deny')
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('all'))
                                                ->end()
                                                ->scalarNode('upload_max_size')->defaultValue('2M')->end()
                                                ->arrayNode('options')
                                                    ->normalizeKeys(false)
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end()
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
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The Flysystem node.
     */
    private function createFlysystemNode()
    {
        return $this->createNode('options')
            ->children()
                ->arrayNode('local')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('path')->defaultvalue('')->end()
                    ->end()
                ->end()
                ->arrayNode('ftp')
                    ->canBeEnabled()
                        ->children()
                            ->booleanNode('sftp')->defaultFalse()->end()
                            ->scalarNode('host')->defaultValue('')->end()
                            ->scalarNode('username')->defaultValue('')->end()
                            ->scalarNode('password')->defaultValue('')->end()
                            ->integerNode('port')->defaultValue('')->end()
                            ->booleanNode('passive')->defaultTrue()->end()
                            ->booleanNode('ssl')->defaultTrue()->end()
                            ->integerNode('timeout')->defaultValue(30)->end()
                    ->end()
                ->end()
                ->arrayNode('aws_s3_v2')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('key')->defaultvalue('')->end()
                            ->scalarNode('secret')->defaultvalue('')->end()
                            ->scalarNode('region')->defaultvalue('')->end()
                            ->scalarNode('bucket_name')->defaultvalue('')->end()
                            ->scalarNode('optional_prefix')->defaultvalue('')->end()
                    ->end()
                ->end()
                ->arrayNode('aws_s3_v3')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('key')->defaultvalue('')->end()
                            ->scalarNode('secret')->defaultvalue('')->end()
                            ->scalarNode('region')->defaultvalue('')->end()
                            ->scalarNode('version')->defaultvalue('')->end()
                            ->scalarNode('bucket_name')->defaultvalue('')->end()
                            ->scalarNode('optional_prefix')->defaultvalue('')->end()
                    ->end()
                ->end()
                ->arrayNode('copy_com')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('consumer_key')->defaultvalue('')->end()
                            ->scalarNode('consumer_secret')->defaultvalue('')->end()
                            ->scalarNode('access_token')->defaultvalue('')->end()
                            ->scalarNode('token_secret')->defaultvalue('')->end()
                            ->scalarNode('optional_prefix')->defaultvalue('')->end()
                        ->end()
                ->end()
                ->arrayNode('gridfs')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('db_name')->defaultvalue('')->end()
                        ->end()
                ->end()
                ->arrayNode('zip')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('path')->defaultvalue('')->end()
                        ->end()
                ->end()
                ->arrayNode('dropbox')
                    ->canBeEnabled()
                    ->children()
                        ->scalarNode('app')->defaultvalue('')->end()
                        ->scalarNode('token')->defaultvalue('')->end()
                ->end()
            ->end()->end();
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
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The bind node.
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
