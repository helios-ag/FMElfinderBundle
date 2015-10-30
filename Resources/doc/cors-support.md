# CORS support

If you want access connector URL from an other domain on the client side,
simply configure FMElFinder bundle as you used to, and add the `cors_support: true` option to the cross domain instance:
```yaml
# app/config/config.yml
fm_elfinder:
    instances:
        default:
            locale: %locale% # defaults to current request locale
            cors_support: true # allows cross domain responses handling (default false)
            editor: ckeditor # other options are tinymce, tinymce4, form, custom and simple,
            # ...
```

Then you have to add the CORS headers (`Access-Control-Allow-Origin`) to the response.
It can be easily done with [NelmioCORSBundle](https://github.com/nelmio/NelmioCorsBundle "NelmioCORSBundle") :

```yaml
# app/config/config.yml
nelmio_cors:
    defaults:
        allow_credentials: false
        allow_origin: []
        allow_headers: []
        allow_methods: []
        expose_headers: []
        max_age: 0
        hosts: []
    paths:
        '^/efconnect':
            allow_origin: ['*']
            allow_headers: ['X-Custom-Auth', 'Content-Type', 'X-Requested-With']
            allow_methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE']
            max_age: 3600
            allow_credentials: true
```
