import { NODE_TYPES } from './node';
import { patchAttrs } from './dom';
import Node from './node';

export const renderToDom = (node, ctx) => {
    if (node instanceof Node) {
        switch (node.getType()) {
            case NODE_TYPES.TAG:
                const domNode = node.setDomNode(document.createElement(node.ctor));

                patchAttrs(node);
                node.children.forEach((node) => {
                    domNode.appendChild(renderToDom(node, ctx));
                });
                return domNode;

            case NODE_TYPES.TEXT:
                return node.setDomNode(document.createTextNode(node.ctor));

            case NODE_TYPES.COMPONENT:
                const element = new node.ctor(node.attrs, node.children);

                return node.setDomNode(renderToDom(element.render(), element));
        }
    }
    return renderToDom(new Node(node));
}

export const patchTree = (current, next) => {
    current.children.forEach((node, i) => {
        patchTree(node[i], next.children[i]);
    });
    patchAttrs(current, next);
}
