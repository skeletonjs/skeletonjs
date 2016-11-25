import Node from './node';
import { createComponent as createClass } from './component';
import { renderToDom } from './renderer';

module.exports = {
    createElement: (component, attrs, ...childen) => {
        return new Node(component, attrs, childen);
    },
    createClass,
    render: (node, container) => {
        // TODO: Empty on each render due to lack of diffs
        container.innerHTML = '';
        container.appendChild(renderToDom(node));
    }
};
