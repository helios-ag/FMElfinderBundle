<?php

namespace FM\ElfinderBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\NodeDefinition;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * Class Configuration.
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder('fm_elfinder');
        $rootNode    = $treeBuilder->getRootNode();

        $rootNode
            ->fixXmlConfig('instance')
            ->children()
                ->scalarNode('configuration_provider')->defaultValue('fm_elfinder.configurator.default')->end()
                ->scalarNode('assets_path')->defaultValue('assets')->end()
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
                            ->booleanNode('multi_home_folder')->defaultFalse()->end()
                            ->scalarNode('folder_separator')->defaultValue('')->end()
                            ->scalarNode('theme')->defaultValue('smoothness')->end() // jQuery UI theme name
                            ->scalarNode('tinymce_popup_path')->defaultValue('')->end()
                            ->booleanNode('relative_path')->defaultTrue()->end()
                            ->scalarNode('path_prefix')->defaultValue('/')->end()
                            ->arrayNode('where_is_multi')
                                ->beforeNormalization()
                                    ->ifTrue(function ($v) {
                                        return is_string($v);
                                    })
                                    ->then(function ($v) {
                                        return array_map('trim', explode(',', $v));
                                    })
                                ->end()
                                ->prototype('scalar')->end()
                                ->defaultValue([])
                            ->end()
                            ->arrayNode('visible_mime_types')
                                ->beforeNormalization()
                                    ->ifTrue(function ($v) {
                                        return is_string($v);
                                    })
                                    ->then(function ($v) {
                                        return array_map('trim', explode(',', $v));
                                    })
                                ->end()
                                ->prototype('scalar')->end()
                                ->defaultValue([])
                            ->end()
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
                                                ->integerNode('volume_id')->defaultValue(0)->min(0)->end()
                                                ->scalarNode('path')->defaultValue('')->end()
                                                ->booleanNode('autoload')->defaultFalse()->end()
                                                ->scalarNode('phash')->defaultValue('')->end()
                                                ->scalarNode('trash_hash')->defaultValue('')->end()
                                                ->scalarNode('locale')->defaultValue('')->end()
                                                ->booleanNode('i18n_folder_name')->defaultFalse()->end()
                                                ->scalarNode('mime_detect')->defaultValue('auto')->end()
                                                ->scalarNode('mimefile')->defaultValue('')->end()
                                                ->scalarNode('security_voter')->defaultValue('')->end()
                                                ->scalarNode('start_path')->defaultValue('')->end()
                                                ->scalarNode('encoding')->defaultValue('UTF-8')->end()
                                                ->scalarNode('url')->defaultValue('')->end()
                                                ->scalarNode('alias')->defaultValue('')->end()
                                                ->scalarNode('img_lib')->defaultValue('auto')->end()
                                                ->scalarNode('tmb_path')->defaultValue('.tmb')->end()
                                                ->scalarNode('tmb_path_mode')->defaultValue(0777)->end()
                                                ->scalarNode('tmb_url')->defaultValue('')->end()
                                                ->integerNode('tmb_size')->defaultValue(48)->end()
                                                ->booleanNode('tmb_crop')->defaultTrue()->end()
                                                ->scalarNode('tmb_bg_color')->defaultValue('#ffffff')->end()
                                                ->scalarNode('quarantine')->defaultNull()->end()
                                                ->booleanNode('copy_overwrite')->defaultTrue()->end()
                                                ->booleanNode('copy_join')->defaultTrue()->end()
                                                ->booleanNode('copy_from')->defaultTrue()->end()
                                                ->booleanNode('copy_to')->defaultTrue()->end()
                                                ->booleanNode('upload_overwrite')->defaultTrue()->end()
                                                ->scalarNode('fileMode')->defaultValue(0644)->end()
                                                ->arrayNode('upload_allow')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) {
                                                            return is_string($v);
                                                        })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(['image'])
                                                ->end() // upload_allow
                                                ->arrayNode('upload_deny')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) {
                                                            return is_string($v);
                                                        })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(['all'])
                                                ->end() // upload_deny
                                                ->arrayNode('upload_order')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) {
                                                            return is_string($v);
                                                        })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue(['deny', 'allow'])
                                                ->end() // upload_order
                                                ->scalarNode('upload_max_size')->defaultValue(0)->end()
                                                ->integerNode('upload_max_conn')->defaultValue(3)->end()
                                                ->arrayNode('defaults')
                                                    ->useAttributeAsKey('defaults')
                                                    ->normalizeKeys(false)
                                                    ->prototype('boolean')->end()
                                                    ->defaultValue(['read' => true, 'write' => true])
                                                ->end() // defaults
                                                ->arrayNode('attributes')
                                                    ->prototype('array')
                                                        ->children()
                                                            ->scalarNode('pattern')->end()
                                                            ->scalarNode('read')->defaultValue(true)->end()
                                                            ->scalarNode('write')->defaultValue(true)->end()
                                                            ->scalarNode('locked')->defaultValue(false)->end()
                                                            ->scalarNode('hidden')->defaultValue(false)->end()
                                                        ->end()
                                                    ->end()
                                                    ->defaultValue([])
                                                ->end() // attributes
                                                ->scalarNode('accepted_name')->defaultValue('/^\w[\w\s\.\%\-]*$/u')->end()
                                                ->booleanNode('show_hidden')->defaultFalse()->end()
                                                ->arrayNode('disabled_commands')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) {
                                                            return is_string($v);
                                                        })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue([])
                                                ->end() // disabled_commands
                                                ->integerNode('tree_deep')->defaultValue(0)->end()
                                                ->integerNode('check_subfolders')->defaultValue(1)->end()
                                                ->scalarNode('separator')->defaultValue(DIRECTORY_SEPARATOR)->end()
                                                ->scalarNode('date_format')->defaultValue('j M Y H:i')->end()
                                                ->scalarNode('time_format')->defaultValue('H:i')->end()
                                                ->arrayNode('archive_mimes')
                                                    ->beforeNormalization()
                                                        ->ifTrue(function ($v) {
                                                            return is_string($v);
                                                        })
                                                        ->then(function ($v) {
                                                            return array_map('trim', explode(',', $v));
                                                        })
                                                    ->end()
                                                    ->prototype('scalar')->end()
                                                    ->defaultValue([])
                                                ->end() // archive_mimes
                                                ->arrayNode('archivers')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->arrayNode('create')
                                                            ->prototype('array')
                                                                ->children()
                                                                    ->scalarNode('cmd')->end()
                                                                    ->scalarNode('argc')->end()
                                                                    ->scalarNode('ext')->end()
                                                                ->end()
                                                            ->end()
                                                        ->end()
                                                        ->arrayNode('extract')
                                                            ->prototype('array')
                                                                ->children()
                                                                    ->scalarNode('cmd')->end()
                                                                    ->scalarNode('argc')->end()
                                                                    ->scalarNode('ext')->end()
                                                                ->end()
                                                            ->end()
                                                        ->end()
                                                    ->end()
                                                ->end() // archivers
                                                ->arrayNode('flysystem')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('filesystem')->defaultValue('')->end()
                                                        ->scalarNode('type')->defaultValue('')->end()
                                                        ->scalarNode('adapter_service')->defaultValue('')->end()
                                                        ->append($this->createFlysystemNode())
                                                    ->end()
                                                ->end()
                                                ->scalarNode('glide_url')->defaultValue('')->end()
                                                ->scalarNode('glide_key')->defaultValue('')->end()
                                                ->append($this->createPluginsNode())
                                                ->append($this->createDriverOptionsNode())
                                                ->arrayNode('dropbox2_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('app_key')->end()
                                                        ->scalarNode('app_secret')->end()
                                                        ->scalarNode('access_token')->end()
                                                        ->scalarNode('aliasFormat')->defaultValue('%s@Dropbox')->end()
                                                        ->scalarNode('path')->defaultValue('/')->end()
                                                        ->scalarNode('separator')->defaultValue('/')->end()
                                                        ->scalarNode('acceptedName')->defaultValue('%s@Dropbox')->end()
                                                        ->scalarNode('rootCssClass')->defaultValue('elfinder-navbar-root-dropbox')->end()
                                                        ->arrayNode('publishPermission')
                                                            ->children()
                                                                ->scalarNode('requested_visibility')->defaultValue('public')->end()
                                                            ->end()
                                                        ->end()
                                                        ->scalarNode('getThumbSize')->defaultValue('medium')->end()
                                                    ->end()
                                                ->end()
                                                ->arrayNode('box_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('client_id')->end()
                                                        ->scalarNode('client_secret')->end()
                                                        ->scalarNode('accessToken')->end()
                                                        ->scalarNode('root')->defaultValue('Box.com')->end()
                                                        ->scalarNode('path')->defaultValue('/')->end()
                                                        ->scalarNode('separator')->defaultValue('/')->end()
                                                        ->scalarNode('tmbPath')->defaultValue('')->end()
                                                        ->scalarNode('tmbURL')->defaultValue('')->end()
                                                        ->scalarNode('tmpPath')->defaultValue('')->end()
                                                        ->scalarNode('acceptedName')->defaultValue('#^[^/\\?*:|"<>]*[^./\\?*:|"<>]$#')->end()
                                                        ->scalarNode('rootCssClass')->defaultValue('elfinder-navbar-root-box')->end()
                                                    ->end()
                                                ->end()
                                                ->arrayNode('onedrive_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('client_id')->end()
                                                        ->scalarNode('client_secret')->end()
                                                        ->scalarNode('accessToken')->end()
                                                        ->scalarNode('root')->defaultValue('OneDrive.com')->end()
                                                        ->scalarNode('OneDriveApiClient')->defaultValue('')->end()
                                                        ->scalarNode('path')->defaultValue('/')->end()
                                                        ->scalarNode('separator')->defaultValue('/')->end()
                                                        ->scalarNode('tmbPath')->defaultValue('')->end()
                                                        ->scalarNode('tmbURL')->defaultValue('')->end()
                                                        ->scalarNode('tmpPath')->defaultValue('')->end()
                                                        ->scalarNode('acceptedName')->defaultValue('#^[^/\\?*:|"<>]*[^./\\?*:|"<>]$#')->end()
                                                        ->scalarNode('rootCssClass')->defaultValue('elfinder-navbar-root-onedrive')->end()
                                                        ->booleanNode('useApiThumbnail')->defaultTrue()->end()
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
                                                ->arrayNode('mysql_settings')
                                                    ->canBeEnabled()
                                                    ->children()
                                                        ->scalarNode('host')->end()
                                                        ->scalarNode('user')->end()
                                                        ->scalarNode('pass')->end()
                                                        ->scalarNode('db')->end()
                                                        ->scalarNode('port')->defaultNull()->end()
                                                        ->scalarNode('socket')->defaultNull()->end()
                                                        ->scalarNode('files_table')->defaultValue('elfinder_file')->end()
                                                        ->scalarNode('tmbPath')->defaultValue('')->end()
                                                        ->scalarNode('tmpPath')->defaultValue('')->end()
                                                        ->scalarNode('rootCssClass')->defaultValue('elfinder-navbar-root-sql')->end()
                                                        ->scalarNode('noSessionCache')->defaultValue('hasdirs')->end()
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
     * @return NodeDefinition the Flysystem node
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
                            ->scalarNode('host')->defaultValue('')->end()
                            ->scalarNode('username')->defaultValue('')->end()
                            ->scalarNode('password')->defaultValue('')->end()
                            ->integerNode('port')->defaultValue(21)->end()
                            ->booleanNode('passive')->defaultTrue()->end()
                            ->booleanNode('ssl')->defaultTrue()->end()
                            ->integerNode('timeout')->defaultValue(30)->end()
                            ->scalarNode('root')->defaultValue('/')->end()
                            ->integerNode('directoryPerm')->defaultValue(0744)->end()
                    ->end()
                ->end()
                ->arrayNode('sftp')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('host')->defaultValue('')->end()
                            ->scalarNode('username')->defaultValue('')->end()
                            ->scalarNode('password')->defaultValue('')->end()
                            ->integerNode('port')->defaultValue(21)->end()
                            ->scalarNode('privateKey')->defaultValue('')->end()
                            ->integerNode('timeout')->defaultValue(10)->end()
                            ->scalarNode('root')->defaultValue('/')->end()
                    ->end()
                ->end()
                ->arrayNode('azure')
                    ->canBeEnabled()
                        ->children()
                            ->scalarNode('account_name')->defaultvalue('')->end()
                            ->scalarNode('account_key')->defaultvalue('')->end()
                            ->scalarNode('container_name')->defaultvalue('')->end()
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
                            ->scalarNode('base_url')->defaultvalue('')->end()
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
                            ->scalarNode('endpoint')->defaultNull()->end()
                            ->booleanNode('use_path_style_endpoint')->defaultFalse()->end()
                            ->arrayNode('options')
                                ->canBeEnabled()
                                    ->children()
                                        ->scalarNode('ACL')->defaultvalue('')->end()
                                ->end()
                            ->end()
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
                ->end()
                ->arrayNode('rackspace')
                    ->canBeEnabled()
                        ->children()
                          ->scalarNode('username')->defaultValue('')->end()
                          ->scalarNode('apikey')->defaultValue('')->end()
                          ->scalarNode('endpoint')->defaultValue('')->end()
                          ->scalarNode('container')->defaultValue('')->end()
                          ->scalarNode('region')->defaultValue('')->end()
                       ->end()
                ->end()
            ->end();
    }

    /**
     * @return NodeDefinition the plugins node
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
     * @return NodeDefinition the bind node
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
     * @return NodeDefinition the bind node
     */
    private function createDriverOptionsNode()
    {
        return $this->createNode('driver_options')
            ->useAttributeAsKey('name')
                ->prototype('array')
                ->useAttributeAsKey('name')
                ->prototype('variable')->end()
            ->end();
    }

    /**
     * @param string $name the node name
     *
     * @return NodeDefinition the node
     */
    private function createNode($name)
    {
        $treeBuilder = new TreeBuilder($name);
        if (\method_exists($treeBuilder, 'getRootNode')) {
            $rootNode = $treeBuilder->getRootNode();
        } else {
            $rootNode = $treeBuilder->root($name);
        }

        return $rootNode;
    }
}
