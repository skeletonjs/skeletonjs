/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(1);

	var App = React.createClass({
	    displayName: 'App',
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'app' },
	            this.props.name
	        );
	    }
	});

	ReactDOM.render(React.createElement(
	    'div',
	    { className: 'wrapper' },
	    React.createElement(App, { name: 'hello' })
	), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _node = __webpack_require__(2);

	var _node2 = _interopRequireDefault(_node);

	var _component = __webpack_require__(3);

	var _renderer = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    createElement: function createElement(component, attrs) {
	        for (var _len = arguments.length, childen = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            childen[_key - 2] = arguments[_key];
	        }

	        return new _node2.default(component, attrs, childen);
	    },
	    createClass: _component.createComponent,
	    render: function render(node, container) {
	        container.appendChild((0, _renderer.renderToDom)(node));
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ATTR_NAMES = {
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

	var NODE_TYPES = exports.NODE_TYPES = {
	    TAG: 0,
	    TEXT: 1,
	    COMPONENT: 2
	};

	var Node = function () {
	    function Node(ctor, attrs, children) {
	        _classCallCheck(this, Node);

	        this.ctor = ctor;
	        this.attrs = attrs;
	        this.children = children;
	    }

	    _createClass(Node, [{
	        key: 'getType',
	        value: function getType() {
	            if (typeof this.ctor === 'string') {
	                return NODE_TYPES.TAG;
	            }
	            return NODE_TYPES.COMPONENT;
	        }
	    }, {
	        key: 'getAttrName',
	        value: function getAttrName(key) {
	            return ATTR_NAMES[key];
	        }
	    }]);

	    return Node;
	}();

	exports.default = Node;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createComponent = createComponent;

	var _utils = __webpack_require__(4);

	var basePrototype = {
	    componentWillMount: _utils.noop,
	    componentWillUnmount: _utils.noop,
	    componentDidMount: _utils.noop,
	    componentWillReceiveProps: _utils.noop,
	    shouldComponentUpdate: function shouldComponentUpdate() {
	        return true;
	    },
	    render: _utils.noop
	};

	function createComponent(proto) {
	    var ctor = function ctor(props, children) {
	        this.props = props;
	        this.props.children = children;
	    };
	    ctor.prototype = basePrototype;
	    ctor.prototype.constructor = ctor;

	    for (var method in proto) {
	        if (proto.hasOwnProperty(method)) {
	            ctor.prototype[method] = proto[method];
	        }
	    }

	    return ctor;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    noop: function noop() {}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.renderToDom = renderToDom;

	var _node = __webpack_require__(2);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function renderToDom(node) {
	    if (node instanceof _node2.default) {
	        var _ret = function () {
	            switch (node.getType()) {
	                case _node.NODE_TYPES.TAG:
	                    var domNode = document.createElement(node.ctor);

	                    for (var i in node.attrs) {
	                        var attrName = node.getAttrName(i);
	                        if (attrName) {
	                            domNode.setAttribute(attrName, String(node.attrs[i]));
	                        }
	                    }
	                    node.children.map(function (node) {
	                        return domNode.appendChild(renderToDom(node));
	                    });
	                    return {
	                        v: domNode
	                    };

	                case _node.NODE_TYPES.COMPONENT:
	                    return {
	                        v: renderToDom(new node.ctor(node.attrs, node.children).render())
	                    };
	            }
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	    return document.createTextNode(node);
	}

/***/ }
/******/ ]);