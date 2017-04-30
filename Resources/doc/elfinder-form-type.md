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

For Symfony 2.8 and up (Symfony 3 included) and PHP 5.5 and up

```php
// ...
use FM\ElfinderBundle\Form\Type\ElFinderType;
// ...

$form = $this->createFormBuilder()
    ->add('elfinder', ElFinderType::class, ['instance' => 'form', 'enable' => true])
    ->getForm();

```

For earlier versions of php use FQCN, i.e.

```php

use FM\ElfinderBundle\Form\Type\ElFinderType;

...

$form = $this->createFormBuilder()
    ->add('elfinder', ElFinderType, array('instance' => 'form', 'enable'=>true))
    ->getForm();
```

For Symfony < 2.8

```php

$form = $this->createFormBuilder()
    ->add('elfinder', 'elfinder', array('instance'=>'form', 'enable'=>true))
    ->getForm();

```

```jinja
<form action="" method="post" {{ form_enctype(form) }}>
    {{ form_widget(form) }}
    <input type="submit" />
</form>
```
