import { NODE_TYPES } from './node';
import Node from './node';

export function renderToDom(node) {
    if (node instanceof Node) {
        switch (node.getType()) {
            case NODE_TYPES.TAG:
                const domNode = document.createElement(node.ctor);

                for (let i in node.attrs) {
                    let attrName = node.getAttrName(i);
                    if (attrName) {
                        domNode.setAttribute(attrName, String(node.attrs[i]));
                    }
                }
                node.children.map(
                    (node) => domNode.appendChild(renderToDom(node))
                );
                return domNode;

            case NODE_TYPES.COMPONENT:
                return node.render();
        }
    }
    return document.createTextNode(node);
}

