(function (root, factory) {
    'use strict';

    const TinyMCEElfinder = factory(root);

    root.tinymceElfinder = TinyMCEElfinder;

    if (typeof module === 'object' && module.exports) {
        module.exports = TinyMCEElfinder;
    }
})(typeof window === 'undefined' ? globalThis : window, function (root) {
    'use strict';

    return function TinyMCEElfinder(configuration) {
        const options = Object.assign({}, configuration || {});
        const $ = root.jQuery || root.$;
        const tinymce = root.tinymce;

        assertDependencies($, tinymce);

        const uploadTargetHash = options.uploadTargetHash || null;
        delete options.uploadTargetHash;

        const elfNode = $('<div/>');
        if (options.nodeId) {
            elfNode.attr('id', options.nodeId);
            delete options.nodeId;
        }

        const getfm = function () {
            return new Promise(function (resolve, reject) {
                let elf = elfNode.elfinder('instance');

                if (elf) {
                    resolve(elf);
                    return;
                }

                try {
                    elf = elfNode.dialogelfinder(Object.assign({
                        title: 'File Manager',
                        useBrowserHistory: false,
                        autoOpen: false,
                        width: '90%',
                        height: '90%',
                        commandsOptions: {
                            getfile: {
                                oncomplete: 'close'
                            }
                        },
                        bootCallback: function (fm) {
                            const containerClass = Number(tinymce.majorVersion) < 5 ? 'mce-container' : 'tox';
                            const container = $('body>.' + containerClass + ':last');
                            const zIndex = Number.parseInt(container.css('z-index'), 10);

                            if (Number.isFinite(zIndex)) {
                                fm.getUI().css('z-index', zIndex + 100);
                            }
                        },
                        getFileCallback: function () {}
                    }, options)).elfinder('instance');
                } catch (error) {
                    reject(error);
                    return;
                }

                if (elf) {
                    resolve(elf);
                } else {
                    reject(new Error('Unable to initialize the dialogelfinder instance.'));
                }
            });
        };

        this.browser = function (callback, value, meta) {
            getfm().then(function (fm) {
                let getfile = fm.getCommand('getfile');

                const register = function () {
                    fm.options.getFileCallback = getfile.callback = function (file) {
                        const url = fm.convAbsUrl(file.url);
                        const info = file.name + ' (' + fm.formatSize(file.size) + ')';

                        if (meta.filetype === 'file') {
                            callback(url, { text: info, title: info });
                        } else if (meta.filetype === 'image') {
                            callback(url, { alt: info });
                        } else if (meta.filetype === 'media') {
                            callback(url);
                        }
                    };
                    fm.getUI().dialogelfinder('open');
                };

                if (getfile) {
                    register();
                } else {
                    fm.bind('init', function () {
                        getfile = fm.getCommand('getfile');
                        register();
                    });
                }
            });

            return false;
        };

        const upload = function (blobInfo) {
            return getfm().then(function (fm) {
                if (uploadTargetHash || (fm.cwd() && fm.cwd().hash)) {
                    return fm;
                }

                return new Promise(function (resolve) {
                    fm.one('open', function () {
                        resolve(fm);
                    });
                });
            }).then(function (fm) {
                return new Promise(function (resolve, reject) {
                    const fmNode = fm.getUI();
                    const file = blobInfo.blob();
                    const target = uploadTargetHash || (fm.cwd() && fm.cwd().hash);
                    let clipdata = true;

                    if (!target) {
                        reject(translateError(fm, 'errFolderNotFound'));
                        return;
                    }

                    const onDialogOpened = function (event) {
                        const dialog = event.data.dialog || {};

                        if (dialog.hasClass('elfinder-dialog-error') || dialog.hasClass('elfinder-confirm-upload')) {
                            fmNode.dialogelfinder('open');
                            fm.unbind('dialogopened', onDialogOpened);
                        }
                    };
                    const closeDialog = function () {
                        if (!fm.getUI().find('.elfinder-dialog-error:visible,.elfinder-confirm-upload:visible').length) {
                            fmNode.dialogelfinder('close');
                        }
                    };

                    if (file.name) {
                        clipdata = undefined;
                    }

                    fm.bind('dialogopened', onDialogOpened).exec('upload', {
                        files: [file],
                        target: target,
                        clipdata: clipdata,
                        dropEvt: { altKey: true, ctrlKey: true }
                    }, undefined, target)
                        .done(function (data) {
                            if (!data.added || !data.added.length) {
                                reject(translateError(fm, data.error || 'errUpload'));
                                return;
                            }

                            const uploaded = data.added[0];
                            fm.url(uploaded.hash, { async: true })
                                .done(function (url) {
                                    const separator = url.match(/\?/) ? '&' : '?';
                                    resolve(fm.convAbsUrl(url + separator + '_t=' + uploaded.ts));
                                })
                                .fail(function () {
                                    reject(translateError(fm, 'errFileNotFound'));
                                });
                        })
                        .fail(function (error) {
                            reject(translateError(fm, error));
                        })
                        .always(function () {
                            fm.unbind('dialogopened', onDialogOpened);
                            closeDialog();
                        });
                });
            });
        };

        this.uploadHandler = function (blobInfo, successOrProgress, failure) {
            const promise = upload(blobInfo);

            if (Number(tinymce.majorVersion) < 6) {
                promise.then(successOrProgress).catch(failure);
                return;
            }

            return promise.catch(function (error) {
                return Promise.reject({ message: errorMessage(error) });
            });
        };
    };

    function assertDependencies($, tinymce) {
        if (typeof $ !== 'function') {
            throw new Error('jQuery is required by the TinyMCE elFinder integration.');
        }
        if (!tinymce) {
            throw new Error('TinyMCE is required by the TinyMCE elFinder integration.');
        }
        if (!$.fn || typeof $.fn.elfinder !== 'function') {
            throw new Error('The elFinder jQuery plugin is required by the TinyMCE elFinder integration.');
        }
        if (typeof $.fn.dialogelfinder !== 'function') {
            throw new Error('The dialogelfinder plugin is required by the TinyMCE elFinder integration.');
        }
    }

    function translateError(fm, error) {
        let translatedError = error;

        if (fm && typeof fm.parseError === 'function') {
            translatedError = fm.parseError(error);
        }
        if (translatedError === 'userabort') {
            translatedError = 'errAbort';
        }
        if (!translatedError) {
            translatedError = 'errUploadNoFiles';
        }

        return fm && typeof fm.i18n === 'function'
            ? fm.i18n(translatedError)
            : errorMessage(translatedError);
    }

    function errorMessage(error) {
        if (error && typeof error.message === 'string') {
            return error.message;
        }
        if (Array.isArray(error)) {
            return error.join(', ');
        }

        return String(error);
    }
});
