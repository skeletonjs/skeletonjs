const React = require('react');
const ReactDOM = require('react-dom');
const assert = require('../assert.js');

const tests = [
    [
        <div className="foo" />,
        <div className="foo2" />,
        '<div class="foo2"></div>'
    ],
    [
        <div className="foo" />,
        <div className="foo2" title="hello" />,
        '<div class="foo2" title="hello"></div>'
    ],
    [
        <div className="foo" />,
        <div />,
        '<div></div>'
    ],
    [
        <div className="foo" />,
        <div title="foo" />,
        '<div title="foo"></div>'
    ],
];

describe('Second DOM Rerender', () => {
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
        const first = test[0];
        const second = test[1];
        const result = test[2];

        it('#' + i + ' : ' + result, function() {
            ReactDOM.render(first, this.container);
            ReactDOM.render(second, this.container);

            assert(this.container.innerHTML, result);
        });
    });
})
