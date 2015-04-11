FMElfinderBundle
================

[ElFinder](https://github.com/Studio-42/elFinder) integration in Symfony2

### Code Quality Assurance ###

| SensioLabs Insight | Travis CI | Scrutinizer CI| 
| ------------------------|-------------|-----------------|
|[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17/mini.png)](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/helios-ag/fmelfinderbundle/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
[![Dependency Status](https://www.versioneye.com/user/projects/53db56ae4b3ac897b60001d4/badge.svg?style=flat)](https://www.versioneye.com/user/projects/53db56ae4b3ac897b60001d4)

[![Latest Stable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/v/stable.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle) [![Total Downloads](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/downloads.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle) [![Latest Unstable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/v/unstable.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle) [![License](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/license.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)

elFinder is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

Recommended bundles to use with:

* [TinymceBundle](https://github.com/stfalcon/TinymceBundle/)
* [IvoryCKEditorBundle](https://github.com/egeloen/IvoryCKEditorBundle/)
* [TrsteelCkeditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle/)

<!-- -->

- [Installation](#installation)
    - [Step 1: Installation](#step-1-installation)
    - [Step 2: Enable the bundle](#step-2-enable-the-bundle)
    - [Step 3: Import FMElfinderBundle routing file](#step-3-import-fmelfinderbundle-routing-file)
    - [Step 4: Securing paths](#step-4-configure-your-applications-securityyml)
    - [Step 5: Install assets](#step-5-install-assets)
- [Basic configuration](#basic-configuration)
    - [Add configuration options to your config.yml](#add-configuration-options-to-your-configyml)
    - [Use multiple upload folder by instance](#use-multiple-upload-folder-by-instance)
- [CORS support](#cors-support)
- [Elfinder Form Type](#elfinder-form-type)
- [CKEditor integration](#ckeditor-integration)
    - [Installation](#step-1-installation)
    - [Configuration](#step-2-configure-ckeditor-setting-via-settingsyml-or-through-form-builder)
- [TinyMCE integration](#tinymce-integration)
    - [Integration with TinyMCE 3](#tinymce-3x)
    - [Integration with TinyMCE 4](#tinymce-4x)
- [Advanced configuration](#advanced-configuration)    
    - [Custom configuration provider](#custom-configuration-provider)
    - [Custom loader](#custom-loader)
    - [Plugins support](#plugins-support)
    - [Service as volume driver](#symfony-service-as-a-volume-driver)
    - [Flysystem configuration](#flysystem-configuration)

## Installation

To install this bundle, you'll need both the lib [ElFinderPHP](https://github.com/helios-ag/ElFinderPHP)
and this bundle.

This instruction explain how to setup bundle on Symfony 2.1 and newer

### Step 1: Installation

**Version 5:**

Add FMElfinderBundle to your composer.json:

```json
{
    "require": {
        "helios-ag/fm-elfinder-bundle": "~5",
    }
}
```

also add component-dir under config node of composer.json

```json
{
    "config": {
        "component-dir": "web/assets"
    }
}
```

**Version 4:**

This version dont use **component** library 

```sh
composer require helios-ag/fm-elfinder-bundle: "~4.0"
```

For Symfony between 2.1 and 2.3 (2.3 included) use version ~2.3


```sh
composer require helios-ag/fm-elfinder-bundle: "~2.3"
```

Now tell composer to download the bundle by running the command:


```sh
composer update helios-ag/fm-elfinder-bundle
```

Install legacy version of the bundle ([documentation](https://github.com/helios-ag/FMElfinderBundle/blob/1.0/README.md)):

```sh
composer require helios-ag/fm-elfinder-bundle: "~1.5" 
```

### Step 2: Enable the bundle

Enable the bundle in the kernel:

```php
<?php
// app/AppKernel.php

public function registerBundles()
{
    $bundles = array(
        // ...
        new FM\ElfinderBundle\FMElfinderBundle(),
    );
}
```

### Step 3: Import FMElfinderBundle routing file

``` yaml
# app/config/routing.yml
elfinder:
     resource: "@FMElfinderBundle/Resources/config/routing.yml"
```

### Step 4: Configure your application's security.yml

Secure ElFinder with access_control:
``` yaml
# app/config/security.yml
security:

    //....
    access_control:
        - { path: ^/efconnect, role: ROLE_USER }
        - { path: ^/elfinder, role: ROLE_USER }

```

### Step 5: Install assets

Install and dump assets via symfony built-in command:

```sh
app/console assets:install web
```

## Basic configuration

### Add configuration options to your config.yml

```yaml
fm_elfinder:
    instances:
        default:
            locale: %locale% # defaults to current request locale
            editor: ckeditor # other options are tinymce, tinymce4, form, custom and simple
            fullscreen: true # defaults true, applies to simple and ckeditor editors
            theme: smoothness # jquery theme
            include_assets: true # disable if you want to handle loading of the javascript and css assets yourself
            connector:
                debug: false # defaults to false
                roots:       # at least one root must be defined
                    uploads:
                        show_hidden: false # defaults to false
                        driver: LocalFileSystem
                        path: uploads
                        upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                        upload_deny: ['all']
                        upload_max_size: 2M

```

* default - instance of elfinder, can be used to define multiple configurations of ElFinder, allows simultaneous configuration for different types of WYSIWYG editors in your project
* path - define root directory for the files inside web/ directory, default is "uploads". Make sure to set proper write/read permissions to this directory.
* url - url to be prefixed to image path, for displaying. Can be either absolute or relative. If relative, it will be prefixed with the applications base-url. If left blank, url will be the base-url, append with the value of the 'path' parameter
* driver - can be LocalFileSystem, FTP or MySQL2, currently supported only LocalFileSystem, default is LocalFileSystem
* locale - locale determines, which language, ElFinder will use, to translate user interface, default is current request locale
* cors_support - allows cross domain responses handling (default false)
* editor - determines what template to render, to be compatible with WYSIWYG web editor, currently supported options are:
 "ckeditor", "tinymce" for tinymce3, "tinymce4" for tinymce4, "form" for form type, "simple" for standalone and "custom". 
 How to configure CKEDitor and TinyMCE to work with this bundle, will be explained further in this document.
* editor_template - define template to render editor is set to "custom".
* connector - root node for defining options for elfinder root directories.
* roots - define "virtual directories" that reflect directories in your project. 
* path_prefix - path prefix with relative_path enabled, default is slash ('/')
    * show_hidden - show files and folders that starts from . (dot)
    * driver - driver type, LocalFileSystem, Dropbox, FTP 
    * alias - directory alias
    * path - directory that contains files
    * upload_allow: ['image/png', 'image/jpg', 'image/jpeg'] 
    * upload_deny: ['all'] 
    * upload_max_size: 2M 
You can see the full list of roots options [here](https://github.com/Studio-42/elFinder/wiki/Connector-configuration-options#root-options "connector options list"). To use them,
convert camelCased option name to under_scored option name.

**Note:** `crypt_lib` option is not available as not implemented yet by elFinder PHP library.
    
### Use multiple upload folder by instance

You can set multiple upload root folder by instance configuration.

If you have configured your instance with `/uploads` path, you can provide
an additional folder as a home folder (e.g. for a multi-users application) when accessing to the instance URL :

`/elfinder/{instance}/{homeFolder}` or `/efconnect/{instance}/{homeFolder}`

For example, accessing to `/elfinder/acmeInstance/bob` URL will open up elfinder with
`/uploads/bob` as root directory which only contains Bob's files.

Then, accessing to `/elfinder/acmeInstance/alice` URL will re-use your instance,
but open up elfinder with `/uploads/alice` folder as root directory, containing only Alice's files.

To use this feature, you **must** provide the instance name in the URL,
and of course be sure to set proper write/read permissions on home folders.

**Note:** this feature is only available with `LocalFileSystem` driver.

## CORS support

If you want access connector URL from an other domain on the client side,
simply configure FMElFinder bundle as you used to, and add the `cors_support: true` option to the cross domain instance:
```yaml
# app/config/config.yml
fm_elfinder:
    instances:
        default:
            locale: %locale% # defaults to current request locale
            cors_support: true # allows cross domain responses handling (default false)
            editor: ckeditor # other options are tinymce, tinymce4, form, custom and simple, 
            # ...
```

Then you have to add the CORS headers (`Access-Control-Allow-Origin`) to the response.
It can be easily done with [NelmioCORSBundle](https://github.com/nelmio/NelmioCorsBundle) : 

```yaml
# app/config/config.yml
nelmio_cors:
    defaults:
        allow_credentials: false
        allow_origin: []
        allow_headers: []
        allow_methods: []
        expose_headers: []
        max_age: 0
        hosts: []
    paths:
        '^/efconnect':
            allow_origin: ['*']
            allow_headers: ['X-Custom-Auth', 'Content-Type', 'X-Requested-With']
            allow_methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE']
            max_age: 3600
            allow_credentials: true
```

## Elfinder Form Type

Bundle come with custom form type, ```html <input type="text"/>```, that provide elfinder callback (opens Elfinder window).

First, define instance with editor set to "form":

```
fm_elfinder:
    instances:
        form:
            locale: %locale% # defaults to current request locale
            editor: form # other choices are tinymce or simple, and form
            show_hidden: false # defaults to false
            fullscreen: true # defaults true, applies to simple and ckeditor editors
            include_assets: true # disable if you want to handle loading of the javascript and css assets yourself
            compression: false # enable if you configured the uglifycss and uglifyjs2 assetic filters and want compression
            connector:
                debug: false # defaults to false
                roots:       # at least one root must be defined
                    uploads:
                        driver: LocalFileSystem
                        path: uploads
                        upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                        upload_deny: ['all']
                        upload_max_size: 2M
```

On second step, add to your form builder (or form class), elfinder type, and pass instance and `enable` parameters:

```php
$form = $this->createFormBuilder()
    ->add('elfinder','elfinder', array('instance'=>'form', 'enable'=>true))
    ->getForm();
```

Third step, render form with twig as usual, please note that you need to include **jQuery (>=1.7)** library on your page

```jinja
<form action="" method="post" {{ form_enctype(form) }}>
        {{ form_widget(form) }}
        <input type="submit" />
    </form>
```

## CKEditor integration

Mostly filebrowsers used with WYSIWYG editors to upload images and other files. There are two bundles to work with CKEditor
available: [TrsteelCKEditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle) and [IvoryCKEditorBundle](https://github.com/egeloen/IvoryCKEditorBundle)
Both will work with this bundle.

**Step 1: Installation**

Install both bundles according README files

**Step 2: Configure CKEditor setting via settings.yml or through form builder:**

```yaml
trsteel_ckeditor:
    ...
    filebrowser_image_browse_url:
        route: elfinder
        route_parameters:
             instance: ckeditor
```

or if you prefer Ivory CKEditor Bundle

```yaml
ivory_ck_editor:
    default_config: default
    configs:
        default:
            filebrowserBrowseRoute: elfinder
            filebrowserBrowseRouteParameters:
                instance: ckeditor

```

Note that instance name should be the same as configured in elfinder bundle

```php

<?php
// applies to Ivory CKEditor Bundle
$form = $this->createFormBuilder()
            ->add('content', 'ckeditor', array(
                'config' => array(
                    'filebrowser_image_browse_url' => array(
                        'route'            => 'elfinder',
                        'route_parameters' => array('instance' => 'ckeditor'),
                    ),
                ),
            ))
            ->getForm()
;
```

ElFinder will be available under Insert Image dialog

## TinyMCE integration

You can integrate TinyMCE byself or use Bundles that already add TinyMCE functionality to your Symfony project.
Below instruction how to integrate [FMElfinderBundle](https://github.com/helios-ag/FMElfinderBundle) with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)

How to use ElfinderBundle with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)

### TinyMCE 3.x
Instruction for version 0.2.1 (TinyMCE 3.x)
Download bundles, configure, dump and install assets as written in installation steps

**Configuration**

Update the editor property in your app/config.yml
Set TinyMce popup path:
```yaml
fm_elfinder:
    editor: tinymce
    tinymce_popup_path: "asset[bundles/stfalcontinymce/vendor/tiny_mce/tiny_mce_popup.js]"
```
Under tinymce configuration node, theme configuration, add:
file_browser_callback : 'elFinderBrowser'

```yaml
stfalcon_tinymce:
    theme:
        simple:
            file_browser_callback : 'elFinderBrowser'
```

after (  {{ tinymce_init() }} ) function call
place ElfinderBundle's function:
 
```jinja
{{ elfinder_tinymce_init('instance_name', {'width':'900', 'height': '450', 'title':'ElFinder 2.0'}) }}
```

as shown below

```jinja
{{ tinymce_init() }}
{{ elfinder_tinymce_init('instance_name') }}
```

instance_name is an instance of elfinder's configuration

### TinyMCE 4.x

Update the editor property in your app/config.yml

```yaml
 fm_elfinder:
     editor: tinymce4
```

Under tinymce configuration node, theme configuration, add:
file_browser_callback : elFinderBrowser

```yaml
stfalcon_tinymce:
     theme:
         simple:
             file_browser_callback : elFinderBrowser
```

before (  {{ tinymce_init() }} ) function call (order is important)
place ElfinderBundle's function: 
{{ elfinder_tinymce_init4('instance_name', {'width':'900', 'height': '450', 'title':'ElFinder 2.0'} ) }}
as shown below

```jinja
     {{ elfinder_tinymce_init4('instance_name') }}
     {{ tinymce_init() }}
```

instance_name is instance of elfinder configuration

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

## Plugins

ElFinder comes with few plugins, like auto-resize, which can be enabled, by the following configuration:

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
          bind:
              upload.presave:
                  - Plugin.AutoResize.onUpLoadPreSave
          plugin:
              AutoResize: # global resize options, applies to root which don't have his own resize configuraion 
                  enable: true 
                  maxWidth: 750 
                  maxHeight: 750 
                  quality: 95 # JPEG image save quality
          roots:       # at least one root must be defined
              uploads:
                  driver: LocalFileSystem
                  path: uploads
                  plugin:
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
                  plugin:
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
                  plugin:
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


