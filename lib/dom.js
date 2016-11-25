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

export const patchAttrs = (node, domNode, ctx) => {
    for (let key in node.attrs) {
        const attrName = ATTR_NAMES[key];
        const eventName = EVENTS_NAMES[key];
        const value = node.attrs[key];

        if (attrName) {
            domNode.setAttribute(attrName, value);
        } else if (eventName) {
            domNode.addEventListener(eventName, value.bind(ctx));
        }
    }
}
