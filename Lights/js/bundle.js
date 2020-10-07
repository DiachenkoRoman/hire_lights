/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/CustomEvents.js":
/*!*************************************!*\
  !*** ./application/CustomEvents.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CustomEvents = function CustomEvents() {\n  /*\n  \tJS позволяет нам создавать собственные события.\n  \tСинтаксис:\n  \tОбязательное только имя события:\n  \tnew Event('eventName', {bubbles: true, cancelable: false});\n  \n  \tКастом ивент еще имеет доп. поле \"detail\", через которое можно\n  \tпередать данные:\n  \tnew CustomEvent(\"userLogin\", { detail: {...} });\n  \n  */\n  var itea_event = new Event('build');\n  var itea_customEvent = new CustomEvent(\"userLogin\", {\n    detail: {\n      username: \"davidwalsh\",\n      itea: {\n        woohoo: true\n      }\n    }\n  });\n  console.log('itea_event', itea_event, 'itea_customEvent', itea_customEvent);\n  /*\n  \tDetail -> Зарезервированое слово\n  */\n  // let r_event = new Event('build');\n  // let c_event = new CustomEvent('build', { detail: [1,2,3] });\n  // r_event.detail = 123; // R/O\n  // r_event.detail = 456;\n  // c_event.detail.push(4);\n  // console.log(r_event, c_event)\n  // Абстрактный пример:\n  // let myElement = document.createElement('button');\n  //     myElement.innerText = 'Custom Event!';\n  //     myElement.addEventListener(\"userLogin\", function(e) {\n  // \t\tconsole.info(\"Event is: \", e);\n  // \t\tconsole.info(\"Custom data is: \", e.detail);\n  // \t\tmyElement.style.backgroundColor = 'blue';\n  //     });\n  //     myElement.addEventListener('click', function(){\n  // \t\tmyElement.dispatchEvent(itea_customEvent);\n  //     });\n  //     document.body.appendChild(myElement);\n  // Реальный пример:\n\n  var message__container = document.getElementById('message__container');\n  var messageAuthor = document.getElementById('messageAuthor');\n  var messageText = document.getElementById('messageText');\n  var messageSendBtn = document.getElementById('messageSendBtn');\n  var log_container = document.getElementById('log_container');\n  messageSendBtn.addEventListener('click', function () {\n    var author = messageAuthor.value;\n    var text = messageText.value;\n    var MessageSendEvent = new CustomEvent(\"messageSend\", {\n      detail: {\n        author: author,\n        message: text\n      }\n    });\n    message__container.dispatchEvent(MessageSendEvent);\n    log_container.dispatchEvent(MessageSendEvent);\n  });\n  message__container.addEventListener('messageSend', function (event) {\n    var _event$detail = event.detail,\n        author = _event$detail.author,\n        message = _event$detail.message;\n    console.log(event);\n    var messageNode = document.createElement('div');\n    messageNode.innerHTML = \"<div class=\\\"message\\\"><b>\".concat(author, \":</b> \").concat(message, \"</div>\");\n    message__container.appendChild(messageNode);\n  });\n  log_container.addEventListener('messageSend', function (event) {\n    var _event$detail2 = event.detail,\n        author = _event$detail2.author,\n        message = _event$detail2.message;\n    var messageNode = document.createElement('div');\n    messageNode.innerHTML = \"<div class=\\\"message\\\"><b>\".concat(author, \":</b> \").concat(message, \"</div>\");\n    log_container.appendChild(messageNode);\n  });\n}; // custom events end!\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomEvents);\n\n//# sourceURL=webpack:///./application/CustomEvents.js?");

/***/ }),

/***/ "./application/components/date.js":
/*!****************************************!*\
  !*** ./application/components/date.js ***!
  \****************************************/
/*! exports provided: Date */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Date\", function() { return Date; });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./application/components/input.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Date =\n/*#__PURE__*/\nfunction (_Input) {\n  _inherits(Date, _Input);\n\n  function Date(name, label, min, max) {\n    var _this;\n\n    _classCallCheck(this, Date);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Date).call(this, name, label));\n    _this.min = min;\n    _this.max = max;\n    return _this;\n  }\n\n  _createClass(Date, [{\n    key: \"render\",\n    value: function render() {\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n      var node = document.createElement('div');\n      node.innerHTML = \"\\n            <label>\\n                <span>\".concat(this.label, \"</span>\\n                <input \\n                    class=\\\"_input\\\"\\n                    name=\\\"\").concat(this.name, \"\\\"\\n                    type=\\\"date\\\"\\n                    min=\\\"\").concat(this.min, \"\\\"\\n                    max=\\\"\").concat(this.max, \"\\\"\\n                />\\n            </label>\\n        \");\n      node.querySelector('._input').addEventListener('change', function (e) {\n        return console.log(e.target.value);\n      });\n      target.appendChild(node);\n    }\n  }]);\n\n  return Date;\n}(_input__WEBPACK_IMPORTED_MODULE_0__[\"Input\"]);\n\n//# sourceURL=webpack:///./application/components/date.js?");

/***/ }),

/***/ "./application/components/index.js":
/*!*****************************************!*\
  !*** ./application/components/index.js ***!
  \*****************************************/
/*! exports provided: Input, Number, Date */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./application/components/input.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _input__WEBPACK_IMPORTED_MODULE_0__[\"Input\"]; });\n\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ \"./application/components/number.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Number\", function() { return _number__WEBPACK_IMPORTED_MODULE_1__[\"Number\"]; });\n\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ \"./application/components/date.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Date\", function() { return _date__WEBPACK_IMPORTED_MODULE_2__[\"Date\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./application/components/index.js?");

/***/ }),

/***/ "./application/components/input.js":
/*!*****************************************!*\
  !*** ./application/components/input.js ***!
  \*****************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Input =\n/*#__PURE__*/\nfunction () {\n  function Input(_ref) {\n    var name = _ref.name,\n        label = _ref.label,\n        placeholder = _ref.placeholder;\n\n    _classCallCheck(this, Input);\n\n    this.name = name;\n    this.label = label;\n    this.placeholder = placeholder;\n  }\n\n  _createClass(Input, [{\n    key: \"render\",\n    value: function render() {\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n      var node = document.createElement('div');\n      node.innerHTML = \"\\n            <label>\\n                <span>\".concat(this.label, \"</span>\\n                <input \\n                    name=\\\"\").concat(this.name, \"\\\"\\n                />\\n            </label>\\n        \");\n      target.appendChild(node);\n    }\n  }]);\n\n  return Input;\n}();\n\n//# sourceURL=webpack:///./application/components/input.js?");

/***/ }),

/***/ "./application/components/number.js":
/*!******************************************!*\
  !*** ./application/components/number.js ***!
  \******************************************/
/*! exports provided: Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Number\", function() { return Number; });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./application/components/input.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Number =\n/*#__PURE__*/\nfunction (_Input) {\n  _inherits(Number, _Input);\n\n  function Number(_ref) {\n    var _this;\n\n    var min = _ref.min,\n        max = _ref.max,\n        rest = _objectWithoutProperties(_ref, [\"min\", \"max\"]);\n\n    _classCallCheck(this, Number);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Number).call(this, rest));\n    _this.min = min;\n    _this.max = max;\n    return _this;\n  }\n\n  _createClass(Number, [{\n    key: \"render\",\n    value: function render() {\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n      var node = document.createElement('div');\n      node.innerHTML = \"\\n            <label>\\n                <span>\".concat(this.label, \"</span>\\n                <input \\n                    name=\\\"\").concat(this.name, \"\\\"\\n                    type=\\\"number\\\"\\n                    min=\\\"\").concat(this.min, \"\\\"\\n                    max=\\\"\").concat(this.max, \"\\\"\\n                    placeholder=\\\"\").concat(this.placeholder, \"\\\"\\n                />\\n            </label>\\n        \");\n      target.appendChild(node);\n    }\n  }]);\n\n  return Number;\n}(_input__WEBPACK_IMPORTED_MODULE_0__[\"Input\"]);\n\n//# sourceURL=webpack:///./application/components/number.js?");

/***/ }),

/***/ "./application/factory/absFactory.js":
/*!*******************************************!*\
  !*** ./application/factory/absFactory.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weaponFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weaponFactory */ \"./application/factory/weaponFactory.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar SuperFactory = function SuperFactory(type) {\n  // Наша абстрактная фабрика \n  return type === \"modern\" ? ModernWeaponFactory : _weaponFactory__WEBPACK_IMPORTED_MODULE_0__[\"WeaponFactory\"];\n};\n\nvar Gun =\n/*#__PURE__*/\nfunction (_Weapon) {\n  _inherits(Gun, _Weapon);\n\n  function Gun(_ref) {\n    var _this;\n\n    var _ref$name = _ref.name,\n        name = _ref$name === void 0 ? 'Unnamed gun' : _ref$name,\n        _ref$material = _ref.material,\n        material = _ref$material === void 0 ? 'steel' : _ref$material,\n        magic = _ref.magic;\n\n    _classCallCheck(this, Gun);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gun).call(this));\n    _this.weaponType = 'gun';\n    _this.name = name;\n    _this.material = material;\n    _this.magic = magic !== undefined ? magic : false;\n    _this.icon = 'images/2053053.png';\n    return _this;\n  }\n\n  return Gun;\n}(_weaponFactory__WEBPACK_IMPORTED_MODULE_0__[\"Weapon\"]);\n\nvar ModernWeaponFactory =\n/*#__PURE__*/\nfunction () {\n  function ModernWeaponFactory() {\n    _classCallCheck(this, ModernWeaponFactory);\n  }\n\n  _createClass(ModernWeaponFactory, [{\n    key: \"makeWeapon\",\n    value: function makeWeapon(weapon) {\n      var WeaponClass = null;\n\n      if (weapon.weaponType === 'gun') {\n        WeaponClass = Gun;\n      } else {\n        return false;\n      }\n\n      return new WeaponClass(weapon);\n    }\n  }]);\n\n  return ModernWeaponFactory;\n}();\n\nvar AbsFactory = function AbsFactory() {\n  var Abs = SuperFactory();\n  var fabric = new Abs();\n  console.log(fabric); // let gun = fabric.makeWeapon({\n  //     weaponType: 'gun',\n  //     name: 'defender',\n  //     material: 'steel',\n  //     magic: false\n  // });\n  // gun.render();\n\n  var MakeMeBlade2 = fabric.makeWeapon({\n    weaponType: 'sword',\n    name: 'defender',\n    magic: false\n  });\n  MakeMeBlade2.render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AbsFactory);\n\n//# sourceURL=webpack:///./application/factory/absFactory.js?");

/***/ }),

/***/ "./application/factory/index.js":
/*!**************************************!*\
  !*** ./application/factory/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weaponFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weaponFactory */ \"./application/factory/weaponFactory.js\");\n/* harmony import */ var _absFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./absFactory */ \"./application/factory/absFactory.js\");\n/*\n    Разберем паттерн \"Фабрика\" и то как он работает в JS.\n*/\n\n\n\nvar fabricWrapper = function fabricWrapper() {\n  // weaponFactory();\n  Object(_absFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fabricWrapper);\n\n//# sourceURL=webpack:///./application/factory/index.js?");

/***/ }),

/***/ "./application/factory/weaponFactory.js":
/*!**********************************************!*\
  !*** ./application/factory/weaponFactory.js ***!
  \**********************************************/
/*! exports provided: Weapon, WeaponFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Weapon\", function() { return Weapon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeaponFactory\", function() { return WeaponFactory; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Weapon =\n/*#__PURE__*/\nfunction () {\n  function Weapon() {\n    _classCallCheck(this, Weapon);\n  }\n\n  _createClass(Weapon, [{\n    key: \"render\",\n    value: function render() {\n      var root = document.getElementById('root');\n      var classMagic = this.magic ? 'magic' : 'regular';\n      root.innerHTML += \"\\n        <div class=\\\"\".concat(classMagic, \"\\\">\\n            <h2>\").concat(this.name, \"</h2>\\n            <span>\").concat(this.material, \"</span>\\n            <div class=\\\"icon\\\">\\n            <img src=\\\"\").concat(this.icon, \"\\\" width=\\\"100\\\" height=\\\"100\\\"/>\\n            </div>\\n        </div>\\n        \");\n    }\n  }]);\n\n  return Weapon;\n}();\n\nvar Sword =\n/*#__PURE__*/\nfunction (_Weapon) {\n  _inherits(Sword, _Weapon);\n\n  function Sword(_ref) {\n    var _this;\n\n    var _ref$name = _ref.name,\n        name = _ref$name === void 0 ? 'Unnamed sword' : _ref$name,\n        _ref$material = _ref.material,\n        material = _ref$material === void 0 ? 'steel' : _ref$material,\n        magic = _ref.magic;\n\n    _classCallCheck(this, Sword);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sword).call(this));\n    _this.weaponType = 'sword';\n    _this.name = name;\n    _this.material = material;\n    _this.magic = magic !== undefined ? magic : false;\n    _this.icon = 'images/swords.svg';\n    return _this;\n  }\n\n  return Sword;\n}(Weapon);\n\nvar Bow =\n/*#__PURE__*/\nfunction (_Weapon2) {\n  _inherits(Bow, _Weapon2);\n\n  function Bow(_ref2) {\n    var _this2;\n\n    var _ref2$name = _ref2.name,\n        name = _ref2$name === void 0 ? 'Unnamed bow' : _ref2$name,\n        _ref2$material = _ref2.material,\n        material = _ref2$material === void 0 ? 'Wood' : _ref2$material,\n        style = _ref2.style,\n        magic = _ref2.magic;\n\n    _classCallCheck(this, Bow);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Bow).call(this));\n    _this2.weaponType = 'bow';\n    _this2.name = name;\n    _this2.material = material;\n    _this2.magic = magic !== undefined ? magic : false;\n    _this2.icon = 'images/archery.svg';\n    return _this2;\n  }\n\n  return Bow;\n}(Weapon);\n\nvar WeaponFactory =\n/*#__PURE__*/\nfunction () {\n  function WeaponFactory() {\n    _classCallCheck(this, WeaponFactory);\n  }\n\n  _createClass(WeaponFactory, [{\n    key: \"makeWeapon\",\n    value: function makeWeapon(weapon) {\n      var WeaponClass = null;\n\n      if (weapon.weaponType === 'sword') {\n        WeaponClass = Sword;\n      } else if (weapon.weaponType === 'bow') {\n        WeaponClass = Bow;\n      } else {\n        return false;\n      }\n\n      return new WeaponClass(weapon);\n    }\n  }]);\n\n  return WeaponFactory;\n}();\n\nvar Fabric = function Fabric() {\n  var mySuperForge = new WeaponFactory();\n  console.log(mySuperForge);\n  var MakeMeBlade = mySuperForge.makeWeapon({\n    weaponType: 'sword',\n    name: 'winner',\n    material: 'dark iron',\n    magic: true\n  });\n  var MakeMeBow = mySuperForge.makeWeapon({\n    weaponType: 'bow',\n    name: 'defender',\n    material: 'dark iron',\n    magic: false\n  });\n  console.log(MakeMeBlade, MakeMeBow); // console.log( MakeMeBlade, MakeMeBow);\n  // MakeMeBlade.render();\n  // MakeMeBow.render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fabric);\n\n//# sourceURL=webpack:///./application/factory/weaponFactory.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ \"./application/factory/index.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./application/observer/index.js\");\n/* harmony import */ var _CustomEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomEvents */ \"./application/CustomEvents.js\");\n/* harmony import */ var _livecode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./livecode */ \"./application/livecode.js\");\n\n\n\n // observer();\n// CustomEvents(); \n// factory();\n// FacadeApi();\n\nObject(_livecode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/livecode.js":
/*!*********************************!*\
  !*** ./application/livecode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./application/components/index.js\");\n\nvar data = [{\n  type: \"input\",\n  name: 'city',\n  label: 'Город'\n}, {\n  type: \"number\",\n  name: 'count',\n  label: 'Кол-во',\n  min: 1,\n  max: 10,\n  placeholder: \"test\"\n}, {\n  type: \"date\",\n  name: 'start_date',\n  label: 'Начало',\n  min: '2020-10-02',\n  max: '2020-10-10'\n}, {\n  type: \"bebebe\"\n}];\nvar dictionary = [{\n  type: \"input\",\n  component: _components__WEBPACK_IMPORTED_MODULE_0__[\"Input\"]\n}, {\n  type: \"number\",\n  component: _components__WEBPACK_IMPORTED_MODULE_0__[\"Number\"]\n}, {\n  type: \"date\",\n  component: _components__WEBPACK_IMPORTED_MODULE_0__[\"Date\"]\n}];\n\nvar FormFabric = function FormFabric(obj) {\n  if (obj.type) {\n    var classElement = dictionary.find(function (item) {\n      return obj.type === item.type;\n    });\n\n    if (classElement) {\n      return new classElement.component(obj);\n    }\n  }\n};\n\nvar live = function live() {\n  console.log('live'); // let x = new Input({ name: 'city', label: 'Город' });\n  // let b = new Number({ name: 'count', label: 'Кол-во', min: 1, max: 10, placeholder: \"test\" });\n  // let c = new Date({ name: 'start_date', label: 'Начало', min: '2020-10-02', max: '2020-10-10' });\n\n  data.map(function (item) {\n    var element = FormFabric(item); // element !== null || element !== undefined\n\n    if (element) {\n      element.render();\n    } else {\n      console.warn(\"element not found\", item);\n    }\n  });\n  var root = document.getElementById('root');\n  var counter = FormFabric({\n    type: \"number\",\n    name: 'count',\n    label: 'Кол-во',\n    min: 1,\n    max: 10,\n    placeholder: \"test\"\n  });\n  counter.render(root);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (live);\n\n//# sourceURL=webpack:///./application/livecode.js?");

/***/ }),

/***/ "./application/observer/Observer.js":
/*!******************************************!*\
  !*** ./application/observer/Observer.js ***!
  \******************************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable() {\n  // Создаем список подписаных обьектов\n  var observers = []; // Оповещение всех подписчиков о сообщении\n\n  this.sendMessage = function (msg) {\n    observers.map(function (obs) {\n      obs.notify(msg);\n    });\n  }; // Добавим наблюдателя\n\n\n  this.addObserver = function (observer) {\n    observers.push(observer);\n  };\n} // Сам наблюдатель:\n\nfunction Observer(behavior) {\n  // Делаем функцию, что бы через callback можно\n  // было использовать различные функции внутри\n  this.notify = function (msg) {\n    behavior(msg);\n  };\n}\n\n//# sourceURL=webpack:///./application/observer/Observer.js?");

/***/ }),

/***/ "./application/observer/demo1.js":
/*!***************************************!*\
  !*** ./application/observer/demo1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/observer/Observer.js\");\n\n\nvar Demo1 = function Demo1() {\n  console.log('DEMO 1 ONLINE');\n  var observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n  var obs1 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (msg) {\n    return console.log(msg);\n  });\n  var obs2 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (msg) {\n    return console.warn(msg);\n  });\n  var obs3 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (msg) {\n    return console.error(msg);\n  });\n  var obs4 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (msg) {\n    document.body.innerHTML += msg;\n  });\n  observable.addObserver(obs1);\n  observable.addObserver(obs2);\n  observable.addObserver(obs3);\n  observable.addObserver(obs4);\n  console.log(observable);\n  observable.sendMessage('hello'); // //  Проверим абстрактно как оно работает:\n\n  setTimeout(function () {\n    // оправим сообщение, с текущей датой:\n    observable.sendMessage('Now is' + new Date());\n  }, 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo1);\n\n//# sourceURL=webpack:///./application/observer/demo1.js?");

/***/ }),

/***/ "./application/observer/demo2.js":
/*!***************************************!*\
  !*** ./application/observer/demo2.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/observer/Observer.js\");\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.json */ \"./application/observer/products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./products.json */ \"./application/observer/products.json\", 1);\n\n\n\nvar Demo2 = function Demo2() {\n  console.log('DEMO 2');\n  /*\n  \tРассмотрим на примере простого интернет магазина.\n  \tСоздадим наблюдателя:\n  */\n\n  var observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n  /*\n  \tТри обсервера на взаимодействие с: Модулем корзины / Серверной обработкой / Интерфесом\n  */\n\n  var cartObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (id) {\n    var filtredToBasket = _products_json__WEBPACK_IMPORTED_MODULE_1__.find(function (item) {\n      return Number(item.id) === Number(id);\n    });\n    Cart.push(filtredToBasket);\n    renderBasket();\n  });\n  var serverObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (id) {\n    var filtredToBasket = _products_json__WEBPACK_IMPORTED_MODULE_1__.find(function (item) {\n      return Number(item.id) === Number(id);\n    });\n    console.log(\"\\u0422\\u043E\\u0432\\u0430\\u0440 \".concat(filtredToBasket.name, \" \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \\u043D\\u0430 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0435\"));\n  });\n  var iconObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (id) {\n    var products__cart = document.getElementById('products__cart');\n    products__cart.innerText = Cart.length;\n  });\n  observable.addObserver(cartObs);\n  observable.addObserver(serverObs);\n  observable.addObserver(iconObs); // Render Data - - - - - - - - - - - -\n\n  var Cart = [];\n  var products__row = document.getElementById('products__row');\n\n  var renderBasket = function renderBasket() {\n    var cartElem = document.getElementById('cart');\n    var message;\n\n    if (Cart.length === 0) {\n      message = 'У вас в корзине пусто';\n    } else {\n      var Sum = Cart.reduce(function (prev, current) {\n        return prev += Number(current.price);\n      }, 0);\n      message = \"\\u0423 \\u0432\\u0430\\u0441 \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0435 \".concat(Cart.length, \" \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432, \\u043D\\u0430 \\u0441\\u0443\\u043C\\u043C\\u0443: \").concat(Sum, \" \\u0433\\u0440\\u043D.\");\n    }\n\n    cartElem.innerHTML = \"<h2>\".concat(message, \"</h2><ol></ol>\");\n    var ol = cartElem.querySelector('ol');\n    Cart.map(function (item) {\n      var li = document.createElement('li');\n      li.innerText = \"\".concat(item.name, \" (\").concat(item.price, \" \\u0433\\u0440\\u043D.)\");\n      ol.appendChild(li);\n    });\n  };\n\n  _products_json__WEBPACK_IMPORTED_MODULE_1__.map(function (item) {\n    var product = document.createElement('div');\n    product.className = \"product\";\n    product.innerHTML = \"<div class=\\\"product__image\\\">\\n\\t\\t\\t\\t<img src=\\\"\".concat(item.imageLink, \"\\\"/>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\\"product__name\\\">\").concat(item.name, \"</div>\\n\\t\\t\\t<div class=\\\"product__price\\\">\").concat(item.price, \" \\u0433\\u0440\\u043D.</div>\\n\\t\\t\\t<div class=\\\"product__action\\\">\\n\\t\\t\\t\\t<button class=\\\"product__buy\\\"> \\u041A\\u0443\\u043F\\u0438\\u0442\\u044C </button>\\n\\t\\t\\t</div>\");\n    var buyButton = product.querySelector('.product__buy');\n    buyButton.addEventListener('click', function (e) {\n      observable.sendMessage(item.id);\n    });\n    products__row.appendChild(product);\n  });\n  renderBasket();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo2);\n\n//# sourceURL=webpack:///./application/observer/demo2.js?");

/***/ }),

/***/ "./application/observer/index.js":
/*!***************************************!*\
  !*** ./application/observer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo1 */ \"./application/observer/demo1.js\");\n/* harmony import */ var _demo2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo2 */ \"./application/observer/demo2.js\");\n\n\n\nvar ObserverDemo = function ObserverDemo() {\n  // Abstract Demo 2\n  // console.log('demo 1');\n  // Demo1();\n  // Functional Demo:\n  Object(_demo2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}; //observer Demo\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ObserverDemo);\n\n//# sourceURL=webpack:///./application/observer/index.js?");

/***/ }),

/***/ "./application/observer/products.json":
/*!********************************************!*\
  !*** ./application/observer/products.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"name\\\":\\\"Samsung Galaxy S8 \\\",\\\"price\\\":21999,\\\"imageLink\\\":\\\"https://i1.rozetka.ua/goods/1894533/samsung_galaxy_s8_64gb_black_images_1894533385.jpg\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Apple AirPort Capsule\\\",\\\"price\\\":10700,\\\"imageLink\\\":\\\"https://i1.rozetka.ua/goods/3330569/apple_a1470_me177_images_3330569615.jpg\\\"},{\\\"id\\\":3,\\\"name\\\":\\\"Apple iPhone X\\\",\\\"price\\\":35999,\\\"imageLink\\\":\\\"https://i1.rozetka.ua/goods/2433231/apple_iphone_x_64gb_silver_images_2433231297.jpg\\\"},{\\\"id\\\":4,\\\"name\\\":\\\"LG G6 Black \\\",\\\"price\\\":15999,\\\"imageLink\\\":\\\"https://i1.rozetka.ua/goods/1892329/copy_lg_lgh845_acistn_58d8fc4a87d51_images_1892329834.jpg\\\"}]\");\n\n//# sourceURL=webpack:///./application/observer/products.json?");

/***/ })

/******/ });