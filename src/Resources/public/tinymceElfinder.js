window.tinymceElfinder = function(opts) {
    // elFinder node
    let elfNode = $('<div/>');
    if (opts.nodeId) {
        elfNode.attr('id', opts.nodeId);
        delete opts.nodeId;
    }

    // upload target folder hash
    const uploadTargetHash = opts.uploadTargetHash || 'L1_Lw';
    delete opts.uploadTargetHash;

    // get elFinder insrance
    const getfm = open => {
        // CSS class name of TinyMCE conntainer
        const cls = (tinymce.majorVersion < 5)? 'mce-container' : 'tox';
        return new Promise((resolve, reject) => {
            // elFinder instance
            let elf;

            // Execute when the elFinder instance is created
            const done = () => {
                if (open) {
                    // request to open folder specify
                    if (!Object.keys(elf.files()).length) {
                        // when initial request
                        elf.one('open', () => {
                            elf.file(open)? resolve(elf) : reject(elf, 'errFolderNotFound');
                        });
                    } else {
                        // elFinder has already been initialized
                        new Promise((res, rej) => {
                            if (elf.file(open)) {
                                res();
                            } else {
                                // To acquire target folder information
                                elf.request({cmd: 'parents', target: open}).done(e =>{
                                    elf.file(open)? res() : rej();
                                }).fail(() => {
                                    rej();
                                });
                            }
                        }).then(() => {
                            if (elf.cwd().hash == open) {
                                resolve(elf);
                            } else {
                                // Open folder after folder information is acquired
                                elf.exec('open', open).done(() => {
                                    resolve(elf);
                                }).fail(err => {
                                    reject(elf, err? err : 'errFolderNotFound');
                                });
                            }
                        }).catch((err) => {
                            reject(elf, err? err : 'errFolderNotFound');
                        });
                    }
                } else {
                    // show elFinder manager only
                    resolve(elf);
                }
            };

            // Check elFinder instance
            if (elf = elfNode.elfinder('instance')) {
                // elFinder instance has already been created
                done();
            } else {
                // To create elFinder instance
                elf = elfNode.dialogelfinder(Object.assign({
                    // dialog title
                    title : 'File Manager',
                    // start folder setting
                    startPathHash : open? open : void(0),
                    // Set to do not use browser history to un-use location.hash
                    useBrowserHistory : false,
                    // Disable auto open
                    autoOpen : false,
                    // elFinder dialog width
                    width : '90%',
                    // elFinder dialog height
                    height : '90%',
                    // set getfile command options
                    commandsOptions : {
                        getfile: {
                            oncomplete : 'close'
                        }
                    },
                    bootCallback : (fm) => {
                        // set z-index
                        fm.getUI().css('z-index', parseInt($('body>.'+cls+':last').css('z-index')) + 100);
                    },
                    getFileCallback : (files, fm) => {}
                }, opts)).elfinder('instance');
                done();
            }
        });
    };

    this.browser = function(callback, value, meta) {
        getfm().then(fm => {
            let cgf = fm.getCommand('getfile');
            const regist = () => {
                fm.options.getFileCallback = cgf.callback = (file, fm) => {
                    var url, reg, info;

                    // URL normalization
                    url = fm.convAbsUrl(file.url);

                    // Make file info
                    info = file.name + ' (' + fm.formatSize(file.size) + ')';

                    // Provide file and text for the link dialog
                    if (meta.filetype == 'file') {
                        callback(url, {text: info, title: info});
                    }

                    // Provide image and alt text for the image dialog
                    if (meta.filetype == 'image') {
                        callback(url, {alt: info});
                    }

                    // Provide alternative source and posted for the media dialog
                    if (meta.filetype == 'media') {
                        callback(url);
                    }
                };
                fm.getUI().dialogelfinder('open');
            };
            if (cgf) {
                // elFinder booted
                regist();
            } else {
                // elFinder booting now
                fm.bind('init', () => {
                    cgf = fm.getCommand('getfile');
                    regist();
                });
            }
        });

        return false;
    };

    this.uploadHandler = function (blobInfo, success, failure) {
        new Promise(function(resolve, reject) {
            getfm(uploadTargetHash).then(fm => {
                let fmNode = fm.getUI(),
                    file = blobInfo.blob(),
                    clipdata = true;
                const err = (e) => {
                        var dlg = e.data.dialog || {};
                        if (dlg.hasClass('elfinder-dialog-error') || dlg.hasClass('elfinder-confirm-upload')) {
                            fmNode.dialogelfinder('open');
                            fm.unbind('dialogopened', err);
                        }
                    },
                    closeDlg = () => {
                        if (!fm.getUI().find('.elfinder-dialog-error:visible,.elfinder-confirm-upload:visible').length) {
                            fmNode.dialogelfinder('close');
                        }
                    };

                // check file object
                if (file.name) {
                    // file blob of client side file object
                    clipdata = void(0);
                }
                // Bind err function and exec upload
                fm.bind('dialogopened', err).exec('upload', {
                    files: [file],
                    target: uploadTargetHash,
                    clipdata: clipdata, // to get unique name on connector
                    dropEvt: {altKey: true, ctrlKey: true} // diable watermark on demo site
                }, void(0), uploadTargetHash)
                    .done(data => {
                        if (data.added && data.added.length) {
                            fm.url(data.added[0].hash, { async: true }).done(function(url) {
                                // prevent to use browser cache
                                url += (url.match(/\?/)? '&' : '?') + '_t=' + data.added[0].ts;
                                resolve(fm.convAbsUrl(url));
                            }).fail(function() {
                                reject(fm.i18n('errFileNotFound'));
                            });
                        } else {
                            reject(fm.i18n(data.error? data.error : 'errUpload'));
                        }
                    })
                    .fail(err => {
                        const error = fm.parseError(err);
                        reject(fm.i18n(error? (error === 'userabort'? 'errAbort' : error) : 'errUploadNoFiles'));
                    })
                    .always(() => {
                        fm.unbind('dialogopened', err);
                        closeDlg();
                    });
            }).catch((fm, err) => {
                const error = fm.parseError(err);
                reject(fm.i18n(error? (error === 'userabort'? 'errAbort' : error) : 'errUploadNoFiles'));
            });
        }).then((url) => {
            success(url);
        }).catch((err) => {
            failure(err);
        });
    };
};
