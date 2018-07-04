# Advanced configuration

## Custom configuration provider

ElFinder bundle allows to override his configuration provider service:

```yaml
fm_elfinder:
    configuration_provider: elfinder.configurator
```
where 'elfinder.configurator' is default ElFinder's bundle service to read configuration from DIC

To override service, simply define your own service:
```yaml
services:
    my_elfinder_configurator:
        class:        Acme\DemoBundle\MyElfinderConfigurator
        arguments:    ["%my_arguments%"]
```

Configuration class must implement  ElFinderConfigurationProviderInterface

method getConfiguration($instance) should return array of parameters compatible with ElFinder bundle configuration

## Custom loader

It is possible to override loader service with your own class:

```yaml
services:
    my_loader:
        class:        AppBundle\Service\MyElFinderLoader
        arguments:    [@fm_elfinder.configurator]

fm_elfinder:
  loader: my_loader
```

## Custom archivers

Elfinder has the ability to make/extract diffrent type of archives. Using the following configuration you can add/remove/override archive types based on mime type.

```yaml
fm_elfinder:
    instances:
        themes:
            locale: %locale% # defaults to current request locale
            cors_support: true
            editor: simple
            include_assets: false # disable if you want to handle loading of the javascript and css assets yourself
            connector:
                debug: true # defaults to false
                roots:       # at least one root must be defined
                    uploads:
                        driver: LocalFileSystem
                        path: %theme_root%
                        upload_allow: ['all']
                        upload_max_size: 10M
                        archive_mimes: "application/zip"
                        archivers:
                            create:
                                application/zip:
                                    cmd: "phpfunction"
                                    argc: "self::zipArchiveZip"
                                    ext: "zip"
                            extract:
                                application/myzip:
                                    cmd: "phpfunction"
                                    argc: "self::zipArchiveUnzip"
                                    ext: "zip"
```



## Plugins

ElFinder comes with some plugins, like auto-resize, which can be enabled, by the following configuration:

```yaml
fm_elfinder:
  instances:
    tinymce:
      locale: %locale%
      editor: tinymce4
      include_assets: true
      relative_path: true
      fullscreen: true
      connector:
          debug: true # defaults to false
          binds:
              upload.presave:
                  - Plugin.AutoResize.onUpLoadPreSave
          plugins:
              AutoResize: # global resize options, applies to root which don't have his own resize configuraion
                  enable: true
                  maxWidth: 750
                  maxHeight: 750
                  quality: 95 # JPEG image save quality
          roots:       # at least one root must be defined
              uploads:
                  driver: LocalFileSystem
                  path: uploads
                  plugins:
                      AutoResize:
                          enable: true
                          maxWidth: 500
                          maxHeight: 500
                          quality: 95 # JPEG image save quality
                  upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                  upload_deny: ['all']
                  upload_max_size: 2M
              resize1:
                  driver: LocalFileSystem
                  path: uploads
                  plugins:
                      AutoResize:
                          enable: true # For control by volume driver
                          maxWidth: 800 # Path to Water mark image
                          maxHeight: 800 # Margin right pixel
                          quality: 95 # JPEG image save quality
                  upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                  upload_deny: ['all']
                  upload_max_size: 2M
              resize2:
                  driver: LocalFileSystem
                  path: uploads
                  plugins:
                      AutoResize:
                          enable: true
                          maxWidth: 800
                          maxHeight: 800
                          quality: 95
                  upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                  upload_deny: ['all']
                  upload_max_size: 2M
```

ElFinder comes with other plugins, check Plugins folder under ElFinderPHP for more information.

## Symfony service as a volume driver

volumeDriver can be declared as Symfony service
The service should however be an instance of the FM\ElFinderPHP\Driver\ElFinderVolumeDriver class. This check is to
ensure the service is a valid ElFinder VolumeDriver.

To configure a root with a service-driver you can simply use the service id as the drive key:

```
fm_elfinder:
    connector:
        roots:
            uploads:
                driver: elfinder.driver.filesystem
                path: uploads
```

This means that if you add the service definition:

```xml
<service id="elfinder.driver.filesystem" class="FM\ElFinderPHP\Driver\ElFinderVolumeLocalFileSystem" />
```

## Flysystem configuration

Since 4.0 bundle supports [flysystem](https://github.com/thephpleague/flysystem) filesystem abstraction library

Example configuration can be found here [Flysystem](/Resources/doc/flysystem.md)
