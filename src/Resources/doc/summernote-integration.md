# Summernote integration

Update the editor property in your app/config.yml
Set Summernote editor type:

```yaml
fm_elfinder:
    editor: summernote
```

Edit template that contains summernote instance (the same way as for tinymce)

```jinja
{{ elfinder_summernote_init('instance_name') }}
{{ summernote_init() }}
```

Don't forget to enable elfinder plugin in summernote configuration.
