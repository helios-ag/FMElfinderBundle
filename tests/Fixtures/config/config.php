<?php

$container->loadFromExtension('fm_elfinder', [
    'configuration_provider' => 'app.configurator.custom',
    'instances'              => [
        'default' => [
            'locale'             => 'en',
            'cors_support'       => false,
            'editor'             => 'tinymce',
            'editor_template'    => 'Elfinder/editor.html.twig',
            'fullscreen'         => false,
            'tinymce_popup_path' => '/pop-up',
            'relative_path'      => false,
            'connector'          => [
                'debug' => true,
                'roots' => [
                    'uploads' => [
                        'driver'            => 'LocalFileSystem',
                        'path'              => 'uploads',
                        'show_hidden'       => true,
                        'trash_hash'        => 'trash_hash',
                        'alias'             => 'foo',
                        'check_subfolders'  => 1,
                        'tree_deep'         => 1,
                        'upload_allow'      => ['image/png', 'image/jpg', 'image/jpeg'],
                        'upload_deny'       => ['all'],
                        'upload_max_size'   => 0,
                        'upload_max_conn'   => 3,
                        'dropbox2_settings' => [
                            'app_key'         => 'some_consumer',
                            'app_secret'      => 'con$umer',
                        ],
                        'box_settings' => [
                            'client_id'       => 'some_consumer',
                            'client_secret'   => 'con$umer',
                            'accessToken'     => 'token',
                        ],
                        'onedrive_settings' => [
                            'client_id'       => 'some_consumer',
                            'client_secret'   => 'con$umer',
                            'accessToken'     => 'token',
                        ],
                        'ftp_settings' => [
                            'host' => '127.0.0.1',
                            'user' => 'root',
                        ],
                        'mysql_settings' => [
                            'host' => 'localhost',
                        ],
                        'attributes' => [
                            'some_pattern' => [
                                'pattern' => '/^some_pattern$/',
                                'read'    => true,
                                'write'   => true,
                                'locked'  => false,
                                'hidden'  => false,
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
]);
