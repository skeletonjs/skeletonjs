import Node from './node';
import { createComponent as createClass } from './component';
import { renderToDom } from './renderer';

module.exports = {
    createElement: (component, attrs, ...childen) => {
        return new Node(component, attrs, childen);
    },
    createClass,
    render: (node, container) => {
        container.appendChild(renderToDom(node));
    }
};
