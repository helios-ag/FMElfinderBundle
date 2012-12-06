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
//                 ->scalarNode('driver')->defaultValue('LocalFileSystem')->end()
//                 ->scalarNode('path')->defaultValue('uploads')->end()
                ->scalarNode('locale')->defaultValue('en_US.UTF8')->end()
//                 ->scalarNode('editor')->defaultValue('ckeditor')->end()
                ->scalarNode('showhidden')->defaultValue('false')->end()
                ->scalarNode('fullscreen')->defaultValue('true')->end()
                ->scalarNode('tinymce_popup_path')->end()

                ->arrayNode('connector')
                    ->children()
                        ->booleanNode('debug')->defaultValue(false)->end()
                        ->arrayNode('roots')
                            ->isRequired()
                            ->requiresAtLeastOneElement()
                            ->prototype('array')
                                ->children()
                                    ->scalarNode('driver')->defaultValue('LocalFileSystem')->end()
                                    ->scalarNode('path')->defaultValue('uploads')->end()
                                    ->arrayNode('upload_allow')
                                        ->addDefaultsIfNotSet()
                                        ->prototype('scalar')->end()
                                        ->defaultValue(array('image'))
                                    ->end()
                                    ->arrayNode('upload_deny')
                                        ->addDefaultsIfNotSet()
                                        ->prototype('scalar')->end()
                                        ->defaultValue(array('all'))
                                    ->end()
                                    ->scalarNode('upload_max_size')->defaultValue('')->end()
                                ->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()

                ->arrayNode('client')
                    ->children()
                        ->arrayNode('only_mimes')
                            ->prototype('scalar')->defaultValue('image')->end()
                        ->end()
                        ->arrayNode('commands')
                            ->addDefaultsIfNotSet()
                            ->prototype('scalar')->end()
                            ->defaultValue(array(
                                'open', 'reload', 'home', 'up', 'back', 'forward', 'getfile', 'quicklook',
                            	'download', 'rm', 'duplicate', 'rename', 'mkdir', 'mkfile', 'upload', 'copy',
                            	'cut', 'paste', 'edit', 'extract', 'archive', 'search', 'info', 'view', 'help',
                            	'resize', 'sort'
                            ))
                        ->end()
                    ->end()
                ->end()

                ->scalarNode('editor')->defaultValue('ckeditor')->end()

            ->end()
        ;

        return $treeBuilder;
    }
}
