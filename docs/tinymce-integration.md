# TinyMCE integration

You can integrate TinyMCE byself or use Bundles that already add TinyMCE functionality to your Symfony project.
Below instruction how to integrate [FMElfinderBundle](https://github.com/helios-ag/FMElfinderBundle) with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)

How to use ElfinderBundle with [TinyMCEBundle](https://github.com/stfalcon/TinymceBundle)

## TinyMCE 3.x
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

## TinyMCE 4.x

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

## TinyMCE 5–8

TinyMCE 5 replaced `file_browser_callback` with `file_picker_callback`. TinyMCE 6
also changed `images_upload_handler` from callbacks to a Promise. FMElfinderBundle
uses one adapter for TinyMCE 5–8 and selects the correct upload API at runtime.

Configure a dedicated elFinder instance:

```yaml
# config/packages/fm_elfinder.yaml
fm_elfinder:
    instances:
        images:
            editor: tinymce5
            connector:
                roots:
                    uploads:
                        driver: LocalFileSystem
                        path: uploads
                        upload_allow: ['image/png', 'image/jpeg', 'image/gif']
                        upload_deny: ['all']
```

Install the bundle assets with `bin/console elfinder:install`. The page must load
jQuery, jQuery UI, and the elFinder styles and script before rendering the Twig
helper. Use the versions already managed by your application; the bundle does not
replace them with CDN copies.

The helper loads its adapter from `fm_elfinder.assets_path` (the same prefix the
elFinder manager page uses). With the default `elfinder:install` layout the files
live in the web-root `bundles/` directory, so set `assets_path: /` unless your
application serves bundle assets from a custom location.

```twig
<link rel="stylesheet" href="{{ asset('/bundles/fmelfinder/css/elfinder.min.css') }}">
<link rel="stylesheet" href="{{ asset('/bundles/fmelfinder/css/theme.css') }}">

{# Load your application-owned jQuery and jQuery UI here. #}
<script src="{{ asset('/bundles/fmelfinder/js/elfinder.min.js') }}"></script>

{{ elfinder_tinymce_init5('images', 'fmElfinderImages') }}

<script>
    tinymce.init({
        selector: '.tinymce',
        plugins: 'image link media',
        toolbar: 'link image media',
        file_picker_types: 'file image media',
        file_picker_callback: window.fmElfinderImages.browser,
        images_upload_handler: window.fmElfinderImages.uploadHandler,
        automatic_uploads: true,
        paste_data_images: true
    });
</script>
```

The same configuration works with TinyMCE 5 and TinyMCE 6–8. TinyMCE 5 receives
its legacy `success` and `failure` callbacks; TinyMCE 6–8 receive a Promise.
Selecting files, images, and media uses `file_picker_callback`. Pasted, dropped,
or locally selected images use `images_upload_handler` and upload into the current
elFinder directory.

### Home folders and multiple instances

Pass `homeFolder` in the helper options to restrict the integration to a configured
home folder:

```twig
{{ elfinder_tinymce_init5('images', 'fmElfinderArticles', {
    homeFolder: 'articles'
}) }}
```

Use a different global name for each integration on the same page:

```twig
{{ elfinder_tinymce_init5('images', 'fmElfinderImages') }}
{{ elfinder_tinymce_init5('documents', 'fmElfinderDocuments') }}
```

The adapter normally derives the upload target from the current elFinder directory.
Applications that intentionally use a stable custom `volume_id` may pass the
advanced `uploadTargetHash` option, but raw volume hashes should not be used as a
portable configuration value.
