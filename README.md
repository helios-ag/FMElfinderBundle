FMElfinderBundle
================

[ElFinder](https://github.com/Studio-42/elFinder) integration in Symfony2

[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)

[![Total Downloads](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/d/total.png)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)

[![Latest Stable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/version.png)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)


elFinder is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

## Installation

To install this bundle, you'll need both the lib [ElFinderPHP](https://github.com/helios-ag/ElFinderPHP)
and this bundle.

This instruction explain how to setup bundle on Symfony 2.1 and newer (2.2 and so on)

### Step 1: Installation

Add FMElfinderBundle in your composer.json:

```js
{
    "require": {
        "helios-ag/fm-elfinder-bundle": "1.1"
    }
}
```

Now tell composer to download the bundle by running the command:

``` bash
$ php composer.phar update helios-ag/fm-elfinder-bundle
```

### Step 2: Enable the bundle

Enable the bundle in the kernel:

``` php
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
ROLE_USER is provided as example.

### Step 5: Configure assetic

Under assetic section of your config.yml, add FMElfinderBundle to bundles section, also enable yui compressor.
Also set "use_controller: false".
``` yaml
assetic:
    debug:          %kernel.debug%
    use_controller: false
    bundles:        [FMElfinderBundle]
    java: /usr/bin/java
    filters:
        cssrewrite: ~
        yui_css:
            jar: %kernel.root_dir%/Resources/java/yuicompressor-2.4.7.jar
        yui_js:
            jar: %kernel.root_dir%/Resources/java/yuicompressor-2.4.7.jar
```

### Step 6: Install and dump assets

Install and dump assets using symfony built-in commands:

```sh
app/console assets:install web
app/console assetic:dump --env=prod
```

## Basic configuration

### Add configuration options to your config.yml

```
fm_elfinder:
    locale: %locale%
    editor: ckeditor # other choices are tinymce or simple
    showhidden: false # defaults to false
    fullscreen: true # defaults true, applies to simple and ckeditor editors
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

* path - define root directory for the files inside web/ directory, default is "uploads". Make sure to set proper write/read permissions to this directory.
* url - url to be prefixed to image path, for displaying. Can be either absolute or relative. If relative, it will be prefixed with the applications base-url. If left blank, url will be the base-url, appened with the value of the 'path' parameter
* driver - can be LocalFileSystem, FTP or MySQL2, currently supported only LocalFileSystem, default is LocalFileSystem
* locale - locale determines, which language, ElFinder will use, to translate user interface, default is en_US.UTF8
* editor - determines what template to render, to be compatible with WYSIWYG web editor, currently supported options are:
 "ckeditor", "tinymce" and "simple". How to configure CKEDitor and TinyMCE to work with this bundle, will be explained further in this document.
 "simple" can be used as standalone filebrowser for managing and uploading files.
* showhidden - hides directories starting with . (dot)

## Configuring symfony service as a volumeDriver
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

## Using ElFinder with [CKEditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle)

Mostly filebrowsers used with WYSIWYG editors to upload images and other files. The example above will show how to
configure [CKEditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle) by Trsteel to work with ElFinder
through [FMElFinderBundle](https://github.com/helios-ag/FMElFinderBundle)

### Step 1: Installation:

Install both bundles according README files

### Step 2: Configure CKEditor setting via settings.yml or through form builder:

```yml
trsteel_ckeditor:
    ...
    filebrowser_image_browse_url:
        route: elfinder
```

```php

<?php

$form = $this->createFormBuilder()
            ->add('content', 'ckeditor', array(
                'filebrowser_image_browse_url' => array(
                    'route'            => 'elfinder',
                    'route_parameters' => array(),
                ),
            ))
            ->getForm()
;
```

ElFinder will be available under Insert Image dialog

## Using ElFinder with TinyMCE

You can integrate TinyMCE byself or use Bundles that already add TinyMCE functionality to your Symfony project.
Below instruction how to integrate [FMElfinderBundle](https://github.com/helios-ag/FMElfinderBundle) with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)
Currently compatible with version 0.2.1 of TinyMCE bundle (require: "stfalcon/tinymce-bundle": "v0.2.1")
## Using ElfinderBundle with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)

Download both bundles, configure, dump and install assets as written in installation steps

### Configuration

Update the editor property in your app/config.yml
Set TinyMce popup path:
```yml
fm_elfinder:
    editor: tinymce
    tinymce_popup_path: "asset[bundles/stfalcontinymce/vendor/tiny_mce/tiny_mce_popup.js]"
```
Under tinymce configuration node, theme configuration, add:
file_browser_callback : 'elFinderBrowser'

```yml
stfalcon_tinymce:
    theme:
        simple:
            file_browser_callback : 'elFinderBrowser'
```

after (  {{ tinymce_init() }} ) function call
place ElfinderBundle's function: {{ elfinder_tinymce_init() }}
as shown below
```jinja
{{ tinymce_init() }}
{{ elfinder_tinymce_init() }}
```

Thats all, Elfinder is integrated into TinyMCE.

Manual integration guide can be found [here](/INTEGRATION_GUIDE.md)

