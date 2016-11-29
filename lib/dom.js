import utils from './utils';

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

const getAttrFromProps = (key, value) => {
    if (isCustomAttr(key)) {
        return { type: 'attr', key, value };
    }
    if (ATTR_NAMES[key]) {
        return { type: 'attr', key: ATTR_NAMES[key], value };
    }
    if (EVENTS_NAMES[key]) {
        return { type: 'event', key: EVENTS_NAMES[key], value };
    }
    return null;
}


export const patchAttrs = (current, next) => {
    const domNode = current.getDomNode();
    const ctx = current.getCtx();

    if (!next) {
        next = current;
        current = {};
    }
    const diff = utils.getDiff(
        current.attrs ? Object.keys(current.attrs) : [],
        next.attrs ? Object.keys(next.attrs) : []
    );

    (diff[0] || []).forEach((key) => {
        const attr = getAttrFromProps(key, current.attrs[key]);

        if (attr) {
            if (attr.type === 'attr') {
                domNode.removeAttribute(attr.key);
            } else if (attr.type === 'event') {
                domNode.removeEventListener(attr.key, attr.value);
            }
        }
    });
    (diff[1] || []).forEach((key) => {
        const attr = getAttrFromProps(key, next.attrs[key]);

        if (attr) {
            if (attr.type === 'attr') {
                domNode.setAttribute(attr.key, attr.value);
            } else if (attr.type === 'event') {
                domNode.addEventListener(attr.key, attr.value.bind(ctx));
            }
        }
    });
}
