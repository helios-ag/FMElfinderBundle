# Elfinder Form Type

## Configuration

Bundle come with custom form type, `<input type="text"/>`, that provide elfinder callback (opens Elfinder window).

First, define instance with editor set to "form":

```yaml
fm_elfinder:
    instances:
        form:
            locale: '%locale%' # defaults to current request locale
            editor: form # other choices are tinymce or simple, and form
            show_hidden: false # defaults to false
            fullscreen: true # defaults true, applies to simple and ckeditor editors
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

On the second step, add to your form builder (or form class), elfinder type, and pass instance and `enable` parameters:

```php
// ...
use FM\ElfinderBundle\Form\Type\ElFinderType;
// ...

$form = $this->createFormBuilder()
    ->add('elfinder', ElFinderType::class, ['instance' => 'form', 'enable' => true])
    ->getForm();

```


```jinja
<form action="" method="post" {{ form_enctype(form) }}>
    {{ form_widget(form) }}
    <input type="submit" />
</form>
```

## EasyAdmin 2.x integration
To get to work with EasyAdmin bundle (2.x):

```yaml
- { property: 'images', type: 'collection', label: 'Images', type_options: { allow_add: false, allow_delete: false, entry_type: 'FM\ElfinderBundle\Form\Type\ElFinderType' }}
```

and `easyadmin.yaml`

```yaml
design:
    form_theme:
      - '@EasyAdmin/form/bootstrap_4.html.twig'
      - '@FMElfinder/Form/elfinder_widget.html.twig'
``` 
