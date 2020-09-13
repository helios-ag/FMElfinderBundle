<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection;

use FM\ElfinderBundle\DependencyInjection\FMElfinderExtension;
use FM\ElfinderBundle\DependencyInjection\Configuration;
use Matthias\SymfonyDependencyInjectionTest\PhpUnit\AbstractExtensionConfigurationTestCase;
use Symfony\Component\Config\Definition\ConfigurationInterface;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;

/**
 * Class ConfigurationLoadTest.
 */
class ConfigurationLoadTest extends AbstractExtensionConfigurationTestCase
{
    protected function getContainerExtension(): ExtensionInterface
    {
        return new FMElfinderExtension();
    }

    protected function getConfiguration(): ConfigurationInterface
    {
        return new Configuration();
    }

    /**
     * @dataProvider getSupportsAllConfigFormatsData
     * @requires PHP 7
     */
    public function testSupportsAllConfigFormats($path)
    {
        $expectedConfiguration = [
            'configuration_provider' => 'app.configurator.custom',
            'assets_path'            => 'assets',
            'loader'                 => 'fm_elfinder.loader.default',
            'instances'              => [
                'default' => [
                    'locale'             => 'en',
                    'editor'             => 'tinymce',
                    'theme'              => 'smoothness',
                    'editor_template'    => 'Elfinder/editor.html.twig',
                    'fullscreen'         => false,
                    'where_is_multi'     => [],
                    'multi_home_folder'  => false,
                    'folder_separator'   => '',
                    'cors_support'       => false,
                    'tinymce_popup_path' => '/pop-up',
                    'relative_path'      => false,
                    'path_prefix'        => '/',
                    'visible_mime_types' => [],
                    'connector'          => [
                        'debug'   => true,
                        'binds'   => [],
                        'plugins' => [],
                        'roots'   => [
                            'uploads' => [
                                'driver'            => 'LocalFileSystem',
                                'volume_id'         => 0,
                                'security_voter'    => '',
                                'phash'             => '',
                                'trash_hash'        => 'trash_hash',
                                'i18n_folder_name'  => false,
                                'locale'            => '',
                                'disabled_commands' => [],
                                'plugins'           => [],
                                'driver_options'    => [],
                                'path'              => 'uploads',
                                'show_hidden'       => true,
                                'flysystem'         => [
                                    'filesystem'      => '',
                                    'enabled'         => false,
                                    'type'            => '',
                                    'adapter_service' => '',
                                ],
                                'start_path'       => '',
                                'encoding'         => 'UTF-8',
                                'url'              => '',
                                'mime_detect'      => 'auto',
                                'mimefile'         => '',
                                'img_lib'          => 'auto',
                                'tmb_path'         => '.tmb',
                                'tmb_url'          => '',
                                'tmb_size'         => 48,
                                'tmb_crop'         => true,
                                'tmb_bg_color'     => '#ffffff',
                                'tmb_path_mode'    => 511,
                                'copy_overwrite'   => true,
                                'copy_join'        => true,
                                'copy_from'        => true,
                                'copy_to'          => true,
                                'upload_overwrite' => true,
                                'fileMode'         => 0644,
                                'attributes'       => [
                                    'some_pattern' => [
                                        'pattern' => '/^some_pattern$/',
                                        'read'    => true,
                                        'write'   => true,
                                        'locked'  => false,
                                        'hidden'  => false,
                                    ],
                                ],
                                'accepted_name'    => '/^\w[\w\s\.\%\-]*$/u',
                                'check_subfolders' => 1,
                                'separator'        => DIRECTORY_SEPARATOR,
                                'date_format'      => 'j M Y H:i',
                                'time_format'      => 'H:i',
                                'archive_mimes'    => [],
                                'archivers'        => [
                                  'enabled' => false,
                                  'create'  => [],
                                  'extract' => [],
                                ],
                                'glide_url'         => '',
                                'glide_key'         => '',
                                'alias'             => 'foo',
                                'tree_deep'         => 1,
                                'upload_allow'      => ['image/png', 'image/jpg', 'image/jpeg'],
                                'upload_order'      => ['deny', 'allow'],
                                'defaults'          => ['read' => true, 'write' => true],
                                'upload_deny'       => ['all'],
                                'upload_max_size'   => 0,
                                'upload_max_conn'   => 3,
                                'dropbox2_settings' => [
                                    'aliasFormat'     => '%s@Dropbox',
                                    'path'            => '/',
                                    'separator'       => '/',
                                    'acceptedName'    => '%s@Dropbox',
                                    'rootCssClass'    => 'elfinder-navbar-root-dropbox',
                                    'getThumbSize'    => 'medium',
                                    'app_key'         => 'some_consumer',
                                    'app_secret'      => 'con$umer',
                                    'enabled'         => true,
                                ],
                                'box_settings' => [
                                    'client_id'      => 'some_consumer',
                                    'client_secret'  => 'con$umer',
                                    'accessToken'    => 'token',
                                    'root'           => 'Box.com',
                                    'path'           => '/',
                                    'separator'      => '/',
                                    'tmbPath'        => '',
                                    'tmbURL'         => '',
                                    'tmpPath'        => '',
                                    'acceptedName'   => '#^[^/\?*:|"<>]*[^./\?*:|"<>]$#',
                                    'rootCssClass'   => 'elfinder-navbar-root-box',
                                    'enabled'        => true,
                                ],
                                'onedrive_settings' => [
                                    'client_id'         => 'some_consumer',
                                    'client_secret'     => 'con$umer',
                                    'accessToken'       => 'token',
                                    'root'              => 'OneDrive.com',
                                    'OneDriveApiClient' => '',
                                    'path'              => '/',
                                    'separator'         => '/',
                                    'tmbPath'           => '',
                                    'tmbURL'            => '',
                                    'tmpPath'           => '',
                                    'acceptedName'      => '#^[^/\?*:|"<>]*[^./\?*:|"<>]$#',
                                    'rootCssClass'      => 'elfinder-navbar-root-onedrive',
                                    'useApiThumbnail'   => true,
                                    'enabled'           => true,
                                ],
                                'ftp_settings' => [
                                    'host'    => '127.0.0.1',
                                    'user'    => 'root',
                                    'enabled' => true,
                                ],
                                'mysql_settings' => [
                                    'enabled'        => true,
                                    'host'           => 'localhost',
                                    'files_table'    => 'elfinder_file',
                                    'port'           => null,
                                    'socket'         => null,
                                    'tmbPath'        => '',
                                    'tmpPath'        => '',
                                    'rootCssClass'   => 'elfinder-navbar-root-sql',
                                    'noSessionCache' => 'hasdirs',
                                ],
                                'autoload'   => false,
                                'quarantine' => null,
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $this->assertProcessedConfigurationEquals($expectedConfiguration, [__DIR__.'/../Fixtures/'.$path]);
    }

    public function getSupportsAllConfigFormatsData()
    {
        return [
            'yml' => ['config/config.yml'],
            'php' => ['config/config.php'],
            'xml' => ['config/config.xml'],
        ];
    }
}
