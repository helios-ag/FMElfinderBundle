# CKEditor integration

FMElfinderBundle can provide both the elFinder file browser and a direct paste/drop upload endpoint for CKEditor 4 and CKEditor 5.

## Configure an upload instance

Import the bundle routes if they are not already loaded:

```yaml
# config/routes/fm_elfinder.yaml
fm_elfinder:
    resource: '@FMElfinderBundle/Resources/config/routing.yaml'
```

Use a dedicated upload instance with exactly one readable root. The upload endpoint rejects an instance with zero or multiple readable roots because a background upload has no UI in which to choose a destination.

```yaml
# config/packages/fm_elfinder.yaml
fm_elfinder:
    instances:
        ckeditor_upload:
            editor: ckeditor
            connector:
                roots:
                    uploads:
                        driver: LocalFileSystem
                        path: '%kernel.project_dir%/public/uploads'
                        url: /uploads
                        start_path: '%kernel.project_dir%/public/uploads/articles'
                        upload_allow: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
                        upload_deny: ['all']
                        upload_order: ['deny', 'allow']
```

`start_path` is optional. When present, it must resolve to a readable directory inside the configured root; direct uploads are stored there. Otherwise they are stored at the root. Ensure the destination directory exists and is writable.

The relevant generated URLs are:

- browser: `/elfinder/ckeditor_upload`
- upload: `/efupload/ckeditor_upload` (POST only)

In Twig, prefer `path('elfinder', {instance: 'ckeditor_upload'})` and `path('ef_upload', {instance: 'ckeditor_upload'})` instead of hard-coding them.

## CKEditor 4

Enable the CKEditor 4 `uploadimage` plugin and point both paste/drop upload options to the upload route:

```js
CKEDITOR.replace('editor', {
    extraPlugins: 'uploadimage',
    filebrowserBrowseUrl: '/elfinder/ckeditor_upload',
    uploadUrl: '/efupload/ckeditor_upload',
    imageUploadUrl: '/efupload/ckeditor_upload'
});
```

This also works when the editor is configured through FOSCKEditorBundle; use the same URLs for `filebrowserBrowseUrl`, `uploadUrl`, and `imageUploadUrl` in its named config.

The endpoint returns the CKEditor 4 JSON format:

```json
{"uploaded":1,"fileName":"photo.png","url":"/uploads/articles/photo.png"}
```

An elFinder validation failure returns HTTP 200 with `uploaded: 0` and `error.message`, as expected by CKEditor 4.

## CKEditor 5

Prepare and publish the bundle assets:

```bash
bin/console elfinder:install
bin/console assets:install
```

Then load the standalone adapter and register its plugin with your CKEditor 5 build:

```html
<script src="/bundles/fmelfinder/js/ckeditorElfinder.js"></script>
<script>
ClassicEditor.create(document.querySelector('#editor'), {
    extraPlugins: [CKEditorElfinder({
        uploadUrl: '/efupload/ckeditor_upload',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
    })]
});
</script>
```

The adapter sends the selected file as multipart field `upload`, reports progress to CKEditor, and supports these options:

```js
CKEditorElfinder({
    uploadUrl: '/efupload/ckeditor_upload',
    headers: { 'X-CSRF-TOKEN': 'token' },
    withCredentials: true
})
```

`withCredentials` defaults to `false`. Set it only when cross-origin cookie credentials are required. Header values are copied to every upload request.

If your CKEditor 5 build already includes the official Simple Upload Adapter plugin, the endpoint can be used without the bundle JavaScript adapter. Add `response_format=ckeditor5` so a successful elFinder warning is not exposed as an `error`, which the official adapter treats as a failed upload:

```js
ClassicEditor.create(document.querySelector('#editor'), {
    simpleUpload: {
        uploadUrl: '/efupload/ckeditor_upload?response_format=ckeditor5',
        headers: { 'X-CSRF-TOKEN': 'token' },
        withCredentials: false
    }
});
```

CKEditor sends one request per pasted or dropped image; several images are therefore uploaded independently.

## Security and troubleshooting

The upload route deliberately delegates file type, name, size, and write-permission checks to the configured elFinder volume. Protect `/efupload` with your Symfony firewall as needed. The bundle does not create or validate an application-specific CSRF token automatically; add one through CKEditor headers and validate it in your application when your security model requires it.

- HTTP 400 means the request or upload instance cannot be used, for example a missing/invalid `upload` field, a custom loader without upload support, or zero/multiple readable roots.
- HTTP 404 means the requested instance does not exist.
- HTTP 200 with `uploaded: 0` means elFinder processed the request but rejected the file according to MIME, name, size, access, or filesystem rules.
- A successful response must contain a non-empty public URL. Configure the root `url` option when files must be inserted into editor content.
