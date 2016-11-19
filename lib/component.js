import { noop } from './utils';

const basePrototype = {
    componentWillMount: noop,
    componentWillUnmount: noop,
    componentDidMount: noop,
    componentWillReceiveProps: noop,
    shouldComponentUpdate: () => true,
    render: noop
};

export function createComponent(proto) {
    const ctor = function(attrs, children) {

    };
    ctor.prototype = basePrototype;
    ctor.prototype.constructor = ctor;

    for (let method in proto) {
        if (proto.hasOwnProperty(method)) {
            ctor.prototype[method] = proto[method];
        }
    }

    return ctor;
};
