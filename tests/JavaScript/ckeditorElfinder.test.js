'use strict';

const { afterEach, beforeEach, test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const adapterPath = path.resolve(__dirname, '../../src/Resources/assets/ckeditorElfinder.js');

let requests;

beforeEach(() => {
    requests = [];
    global.FormData = FakeFormData;
    global.XMLHttpRequest = class extends FakeXMLHttpRequest {
        constructor() {
            super();
            requests.push(this);
        }
    };
});

afterEach(() => {
    delete require.cache[adapterPath];
    delete global.FormData;
    delete global.XMLHttpRequest;
    delete global.CKEditorElfinder;
});

test('installs an upload adapter and resolves a successful upload', async () => {
    const { adapter } = createAdapter({
        uploadUrl: '/efupload/ckeditor_upload',
        headers: { 'X-CSRF-TOKEN': 'token' },
        withCredentials: true,
    });

    const result = adapter.upload();
    const xhr = await currentRequest();

    assert.equal(xhr.method, 'POST');
    assert.equal(xhr.url, '/efupload/ckeditor_upload');
    assert.equal(xhr.responseType, 'json');
    assert.equal(xhr.withCredentials, true);
    assert.deepEqual(xhr.headers, { 'X-CSRF-TOKEN': 'token' });
    assert.deepEqual(xhr.body.entries, [['upload', adapter.loaderFile]]);

    xhr.respond(200, { uploaded: 1, url: '/media/photo.png' });

    assert.deepEqual(await result, { default: '/media/photo.png' });
});

test('resolves a successful renamed upload that includes a warning', async () => {
    const { adapter } = createAdapter({ uploadUrl: '/efupload/default' });
    const result = adapter.upload();
    const xhr = await currentRequest();

    xhr.respond(200, {
        uploaded: 1,
        fileName: 'photo_1.png',
        url: '/media/photo_1.png',
        error: { message: 'File was renamed to photo_1.png.' },
    });

    assert.deepEqual(await result, { default: '/media/photo_1.png' });
});

test('defaults to same-origin credentials and reports upload progress', async () => {
    const { adapter, loader } = createAdapter({ uploadUrl: '/efupload/default' });
    const result = adapter.upload();
    const xhr = await currentRequest();

    assert.equal(xhr.withCredentials, false);
    xhr.upload.onprogress({ lengthComputable: true, total: 200, loaded: 75 });
    assert.equal(loader.uploadTotal, 200);
    assert.equal(loader.uploaded, 75);

    xhr.respond(200, { uploaded: 1, url: '/media/photo.png' });
    await result;
});

test('rejects structured upload errors for successful and failed HTTP statuses', async () => {
    for (const status of [200, 400]) {
        const { adapter } = createAdapter({ uploadUrl: '/efupload/default' });
        const result = adapter.upload();
        const xhr = await currentRequest();

        xhr.respond(status, { uploaded: 0, error: { message: 'Image type is not allowed.' } });

        await assert.rejects(result, /Image type is not allowed/);
    }
});

test('rejects without reading responseText when a JSON response is unavailable', async () => {
    const { adapter } = createAdapter({ uploadUrl: '/efupload/default' });
    const result = adapter.upload();
    const xhr = await currentRequest();

    Object.defineProperty(xhr, 'responseText', {
        get() {
            throw new DOMException('responseText is unavailable for a JSON response.', 'InvalidStateError');
        },
    });
    xhr.status = 200;
    xhr.response = null;

    xhr.onload();

    await assert.rejects(result, /Couldn't upload file: photo.png\./);
});

test('uses a stable generic error for malformed JSON and network failures', async () => {
    let created = createAdapter({ uploadUrl: '/efupload/default' });
    let result = created.adapter.upload();
    let xhr = await currentRequest();
    xhr.respond(200, null, '{bad json');
    await assert.rejects(result, /Couldn't upload file: photo.png\./);

    created = createAdapter({ uploadUrl: '/efupload/default' });
    result = created.adapter.upload();
    xhr = await currentRequest();
    xhr.onerror();
    await assert.rejects(result, /Couldn't upload file: photo.png\./);
});

test('aborts the request and rejects without an error message', async () => {
    const { adapter } = createAdapter({ uploadUrl: '/efupload/default' });
    const result = adapter.upload();
    const xhr = await currentRequest();

    adapter.abort();

    assert.equal(xhr.aborted, true);
    assert.equal(await result.then(
        () => 'resolved',
        (reason) => reason
    ), undefined);
});

function createAdapter(options) {
    const createPlugin = require('../../src/Resources/assets/ckeditorElfinder.js');
    const file = { name: 'photo.png' };
    const loader = { file: Promise.resolve(file) };
    const repository = {};
    const editor = {
        plugins: {
            get(name) {
                assert.equal(name, 'FileRepository');
                return repository;
            },
        },
    };

    createPlugin(options)(editor);
    const adapter = repository.createUploadAdapter(loader);
    adapter.loaderFile = file;

    return { adapter, loader };
}

async function currentRequest() {
    await new Promise((resolve) => setImmediate(resolve));

    return requests.at(-1);
}

class FakeFormData {
    constructor() {
        this.entries = [];
    }

    append(name, value) {
        this.entries.push([name, value]);
    }
}

class FakeXMLHttpRequest {
    constructor() {
        this.upload = {};
        this.headers = {};
        this.withCredentials = false;
        this.aborted = false;
    }

    open(method, url) {
        this.method = method;
        this.url = url;
    }

    setRequestHeader(name, value) {
        this.headers[name] = value;
    }

    send(body) {
        this.body = body;
    }

    abort() {
        this.aborted = true;
        this.onabort();
    }

    respond(status, response, responseText = '') {
        this.status = status;
        this.response = response;
        this.responseText = responseText;
        this.onload();
    }
}
