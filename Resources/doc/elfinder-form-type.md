# Elfinder Form Type

Bundle come with custom form type, `<input type="text"/>`, that provide elfinder callback (opens Elfinder window).

First, define instance with editor set to "form":

```
fm_elfinder:
    instances:
        form:
            locale: %locale% # defaults to current request locale
            editor: form # other choices are tinymce or simple, and form
            show_hidden: false # defaults to false
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

On second step, add to your form builder (or form class), elfinder type, and pass instance and `enable` parameters:

```php
$form = $this->createFormBuilder()
    ->add('elfinder','elfinder', array('instance'=>'form', 'enable'=>true))
    ->getForm();
```

Third step, render form with twig as usual, please note that you need to include **jQuery (>=1.7)** library on your page

```jinja
<form action="" method="post" {{ form_enctype(form) }}>
    {{ form_widget(form) }}
    <input type="submit" />
</form>
```
