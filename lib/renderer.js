import { NODE_TYPES } from './node';
import { patchAttrs } from './dom';
import Node from './node';

export function renderToDom(node, ctx) {
    if (node instanceof Node) {
        switch (node.getType()) {
            case NODE_TYPES.TAG:
                const domNode = document.createElement(node.ctor);

                patchAttrs(node, domNode, ctx);
                node.children.map(
                    (node) => domNode.appendChild(renderToDom(node, ctx))
                );
                return domNode;

            case NODE_TYPES.COMPONENT:
                const element = new node.ctor(node.attrs, node.children);

                return renderToDom(element.render(), element);
        }
    }
    return document.createTextNode(node);
}

