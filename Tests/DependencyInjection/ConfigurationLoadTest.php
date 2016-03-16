<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection;

use FM\ElfinderBundle\DependencyInjection\FMElfinderExtension;
use FM\ElfinderBundle\DependencyInjection\Configuration;
use Matthias\SymfonyDependencyInjectionTest\PhpUnit\AbstractExtensionConfigurationTestCase;

/**
 * Class ConfigurationLoadTest.
 *
 * @package FM\ElfinderBundle\Tests\DependencyInjection
 */
class ConfigurationLoadTest extends AbstractExtensionConfigurationTestCase
{
    protected function getContainerExtension()
    {
        return new FMElfinderExtension();
    }

    protected function getConfiguration()
    {
        return new Configuration();
    }

    /**
     * @dataProvider getSupportsAllConfigFormatsData
     */
    public function testSupportsAllConfigFormats($path)
    {
        $expectedConfiguration = array(
            'configuration_provider' => 'app.configurator.custom',
            'assets_path'            => '/assets',
            'loader'                 => 'fm_elfinder.loader.default',
            'instances'              => array(
                'default' => array(
                    'locale'             => 'en',
                    'editor'             => 'tinymce',
                    'theme'              => 'smoothness',
                    'editor_template'    => 'Elfinder/editor.html.twig',
                    'fullscreen'         => false,
                    'include_assets'     => false,
                    'cors_support'       => false,
                    'tinymce_popup_path' => '/pop-up',
                    'relative_path'      => false,
                    'path_prefix'        => '/',
                    'visible_mime_types' => array(),
                    'connector'          => array(
                        'debug'   => true,
                        'binds'   => array(),
                        'plugins' => array(),
                        'roots'   => array(
                            'uploads' => array(
                                'driver'            => 'LocalFileSystem',
                                'volume_id'         => 0,
                                'disabled_commands' => array(),
                                'plugins'           => array(),
                                'driver_options'    => array(),
                                'path'              => 'uploads',
                                'show_hidden'       => true,
                                'flysystem'         => array(
                                    'enabled' => false,
                                    'type'    => '',
                                ),
                                'start_path'       => '',
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
                                'attributes'       => array(
                                    'some_pattern' => array(
                                        'pattern' => '/^some_pattern$/',
                                        'read'    => true,
                                        'write'   => true,
                                        'locked'  => false,
                                        'hidden'  => false,
                                    ),
                                ),
                                'accepted_name'    => '/^\w[\w\s\.\%\-]*$/u',
                                'check_subfolders' => true,
                                'separator'        => DIRECTORY_SEPARATOR,
                                'date_format'      => 'j M Y H:i',
                                'time_format'      => 'H:i',
                                'archive_mimes'    => array(),
                                'archivers'        => array(),
                                'glide_url'        => '',
                                'glide_key'        => '',
                                'alias'            => 'foo',
                                'tree_deep'        => 1,
                                'upload_allow'     => array('image/png', 'image/jpg', 'image/jpeg'),
                                'upload_order'     => array('deny', 'allow'),
                                'defaults'         => array('read' => true, 'write' => true),
                                'upload_deny'      => array('all'),
                                'upload_max_size'  => 0,
                                'dropbox_settings' => array(
                                    'consumer_key'    => 'some_consumer',
                                    'consumer_secret' => 'con$umer',
                                    'enabled'         => true,
                                ),
                                'ftp_settings' => array(
                                    'host'    => '127.0.0.1',
                                    'user'    => 'root',
                                    'enabled' => true,
                                ),
                                's3_settings' => array(
                                    'enabled' => false,
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        );

        $this->assertProcessedConfigurationEquals($expectedConfiguration, array(__DIR__.'/../Fixtures/'.$path));
    }

    public function getSupportsAllConfigFormatsData()
    {
        return array(
            'yml' => array('config/config.yml'),
            'php' => array('config/config.php'),
            'xml' => array('config/config.xml'),
        );
    }
}
