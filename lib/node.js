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

    getAttrName(key) {
        return ATTR_NAMES[key];
    }
}
