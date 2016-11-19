export default class Node {
    constructor(Component, props, children) {

    }

    key(id) {
        this._key = id;
        return this;
    }

    attrs(props) {
        this._props = props;
        return this;
    }

    children(nodes) {
        this._children = nodes;
        return this;
    }
}
