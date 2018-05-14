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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/window-or-global/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/window-or-global/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\nmodule.exports = (typeof self === 'object' && self.self === self && self) ||\n  (typeof global === 'object' && global.global === global && global) ||\n  this\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/window-or-global/lib/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_ba_routematcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/ba-routematcher */ \"./vendor/ba-routematcher.js\");\n/* harmony import */ var _vendor_ba_routematcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_ba_routematcher__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! window-or-global */ \"./node_modules/window-or-global/lib/index.js\");\n/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window_or_global__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n\n  let navigateAwayCallback = null,\n    ignoreHashChange = false,\n    controllers = {},\n    routes = [];\n\n  /**\n   * @returns {*}\n   */\n  function getHash(){\n    if (window_or_global__WEBPACK_IMPORTED_MODULE_1___default.a.location.hash) {\n      return window_or_global__WEBPACK_IMPORTED_MODULE_1___default.a.location.hash.substring(1);\n    } else {\n      return false;\n    }\n  }\n\n  /**\n   * @param id\n   * @param params\n   * @private\n   */\n  function _callControllerFromObj(id, params) {\n    if (controllers[id]) {\n      controllers[id].call(undefined, params);\n    } else {\n      throw(\"router: controller[\" + id + '] does not exist.');\n    }\n  }\n\n  /**\n   * Returns a hash string from a route ID and parameter map. If id does not exist, throws an Exception.\n   * @param id\n   * @param params\n   * @returns {*|String}\n   * @private\n   */\n  function _getHashFromObj(id, params) {\n    let hash = routes[id];\n    if (!hash) {\n      throw(\"Undefined route '\" + id + \"'\");\n    }\n    let rm = rm(hash);\n    return rm.stringify(params || {});\n  }\n\n  /**\n   * Returns an object with the id and params object {id:[String],params:{}} from a hash string. Returns false if no\n   * match was found.\n   * @param hash\n   * @returns {*}\n   */\n  function getObjFromHash(hash) {\n    if (!hash) {\n      return false;\n    }\n\n    for (let k in routes) {\n      if (routes.hasOwnProperty(k)) {\n        let rm = rm(routes[k]);\n        let p = rm.parse(hash);\n        if (p !== null) {\n          return {id:k, params:p};\n        }\n      }\n    }\n\n    return false;\n  }\n\n  /**\n   * onHashChange event handler.\n   */\n  function onHashChange() {\n\n    let o = getObjFromHash(getHash());\n    if (o) {\n\n      if(ignoreHashChange){\n        //ignore just once, then reset.\n        ignoreHashChange = false;\n        return;\n      }\n\n      if(navigateAwayCallback && typeof navigateAwayCallback !== 'function'){\n        throw 'navigateAwayCallback must be a function';\n      }\n\n      if(navigateAwayCallback){\n        if(!navigateAwayCallback()){\n          //halt if callback returns false, and go back to the previous route\n          ignoreHashChange = true;\n          window_or_global__WEBPACK_IMPORTED_MODULE_1___default.a.history.go(-1);\n          return;\n        }\n      }\n\n      _callControllerFromObj(o.id, o.params);\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  /**\n   * Returns an object which represents the current hash.\n   * @return {*}\n   */\n  function status() {\n    return getObjFromHash(getHash());\n  }\n\n  /**\n   * Changes the hash, which then is handled by onHashChange, which calls the controller.\n   * @param id\n   * @param params\n   * @param {boolean=} doNotRoute //change the hash without actually routing\n   */\n  function go2(id, params, doNotRoute) {\n\n    let new_hash = _getHashFromObj(id, params || {});\n    ignoreHashChange = doNotRoute;\n\n    //if the hashes are the same, just ignore.\n    if(new_hash === window_or_global__WEBPACK_IMPORTED_MODULE_1___default.a.location.hash.replace('#','')){\n      return;\n    }\n\n    window_or_global__WEBPACK_IMPORTED_MODULE_1___default.a.location.hash = new_hash;\n  }\n\n  /**\n   * Routes based on current hash. Returns true if a match was found, false otherwise.\n   * NavigateAwayCallback is ignored.\n   * @return boolean\n   */\n  function route() {\n    let o = status(); //get current hash object.\n    if (o) {\n      _callControllerFromObj(o.id, o.params);\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  /**\n   * Bind onhashchange to window\n   */\n  function init() {\n    window_or_global__WEBPACK_IMPORTED_MODULE_1___default.a.onhashchange = onHashChange;\n  }\n\n  init();\n\n  return {\n    route,\n    status,\n    go2,\n    getObjFromHash,\n    routes,\n    controllers,\n    navigateAwayCallback\n  };\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./vendor/ba-routematcher.js":
/*!***********************************!*\
  !*** ./vendor/ba-routematcher.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * JavaScript Route Matcher\n * http://benalman.com/\n *\n * Copyright (c) 2011 \"Cowboy\" Ben Alman\n * Dual licensed under the MIT and GPL licenses.\n * http://benalman.com/about/license/\n */\n\n(function(exports) {\n\t// Characters to be escaped with \\. RegExp borrowed from the Backbone router\n\t// but escaped (note: unnecessarily) to keep JSHint from complaining.\n\tvar reEscape = /[\\-\\[\\]{}()+?.,\\\\\\^$|#\\s]/g;\n\t// Match named :param or *splat placeholders.\n\tvar reParam = /([:*])(\\w+)/g;\n\n\t// Test to see if a value matches the corresponding rule.\n\tfunction validateRule(rule, value) {\n\t\t// For a given rule, get the first letter of the string name of its\n\t\t// constructor function. \"R\" -> RegExp, \"F\" -> Function (these shouldn't\n\t\t// conflict with any other types one might specify). Note: instead of\n\t\t// getting .toString from a new object {} or Object.prototype, I'm assuming\n\t\t// that exports will always be an object, and using its .toString method.\n\t\t// Bad idea? Let me know by filing an issue\n\t\tvar type = exports.toString.call(rule).charAt(8);\n\t\t// If regexp, match. If function, invoke. Otherwise, compare. Note that ==\n\t\t// is used because type coercion is needed, as `value` will always be a\n\t\t// string, but `rule` might not.\n\t\treturn type === \"R\" ? rule.test(value) : type === \"F\" ? rule(value) : rule == value;\n\t}\n\n\t// Pass in a route string (or RegExp) plus an optional map of rules, and get\n\t// back an object with .parse and .stringify methods.\n\texports.routeMatcher = function(route, rules) {\n\t\t// Object to be returned. The public API.\n\t\tvar self = {};\n\t\t// Matched param or splat names, in order\n\t\tvar names = [];\n\t\t// Route matching RegExp.\n\t\tvar re = route;\n\n\t\t// Build route RegExp from passed string.\n\t\tif (typeof route === \"string\") {\n\t\t\t// Escape special chars.\n\t\t\tre = re.replace(reEscape, \"\\\\$&\");\n\t\t\t// Replace any :param or *splat with the appropriate capture group.\n\t\t\tre = re.replace(reParam, function(_, mode, name) {\n\t\t\t\tnames.push(name);\n\t\t\t\t// :param should capture until the next / or EOL, while *splat should\n\t\t\t\t// capture until the next :param, *splat, or EOL.\n\t\t\t\treturn mode === \":\" ? \"([^/]*)\" : \"(.*)\";\n\t\t\t});\n\t\t\t// Add ^/$ anchors and create the actual RegExp.\n\t\t\tre = new RegExp(\"^\" + re + \"$\");\n\n\t\t\t// Match the passed url against the route, returning an object of params\n\t\t\t// and values.\n\t\t\tself.parse = function(url) {\n\t\t\t\tvar i = 0;\n\t\t\t\tvar param, value;\n\t\t\t\tvar params = {};\n\t\t\t\tvar matches = url.match(re);\n\t\t\t\t// If no matches, return null.\n\t\t\t\tif (!matches) { return null; }\n\t\t\t\t// Add all matched :param / *splat values into the params object.\n\t\t\t\twhile (i < names.length) {\n\t\t\t\t\tparam = names[i++];\n\t\t\t\t\tvalue = matches[i];\n\t\t\t\t\t// If a rule exists for thie param and it doesn't validate, return null.\n\t\t\t\t\tif (rules && param in rules && !validateRule(rules[param], value)) { return null; }\n\t\t\t\t\tparams[param] = value;\n\t\t\t\t}\n\t\t\t\treturn params;\n\t\t\t};\n\n\t\t\t// Build path by inserting the given params into the route.\n\t\t\tself.stringify = function(params) {\n\t\t\t\tvar param, re;\n\t\t\t\tvar result = route;\n\t\t\t\t// Insert each passed param into the route string. Note that this loop\n\t\t\t\t// doesn't check .hasOwnProperty because this script doesn't support\n\t\t\t\t// modifications to Object.prototype.\n\t\t\t\tfor (param in params) {\n\t\t\t\t\tre = new RegExp(\"[:*]\" + param + \"\\\\b\");\n\t\t\t\t\tresult = result.replace(re, params[param]);\n\t\t\t\t}\n\t\t\t\t// Missing params should be replaced with empty string.\n\t\t\t\treturn result.replace(reParam, \"\");\n\t\t\t};\n\t\t} else {\n\t\t\t// RegExp route was passed. This is super-simple.\n\t\t\tself.parse = function(url) {\n\t\t\t\tvar matches = url.match(re);\n\t\t\t\treturn matches && {captures: matches.slice(1)};\n\t\t\t};\n\t\t\t// There's no meaningful way to stringify based on a RegExp route, so\n\t\t\t// return empty string.\n\t\t\tself.stringify = function() { return \"\"; };\n\t\t}\n\t\treturn self;\n\t};\n\n}(typeof exports === \"object\" && exports || this));\n\n//# sourceURL=webpack:///./vendor/ba-routematcher.js?");

/***/ })

/******/ });