Flysystem example configuration
===============================

You will need library files to work with Flysystem

Below example of configuring flysystem:

```yaml
fm_elfinder:
    instances:
        default:
            locale: %locale% # defaults to current request locale
            editor: ckeditor # other options are tinymce, tinymce4, form, custom and simple
            fullscreen: true # defaults true, applies to simple and ckeditor editors
            include_assets: true # disable if you want to handle loading of the javascript and css assets yourself
            connector:
                debug: false # defaults to false
                roots:       # at least one root must be defined
                      local:
                          driver: Flysystem
                          path: uploads
                          flysystem:
                              type: local
                              options:
                                local:
                                    path: %kernel.root_dir%/../web/uploads/
                          upload_allow: ['all']
                          #upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                          #upload_deny: ['all']
                          upload_max_size: 2M
                      dropbox:
                          driver: Flysystem
                          path: uploads
                          flysystem:
                              type: dropbox
                              options:
                                dropbox:
                                    app: YourAppname // see dropbox developer site
                                    token: ToKeN // can be aquired via developer console
                          upload_allow: ['all']
                      aws_s3:
                          driver: Flysystem
                          path: uploads
                          flysystem:
                              type: dropbox
                              options:
                                aws_s3_v2:
                                    key: 1
                                    secret: 1
                                    region: 1
                          upload_allow: ['all']
```                          

for more options see [ElFinderConfigurationReader.php](https://github.com/helios-ag/FMElfinderBundle/blob/master/Configuration/ElFinderConfigurationReader.php)

# Amazon S3 Configuration

To work with your S3 account and upload your files directly to S3 you have to set the following properties in your config file (config.yml).

```yaml
fm_elfinder:
    instances:
        default:
            locale: %locale%
            editor: ckeditor
            fullscreen: true
            include_assets: true
            relative_path: false
            connector:
                debug: false
                roots:
                    aws_s3:
                        driver: Flysystem
                        url: %aws.cdn.content.url%
                        flysystem:
                            type: aws_s3_v2
                            options:
                                aws_s3_v2:
                                    key: %aws.key%
                                    secret: %aws.secret%
                                    region: %aws.region%
                                    bucket_name: %aws.cdn.content.bucket%
                        upload_allow: ['image/png', 'image/jpg', 'image/jpeg']
                        upload_deny: ['all']
```

In that case you use an S3 domain so the **relative_path** have to be false and the url have to be set to your S3 or Cloudfront Domain if you have mapped S3 directly to your filesystem wirk with the relative path.

If you don't set the **relative_path** to false you get a wrong URL after inserting that image to CKEditor for example.
Define the variables in your config.yml or set it directly.


Also possible to define Flysystem adapters as services, it can be useful for self written adapters.
To use adapter as service, define it under 'services' node in your services.yml (or use DI)

```services.yml
services:
    local_adapter:
        class: League\Flysystem\Adapter\Local
        arguments: ["%kernel.root_dir%/../web/uploads/"]
```

and configure flysystem node accordingly to use it

```config.yml
fm_elfinder:
    instances:
        adapter:
            locale: %locale%
            editor: simple
            include_assets: true
            relative_path: true
            connector:
                roots:      
                    uploads:
                        show_hidden: false
                        driver: Flysystem # !set driver to Flysystem
                        flysystem:
                            type: custom # !set type to custom, it will tell bundle to use custom driver
                            adapter_service: 'local_adapter' # select previously configured adapter service
                            options:
                        path: ''
                        upload_allow: ['all']
```                        
