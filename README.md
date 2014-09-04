FMElfinderBundle
================

[ElFinder](https://github.com/Studio-42/elFinder) integration in Symfony2

[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17/mini.png)](https://insight.sensiolabs.com/projects/604032ab-06ef-4ee2-b0cf-bb5240b9cd17)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/helios-ag/fmelfinderbundle/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
[![Dependency Status](https://www.versioneye.com/user/projects/53db56ab4b3ac87d6a0001ff/badge.svg?style=flat)](https://www.versioneye.com/user/projects/53db56ab4b3ac87d6a0001ff)

[![Latest Stable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/v/stable.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle) [![Total Downloads](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/downloads.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle) [![Latest Unstable Version](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/v/unstable.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle) [![License](https://poser.pugx.org/helios-ag/fm-elfinder-bundle/license.svg)](https://packagist.org/packages/helios-ag/fm-elfinder-bundle)

elFinder is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

Recommended bundles to use with:

[TinymceBundle](https://github.com/stfalcon/TinymceBundle/)

[IvoryCKEditorBundle](https://github.com/egeloen/IvoryCKEditorBundle/)

[TrsteelCkeditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle)

- [Installation](#installation)
    - [Step 1: Installation](#step-1-installation)
    - [Step 2: Enable the bundle](#step-2-enable-the-bundle)
    - [Step 3: Import FMElfinderBundle routing file](#step-3-import-fmelfinderbundle-routing-file)
    - [Step 4: Configure your application's security.yml](#step-4-configure-your-applications-securityyml)
    - [Step 5: Configure assetic](#step-5-configure-assetic)
    - [Step 6: Install and dump assets](#step-6-install-and-dump-assets)
- [Basic configuration](#basic-configuration)
    - [Add configuration options to your config.yml](#add-configuration-options-to-your-configyml)
- [Configuring symfony service as a volumeDriver](#configuring-symfony-service-as-a-volumedriver)
- [ElFinder form type](#elfinder-form-type)
- [Using ElFinder with CKEditorBundle](#using-elfinder-with-ckeditorbundle)
    - [Step 1: Installation:](#step-1-installation-1)
    - [Step 2: Configure CKEditor setting via settings.yml or through form builder:](#step-2-configure-ckeditor-setting-via-settingsyml-or-through-form-builder)
- [Using ElFinder with TinyMCE](#using-elfinder-with-tinymce)
    - [Using ElfinderBundle with TinyMCEBundle](#using-elfinderbundle-with-tinymcebundle)
    - [Integrating with TinyMCE 4.x](#integrating-with-tinymce-4x)
- [Custom configuration provider](#custom-configuration-provider)

## Installation

To install this bundle, you'll need both the lib [ElFinderPHP](https://github.com/helios-ag/ElFinderPHP)
and this bundle.

This instruction explain how to setup bundle on Symfony 2.1 and newer

### Step 1: Installation

You have a choice to install bundle of version 1.x (1.x branch, [documentation](https://github.com/helios-ag/FMElfinderBundle/blob/1.0/README.md)) or 2.x branch
Add FMElfinderBundle in your composer.json:

```js
{
    "require": {
        "helios-ag/fm-elfinder-bundle": "2.x"
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
role ROLE_USER is provided as example.

### Step 5: Configure assetic

Under assetic section of your config.yml, add FMElfinderBundle to bundles section, also you can enable uglify js/css
compressor (also you need to enable option "compression: true" under bundle configuration).

Also set "use_controller: false".

``` yaml
assetic:
    debug:          %kernel.debug%
    use_controller: false
    bundles:        [FMElfinderBundle]
    java: /usr/bin/java
    filters:
        cssrewrite: ~
        uglifyjs2:
            # the path to the uglifyjs executable
            bin: /usr/bin/uglifyjs
        uglifycss:
            bin: /usr/bin/uglifycss
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
    instances:
        default:
            locale: %locale% # defaults to current request locale
            editor: ckeditor # other choices are tinymce or simple, and form
            fullscreen: true # defaults true, applies to simple and ckeditor editors
            include_assets: true # disable if you want to handle loading of the javascript and css assets yourself
            compression: false # enable if you configured the uglifycss and uglifyjs2 assetic filters and want compression
            connector:
                debug: false # defaults to false
                roots:       # at least one root must be defined
                    uploads:
                        showhidden: false # defaults to false
                        driver: LocalFileSystem
                        path: uploads
                        upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                        upload_deny: ['all']
                        upload_max_size: 2M
```
* default - instance of elfinder, can be used to define multiple configurations of ElFinder, allows simultaneous configuration for different types of WYSIWYG editors in your project
* path - define root directory for the files inside web/ directory, default is "uploads". Make sure to set proper write/read permissions to this directory.
* url - url to be prefixed to image path, for displaying. Can be either absolute or relative. If relative, it will be prefixed with the applications base-url. If left blank, url will be the base-url, appened with the value of the 'path' parameter
* driver - can be LocalFileSystem, FTP or MySQL2, currently supported only LocalFileSystem, default is LocalFileSystem
* locale - locale determines, which language, ElFinder will use, to translate user interface, default is current request locale
* editor - determines what template to render, to be compatible with WYSIWYG web editor, currently supported options are:
 "ckeditor", "tinymce" and "simple". How to configure CKEDitor and TinyMCE to work with this bundle, will be explained further in this document.
 "simple" can be used as standalone filebrowser for managing and uploading files.
* showhidden - hides directories starting with . (dot)
* connector - root node for defining options for elfinder root directiories and debug option
* roots - define

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

## Elfinder Form Type

Since version 2.1 of the bundle, bundle come with custom form type, that is simple <input type="text"/> , that provide
elfinder callback (opens Elfinder window), configuration for this form type is simple
First, define instance with editor setted to "form":
```
fm_elfinder:
    instances:
        form:
            locale: %locale% # defaults to current request locale
            editor: form # other choices are tinymce or simple, and form
            showhidden: false # defaults to false
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

On second step, add to your form builder (or form class), elfinder type, and pass instance and enable parameters:

```php
$form = $this->createFormBuilder()
    ->add('elfinder','elfinder', array('instance'=>'form', 'enable'=>true))
    ->getForm();
```

Render form with twig as usual:
```jinja
<form action="" method="post" {{ form_enctype(form) }}>
        {{ form_widget(form) }}
        <input type="submit" />
    </form>
```

## Using ElFinder with [CKEditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle)

Mostly filebrowsers used with WYSIWYG editors to upload images and other files. The example above will show how to
configure [CKEditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle) by Trsteel to work with ElFinder
through [FMElFinderBundle](https://github.com/helios-ag/FMElFinderBundle)
Also take a view to @egeloen [IvoryCKEditorBundle](https://github.com/egeloen/IvoryCKEditorBundle), which includes
[configuration guide](https://github.com/egeloen/IvoryCKEditorBundle/blob/master/Resources/doc/file_browse_upload.md) for both bundles

### Step 1: Installation:

Install both bundles according README files

### Step 2: Configure CKEditor setting via settings.yml or through form builder:

```yml
trsteel_ckeditor:
    ...
    filebrowser_image_browse_url:
        route: elfinder
        route_parameters:
             instance: ckeditor
```

or if you prefer Ivory CKEditor Bundle

```yml
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

$form = $this->createFormBuilder()
            ->add('content', 'ckeditor', array(
                'filebrowser_image_browse_url' => array(
                    'route'            => 'elfinder',
                    'route_parameters' => array('instance' => 'ckeditor'),
                ),
            ))
            ->getForm()
;
```

ElFinder will be available under Insert Image dialog

## Using ElFinder with TinyMCE

You can integrate TinyMCE byself or use Bundles that already add TinyMCE functionality to your Symfony project.
Below instruction how to integrate [FMElfinderBundle](https://github.com/helios-ag/FMElfinderBundle) with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)

### Using ElfinderBundle with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)
Instruction for bundle version 0.2.1 (TinyMCE 3.x), instruction for TinyMCE 4.x, you can find at the end of this
document.
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
place ElfinderBundle's function: {{ elfinder_tinymce_init('instance_name', {'width':'900', 'height': '450', 'title':'ElFinder 2.0'}) }}
as shown below

```jinja
{{ tinymce_init() }}
{{ elfinder_tinymce_init('instance_name') }}
```

instance_name is instance of elfinder's configuration

### Integrating with TinyMCE 4.x

Update the editor property in your app/config.yml
```yml
 fm_elfinder:
     editor: tinymce4
```
Under tinymce configuration node, theme configuration, add:
 file_browser_callback : elFinderBrowser

```yml
stfalcon_tinymce:
     theme:
         simple:
             file_browser_callback : elFinderBrowser
```

before (  {{ tinymce_init() }} ) function call (order is important)
place ElfinderBundle's function: {{ elfinder_tinymce_init4('instance_name', {'width':'900', 'height': '450', 'title':'ElFinder 2.0'} ) }}
as shown below
```jinja
     {{ elfinder_tinymce_init4('instance_name') }}
     {{ tinymce_init() }}
```

instance_name is instance of elfinder's configuration

That's all, Elfinder is configured to work with TinyMCE editor.

#Custom configuration provider

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

Configuration class must implement interface ElFinderConfigurationProviderInterface

method getConfiguration($instance) should return array of parameters compatible with ElFinder bundle configuration


Manual integration guide can be found [here](/INTEGRATION_GUIDE.md)

##Todo

More tests, gridfs support, complex user intergration(?)

##Changelog
### 2.1
* New Elfinder form type, provides basic <input type="text"/> field with Elfinder callback

### 2.0
* Multiple instances of elfinder configuration (allows multiple editors in one project, with different elfinder configurations)

### 1.4

* Made compressing assets optional. When compressing is active, it now uses
  uglify.js instead of YUI compressor.




