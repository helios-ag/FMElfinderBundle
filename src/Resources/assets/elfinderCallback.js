(function (root, factory) {
    'use strict';

    var adapter = factory(root);

    if (typeof module === 'object' && module.exports) {
        module.exports = adapter;
    }

    if (root) {
        root.FMElfinderCallback = adapter;
    }
}(typeof window !== 'undefined' ? window : globalThis, function (root) {
    'use strict';

    var callbackPattern = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/;

    function normalizeFiles(files, options) {
        var normalizedOptions = options || {};
        var list = Array.isArray(files) ? files : [files];

        return list.filter(function (file) {
            return file && typeof file === 'object';
        }).map(function (file) {
            return {
                url: normalizeUrl(typeof file.url === 'string' ? file.url : '', normalizedOptions),
                name: typeof file.name === 'string' ? file.name : '',
                mime: typeof file.mime === 'string' ? file.mime : '',
                size: Number.isFinite(file.size) ? file.size : null,
                hash: typeof file.hash === 'string' ? file.hash : ''
            };
        });
    }

    function normalizeUrl(url, options) {
        if (options.relativePath !== true) {
            return url;
        }

        var origin = typeof options.origin === 'string' ? options.origin.replace(/\/+$/, '') : '';
        var path = origin && url.indexOf(origin + '/') === 0 ? url.slice(origin.length + 1) : url;
        var prefix = typeof options.pathPrefix === 'string' ? options.pathPrefix : '';

        if (prefix === '') {
            return path;
        }

        return prefix.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '');
    }

    function selectedFiles(files, options) {
        var normalized = normalizeFiles(files, options);

        return options && options.multiple === true ? normalized : normalized.slice(0, 1);
    }

    function getOpener() {
        try {
            if (!root || !root.opener) {
                throw new Error('The picker opener is unavailable.');
            }

            return root.opener;
        } catch (error) {
            if (error && error.name === 'SecurityError') {
                throw new Error('The picker opener cannot be accessed across origins.');
            }

            throw error;
        }
    }

    function resolveCallback(opener, callbackPath) {
        if (typeof callbackPath !== 'string' || !callbackPattern.test(callbackPath)) {
            throw new Error('The configured callback path is invalid.');
        }

        var segments = callbackPath.split('.');
        var owner = opener;

        try {
            for (var index = 0; index < segments.length - 1; index += 1) {
                owner = owner[segments[index]];
                if (owner === null || (typeof owner !== 'object' && typeof owner !== 'function')) {
                    throw new Error('The configured callback was not found.');
                }
            }

            var callback = owner[segments[segments.length - 1]];
            if (typeof callback !== 'function') {
                if (typeof callback === 'undefined') {
                    throw new Error('The configured callback was not found.');
                }

                throw new Error('The configured callback is not callable.');
            }

            return { callback: callback, owner: owner };
        } catch (error) {
            if (error && error.name === 'SecurityError') {
                throw new Error('The picker opener cannot be accessed across origins.');
            }

            throw error;
        }
    }

    function callOpener(files, callbackPath, options) {
        var resolved = resolveCallback(getOpener(), callbackPath);

        resolved.callback.call(resolved.owner, selectedFiles(files, options || {}));
        root.close();
    }

    function updateOpenerField(files, elementId, options) {
        var opener = getOpener();
        var field;

        try {
            field = opener.document.getElementById(elementId);
        } catch (error) {
            throw new Error('The picker opener cannot be accessed across origins.');
        }

        if (!field) {
            throw new Error('The target form field was not found.');
        }

        var normalized = selectedFiles(files, options || {});
        var urls = normalized.map(function (file) {
            return file.url;
        });

        field.value = options && options.multiple === true ? JSON.stringify(urls) : (urls[0] || '');

        var EventConstructor = opener.Event || Event;
        field.dispatchEvent(new EventConstructor('input', { bubbles: true }));
        field.dispatchEvent(new EventConstructor('change', { bubbles: true }));
        root.close();
    }

    function showError(error, documentObject) {
        var message = error && error.message ? error.message : 'Unable to deliver the selected file.';
        var node = documentObject.getElementById('fm-elfinder-callback-error');

        if (!node && documentObject.createElement && documentObject.body) {
            node = documentObject.createElement('div');
            node.id = 'fm-elfinder-callback-error';
            documentObject.body.prepend(node);
        }

        if (node) {
            node.textContent = message;
            node.hidden = false;
        }
    }

    return Object.freeze({
        normalizeFiles: normalizeFiles,
        callOpener: callOpener,
        updateOpenerField: updateOpenerField,
        showError: showError
    });
}));
