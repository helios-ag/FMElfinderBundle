# Bundle configuration dump 

```
# Default configuration for extension with alias: "fm_elfinder"
fm_elfinder:
    configuration_provider: fm_elfinder.configurator.default
    assets_path:          assets
    loader:               fm_elfinder.loader.default
    instances:            # Required

        # Prototype
        name:
            locale:               null
            cors_support:         false
            editor:               simple
            editor_template:      null
            fullscreen:           true
            multi_home_folder:    false
            folder_separator:     ''
            theme:                smoothness
            tinymce_popup_path:   ''
            relative_path:        true
            path_prefix:          /
            where_is_multi:       []
            visible_mime_types:   []
            connector:
                debug:                false
                binds:

                    # Prototype
                    name:

                        # Prototype
                        name:                 ~
                plugins:

                    # Prototype
                    name:

                        # Prototype
                        name:                 ~
                roots:                # Required

                    # Prototype
                    name:
                        driver:               ~ # Required
                        volume_id:            0
                        path:                 ''
                        autoload:             false
                        phash:                ''
                        trash_hash:           ''
                        locale:               ''
                        i18n_folder_name:     false
                        mime_detect:          auto
                        mimefile:             ''
                        security_voter:       ''
                        start_path:           ''
                        encoding:             UTF-8
                        url:                  ''
                        alias:                ''
                        img_lib:              auto
                        tmb_path:             .tmb
                        tmb_path_mode:        511
                        tmb_url:              ''
                        tmb_size:             48
                        tmb_crop:             true
                        tmb_bg_color:         '#ffffff'
                        quarantine:           null
                        copy_overwrite:       true
                        copy_join:            true
                        copy_from:            true
                        copy_to:              true
                        upload_overwrite:     true
                        fileMode:             420
                        upload_allow:

                            # Default:
                            - image
                        upload_deny:

                            # Default:
                            - all
                        upload_order:

                            # Defaults:
                            - deny
                            - allow
                        upload_max_size:      0
                        upload_max_conn:      3
                        defaults:

                            # Prototype
                            defaults:             ~
                        attributes:

                            # Prototype
                            -
                                pattern:              ~
                                read:                 true
                                write:                true
                                locked:               false
                                hidden:               false
                        accepted_name:        '/^\w[\w\s\.\%\-]*$/u'
                        show_hidden:          false
                        disabled_commands:    []
                        tree_deep:            0
                        check_subfolders:     1
                        separator:            /
                        date_format:          'j M Y H:i'
                        time_format:          'H:i'
                        archive_mimes:        []
                        archivers:
                            enabled:              false
                            create:

                                # Prototype
                                -
                                    cmd:                  ~
                                    argc:                 ~
                                    ext:                  ~
                            extract:

                                # Prototype
                                -
                                    cmd:                  ~
                                    argc:                 ~
                                    ext:                  ~
                        flysystem:
                            enabled:              false
                            filesystem:           ''
                            type:                 ''
                            adapter_service:      ''
                            options:
                                local:
                                    enabled:              false
                                    path:                 ''
                                ftp:
                                    enabled:              false
                                    host:                 ''
                                    username:             ''
                                    password:             ''
                                    port:                 21
                                    passive:              true
                                    ssl:                  true
                                    timeout:              30
                                    root:                 /
                                    directoryPerm:        484
                                sftp:
                                    enabled:              false
                                    host:                 ''
                                    username:             ''
                                    password:             ''
                                    port:                 21
                                    privateKey:           ''
                                    timeout:              10
                                    root:                 /
                                aws_s3_v3:
                                    enabled:              false
                                    key:                  ''
                                    secret:               ''
                                    region:               ''
                                    version:              ''
                                    bucket_name:          ''
                                    optional_prefix:      ''
                                    endpoint:             null
                                    use_path_style_endpoint: false
                                    use_aws_shared_config_files: true
                                    options:              []
                                dropbox:
                                    enabled:              false
                                    app:                  ''
                                    token:                ''
                        glide_url:            ''
                        glide_key:            ''
                        plugins:

                            # Prototype
                            name:

                                # Prototype
                                name:                 ~
                        driver_options:

                            # Prototype
                            name:

                                # Prototype
                                name:                 ~
                        dropbox2_settings:
                            enabled:              false
                            app_key:              ~
                            app_secret:           ~
                            access_token:         ~
                            aliasFormat:          '%s@Dropbox'
                            path:                 /
                            separator:            /
                            acceptedName:         '%s@Dropbox'
                            rootCssClass:         elfinder-navbar-root-dropbox
                            publishPermission:
                                requested_visibility: public
                            getThumbSize:         medium
                        box_settings:
                            enabled:              false
                            client_id:            ~
                            client_secret:        ~
                            accessToken:          ~
                            root:                 Box.com
                            path:                 /
                            separator:            /
                            tmbPath:              ''
                            tmbURL:               ''
                            tmpPath:              ''
                            acceptedName:         '#^[^/\?*:|"<>]*[^./\?*:|"<>]$#'
                            rootCssClass:         elfinder-navbar-root-box
                        onedrive_settings:
                            enabled:              false
                            client_id:            ~
                            client_secret:        ~
                            accessToken:          ~
                            root:                 OneDrive.com
                            OneDriveApiClient:    ''
                            path:                 /
                            separator:            /
                            tmbPath:              ''
                            tmbURL:               ''
                            tmpPath:              ''
                            acceptedName:         '#^[^/\?*:|"<>]*[^./\?*:|"<>]$#'
                            rootCssClass:         elfinder-navbar-root-onedrive
                            useApiThumbnail:      true
                        ftp_settings:
                            enabled:              false
                            host:                 ~
                            user:                 ~
                            password:             ~
                            path:                 ~
                        mysql_settings:
                            enabled:              false
                            host:                 ~
                            user:                 ~
                            pass:                 ~
                            db:                   ~
                            port:                 null
                            socket:               null
                            files_table:          elfinder_file
                            tmbPath:              ''
                            tmpPath:              ''
                            rootCssClass:         elfinder-navbar-root-sql
                            noSessionCache:       hasdirs
```
