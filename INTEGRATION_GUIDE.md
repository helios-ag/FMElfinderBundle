# Manual integration of ElfinderBundle with WYSIWYG editors

1. [CKEditor](## Using ElFinder with CKEditor)
2. [TinyMCE](## How to integrate ElFinder bundle to work with TinyMCE editor)

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

## How to integrate ElFinder bundle to work with TinyMCE editor

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

The bundle provides a basic TinyMCE view. If you need to change some options (regarding the UI or anything else), just
copy the file FMElFinderBundle/Resources/views/Elfinder/tinymce.html.twig to
app/Resources/FMElfinderBundle/views/Elfinder/tinymce.html.twig and change what you need.

