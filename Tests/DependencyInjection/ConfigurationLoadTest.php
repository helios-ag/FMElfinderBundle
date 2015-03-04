<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection;

use FM\ElfinderBundle\DependencyInjection\FMElfinderExtension;
use FM\ElfinderBundle\DependencyInjection\Configuration;
use Matthias\SymfonyDependencyInjectionTest\PhpUnit\AbstractExtensionConfigurationTestCase;

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
            'assets_path' => '/assets',
            'loader' => 'fm_elfinder.loader.default',
            'instances' => array(
                'default' => array(
                    'locale' => 'en',
                    'editor' => 'tinymce',
                    'editor_template' => 'Elfinder/editor.html.twig',
                    'fullscreen' => false,
                    'include_assets' => false,
                    'cors_support' => false,
                    'tinymce_popup_path' => '/pop-up',
                    'relative_path' => false,
                    'connector' => array(
                        'debug' => true,
                        'bind' => array(),
                        'plugin' => array(),
                        'roots' => array(
                            'uploads' => array(
                                'driver' => 'LocalFileSystem',
                                'disabled_commands' => array(),
                                'plugin' => array(),
                                'path' => 'uploads',
                                'show_hidden' => true,
                                'flysystem' => array(
                                    'enabled' => false,
                                    'type' => ''
                                ),
                                'glide_url' => '',
                                'glide_key' => '',
                                'alias' => 'foo',
                                'tree_deep' => 1,
                                'upload_allow' => array('image/png', 'image/jpg', 'image/jpeg'),
                                'upload_deny' => array('all'),
                                'upload_max_size' => '2M',
                                'dropbox_settings' => array(
                                    'consumer_key' => 'some_consumer',
                                    'consumer_secret' => 'con$umer',
                                    'enabled' => true,
                                ),
                                'ftp_settings' => array(
                                    'host' => '127.0.0.1',
                                    'user' => 'root',
                                    'enabled' => true,
                                ),
                                's3_settings' => array(
                                    'enabled' => false,
                                )
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
        );
    }
}