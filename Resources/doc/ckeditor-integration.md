# CKEditor integration

Mostly filebrowsers used with WYSIWYG editors to upload images and other files. There are two bundles to work with CKEditor
available: [TrsteelCKEditorBundle](https://github.com/trsteel88/TrsteelCkeditorBundle) and [IvoryCKEditorBundle](https://github.com/egeloen/IvoryCKEditorBundle)
Both will work with this bundle.

## Step 1: Installation

Install both bundles according README files

## Step 2: Configure CKEditor setting via settings.yml or through form builder:

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
            filebrowserBrowseRouteParameters: []
```

Note that instance name should be the same as configured in elfinder bundle

```php
// applies to Ivory CKEditor Bundle
$form = $this->createFormBuilder()
    ->add('content', 'ckeditor', array(
            'config' => array(
                'filebrowserBrowseRoute' => 'elfinder',
                'filebrowserBrowseRouteParameters' => array(
                    'instance' => 'default',
                    'homeFolder' => ''
                )
            ),
        ),
    ))
    ->getForm()
;
```

ElFinder will be available under Insert Image dialog
