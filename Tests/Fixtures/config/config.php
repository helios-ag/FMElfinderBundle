<?php

$container->loadFromExtension('fm_elfinder', array(
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
                'roots' => array(
                    'uploads' => array(
                        'driver' => 'LocalFileSystem',
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
                        ),
                        'ftp_settings' => array(
                            'host' => '127.0.0.1',
                            'user' => 'root',
                        ),
                    ),
                ),
            ),
        ),
    ),
));
