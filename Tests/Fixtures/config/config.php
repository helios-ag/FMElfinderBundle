<?php

$container->loadFromExtension('fm_elfinder', array(
    'configuration_provider' => 'app.configurator.custom',
    'instances'              => array(
        'default' => array(
            'locale'             => 'en',
            'cors_support'       => false,
            'editor'             => 'tinymce',
            'editor_template'    => 'Elfinder/editor.html.twig',
            'fullscreen'         => false,
            'include_assets'     => false,
            'tinymce_popup_path' => '/pop-up',
            'relative_path'      => false,
            'connector'          => array(
                'debug' => true,
                'roots' => array(
                    'uploads' => array(
                        'driver'           => 'LocalFileSystem',
                        'path'             => 'uploads',
                        'show_hidden'      => true,
                        'alias'            => 'foo',
                        'tree_deep'        => 1,
                        'upload_allow'     => array('image/png', 'image/jpg', 'image/jpeg'),
                        'upload_deny'      => array('all'),
                        'upload_max_size'  => 0,
                        'dropbox_settings' => array(
                            'consumer_key'    => 'some_consumer',
                            'consumer_secret' => 'con$umer',
                        ),
                        'ftp_settings' => array(
                            'host' => '127.0.0.1',
                            'user' => 'root',
                        ),
                        'attributes' => array(
                            'some_pattern' => array(
                                'pattern' => '/^some_pattern$/',
                                'read'    => true,
                                'write'   => true,
                                'locked'  => false,
                                'hidden'  => false,
                            ),
                        ),
                    ),
                ),
            ),
        ),
    ),
));
