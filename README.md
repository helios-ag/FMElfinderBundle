[ElFinder](/Studio-42/elFinder) integration in Symfony2

[![Build Status](https://secure.travis-ci.org/helios-ag/FMElfinderBundle.png)](http://travis-ci.org/helios-ag/FMElfinderBundle)
elFinder is an open-source file manager for web, written in JavaScript using jQuery UI.
Creation is inspired by simplicity and convenience of Finder program used in Mac OS X operating system.

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
# app/config/config.yml
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

### Configuration

Update the editor property in your app/config.yml

```
fm_elfinder:
    editor: tinymce
    tinymce_popup_path: 'path/to/tiny_mce/tiny_mce_popup.js'
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

## Using ElFinder with TrsteelCkeditorBundle

### Configuration

Remove or comment next options from trsteel_ckeditor section of symfony config file:

```

# app/config/config.yml

trsteel_ckeditor:
        # something...
        
        #filebrowser_browse_url : '#something',
        #filebrowser_image_browse_url : '#something',
        #filebrowser_flash_browse_url : '#something',
        #filebrowser_image_window_width : '#something',
        #filebrowser_image_window_height : '#something',
        #filebrowser_window_width : '#something',
        #filebrowser_window_height : '#something'
```

Remove those options from your form types if they exist.

Override TrsteelCkeditorBundle template ckeditor_widget.html.twig.

Just copy this template from vendor/Trsteel/ckeditor-bundle/Trsteel/CkeditorBundle/Resources/views/Form/ to 
app/Resources/TrsteelCkeditorBundle/views/Form folder and make next changes in ckeditor_widget.html.twig:

``` twig

{# Stuff code... #}

CKEDITOR.replace("{{ id }}",{

{# Stuff code... #}

{% if filebrowser_browse_url.route is defined and filebrowser_browse_url.route is not null %}
    filebrowserBrowseUrl: '{{ path(filebrowser_browse_url.route, filebrowser_browse_url.route_parameters) }}',
{% elseif filebrowser_browse_url.route is defined and filebrowser_browse_url.route is not null  %}
    filebrowserBrowseUrl: '{{ filebrowser_browse_url.url }}',
{% else %}
    filebrowserBrowseUrl: '{{ path('elfinder') ~ '?mode=file' }}',
{% endif %}

{# Stuff code... #}

{% if filebrowser_image_browse_url.route is defined and filebrowser_image_browse_url.route is not null %}
    filebrowserImageBrowseUrl: '{{ path(filebrowser_image_browse_url.route, filebrowser_image_browse_url.route_parameters) }}',
{% elseif filebrowser_image_browse_url.route is defined and filebrowser_image_browse_url.route is not null  %}
    filebrowserImageBrowseUrl: '{{ filebrowser_image_browse_url.url }}',
{% else %}
    filebrowserImageBrowseUrl: '{{ path('elfinder') ~ '?mode=image' }}',
{% endif %}

{# Stuff code... #}

filebrowserImageWindowWidth : '950',
filebrowserImageWindowHeight : '520',
filebrowserWindowWidth : '950',
filebrowserWindowHeight : '520',

{# Stuff code... #}

toolbar: {{ toolbar | json_encode | raw }}
});

{# Stuff code... #}

```

It`s work!