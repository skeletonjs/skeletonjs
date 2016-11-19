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
	            { className: 'foo' },
	            this.props.name
	        );
	    }
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

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
	    createElement: function createElement(component) {
	        return new _node2.default(component);
	    },
	    createClass: _component.createComponent,
	    render: _renderer.mount
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Node = function () {
	    function Node(Component, props, children) {
	        _classCallCheck(this, Node);
	    }

	    _createClass(Node, [{
	        key: "key",
	        value: function key(id) {
	            this._key = id;
	            return this;
	        }
	    }, {
	        key: "attrs",
	        value: function attrs(props) {
	            this._props = props;
	            return this;
	        }
	    }, {
	        key: "children",
	        value: function children(nodes) {
	            this._children = nodes;
	            return this;
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
	    var ctor = function ctor(attrs, children) {};
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
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mount = mount;
	function mount(node, container) {
	    console.log(node);
	}

/***/ }
/******/ ]);