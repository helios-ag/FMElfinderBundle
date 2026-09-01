'use strict';

const { afterEach, test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const adapterPath = path.resolve(__dirname, '../../src/Resources/assets/elfinderCallback.js');

afterEach(() => {
    delete require.cache[adapterPath];
    delete global.window;
});

test('normalizes a single file with relative URL and stable metadata defaults', () => {
    const adapter = loadAdapter();

    assert.deepEqual(adapter.normalizeFiles({
        url: 'https://example.test/uploads/a.jpg',
        name: 'a.jpg',
        mime: 'image/jpeg',
        size: 12,
        hash: 'l1_YQ',
    }, {
        relativePath: true,
        pathPrefix: '/media/',
        origin: 'https://example.test/',
    }), [{
        url: '/media/uploads/a.jpg',
        name: 'a.jpg',
        mime: 'image/jpeg',
        size: 12,
        hash: 'l1_YQ',
    }]);

    assert.deepEqual(adapter.normalizeFiles({ url: '/plain.txt' }), [{
        url: '/plain.txt',
        name: '',
        mime: '',
        size: null,
        hash: '',
    }]);
});

test('preserves selection order and absolute URLs', () => {
    const adapter = loadAdapter();

    assert.deepEqual(
        adapter.normalizeFiles([
            { url: 'https://cdn.test/one.jpg', name: 'one.jpg' },
            { url: 'https://cdn.test/two.jpg', name: 'two.jpg' },
        ], { relativePath: false }),
        [
            { url: 'https://cdn.test/one.jpg', name: 'one.jpg', mime: '', size: null, hash: '' },
            { url: 'https://cdn.test/two.jpg', name: 'two.jpg', mime: '', size: null, hash: '' },
        ]
    );
});

test('calls a dotted opener callback with its owner and closes after success', () => {
    let received;
    let owner;
    let closed = false;
    const media = {
        onSelect(files) {
            owner = this;
            received = files;
        },
    };
    global.window = {
        opener: { App: { media } },
        close() {
            closed = true;
        },
    };
    const adapter = loadAdapter();

    adapter.callOpener([
        { url: '/one.jpg', name: 'one.jpg' },
        { url: '/two.jpg', name: 'two.jpg' },
    ], 'App.media.onSelect', { multiple: false });

    assert.equal(owner, media);
    assert.deepEqual(received.map((file) => file.url), ['/one.jpg']);
    assert.equal(closed, true);
});

test('keeps picker open for missing, invalid, or non-callable callbacks', () => {
    let closed = false;
    global.window = {
        opener: { App: { value: 42 } },
        close() {
            closed = true;
        },
    };
    const adapter = loadAdapter();

    assert.throws(() => adapter.callOpener({ url: '/one.jpg' }, 'App.missing', {}), /not found/);
    assert.throws(() => adapter.callOpener({ url: '/one.jpg' }, 'App.value', {}), /not callable/);
    assert.throws(() => adapter.callOpener({ url: '/one.jpg' }, 'App["value"]', {}), /invalid/);
    assert.equal(closed, false);
});

test('rejects callback paths that can traverse JavaScript prototypes', () => {
    let closed = false;
    global.window = {
        opener: {},
        close() {
            closed = true;
        },
    };
    const adapter = loadAdapter();

    assert.throws(
        () => adapter.callOpener({ url: '/one.jpg' }, '__proto__.toString', {}),
        /invalid/
    );
    assert.equal(closed, false);
});

test('does not resolve callbacks inherited from an opener prototype', () => {
    let closed = false;
    const inherited = { onSelect() {} };
    global.window = {
        opener: { App: Object.create(inherited) },
        close() {
            closed = true;
        },
    };
    const adapter = loadAdapter();

    assert.throws(
        () => adapter.callOpener({ url: '/one.jpg' }, 'App.onSelect', {}),
        /not found/
    );
    assert.equal(closed, false);
});

test('reports unavailable and cross-origin opener access', () => {
    global.window = { opener: null, close() {} };
    let adapter = loadAdapter();
    assert.throws(() => adapter.callOpener({ url: '/one.jpg' }, 'App.onSelect', {}), /unavailable/);

    delete require.cache[adapterPath];
    global.window = { close() {} };
    Object.defineProperty(global.window, 'opener', {
        get() {
            throw new DOMException('Blocked', 'SecurityError');
        },
    });
    adapter = loadAdapter();
    assert.throws(() => adapter.callOpener({ url: '/one.jpg' }, 'App.onSelect', {}), /cannot be accessed/);
});

test('updates opener field in scalar mode and dispatches bubbling events in order', () => {
    const events = [];
    const field = {
        value: '',
        dispatchEvent(event) {
            events.push([event.type, event.bubbles]);
        },
    };
    global.window = createFormWindow(field);
    const adapter = loadAdapter();

    adapter.updateOpenerField([
        { url: '/one.jpg' },
        { url: '/two.jpg' },
    ], 'media', { multiple: false });

    assert.equal(field.value, '/one.jpg');
    assert.deepEqual(events, [['input', true], ['change', true]]);
    assert.equal(global.window.closed, true);
});

test('updates opener field with JSON array in multiple mode', () => {
    const field = { value: '', dispatchEvent() {} };
    global.window = createFormWindow(field);
    const adapter = loadAdapter();

    adapter.updateOpenerField([
        { url: '/one.jpg' },
        { url: '/two.jpg' },
    ], 'media', { multiple: true });

    assert.equal(field.value, '["/one.jpg","/two.jpg"]');
});

test('renders a stable visible error message', () => {
    const node = { hidden: true, textContent: '' };
    const documentObject = {
        getElementById(id) {
            assert.equal(id, 'fm-elfinder-callback-error');
            return node;
        },
    };
    const adapter = loadAdapter();

    adapter.showError(new Error('Callback failed.'), documentObject);

    assert.equal(node.hidden, false);
    assert.equal(node.textContent, 'Callback failed.');
});

function createFormWindow(field) {
    return {
        closed: false,
        opener: {
            Event: class Event {
                constructor(type, options) {
                    this.type = type;
                    this.bubbles = options.bubbles;
                }
            },
            document: {
                getElementById(id) {
                    return id === 'media' ? field : null;
                },
            },
        },
        close() {
            this.closed = true;
        },
    };
}

function loadAdapter() {
    return require('../../src/Resources/assets/elfinderCallback.js');
}
