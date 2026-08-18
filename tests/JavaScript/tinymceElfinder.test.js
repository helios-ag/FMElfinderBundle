'use strict';

const { afterEach, test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const adapterPath = path.resolve(__dirname, '../../src/Resources/public/tinymceElfinder.js');

afterEach(() => {
    delete require.cache[adapterPath];
    delete global.window;
});

test('TinyMCE 5 settles image uploads through callbacks in the current directory', async () => {
    const fixture = createFixture({ majorVersion: 5 });
    const adapter = fixture.createAdapter();

    const url = await new Promise((resolve, reject) => {
        const result = adapter.uploadHandler(fixture.blobInfo, resolve, reject, () => {});
        assert.equal(result, undefined);
    });

    assert.equal(url, 'https://example.test/image.png?_t=42');
    assert.equal(fixture.lastUpload.target, 'current_root');
});

test('TinyMCE 5 sends upload errors to the failure callback', async () => {
    const fixture = createFixture({ majorVersion: 5, uploadError: 'errUpload' });
    const adapter = fixture.createAdapter();

    const error = await new Promise((resolve) => {
        adapter.uploadHandler(fixture.blobInfo, assert.fail, resolve, () => {});
    });

    assert.equal(error, 'translated:errUpload');
});

for (const majorVersion of [6, 7, 8]) {
    test(`TinyMCE ${majorVersion} returns a Promise and honors an explicit upload target`, async () => {
        const fixture = createFixture({ majorVersion });
        const adapter = fixture.createAdapter({ uploadTargetHash: 'chosen_root' });

        const result = adapter.uploadHandler(fixture.blobInfo, () => {});

        assert.equal(typeof result.then, 'function');
        assert.equal(await result, 'https://example.test/image.png?_t=42');
        assert.equal(fixture.lastUpload.target, 'chosen_root');
    });
}

test('waits for the initial elFinder directory before uploading', async () => {
    const fixture = createFixture({ majorVersion: 8, delayedCurrentDirectory: true });
    const adapter = fixture.createAdapter();

    await adapter.uploadHandler(fixture.blobInfo, () => {});

    assert.equal(fixture.lastUpload.target, 'current_root');
});

test('TinyMCE 8 rejects uploads with a message object', async () => {
    const fixture = createFixture({ majorVersion: 8, uploadError: 'errUpload' });
    const adapter = fixture.createAdapter();

    await assert.rejects(
        adapter.uploadHandler(fixture.blobInfo, () => {}),
        { message: 'translated:errUpload' }
    );
});

for (const [filetype, expectedMetadata] of [
    ['file', { text: 'asset.dat (2 KB)', title: 'asset.dat (2 KB)' }],
    ['image', { alt: 'asset.dat (2 KB)' }],
    ['media', undefined],
]) {
    test(`file picker returns TinyMCE ${filetype} metadata`, async () => {
        const fixture = createFixture({ majorVersion: 8 });
        const adapter = fixture.createAdapter();
        let selected;

        assert.equal(adapter.browser((url, metadata) => {
            selected = { url, metadata };
        }, '', { filetype }), false);

        await new Promise((resolve) => setImmediate(resolve));
        fixture.getFileCommand.callback({
            url: 'https://example.test/asset.dat',
            name: 'asset.dat',
            size: 2048,
        }, fixture.fm);

        assert.deepEqual(selected, {
            url: 'https://example.test/asset.dat',
            metadata: expectedMetadata,
        });
    });
}

test('reports a missing dialogelfinder dependency', () => {
    const fixture = createFixture({ majorVersion: 8, missingDialogElfinder: true });

    assert.throws(
        () => fixture.createAdapter(),
        /dialogelfinder plugin is required/
    );
});

function createFixture({
    majorVersion,
    uploadError,
    missingDialogElfinder = false,
    delayedCurrentDirectory = false,
}) {
    const lastUpload = {};
    const getFileCommand = { callback: null };
    let initialized = false;
    let currentDirectoryReady = !delayedCurrentDirectory;
    const ui = {
        dialogelfinder() {
            return ui;
        },
        find() {
            return { length: 0 };
        },
    };

    const fm = {
        options: {},
        bind() {
            return fm;
        },
        convAbsUrl(url) {
            return url;
        },
        cwd() {
            return currentDirectoryReady ? { hash: 'current_root' } : null;
        },
        exec(command, payload) {
            assert.equal(command, 'upload');
            Object.assign(lastUpload, payload);

            return uploadError
                ? rejectedDeferred(uploadError)
                : resolvedDeferred({ added: [{ hash: 'uploaded_hash', ts: 42 }] });
        },
        formatSize() {
            return '2 KB';
        },
        getCommand() {
            return getFileCommand;
        },
        getUI() {
            return ui;
        },
        i18n(error) {
            return `translated:${error}`;
        },
        one(event, callback) {
            assert.equal(event, 'open');
            setImmediate(() => {
                currentDirectoryReady = true;
                callback();
            });
            return fm;
        },
        parseError(error) {
            return error;
        },
        unbind() {
            return fm;
        },
        url() {
            return resolvedDeferred('https://example.test/image.png');
        },
    };

    const node = {
        attr() {
            return node;
        },
        dialogelfinder() {
            initialized = true;
            return node;
        },
        elfinder(operation) {
            assert.equal(operation, 'instance');
            return initialized ? fm : undefined;
        },
    };

    function jquery() {
        return node;
    }

    jquery.fn = {
        elfinder() {},
    };
    if (!missingDialogElfinder) {
        jquery.fn.dialogelfinder = function () {};
    }

    global.window = {
        jQuery: jquery,
        tinymce: { majorVersion },
    };

    const TinyMCEElfinder = require(adapterPath);

    return {
        blobInfo: {
            blob() {
                return { name: 'image.png' };
            },
        },
        createAdapter(options = {}) {
            return new TinyMCEElfinder(options);
        },
        fm,
        getFileCommand,
        lastUpload,
    };
}

function resolvedDeferred(value) {
    return {
        always(callback) {
            callback();
            return this;
        },
        done(callback) {
            callback(value);
            return this;
        },
        fail() {
            return this;
        },
    };
}

function rejectedDeferred(error) {
    return {
        always(callback) {
            callback();
            return this;
        },
        done() {
            return this;
        },
        fail(callback) {
            callback(error);
            return this;
        },
    };
}
