import Node from './node';
import { createComponent as createClass } from './component';
import { renderToDom, patchTree } from './renderer';

module.exports = {
    createElement: (component, attrs, ...childen) => {
        return new Node(component, attrs, childen);
    },
    createClass,
    render: (node, container) => {
        if (container.__tree__) {
            patchTree(container.__tree__, node);
        } else {
            container.appendChild(renderToDom(node));
        }
        container.__tree__ = node;
    }
};
