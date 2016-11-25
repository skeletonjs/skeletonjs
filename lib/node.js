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
        if (typeof this.ctor === 'string') {
            return NODE_TYPES.TAG;
        }
        return NODE_TYPES.COMPONENT;
    }
}
