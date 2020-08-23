FMElfinderBundle
================

[ElFinder](https://github.com/Studio-42/elFinder) integration in Symfony

### Code Quality Assurance ###

| SL Insight | TravisCI | Coverage| License | Version |
| ------------------------|-------------|-----------------|-----------------|----------------|
|[![SensioLabsInsight](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17/mini.png)](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17)|[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)|[![Coverage Status](https://coveralls.io/repos/helios-ag/FMElfinderBundle/badge.svg?branch=master&service=github)](https://coveralls.io/github/helios-ag/FMElfinderBundle?branch=master)|[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)|[![Latest Stable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/v/stable.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)|


| Downloads |
|----------|
|[![Total Downloads](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/downloads.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)|


**elFinder** is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

Recommended bundles to use with:


| FMTinyMCEBundle | FOSCKEditorBundle | TrsteelCkeditorBundle| FMSummernoteBundle |
| ------------------------|-------------|-----------------|-----------------|
|[![FMTinyMCEBundle](https://img.shields.io/badge/FMTinyMCEBundle-download-brightgreen.svg)](https://github.com/helios-ag/FMTinyMCEBundle)|[![FOSCKEditorBundle](https://img.shields.io/badge/FOSCKEditorBundle-download-orange.svg)](https://github.com/FriendsOfSymfony/FOSCKEditorBundle)|[![TrsteelCkeditorBundle](https://img.shields.io/badge/TrsteelCkeditorBundle-download-blue.svg)](https://github.com/trsteel88/TrsteelCkeditorBundle)|[![FMSummernoteBundle](https://img.shields.io/badge/FMSummernoteBundle-download-brightgreen.svg)](https://github.com/helios-ag/summernote-bundle)|


**Table of contents**

- [Installation](#installation)
    - [Step 1: Installation](#step-1-installation)
    - [Step 2: Enable the bundle](#step-2-enable-the-bundle-optional)
    - [Step 3: Import FMElfinderBundle routing file](#step-3-import-fmelfinderbundle-routing-file)
    - [Step 4: Securing paths](#step-4-configure-your-applications-securityyaml)
- [Basic configuration](#basic-configuration)
    - [Add configuration options to your config.yaml](#add-configuration-options-to-your-configyaml)
    - [Use multiple upload folder by instance](#use-multiple-upload-folder-by-instance)
- [CORS support](/docs/cors-support.md)
- [Events listeners / subscribers](/docs/events-listeners-subscribers.md)
    - [Events](/docs/events-listeners-subscribers.md#events)
    - [Sub requests](/docs/events-listeners-subscribers.md#sub-requests)
- [Elfinder Form Type](/docs/elfinder-form-type.md)
- [CKEditor integration](/docs/ckeditor-integration.md)
    - [Installation](/docs/ckeditor-integration.md#step-1-installation)
    - [Configuration](/docs/ckeditor-integration.md#step-2-configure-ckeditor-setting-via-settingsyml-or-through-form-builder)
- [TinyMCE integration](/docs/tinymce-integration.md)
    - [Integration with TinyMCE 3](/docs/tinymce-integration.md#tinymce-3x)
    - [Integration with TinyMCE 4](/docs/tinymce-integration.md#tinymce-4x)
- [Summernote integration](/docs/summernote-integration.md)
- [Advanced configuration](/docs/advanced-configuration.md)
    - [Custom configuration provider](/docs/advanced-configuration.md#custom-configuration-provider)
    - [Custom loader](/docs/advanced-configuration.md#custom-loader)
    - [Plugins](/docs/advanced-configuration.md#plugins)
    - [Service as volume driver](/docs/advanced-configuration.md#symfony-service-as-a-volume-driver)
    - [Flysystem configuration](/docs/advanced-configuration.md#flysystem-configuration)
- [Configuration dump](/docs/configuration-dump.md)

## Installation

### Step 1: Installation

For Symfony Flex installation you need to enable community recipes:

```sh
  composer config extra.symfony.allow-contrib true
```

Install

```sh
  composer require helios-ag/fm-elfinder-bundle
```

Copy elfinder assets to public folder

```sh
  bin/console elfinder:install
```


### Step 2: Enable the bundle (Optional)

Enable the bundle in the kernel (not needed with symfony flex):

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
# app/config/routing.yaml
elfinder:
     resource: "@FMElfinderBundle/Resources/config/routing.yaml"
```

### Step 4: Configure your application's security.yaml

Secure ElFinder with access_control:
``` yaml
# app/config/security.yaml
security:

    //....
    access_control:
        - { path: ^/efconnect, role: ROLE_USER }
        - { path: ^/elfinder, role: ROLE_USER }

```

## Basic configuration

### Add configuration options to your config.yaml

```yaml
fm_elfinder:
    #assets_path: / # default is /assets, this is where css/js elfinder files are
    instances:
        default:
            locale: '%locale%' # defaults to current request locale
            editor: ckeditor # other options are tinymce, tinymce4, fm_tinymce, form, simple, custom
            relative_path: false #default true, will produce absolute urls to specified file(s) 
            #editor_template: custom template for your editor # default null
            #path_prefix: / # for setting custom assets path prefix, useful for non vhost configurations, i.e. http://127.0.0.1/mysite/
            #fullscreen: true|false # default is true, applies to simple and ckeditor editors
            #theme: smoothness # jquery theme, default is 'smoothness'
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
* **default** - instance of elfinder, can be used to define multiple configurations of ElFinder, allows simultaneous configuration for different types of WYSIWYG editors in your project
* **path** - define root directory for the files inside web/ directory, default is "uploads". Make sure to set proper write/read and owner permissions to this directory.
* **url** - url to be prefixed to image path, for displaying. Can be either `absolute` or `relative`. If absolute, you can use `{homeFolder}` string as placeholder which will be replaced automatically. If relative, it will be prefixed with the applications base-url. If left blank, url will be the base-url, append with the value of the 'path' parameter
* **driver** - can be LocalFileSystem, FTP or MySQL, Flysystem, S3 and etc, check class FM\ElfinderBundle\DependencyInjection\Configuration   
* **locale** - locale determines, which language, ElFinder will use, to translate user interface, default is current request locale
* **cors_support** - allows cross domain responses handling (default false)
* **editor** - determines what template to render, to be compatible with WYSIWYG web editor, currently supported options are:
 "ckeditor" (to use with FOSCKEditorBundle or TrsteelCkeditorBundle), "fm_tinymce" for tinymce4 (to use with FMTinyMCEBundle), "form" for form type, "simple" for standalone and "custom" for custom template.
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
convert camelCased option name to snake_case name.

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


## If I want more one home folder is possible ?

Yes you can with this configuration in your fm_elfinder.yaml


where_is_multi: 
    {connector}: {index of the connector}
multi_home_folder: true
folder_separator: {one char other of /}

### Exemple
fm_elfinder:
    instances:
        default:
            locale: fr # defaults to current request locale
            editor: ckeditor # other options are tinymce, tinymce4, fm_tinymce, form, simple, custom
            #editor_template: custom template for your editor # default null
            #path_prefix: http://localhost/ # for setting custom assets path prefix, useful for non vhost configurations, i.e. http://127.0.0.1/mysite/
            fullscreen: false # default is true, applies to simple and ckeditor editors
            where_is_multi: 
                roots: 0
            multi_home_folder: true
            folder_separator: "|"
            #theme: smoothness # jquery theme, default is 'smoothness'
            #visible_mime_types: ['image/png', 'image/jpg', 'image/jpeg'] # only show these mime types, defaults to show all
            connector:
                #debug: true|false # defaults to false
                roots:       # at least one root must be defined, defines root filemanager directories
                    uploads:
                        #show_hidden: true|false # defaults to false, hides dotfiles
                        driver: LocalFileSystem
                        path: "/var"
                        alias: Bibliothèque générale
                        upload_allow: ['all']
                        #upload_deny: ['all']
                        upload_max_size: 500M # also file upload sizes restricted in php.ini
                        attributes:
                            - {pattern: '..', read: true, write: true, locked: false}
                        #attributes: example of setting attributes permission
                        #    - { pattern: '/(.*?)/', read: true, write: false, locked: true }