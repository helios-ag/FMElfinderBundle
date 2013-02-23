FMElfinderBundle
================

[ElFinder](/Studio-42/elFinder) integration in Symfony2

[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)
elFinder is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

DISCLAIMER: Elfinder Bundle depends on my copy of repository of Elfinder bundle. So my fork of repo, doesn't have latest
changes available to original repo. If you find that Elfinder lacked of some features let me know, and i will update
my repo. Thank you.

## Installation

To install this bundle, you'll need both the [ElFinder](/Studio-42/elFinder)
and this bundle.

This instruction explain how to setup bundle on Symfony 2.1

### Step 1: Installation

Add FMElfinderBundle in your composer.json:

```js
{
    "require": {
        "helios-ag/fm-elfinder-bundle": "*"
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
### Step 5: Configure assetic
Under assetic section of your config.yml, add to bundles, FMElfinderBundle
``` yaml
assetic:
    debug:          %kernel.debug%
    use_controller: false
    bundles:        [FMElfinderBundle]
```

### Step 6: Install and dump assets

Install and dump assets using symfony built-in commands:

```sh
app/console assets:install web
app/console assetic:dump
```

## Basic configuration

### Add configuration options to your config.yml

```
fm_elfinder:
    locale: %locale%
    editor: ckeditor # other choices are tinymce or simple
    showhidden: false
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

* path option - define root directory for the files inside web/ directory, default is "uploads". Make sure to set
* proper write/read permissions to this directory.
* driver - can be LocalFileSystem, FTP or MySQL2, currently supported only LocalFileSystem, default is LocalFileSystem
* locale - locale determines, which language, ElFinder will use, to translate user interface, default is en_US.UTF8
* editor - determines what template to render, to be compatible with WYSIWYG web editor, currently supported options are:
 "ckeditor", "tinymce" and "simple". How to configure CKEDitor and TinyMCE to work with this bundle, will be explained further in this document.
 "Simple" can be used as standalone filebrowser for managing and uploading files.
* showhidden - hides directories starting with . (dot)

## Using ElFinder with CKEditor

Mostly filebrowsers used with WYSIWYG editors to upload images and other files. The example above will show how to
configure CKEditor to work with ElFinder through [FMElFinderBundle]

### Step 1: Define class or id for the textarea inside your template:

```jinja
{# example.html.twig #}
////
<textarea id="ck" required="required" name="ckeditor"></textarea>

////
```

### Step 2: Place ElFinder URL into attribute "browser-url"

```jinja
{# example.html.twig #}
////
<textarea id="ck" required="required" name="ckeditor" browser-url="{{path('elfinder')}}"></textarea>

////
```

### Step 3: Add necessary javascript files with ckeditor library, and add configuration/initialisation script inside your
template:
```jinja
{# example.html.twig #}
////
<script type="text/javascript" charset="utf-8">
{
    var action = $('textarea').attr('browser-url');
    var config = {
            toolbar : 'Full',
            uiColor : 'White',
            filebrowserBrowseUrl : action+'?mode=file',
            filebrowserImageBrowseUrl : action+'?mode=image',
            filebrowserFlashBrowseUrl : action+'?mode=flash',
            filebrowserImageWindowWidth : '950',
            filebrowserImageWindowHeight : '520',
            filebrowserWindowWidth : '950',
            filebrowserWindowHeight : '520',

    };
    ];
    $('textarea#ckeditor').ckeditor(config);
})

////
```

After that, you can use "Browse on server" ability that can be found under insert image or insert link dialogs.

## Using ElFinder with TinyMCE


You can integrate TinyMCE byself or use Bundles that already add TinyMCE functionality to your Symfony project.
Below instruction how to integrate [FMElfinderBundle](/helios-ag/FMElfinderBundle) with [TinyMCEBundle](/stfalcon/TinymceBundle)

## Using ElfinderBundle with [TinyMCEBundle](/stfalcon/TinymceBundle)

Download both bundles, configure, dump and install assets as written in installation steps


### Configuration

Update the editor property in your app/config.yml
Set TinyMce popup path:
```yaml
fm_elfinder:
    editor: tinymce
    tinymce_popup_path: "asset[bundles/stfalcontinymce/vendor/tiny_mce/tiny_mce_popup.js]"
```
Under tinymce configuration node, theme configuration, add file_browser_callback
file_browser_callback : 'elFinderBrowser'

```yaml
stfalcon_tinymce:
    theme:
        simple:
            file_browser_callback : 'elFinderBrowser'
```

near tinymce initialisation twig extension (  {{ tinymce_init() }} )
place ElfinderBundle's initialisation twig functions: {{elfinder_tinymce_init}}

```jinja
{{ tinymce_init() }}
{{ elfinder_tinymce_init }}
```

Manual integration guide located below.

### Integration

First, follow the elFinder / TinyMCE integration guide (https://github.com/Studio-42/elFinder/wiki/Integration-with-TinyMCE-3.x).
Then update the elFinderBrowser function to use the action provided by this bundle.

```jinja
////
function elFinderBrowser (field_name, url, type, win) {
  var elfinder_url = "{{ url('elfinder') }}"; // use an absolute path
  tinyMCE.activeEditor.windowManager.open({
  ...
////
```
### Configuration

Update the editor property in your app/config.yml

```
fm_elfinder:
    editor: tinymce
    tinymce_popup_path: 'asset[bundle/acmedemo/path/to/tiny_mce/tiny_mce_popup.js]'
```

### Integration

First, follow the elFinder / TinyMCE integration guide (https://github.com/Studio-42/elFinder/wiki/Integration-with-TinyMCE-3.x).
Then update the elFinderBrowser function to use the action provided by this bundle.

```jinja
////
function elFinderBrowser (field_name, url, type, win) {
  var elfinder_url = "{{ url('elfinder') }}"; // use an absolute path
  tinyMCE.activeEditor.windowManager.open({
  ...
////
```

### Customization

The bundle provides a basic TinyMCE view. If you need to change some options (regarding the UI or anything else), just copy the file FMElFinderBundle/Resources/views/Elfinder/tinymce.html.twig to app/Resources/FMElfinderBundle/views/Elfinder/tinymce.html.twig and change what you need.

