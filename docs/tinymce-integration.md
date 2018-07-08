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
