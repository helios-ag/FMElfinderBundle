FMElfinderBundle
================

[ElFinder](https://github.com/Studio-42/elFinder) integration in Symfony

### Code Quality Assurance ###

| Gitter | SL Insight | TravisCI | Coverage| License | Version |
|----------------| ------------------------|-------------|-----------------|-----------------|----------------|
|[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/helios-ag/FMElfinderBundle)|[![SensioLabsInsight](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17/mini.png)](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17)|[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)|[![Coverage Status](https://coveralls.io/repos/helios-ag/FMElfinderBundle/badge.svg?branch=master&service=github)](https://coveralls.io/github/helios-ag/FMElfinderBundle?branch=master)|[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)|[![Latest Stable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/v/stable.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)|


|Dependencies| Downloads |
|-------------|----------|
|[![Dependency Status](https://www.versioneye.com/user/projects/53db56ae4b3ac897b60001d4/badge.svg?style=flat)](https://www.versioneye.com/user/projects/53db56ae4b3ac897b60001d4)|[![Total Downloads](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/downloads.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)|


**elFinder** is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

Recommended bundles to use with:


| FMTinyMCEBundle | IvoryCKEditorBundle | TrsteelCkeditorBundle| FMSummernoteBundle |
| ------------------------|-------------|-----------------|-----------------|
|[![FMTinyMCEBundle](https://img.shields.io/badge/FMTinyMCEBundle-download-brightgreen.svg)](https://github.com/helios-ag/FMTinyMCEBundle)|[![IvoryCKEditorBundle](https://img.shields.io/badge/IvoryCKEditorBundle-download-orange.svg)](https://github.com/egeloen/IvoryCKEditorBundle)|[![TrsteelCkeditorBundle](https://img.shields.io/badge/TrsteelCkeditorBundle-download-blue.svg)](https://github.com/trsteel88/TrsteelCkeditorBundle)|[![FMSummernoteBundle](https://img.shields.io/badge/FMSummernoteBundle-download-brightgreen.svg)](https://github.com/helios-ag/summernote-bundle)|


**Table of contents**

- [Installation](#installation)
    - [Step 1: Installation](#step-1-installation)
    - [Step 2: Enable the bundle](#step-2-enable-the-bundle)
    - [Step 3: Import FMElfinderBundle routing file](#step-3-import-fmelfinderbundle-routing-file)
    - [Step 4: Securing paths](#step-4-configure-your-applications-securityyml)
- [Basic configuration](#basic-configuration)
    - [Add configuration options to your config.yml](#add-configuration-options-to-your-configyml)
    - [Use multiple upload folder by instance](#use-multiple-upload-folder-by-instance)
- [CORS support](/Resources/doc/cors-support.md)
- [Events listeners / subscribers](/Resources/doc/events-listeners-subscribers.md)
    - [Events](/Resources/doc/events-listeners-subscribers.md#events)
    - [Sub requests](/Resources/doc/events-listeners-subscribers.md#sub-requests)
- [Elfinder Form Type](/Resources/doc/elfinder-form-type.md)
- [CKEditor integration](/Resources/doc/ckeditor-integration.md)
    - [Installation](/Resources/doc/ckeditor-integration.md#step-1-installation)
    - [Configuration](/Resources/doc/ckeditor-integration.md#step-2-configure-ckeditor-setting-via-settingsyml-or-through-form-builder)
- [TinyMCE integration](/Resources/doc/tinymce-integration.md)
    - [Integration with TinyMCE 3](/Resources/doc/tinymce-integration.md#tinymce-3x)
    - [Integration with TinyMCE 4](/Resources/doc/tinymce-integration.md#tinymce-4x)
- [Summernote integration](/Resources/doc/summernote-integration.md)
- [Advanced configuration](/Resources/doc/advanced-configuration.md)
    - [Custom configuration provider](/Resources/doc/advanced-configuration.md#custom-configuration-provider)
    - [Custom loader](/Resources/doc/advanced-configuration.md#custom-loader)
    - [Plugins](/Resources/doc/advanced-configuration.md#plugins)
    - [Service as volume driver](/Resources/doc/advanced-configuration.md#symfony-service-as-a-volume-driver)
    - [Flysystem configuration](/Resources/doc/advanced-configuration.md#flysystem-configuration)

## Installation

### Step 1: Installation

For Symfony Flex installation you need to enable community recipes:

```sh
  composer config extra.symfony.allow-contrib true
```

And install

```sh
  composer require helios-ag/fm-elfinder-bundle
```

Other way (non flex way) is to add FMElFinderBundle to your composer.json

```json
{
    "require": {
        "helios-ag/fm-elfinder-bundle": "~8",
    }
}
```

also add **component-dir** under **config** node of composer.json

(also you can manually copy assets to this directory)

```json
{
    "config": {
        "component-dir": "web/assets"
    }
}
```

Now tell composer to download the bundle by running the command:


```sh
composer update helios-ag/fm-elfinder-bundle
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

## Basic configuration

### Add configuration options to your config.yml

```yaml
fm_elfinder:
    #assets_path: / # default is /assets, this is where css/js elfinder files are
    instances:
        default:
            locale: %locale% # defaults to current request locale
            editor: ckeditor # other options are tinymce, tinymce4, fm_tinymce, form, simple, custom
            #editor_template: custom template for your editor # default null
            #path_prefix: / # for setting custom assets path prefix, useful for non vhost configurations, i.e. http://127.0.0.1/mysite/
            #fullscreen: true|false # default is true, applies to simple and ckeditor editors
            #theme: smoothness # jquery theme, default is 'smoothness'
            include_assets: true # disable if you want to manage loading of javascript and css assets manually
            #visible_mime_types: ['image/png', 'image/jpg', 'image/jpeg'] # only show these mime types, defaults to show all
            connector:
                #debug: true|false # defaults to false
                roots:       # at least one root must be defined, defines root filemanager directories
                    uploads:
                        #show_hidden: true|false # defaults to false, hides dotfiles
                        driver: LocalFileSystem
                        path: uploads
                        upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                        upload_deny: ['all']
                        upload_max_size: 2M # also file upload sizes restricted in php.ini
                        #attributes: example of setting attributes permission
                        #    - { pattern: '/(.*?)/', read: true, write: false, locked: true }
```
* **assets_path** - this is where css/js files of the bundle are, this options should be the same as composers `component-dir` option.
* **default** - instance of elfinder, can be used to define multiple configurations of ElFinder, allows simultaneous configuration for different types of WYSIWYG editors in your project
* **path** - define root directory for the files inside web/ directory, default is "uploads". Make sure to set proper write/read and owner permissions to this directory.
* **url** - url to be prefixed to image path, for displaying. Can be either `absolute` or `relative`. If relative, it will be prefixed with the applications base-url. If left blank, url will be the base-url, append with the value of the 'path' parameter
* **driver** - can be LocalFileSystem, FTP or MySQL, Flysystem, S3 and etc, check class FM\ElfinderBundle\DependencyInjection\Configuration   
* **locale** - locale determines, which language, ElFinder will use, to translate user interface, default is current request locale
* **cors_support** - allows cross domain responses handling (default false)
* **editor** - determines what template to render, to be compatible with WYSIWYG web editor, currently supported options are:
 "ckeditor" (to use with IvoryCKEditorBundle or TrsteelCkeditorBundle), "fm_tinymce" for tinymce4 (to use with FMTinyMCEBundle), "form" for form type, "simple" for standalone and "custom" for custom template.
 How to configure CKEDitor and TinyMCE to work with this bundle, will be explained further in this document.
* **editor_template** - define template to render when editor is set to "custom".
* **connector** - root node for defining options for elfinder root directories.
* **roots** - define "virtual directories" that reflect directories in your project.
* **path_prefix** - path prefix with relative_path enabled, default is slash ('/')
* **show_hidden** - show files and folders that starts from . (dot)
* **driver** - driver type, LocalFileSystem, Dropbox, FTP
* **volume_id** - (optional) can be used to force a volume id when mounting volume (default auto-increments). If provided, it must be an integer bigger than 0.
* **alias** - directory alias
* **path** - directory that contains files
* **upload_allow**: ['image/png', 'image/jpg', 'image/jpeg']
* **upload_deny**: ['all']
* **upload_max_size**: 2M

You can see the full list of roots options [here](https://github.com/Studio-42/elFinder/wiki/Connector-configuration-options#root-options "connector options list"). To use them,
convert camelCased option name to under_scored name.

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
