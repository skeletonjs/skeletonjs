import { TAG_NAMES } from './dom.js';

export const NODE_TYPES = {
    TAG: 0,
    TEXT: 1,
    COMPONENT: 2
};

export default class Node {
    constructor(ctor, attrs, children) {
        this.ctor = ctor;
        this.attrs = attrs;
        this.children = children;
    }

    getType() {
        if (typeof this.ctor === 'string' || typeof this.ctor === 'number') {
            if (TAG_NAMES.indexOf(this.ctor) > -1) {
                return NODE_TYPES.TAG;
            }
            return NODE_TYPES.TEXT;
        }
        return NODE_TYPES.COMPONENT;
    }

    setDomNode(node) {
        this._domNode = node;
        return node;
    }

    getDomNode() {
        return this._domNode;
    }
}
