import Node from './node';
import { createComponent as createClass } from './component';
import { mount as render } from './renderer';

module.exports = {
    createElement: (component) => new Node(component),
    createClass,
    render
};
