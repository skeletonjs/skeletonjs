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
    tabIndex: 'tabindex',
    title: 'title'
};

const EVENTS_NAMES = {
    onClick: 'click',
    onChange: 'change'
};

const isCustomAttr = (key) => {
    return /^(data|aria)-[a-zA-Z]*$/.test(key);
}

export const TAG_NAMES = [
    'html', 'body', 'div', 'span', 'object', 'iframe',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre',
    'abbr', 'address', 'cite', 'code',
    'del', 'dfn', 'em', 'img', 'ins', 'kbd', 'q', 'samp',
    'small', 'strong', 'sub', 'sup', 'var',
    'b', 'i', 'input', 'textarea', 'button',
    'dl', 'dt', 'dd', 'ol', 'ul', 'li',
    'fieldset', 'form', 'label', 'legend',
    'table', 'caption', 'tbody', 'tfoot', 'thead', 'tr', 'th', 'td',
    'article', 'aside', 'canvas', 'details', 'figcaption', 'figure',
    'footer', 'header', 'hgroup', 'menu', 'nav', 'section', 'summary',
    'time', 'mark', 'audio', 'video'
];

export const patchAttrs = (node, ctx) => {
    const domNode = node.getDomNode();

    for (let key in node.attrs) {
        const attrName = ATTR_NAMES[key];
        const eventName = EVENTS_NAMES[key];
        const value = node.attrs[key];

        if (attrName) {
            domNode.setAttribute(attrName, value);
        } else if (isCustomAttr(key)) {
            domNode.setAttribute(key, value);
        } else if (eventName) {
            domNode.addEventListener(eventName, value.bind(ctx));
        }
    }
}
