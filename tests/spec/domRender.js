const React = require('react');
const ReactDOM = require('react-dom');
const assert = require('../assert.js');

const tests = [
    {
        input: <div className="foo" />,
        output: '<div class="foo"></div>'
    }
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
        it('#' + i + ' : ' + test.output, function() {
            const container = document.querySelector('#app');
            ReactDOM.render(test.input, this.container);

            assert(container.innerHTML, test.output);
        });
    });
})
