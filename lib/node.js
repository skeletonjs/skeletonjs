const ATTR_NAMES = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    autoCapitalize: 'autocapitalize',
    autoComplete: 'autocomplete',
    autoCorrect: 'autocorrect',
    autoFocus: 'autofocus',
    autoPlay: 'autoplay',
    encType: 'encoding',
    hrefLang: 'hreflang',
    radioGroup: 'radiogroup',
    spellCheck: 'spellcheck',
    srcDoc: 'srcdoc',
    srcSet: 'srcset',
    tabIndex: 'tabindex'
};
const EVENTS_NAMES = {
    onClick: 'click',
    onChange: 'change'
};

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

    processAttrs(domNode, ctx) {
        for (let i in this.attrs) {
            const domAttrName = this.getDomAttrName(i);
            const eventName = this.getEventName(i);

            if (domAttrName) {
                const attrValue = this.attrs[i]
                domNode.setAttribute(domAttrName, String(attrValue));
            } else if (eventName) {
                const handler = this.attrs[i];
                domNode.addEventListener(eventName, handler.bind(ctx));
            }
        }
    }

    getEventName(key) {
        return EVENTS_NAMES[key];
    }

    getDomAttrName(key) {
        return ATTR_NAMES[key];
    }
}
