import Node from './node';
import { createComponent as createClass } from './component';
import { renderToDom } from './renderer';

module.exports = {
    createElement: (component, attrs, ...childen) => {
        return new Node(component, attrs, childen);
    },
    createClass,
    render: (node, container) => {
        const foo = renderToDom(node);
        console.log(foo);
        container.appendChild(foo);
    }
};
