Flysystem example configuration
===============================

This bundle builds [Flysystem](https://flysystem.thephpleague.com/) **v3** filesystems, so the
elFinder volume driver must be Flysystem v3 compatible as well:

```sh
composer require "barryvdh/elfinder-flysystem-driver:^0.5"
```

Versions `0.5.0` and newer of that driver target Flysystem `^3` (older `0.1`–`0.3` releases
target Flysystem 1.x and will not work with this bundle). The driver also requires
`intervention/image`, which is used for image manipulation.

Depending which adapter you want to use, you also need to require the appropriate Flysystem v3
adapter package, for example:

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
                                    # Optional default options forwarded to every S3 request
                                    # performed by the adapter (e.g. ACL, StorageClass)
                                    options:
                                        ACL: 'public-read'
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
                                options:
                                    ACL: 'public-read'
                      upload_allow: ['all']
```

Any option set under `flysystem.options.aws_s3_v3.options` is forwarded as a default option to the
Flysystem v3 `AwsS3V3Adapter`, so it is applied to every request the adapter performs (uploads,
copies, etc.). This is typically used to set `ACL: 'public-read'` — without it, uploads fall back
to the AWS SDK defaults, which usually makes objects private.

In that case you use an S3 domain so the **relative_path** have to be false and the url have to be set to your S3 or Cloudfront Domain if you have mapped S3 directly to your filesystem work with the relative path.

If you don't set the **relative_path** to false you get a wrong URL after inserting that image to CKEditor for example.
Define the variables in your config.yml or set it directly.

If you don't use subdomain that contains your `bucket_name` and want to use your own **endpoint** make sure to set **use_path_style_endpoint** to `true` so that it will format the url correctly.

To prevent AWS PHP SDK from verifying the presence of a shared configuration in .aws/configuration make sure to set **use_aws_shared_config_files**  to `false`.

# Migrating from removed adapter types

The adapter types `azure`, `aws_s3_v2`, `copy_com`, `gridfs`, `zip` and `rackspace` are no longer
supported, because no Flysystem v3 implementation exists for them. Configuring one of these types
now fails with a clear error instead of silently mounting a broken volume.

If you used one of the removed types, migrate to either:

1. A Flysystem v3 adapter defined as a service, referenced through the `custom` type:

```services.yml
services:
    local_adapter:
        class: League\Flysystem\Local\LocalFilesystemAdapter
        arguments: ["%kernel.project_dir%/public/uploads/"]
```

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

2. A ready-made Flysystem v3 `Filesystem` service, referenced through the `filesystem` option.
   This is the recommended approach for any adapter (self-written or from another package),
   because it lets you configure the whole filesystem (visibility, caching, etc.) yourself:

```config.yml
fm_elfinder:
    instances:
        adapter:
            locale: %locale%
            editor: simple
            connector:
                roots:
                    uploads:
                        driver: Flysystem
                        flysystem:
                            filesystem: 'oneup_flysystem.my_filesystem'
                        path: ''
                        upload_allow: ['all']
```

The supported built-in types are `local`, `ftp`, `sftp`, `aws_s3_v3`, `dropbox` and `custom`.
