Flysystem example configuration
===============================

You will need library files to work with Flysystem:

First add flysystem elfinder driver:

```sh
composer require barryvdh/elfinder-flysystem-driver
```

Depending which driver you want to use, you need require appropriate driver, for example:

```sh
composer require league/flysystem-aws-s3-v3
```

Below example of configuring flysystem:

```yaml
fm_elfinder:
    instances:
        default:
            locale: %locale% # defaults to current request locale
            editor: ckeditor # other options are tinymce, tinymce4, form, custom and simple
            fullscreen: true # defaults true, applies to simple and ckeditor editors
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
                          url: 'http://[my-bucket-name].s3.[region].amazonaws.com'
                          tmb_url: 'self' # For thumbnail generation on aws
                          flysystem:
                              type: aws_s3_v3
                              options:
                                aws_s3_v3:
                                    version: 'latest'
                                    key: 'MY_AWS_KEY'
                                    secret: 'MY_AWS_SECRET'
                                    region: 'MY_AWS_REGION'
                                    bucket_name: 'MY_BUCKET_NAME'
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
            relative_path: false
            connector:
                debug: false
                roots:
                  aws_s3:
                      driver: Flysystem
                      path: uploads
                      url: 'http://[my-bucket-name].s3.[region].amazonaws.com'
                      tmb_url: 'self' # For thumbnail generation on aws
                      flysystem:
                          type: aws_s3_v3
                          options:
                            aws_s3_v3:
                                version: 'latest'
                                key: 'MY_AWS_KEY'
                                secret: 'MY_AWS_SECRET'
                                region: 'MY_AWS_REGION'
                                bucket_name: 'MY_BUCKET_NAME'
                      upload_allow: ['all']
```

In that case you use an S3 domain so the **relative_path** have to be false and the url have to be set to your S3 or Cloudfront Domain if you have mapped S3 directly to your filesystem work with the relative path.

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
