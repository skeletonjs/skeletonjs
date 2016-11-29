const React = require('react');
const ReactDOM = require('react-dom');
const assert = require('../assert.js');

const tests = [
    [
        <div className="foo" />,
        '<div class="foo"></div>'
    ],
    [
        <div className="foo">
            <span className="bar">
                hello
            </span>
            <span>{ 34 }</span>
        </div>,
        '<div class="foo"><span class="bar">hello</span><span>34</span></div>'
    ],
    [
        <div className="foo">
            <input data-foo="1" title="hello" />
        </div>,
        '<div class="foo"><input data-foo="1" title="hello"></div>'
    ],
    [
        <div className="foo">
            <button data-foo="1">
                hello
            </button>
        </div>,
        '<div class="foo"><button data-foo="1">hello</button></div>'
    ]
];

describe('domRender', () => {
    beforeEach(function() {
        const container = document.createElement('div');
        container.id = 'app';
        document.body.appendChild(container);

        this.container = container;
    });
    afterEach(function() {
        document.body.removeChild(this.container);
    });
    tests.forEach((test, i) => {
        const input = test[0];
        const output = test[1];

        it('#' + i + ' : ' + output, function() {
            const container = document.querySelector('#app');
            ReactDOM.render(input, this.container);

            assert(container.innerHTML, output);
        });
    });
})
