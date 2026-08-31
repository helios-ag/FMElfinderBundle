(function (root, factory) {
    'use strict';

    var createPlugin = factory(root);

    if (typeof module === 'object' && module.exports) {
        module.exports = createPlugin;
    }

    if (root) {
        root.CKEditorElfinder = createPlugin;
    }
}(typeof window !== 'undefined' ? window : globalThis, function (root) {
    'use strict';

    function CKEditorElfinderUploadAdapter(loader, options) {
        this.loader = loader;
        this.options = options;
        this.xhr = null;
        this.aborted = false;
    }

    CKEditorElfinderUploadAdapter.prototype.upload = function () {
        var adapter = this;

        return this.loader.file.then(function (file) {
            return new Promise(function (resolve, reject) {
                if (adapter.aborted) {
                    reject();
                    return;
                }

                var xhr = new root.XMLHttpRequest();
                var data = new root.FormData();
                var genericMessage = "Couldn't upload file: " + file.name + '.';

                adapter.xhr = xhr;
                xhr.open('POST', adapter.options.uploadUrl, true);
                xhr.responseType = 'json';
                xhr.withCredentials = adapter.options.withCredentials === true;

                Object.keys(adapter.options.headers || {}).forEach(function (name) {
                    xhr.setRequestHeader(name, adapter.options.headers[name]);
                });

                xhr.upload.onprogress = function (event) {
                    if (event.lengthComputable) {
                        adapter.loader.uploadTotal = event.total;
                        adapter.loader.uploaded = event.loaded;
                    }
                };

                xhr.onload = function () {
                    var response = parseResponse(xhr);
                    var message = response && response.error && response.error.message;
                    var failedStatus = xhr.status < 200 || xhr.status >= 300;

                    if (failedStatus || !response || response.uploaded !== 1 || !response.url) {
                        reject(new Error(typeof message === 'string' && message !== '' ? message : genericMessage));
                        return;
                    }

                    resolve({ default: response.url });
                };
                xhr.onerror = function () {
                    reject(new Error(genericMessage));
                };
                xhr.ontimeout = xhr.onerror;
                xhr.onabort = function () {
                    reject();
                };

                data.append('upload', file);
                xhr.send(data);
            });
        });
    };

    CKEditorElfinderUploadAdapter.prototype.abort = function () {
        this.aborted = true;

        if (this.xhr) {
            this.xhr.abort();
        }
    };

    function parseResponse(xhr) {
        if (xhr.response && typeof xhr.response === 'object') {
            return xhr.response;
        }

        return null;
    }

    return function createCKEditorElfinderPlugin(options) {
        var normalizedOptions = options || {};

        return function CKEditorElfinderPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
                return new CKEditorElfinderUploadAdapter(loader, normalizedOptions);
            };
        };
    };
}));
