<?php

namespace Symfony\Cmf\Bundle\RoutingBundle\Tests\Unit\DependencyInjection;

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
            'instances' => array(
                'default' => array(
                    'locale' => 'en',
                    'editor' => 'tinymce',
                    'editor_template' => 'Elfinder/editor.html.twig',
                    'fullscreen' => false,
                    'include_assets' => false,
                    'tinymce_popup_path' => '/pop-up',
                    'enable_user_integration' => true,
                    'relative_path' => false,
                    'connector' => array(
                        'debug' => true,
                        'bind' => array(),
                        'plugin' => array(),
                        'roots' => array(
                            'uploads' => array(
                                'driver' => 'LocalFileSystem',
                                'disabled' => array(),
                                'plugin' => array(),
                                'path' => 'uploads',
                                'showhidden' => true,
                                'alias' => 'foo',
                                'treeDeep' => 1,
                                'accessControl' => 'ROLE_ADMIN',
                                'upload_allow' => array('image/png', 'image/jpg', 'image/jpeg'),
                                'upload_deny' => array('all'),
                                'upload_max_size' => '2M',
                                'dropbox_settings' => array(
                                    'consumerKey' => 'some_consumer',
                                    'consumerSecret' => 'con$umer',
                                    'enabled' => true,
                                ),
                                'ftp_settings' => array(
                                    'host' => '127.0.0.1',
                                    'user' => 'root',
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
            'xml' => array('config/config.xml'),
            'php' => array('config/config.php'),
        );
    }
}
