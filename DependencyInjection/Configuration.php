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
 * @copyright 2012-2015 Al Ganiev
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
                ->scalarNode('assets_path')->defaultValue('/assets')->end()
                ->scalarNode('loader')->defaultValue('fm_elfinder.loader.default')->end()
                ->arrayNode('instances')
                    ->isRequired()
                    ->requiresAtLeastOneElement()
                    ->useAttributeAsKey('name')
                    ->prototype('array')
                        ->children()
                            ->scalarNode('locale')->defaultNull()->end()
                            ->booleanNode('cors_support')->defaultFalse()->end()
                            ->scalarNode('editor')->defaultValue('simple')->end()
                            ->scalarNode('editor_template')->defaultNull()->end()
                            ->booleanNode('fullscreen')->defaultTrue()->end()
                            ->scalarNode('theme')->defaultValue('smoothness')->end() // jQuery UI theme name
                            ->booleanNode('include_assets')->defaultTrue()->end()
                            ->scalarNode('tinymce_popup_path')->defaultValue('')->end()
                            ->booleanNode('relative_path')->defaultTrue()->end()
                            ->scalarNode('path_prefix')->defaultValue('/')->end()
                            ->arrayNode('connector')
                                ->addDefaultsIfNotSet()
                                ->fixXmlConfig('root')
                                ->children()
                                    ->booleanNode('debug')->defaultFalse()->end()
                                    ->append($this->createBindsNode())
                                    ->append($this->createPluginsNode())
                                    ->arrayNode('roots')
                                        ->useAttributeAsKey('name')
                                        ->isRequired()
                                        ->requiresAtLeastOneElement()
                                        ->prototype('array')
                                            ->children()
                                                ->scalarNode('driver')
                                                    ->isRequired()
                                                    ->defaultValue('LocalFileSystem')
                                                ->end() // driver
                                                ->scalarNode('path')->defaultValue('')->end()
                                                ->scalarNode('start_path')->defaultValue('')->end()
                                                ->scalarNode('url')->defaultValue('')->end()
                                                ->scalarNode('alias')->defaultValue('')->end()
                                                ->scalarNode('mime_detect')->defaultValue('auto')->end()
                                                ->scalarNode('mimefile')->defaultValue('')->end()
                                                ->scalarNode('img_lib')->defaultValue('auto')->end()
                                                ->scalarNode('tmb_path')->defaultValue('.tmb')->end()
                                                ->scalarNode('tmb_path_mode')->defaultValue(0777)->end()
                                                ->scalarNode('tmb_url')->defaultValue('')->end()
                                                ->integerNode('tmb_size')->defaultValue(48)->end()
                                                ->booleanNode('tmb_crop')->defaultTrue()->end()
                                                ->scalarNode('tmb_bg_color')->defaultValue('#ffffff')->end()
                                                ->append($this->createAdditionalThumbnailsNode())
                                                ->booleanNode('copy_overwrite')->defaultTrue()->end()
                                                ->booleanNode('copy_join')->defaultTrue()->end()
                                                ->booleanNode('copy_from')->defaultTrue()->end()
                                                ->booleanNode('copy_to')->defaultTrue()->end()
                                                ->booleanNode('upload_overwrite')->defaultTrue()->end()
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
                                                ->arrayNode('upload_order')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array('deny', 'allow'))
                                                ->end() // upload_order
                                                ->scalarNode('upload_max_size')->defaultValue(0)->end()
                                                ->arrayNode('defaults')
                                                    ->useAttributeAsKey('defaults')
                                                    ->normalizeKeys(false)
                                                    ->prototype('boolean')->end()
                                                    ->defaultValue(array('read' => true, 'write' => true))
                                                ->end() // defaults
                                                ->arrayNode('attributes')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end() // attributes
                                                ->scalarNode('accepted_name')->defaultValue('/^\w[\w\s\.\%\-]*$/u')->end()
                                                ->booleanNode('show_hidden')->defaultFalse()->end()
                                                ->arrayNode('disabled_commands')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end() // disabled_commands
                                                ->integerNode('tree_deep')->defaultValue(0)->end()
                                                ->booleanNode('check_subfolders')->defaultTrue()->end()
                                                ->scalarNode('separator')->defaultValue(DIRECTORY_SEPARATOR)->end()
                                                ->scalarNode('date_format')->defaultValue('j M Y H:i')->end()
                                                ->scalarNode('time_format')->defaultValue('H:i')->end()
                                                ->arrayNode('archive_mimes')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end() // archive_mimes
                                                ->arrayNode('archivers')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) { return is_string($v); })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(array())
                                                ->end() // archive_mimes
                                                ->arrayNode('flysystem')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('type')->defaultValue('')->end()
                                                        ->append($this->createFlysystemNode())
                                                    ->end()
                                                ->end()
                                                ->scalarNode('glide_url')->defaultValue('')->end()
                                                ->scalarNode('glide_key')->defaultValue('')->end()
                                                ->append($this->createPluginsNode())
                                                ->arrayNode('dropbox_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('consumer_key')->end()
                                                        ->scalarNode('consumer_secret')->end()
                                                        ->scalarNode('access_token')->end()
                                                        ->scalarNode('access_token_secret')->end()
                                                        ->scalarNode('dropbox_uid')->end()
                                                        ->scalarNode('meta_cache_path')->end()
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
                                                        ->scalarNode('access_key')->end()
                                                        ->scalarNode('secret_key')->end()
                                                        ->scalarNode('bucket')->end()
                                                        ->scalarNode('tmp_path')->end()
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
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The additional thumbnails node.
     */
    private function createAdditionalThumbnailsNode()
    {
        return $this->createNode('thumbnails')
            ->useAttributeAsKey('name')
            ->prototype('array')
                ->children()
                    ->scalarNode('tmb_path')->defaultValue('.tmb')->end()
                    ->scalarNode('tmb_path_mode')->defaultValue(0777)->end()
                    ->scalarNode('tmb_url')->defaultValue('')->end()
                    ->integerNode('tmb_size')->defaultValue(48)->end()
                    ->booleanNode('tmb_crop')->defaultTrue()->end()
                    ->scalarNode('tmb_bg_color')->defaultValue('#ffffff')->end()
                ->end()
            ->end();
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
        return $this->createNode('plugins')
            ->useAttributeAsKey('name')
                ->prototype('array')
                ->useAttributeAsKey('name')
                ->prototype('variable')->end()
            ->end();
    }

    /**
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition The bind node.
     */
    private function createBindsNode()
    {
        return $this->createNode('binds')
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

