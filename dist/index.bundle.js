"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@100;400;500;600&family=Mochiy+Pop+One&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,500;0,700;1,100&family=Fraunces&family=Poppins:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,400&family=Montserrat:wght@300;400;500;600;700&family=Quantico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --dark-font-color: black;\n    --dark-gray:rgb(94, 94, 94);\n    --light-gray:rgb(155, 155, 155);\n    --header-background-color:rgb(9, 61, 107);\n    --light-font-color: rgb(238, 238, 238);\n    --sidebar-background-color:rgb(14, 100, 100, .8);\n    --blue: rgb(9, 61, 107);\n    --light-blue: rgb(247, 211, 211);\n    --red: rgb(216, 21, 21);\n    --purple: rgb(94, 14, 144);\n    --aqua: #00B3BB;\n    --light-aqua: #00E6AA;\n    --dark-aqua: #0E9AA1;\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: #DFF1F6;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, \nbody {\n    margin:0;\n    height: 100%;\n    font-family: 'Montserrat';\n    font-weight: 400;\n    background: linear-gradient(180deg, var(--light-blue) 0%, var(--blue) 95.5%);\n}\n/* HEADER STYLE */\nheader {\n    display: inline-block;\n    width: 100%;\n    padding: 1rem;\n    border-color: 1px solid var(--dark-font-color);\n    text-align: left;\n  }\nh1 {\n    display: inline-block;\n    margin-left: .25rem;\n    font-family: 'Quantico';\n    font-size: 4rem;\n}\n/*CONTAINER STYLE*/\n#content {\n    padding:1rem;\n    /* transform: translateY(-100vw); */\n    /* opacity: 0; */\n    /* transition: 300ms ease-in-out; */\n    display: flex;\n    justify-content: center;\n  }\n/* .content.active {\n    transform: none;\n    opacity: 100%;\n} */\n.container-left,\n.container-right {\n    display: flex;\n    flex-direction: column;\n    justify-content:space-around;\n    align-items:center;\n    gap: 1rem;\n    width: 20rem;\n    margin: 2rem 14rem 2rem 14rem;\n    /* background: black; */\n}\nh3 {\n    color: #273547e7;\n    cursor: default;\n    font-size: 1.5rem;\n    margin: 0;\n}\n/*GAMEBOARD STYLE*/\n/*Table styling */\n.board {\n    display: table;\n    flex-shrink: 0;\n    table-layout: fixed;\n    border: 1px solid black;\n    width: 4rem;\n    height: 6rem;\n    /* grid-template-rows: repeat(10, 1fr); */\n    \n}\n.tr{ \n    display: table-row; \n    padding: 1rem;\n}\n.td{ \n    display: table-cell; \n    border: 1px solid black;\n    color: white;\n    text-align:center;\n    padding: .8rem 0 .5rem 0;\n    width: 3rem;\n    height: 3rem;\n}\n.td:not(.header):not(.hasShip):hover{\n    background: var(--dark-font-color);\n}\n.td.hasShip{\n    background: var(--light-aqua);\n}\n.td.hasShip.isHit{\n    background: var(--red);\n}\n.td.isHit:not(.hasShip){\n    background: var(--light-gray);\n}\n/*FOOTER STYLE*/\nfooter{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.footer {\n    font-family: 'Mochiy Pop One';\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem 0;\n    color: var(--light-font-color);\n    background: var(--blue)\n}\na {\n    display: inline-block;\n    text-decoration:none;\n    color: var(--light-font-color);\n}\n\n.fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 4px;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg)  scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;IACI,wBAAwB;IACxB,2BAA2B;IAC3B,+BAA+B;IAC/B,yCAAyC;IACzC,sCAAsC;IACtC,gDAAgD;IAChD,uBAAuB;IACvB,gCAAgC;IAChC,uBAAuB;IACvB,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,+BAA+B;IAC/B,oBAAoB;IACpB,qCAAqC;IACrC,2BAA2B;AAC/B;AACA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;IAEI,QAAQ;IACR,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,4EAA4E;AAChF;AACA,iBAAiB;AACjB;IACI,qBAAqB;IACrB,WAAW;IACX,aAAa;IACb,8CAA8C;IAC9C,gBAAgB;EAClB;AACF;IACI,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;AACA,kBAAkB;AAClB;IACI,YAAY;IACZ,mCAAmC;IACnC,gBAAgB;IAChB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;EACzB;AACF;;;GAGG;AACH;;IAEI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,SAAS;AACb;AACA,kBAAkB;AAClB,iBAAiB;AACjB;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,yCAAyC;;AAE7C;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kCAAkC;AACtC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,6BAA6B;AACjC;AACA,eAAe;AACf;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;AACX;AACA;IACI,6BAA6B;IAC7B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,8BAA8B;IAC9B;AACJ;AACA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,sCAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,qCAAqC,EAAE,yCAAyC;IAChF,8BAA8B;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@100;400;500;600&family=Mochiy+Pop+One&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,500;0,700;1,100&family=Fraunces&family=Poppins:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,400&family=Montserrat:wght@300;400;500;600;700&family=Quantico&display=swap');\n:root {\n    --dark-font-color: black;\n    --dark-gray:rgb(94, 94, 94);\n    --light-gray:rgb(155, 155, 155);\n    --header-background-color:rgb(9, 61, 107);\n    --light-font-color: rgb(238, 238, 238);\n    --sidebar-background-color:rgb(14, 100, 100, .8);\n    --blue: rgb(9, 61, 107);\n    --light-blue: rgb(247, 211, 211);\n    --red: rgb(216, 21, 21);\n    --purple: rgb(94, 14, 144);\n    --aqua: #00B3BB;\n    --light-aqua: #00E6AA;\n    --dark-aqua: #0E9AA1;\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: #DFF1F6;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, \nbody {\n    margin:0;\n    height: 100%;\n    font-family: 'Montserrat';\n    font-weight: 400;\n    background: linear-gradient(180deg, var(--light-blue) 0%, var(--blue) 95.5%);\n}\n/* HEADER STYLE */\nheader {\n    display: inline-block;\n    width: 100%;\n    padding: 1rem;\n    border-color: 1px solid var(--dark-font-color);\n    text-align: left;\n  }\nh1 {\n    display: inline-block;\n    margin-left: .25rem;\n    font-family: 'Quantico';\n    font-size: 4rem;\n}\n/*CONTAINER STYLE*/\n#content {\n    padding:1rem;\n    /* transform: translateY(-100vw); */\n    /* opacity: 0; */\n    /* transition: 300ms ease-in-out; */\n    display: flex;\n    justify-content: center;\n  }\n/* .content.active {\n    transform: none;\n    opacity: 100%;\n} */\n.container-left,\n.container-right {\n    display: flex;\n    flex-direction: column;\n    justify-content:space-around;\n    align-items:center;\n    gap: 1rem;\n    width: 20rem;\n    margin: 2rem 14rem 2rem 14rem;\n    /* background: black; */\n}\nh3 {\n    color: #273547e7;\n    cursor: default;\n    font-size: 1.5rem;\n    margin: 0;\n}\n/*GAMEBOARD STYLE*/\n/*Table styling */\n.board {\n    display: table;\n    flex-shrink: 0;\n    table-layout: fixed;\n    border: 1px solid black;\n    width: 4rem;\n    height: 6rem;\n    /* grid-template-rows: repeat(10, 1fr); */\n    \n}\n.tr{ \n    display: table-row; \n    padding: 1rem;\n}\n.td{ \n    display: table-cell; \n    border: 1px solid black;\n    color: white;\n    text-align:center;\n    padding: .8rem 0 .5rem 0;\n    width: 3rem;\n    height: 3rem;\n}\n.td:not(.header):not(.hasShip):hover{\n    background: var(--dark-font-color);\n}\n.td.hasShip{\n    background: var(--light-aqua);\n}\n.td.hasShip.isHit{\n    background: var(--red);\n}\n.td.isHit:not(.hasShip){\n    background: var(--light-gray);\n}\n/*FOOTER STYLE*/\nfooter{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.footer {\n    font-family: 'Mochiy Pop One';\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem 0;\n    color: var(--light-font-color);\n    background: var(--blue)\n}\na {\n    display: inline-block;\n    text-decoration:none;\n    color: var(--light-font-color);\n}\n\n.fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 4px;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg)  scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domFunctions.js */ "./src/modules/domFunctions.js");
/* harmony import */ var _modules_gameController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameController.js */ "./src/modules/gameController.js");




(0,_modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addGameboardsToDom)()
//these might need to go into gameController
_modules_gameController_js__WEBPACK_IMPORTED_MODULE_2__.gameController.gameInit()
//generateAI fleet


/***/ }),

/***/ "./src/modules/domFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGameboardsToDom": () => (/* binding */ addGameboardsToDom),
/* harmony export */   "addPlayerShipsToDom": () => (/* binding */ addPlayerShipsToDom)
/* harmony export */ });
/* harmony import */ var _game_helpers_renderGameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_helpers/renderGameboard.js */ "./src/modules/game_helpers/renderGameboard.js");
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory.js */ "./src/modules/playerFactory.js");


function addGameboardsToDom () {
  let leftContainer = document.createElement('div')
  leftContainer.classList.add('container-left')
  let leftContainerH3 = document.createElement('h3')
  leftContainerH3.textContent = "Your Board"
  leftContainer.appendChild(leftContainerH3)
  let leftGameboard = document.createElement('div')
  leftGameboard.classList.add('board')
  leftGameboard.setAttribute('id', 'gameboard-left')

  let rightContainer = document.createElement('div')
  rightContainer.classList.add('container-right')
  let rightContainerH3 = document.createElement('h3')
  rightContainerH3.textContent = "Enemy's Board"
  rightContainer.appendChild(rightContainerH3)
  let rightGameboard = document.createElement('div')
  rightGameboard.classList.add('board')
  rightGameboard.setAttribute('id', 'gameboard-right')

  //create players' gameboard divs and appends to the domElement provided as second input 
  ;(0,_game_helpers_renderGameboard_js__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)('player', leftGameboard)
  ;(0,_game_helpers_renderGameboard_js__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)('enemy', rightGameboard)
  //End of player2's gameboard
  //appends to existing elements
  leftContainer.appendChild(leftGameboard)
  rightContainer.appendChild(rightGameboard)
  document.getElementById('content').appendChild(leftContainer)
  document.getElementById('content').appendChild(rightContainer)
}
function addPlayerShipsToDom(p1,p2){
/*
* start with randomFleet generation for player AI fleet should get handled in gameController
* get coordinates of ships
* add classes to divs that have ships
* only change background of divs for player ships
*
*/
let player1 = p1
let aiPlayer = p2
let playerShipsCoords = []
//makes an Array of Array with each ship object's shipCoordsArray as an element
for(let i = 0;i<player1.gameboard.placedShipsArray.length;i++){
  playerShipsCoords.push(player1.gameboard.placedShipsArray[i].shipCoordsArray)
}
//because playShipsCoords is an Array of arrays, we can flatten the nested arrays into a single array to loop through to make grabbing the cells and adding to them a bit easier and not need a nested loop
let flatCoords = playerShipsCoords.flat(2)
for(let i = 0;i<flatCoords.length;i++){
  let shipCell = document.getElementById(`${flatCoords[i]}`)
  shipCell.classList.add('hasShip')
}

}




/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameController": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory.js */ "./src/modules/playerFactory.js");
/* harmony import */ var _domFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFunctions.js */ "./src/modules/domFunctions.js");


const gameController = () => {
    const gameInit = () => {
        let player1 = playerFactory()
        let aiPlayer = playerFactory()
        player1.genRandomFleet()
        aiPlayer.genRandomFleet()
        ;(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addPlayerShipsToDom)(player1,aiPlayer)

    }
    const checkIfWinner = (player1, player2) =>{
        let winner = '';
        if(player1.gameboard.allShipsHaveSunk()){
            winner = 'player2'
        }
        if(player2.gameboard.allShipsHaveSunk()){
            winner = 'player1'
        }
        return winner
    }
    return{
        gameInit
    }
}


/***/ }),

/***/ "./src/modules/game_helpers/renderGameboard.js":
/*!*****************************************************!*\
  !*** ./src/modules/game_helpers/renderGameboard.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard)
/* harmony export */ });
function renderGameboard(playerStr, domEle){
    let rowLetters = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let gameBd = domEle
    for (let i = 0; i < rowLetters.length; i++) {
      let row = document.createElement('div')
      row.classList.add(`row-${playerStr}`, 'tr')
      row.setAttribute('id', `${playerStr}-row${rowLetters[i]}`)
      //create cells within each row
      for (let j = 0; j < 11; j++) {
        let cell = document.createElement('div')
        cell.classList.add('cell', 'td')
        cell.setAttribute('id', `${rowLetters[i]}${j}`)
        //while setting first row, add table col headers and add scope
        if(rowLetters[i] === '0'){
          if(j === 0) {
            cell.textContent = ' ';
            cell.classList.add('header')
          }
          else {
            cell.textContent = `${j}`
            cell.setAttribute('scope','col')
            cell.classList.add('header')
          }
        }
        //while setting first column, add table row headers and add scope
        if(j === 0 && isNaN(rowLetters[i])){
          cell.textContent = `${rowLetters[i]}`
          cell.setAttribute('scope','row')
          cell.classList.add('header')
        } 
        row.appendChild(cell)
      }
      gameBd.append(row)
    }
    
}


/***/ }),

/***/ "./src/modules/gameboardFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/gameboardFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/modules/shipFactory.js");
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/modules/helperFunctions.js");



const gameboardFactory = () => {
  let gameboard = []
  let placedShipsArray = []
  const init = () => {
    //initialize gameboard to array of length 100 with the 2 props both set to false
    for (let i = 0; i < 100; i++) {
      gameboard.push({ hasShip: false, isHit: false })
    }
  }
  const placeShip = (...coords) => {
    let gameboardIndexes = []
    coords.forEach(coord => {
      let index = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__.translateCoordToIndex)(coord)
      gameboardIndexes.push(index)
    })
    if (isValidPlacement(...gameboardIndexes) === true) {
      //create ship
      const ship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(...coords)
      //add ship to Gameboard's placedShipsArray
      placedShipsArray.push(ship)
      //pass each coordinate to the translate function to find its Index in the gameboard in order to update hasShip to true
      for (let i = 0; i < gameboardIndexes.length; i++) {
        let gIndex = gameboardIndexes[i]
        gameboard[gIndex].hasShip = true
      }
    } else throw new Error('Invalid Placement')
  }
  const isValidPlacement = (...indexes) => {
    let isValidArray = []
    let isValid = true
    indexes.forEach(index => {
      if (index < 0 || index >= gameboard.length) isValidArray.push(false)
      else if (gameboard[index].hasShip === true) isValidArray.push(false)
      else isValidArray.push(true)
    })
    if (isValidArray.includes(false)) {
      isValid = false
    }
    return isValid
  }
  const receiveAttack = coord => {
    const gbIndex = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__.translateCoordToIndex)(coord)
    gameboard[gbIndex].isHit = true
    let hitOrNot = 'not a hit'
    if (gameboard[gbIndex].hasShip === true) {
      hitOrNot = getShipByCoord(coord).hit(coord)
    }
    return hitOrNot
  }
  const getShipByCoord = coord => {
    let foundShip = placedShipsArray.reduce(ele =>
      ele.shipCoordsArray.includes(coord)
    )
    return foundShip
  }
  const allShipsHaveSunk = () => {
    let allAreSunk = true
    for (let i = 0; i < placedShipsArray.length; i++) {
      if (placedShipsArray[i].isSunk() === false) {
        allAreSunk = false
        break
      }
    }
    return allAreSunk
  }
  return {
    gameboard,
    init,
    placeShip,
    placedShipsArray,
    receiveAttack,
    getShipByCoord,
    allShipsHaveSunk
  }
}




/***/ }),

/***/ "./src/modules/helperFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/helperFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translateCoordToIndex": () => (/* binding */ translateCoordToIndex)
/* harmony export */ });
const translateCoordToIndex = coord => {
    if (coord.length === 2) {
      const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
      const letterChar = coord[0]
      if (possibleLetters.includes(letterChar) && !isNaN(coord[1])) {
        const box = parseInt(
          possibleLetters.findIndex(ele => ele === letterChar) + coord[1]
        )
        //index is one less than the box on gameboard
        return box - 1
      } else return 'Invalid Coordinates'
    } else if (coord.length === 3) {
      const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
      const letterChar = coord[0]
      if (possibleLetters.includes(letterChar)  && !isNaN(coord[1])  && !isNaN(coord[2]) && (coord[1] + coord[2] < 11)) {
        const box =
          parseInt(possibleLetters.findIndex(ele => ele === letterChar) * 10) + 10
        //index is one less than the box on gameboard
        return box - 1
      } else return 'Invalid Coordinates'
    } else {
      return 'Invalid Coordinates'
    }
  }



/***/ }),

/***/ "./src/modules/playerFactory.js":
/*!**************************************!*\
  !*** ./src/modules/playerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/modules/gameboardFactory.js");

const playerFactory = name => {
  let playerName = name
  //let ships = []
  let gameboard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)()
  gameboard.init()
  const shoot = (coord, oppGameboard) => {
    return oppGameboard.receiveAttack(coord)
  }
/* started this random ship generator but think I will explore manual player selection first   
const genRandomShip = (length) => {
    let axis = ['x','y']
    let direction = axis[Math.floor(Math.random()* axis.length)]
    let coordLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let startLetter = coordLetters[Math.floor(Math.random() * coordLetters.length)] 
    let startNum = Math.floor(Math.random() * 10) + 1
    if (direction === 'x') {
      let coords = []
      for(let i=0;i<length;i++){
        if(i===0){
          coords.push(`${startLetter}+${startNum}`)
        }
        else{
          coords.push(`${startLetter}+${startNum + i}`)
        }
      }
      gameboard.placeShip(coords)
    }
    if (direction === 'y') {}
    let coords = []
      for(let i=0;i<length;i++){
        if(i===0){
          coords.push(`${startLetter}+${startNum}`)
        }
        else {
          let arrayIndex = coordLetters.indexOf(startLetter)
          coords.push(`${coordLetters[arrayIndex+i]}+${startNum}`)
        }
      }
      gameboard.placeShip(coords)
  } */
  const genRandomFleet = () => {
    // for now I will hardcode my own boards to use until ship placement is implemented
    // 1x 5-coord ship, 1x 4-coord ship, 2x 3 coord ship, 1x 2 coord ship, 5 ships in total
    gameboard.placeShip('C2','C3','C4','C5','C6')
    gameboard.placeShip('E2','E3','E4','E5')
    gameboard.placeShip('A1','B1','C1')
    gameboard.placeShip('G2','G3','G4')
    gameboard.placeShip('I2','I3')

  }
  return {
    playerName,
    //ships,
    gameboard,
    shoot,
    //genRandomShip,
    genRandomFleet
  }
}




/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (...coords) => {
  const shipCoordsArray = Array()
  coords.map(coord => shipCoordsArray.push(coord))
  const hit = coord => {
    if (shipCoordsArray.includes(coord)) {
      const hitIndex = shipCoordsArray.findIndex(ele => ele === coord)
      shipCoordsArray[hitIndex] = 'hit'
      return 'hit'
    }
  }
  let isSunk = () => {
    if (shipCoordsArray.every(ele => ele === 'hit')) return true
    else return false
  }

  return {
    shipCoordsArray,
    isSunk,
    hit
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZG9tRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbWVfaGVscGVycy9yZW5kZXJHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNpbnplbDp3Z2h0QDQwMDs1MDA7NjAwJmZhbWlseT1JbnRlcjp3Z2h0QDEwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TW9jaGl5K1BvcCtPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw1MDA7MCw3MDA7MSwxMDAmZmFtaWx5PUZyYXVuY2VzJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDYwMDsxLDQwMCZmYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDQwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVF1YW50aWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWRhcmstZ3JheTpyZ2IoOTQsIDk0LCA5NCk7XFxuICAgIC0tbGlnaHQtZ3JheTpyZ2IoMTU1LCAxNTUsIDE1NSk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6cmdiKDksIDYxLCAxMDcpO1xcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxMDAsIDEwMCwgLjgpO1xcbiAgICAtLWJsdWU6IHJnYig5LCA2MSwgMTA3KTtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjQ3LCAyMTEsIDIxMSk7XFxuICAgIC0tcmVkOiByZ2IoMjE2LCAyMSwgMjEpO1xcbiAgICAtLXB1cnBsZTogcmdiKDk0LCAxNCwgMTQ0KTtcXG4gICAgLS1hcXVhOiAjMDBCM0JCO1xcbiAgICAtLWxpZ2h0LWFxdWE6ICMwMEU2QUE7XFxuICAgIC0tZGFyay1hcXVhOiAjMEU5QUExO1xcbiAgICAtLW1lbnUtaDQtY29sb3I6IHJnYig3LCAzMywgNTYpO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjREZGMUY2O1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgXFxuYm9keSB7XFxuICAgIG1hcmdpbjowO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWxpZ2h0LWJsdWUpIDAlLCB2YXIoLS1ibHVlKSA5NS41JSk7XFxufVxcbi8qIEhFQURFUiBTVFlMRSAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuaDEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbi8qQ09OVEFJTkVSIFNUWUxFKi9cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2dyk7ICovXFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuICAgIC8qIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0OyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4vKiAuY29udGVudC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxufSAqL1xcbi5jb250YWluZXItbGVmdCxcXG4uY29udGFpbmVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDE0cmVtIDJyZW0gMTRyZW07XFxuICAgIC8qIGJhY2tncm91bmQ6IGJsYWNrOyAqL1xcbn1cXG5oMyB7XFxuICAgIGNvbG9yOiAjMjczNTQ3ZTc7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLypHQU1FQk9BUkQgU1RZTEUqL1xcbi8qVGFibGUgc3R5bGluZyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyAqL1xcbiAgICBcXG59XFxuLnRyeyBcXG4gICAgZGlzcGxheTogdGFibGUtcm93OyBcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLnRkeyBcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBwYWRkaW5nOiAuOHJlbSAwIC41cmVtIDA7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbi50ZDpub3QoLmhlYWRlcik6bm90KC5oYXNTaGlwKTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG59XFxuLnRkLmhhc1NoaXB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWFxdWEpO1xcbn1cXG4udGQuaGFzU2hpcC5pc0hpdHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG59XFxuLnRkLmlzSGl0Om5vdCguaGFzU2hpcCl7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG4vKkZPT1RFUiBTVFlMRSovXFxuZm9vdGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogJ01vY2hpeSBQb3AgT25lJztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKVxcbn1cXG5hIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSAgc2NhbGUoMS4xKTsgLyogRG9uJ3Qgd2FudCBpdCB0byByb3RhdGUgb24gdGhpcyBwYWdlICovXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLGdEQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9CO0FBQ0E7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztJQUVJLFFBQVE7SUFDUixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0RUFBNEU7QUFDaEY7QUFDQSxpQkFBaUI7QUFDakI7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0VBQ2xCO0FBQ0Y7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0Esa0JBQWtCO0FBQ2xCO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7QUFDRjs7O0dBR0c7QUFDSDs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUNBQXlDOztBQUU3QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBLGVBQWU7QUFDZjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87QUFDWDtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUMsRUFBRSx5Q0FBeUM7SUFDaEYsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNpbnplbDp3Z2h0QDQwMDs1MDA7NjAwJmZhbWlseT1JbnRlcjp3Z2h0QDEwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TW9jaGl5K1BvcCtPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw1MDA7MCw3MDA7MSwxMDAmZmFtaWx5PUZyYXVuY2VzJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDYwMDsxLDQwMCZmYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDQwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVF1YW50aWNvJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290IHtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWRhcmstZ3JheTpyZ2IoOTQsIDk0LCA5NCk7XFxuICAgIC0tbGlnaHQtZ3JheTpyZ2IoMTU1LCAxNTUsIDE1NSk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6cmdiKDksIDYxLCAxMDcpO1xcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxMDAsIDEwMCwgLjgpO1xcbiAgICAtLWJsdWU6IHJnYig5LCA2MSwgMTA3KTtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjQ3LCAyMTEsIDIxMSk7XFxuICAgIC0tcmVkOiByZ2IoMjE2LCAyMSwgMjEpO1xcbiAgICAtLXB1cnBsZTogcmdiKDk0LCAxNCwgMTQ0KTtcXG4gICAgLS1hcXVhOiAjMDBCM0JCO1xcbiAgICAtLWxpZ2h0LWFxdWE6ICMwMEU2QUE7XFxuICAgIC0tZGFyay1hcXVhOiAjMEU5QUExO1xcbiAgICAtLW1lbnUtaDQtY29sb3I6IHJnYig3LCAzMywgNTYpO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjREZGMUY2O1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgXFxuYm9keSB7XFxuICAgIG1hcmdpbjowO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWxpZ2h0LWJsdWUpIDAlLCB2YXIoLS1ibHVlKSA5NS41JSk7XFxufVxcbi8qIEhFQURFUiBTVFlMRSAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuaDEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbi8qQ09OVEFJTkVSIFNUWUxFKi9cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2dyk7ICovXFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxuICAgIC8qIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0OyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4vKiAuY29udGVudC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxufSAqL1xcbi5jb250YWluZXItbGVmdCxcXG4uY29udGFpbmVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDE0cmVtIDJyZW0gMTRyZW07XFxuICAgIC8qIGJhY2tncm91bmQ6IGJsYWNrOyAqL1xcbn1cXG5oMyB7XFxuICAgIGNvbG9yOiAjMjczNTQ3ZTc7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLypHQU1FQk9BUkQgU1RZTEUqL1xcbi8qVGFibGUgc3R5bGluZyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyAqL1xcbiAgICBcXG59XFxuLnRyeyBcXG4gICAgZGlzcGxheTogdGFibGUtcm93OyBcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLnRkeyBcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBwYWRkaW5nOiAuOHJlbSAwIC41cmVtIDA7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbi50ZDpub3QoLmhlYWRlcik6bm90KC5oYXNTaGlwKTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG59XFxuLnRkLmhhc1NoaXB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWFxdWEpO1xcbn1cXG4udGQuaGFzU2hpcC5pc0hpdHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG59XFxuLnRkLmlzSGl0Om5vdCguaGFzU2hpcCl7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG4vKkZPT1RFUiBTVFlMRSovXFxuZm9vdGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogJ01vY2hpeSBQb3AgT25lJztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKVxcbn1cXG5hIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSAgc2NhbGUoMS4xKTsgLyogRG9uJ3Qgd2FudCBpdCB0byByb3RhdGUgb24gdGhpcyBwYWdlICovXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHthZGRHYW1lYm9hcmRzVG9Eb20sIGFkZFBsYXllclNoaXBzVG9Eb219IGZyb20gJy4vbW9kdWxlcy9kb21GdW5jdGlvbnMuanMnXG5pbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vbW9kdWxlcy9nYW1lQ29udHJvbGxlci5qcyc7XG5cbmFkZEdhbWVib2FyZHNUb0RvbSgpXG4vL3RoZXNlIG1pZ2h0IG5lZWQgdG8gZ28gaW50byBnYW1lQ29udHJvbGxlclxuZ2FtZUNvbnRyb2xsZXIuZ2FtZUluaXQoKVxuLy9nZW5lcmF0ZUFJIGZsZWV0XG4iLCJpbXBvcnQge3JlbmRlckdhbWVib2FyZH0gZnJvbSAnLi9nYW1lX2hlbHBlcnMvcmVuZGVyR2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHtwbGF5ZXJGYWN0b3J5fSBmcm9tICcuL3BsYXllckZhY3RvcnkuanMnXG5mdW5jdGlvbiBhZGRHYW1lYm9hcmRzVG9Eb20gKCkge1xuICBsZXQgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWxlZnQnKVxuICBsZXQgbGVmdENvbnRhaW5lckgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBsZWZ0Q29udGFpbmVySDMudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIlxuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXJIMylcbiAgbGV0IGxlZnRHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0R2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJylcbiAgbGVmdEdhbWVib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbWVib2FyZC1sZWZ0JylcblxuICBsZXQgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItcmlnaHQnKVxuICBsZXQgcmlnaHRDb250YWluZXJIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcmlnaHRDb250YWluZXJIMy50ZXh0Q29udGVudCA9IFwiRW5lbXkncyBCb2FyZFwiXG4gIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVySDMpXG4gIGxldCByaWdodEdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHJpZ2h0R2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJylcbiAgcmlnaHRHYW1lYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lYm9hcmQtcmlnaHQnKVxuXG4gIC8vY3JlYXRlIHBsYXllcnMnIGdhbWVib2FyZCBkaXZzIGFuZCBhcHBlbmRzIHRvIHRoZSBkb21FbGVtZW50IHByb3ZpZGVkIGFzIHNlY29uZCBpbnB1dCBcbiAgcmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXInLCBsZWZ0R2FtZWJvYXJkKVxuICByZW5kZXJHYW1lYm9hcmQoJ2VuZW15JywgcmlnaHRHYW1lYm9hcmQpXG4gIC8vRW5kIG9mIHBsYXllcjIncyBnYW1lYm9hcmRcbiAgLy9hcHBlbmRzIHRvIGV4aXN0aW5nIGVsZW1lbnRzXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEdhbWVib2FyZClcbiAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRHYW1lYm9hcmQpXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcilcbn1cbmZ1bmN0aW9uIGFkZFBsYXllclNoaXBzVG9Eb20ocDEscDIpe1xuLypcbiogc3RhcnQgd2l0aCByYW5kb21GbGVldCBnZW5lcmF0aW9uIGZvciBwbGF5ZXIgQUkgZmxlZXQgc2hvdWxkIGdldCBoYW5kbGVkIGluIGdhbWVDb250cm9sbGVyXG4qIGdldCBjb29yZGluYXRlcyBvZiBzaGlwc1xuKiBhZGQgY2xhc3NlcyB0byBkaXZzIHRoYXQgaGF2ZSBzaGlwc1xuKiBvbmx5IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIGRpdnMgZm9yIHBsYXllciBzaGlwc1xuKlxuKi9cbmxldCBwbGF5ZXIxID0gcDFcbmxldCBhaVBsYXllciA9IHAyXG5sZXQgcGxheWVyU2hpcHNDb29yZHMgPSBbXVxuLy9tYWtlcyBhbiBBcnJheSBvZiBBcnJheSB3aXRoIGVhY2ggc2hpcCBvYmplY3QncyBzaGlwQ29vcmRzQXJyYXkgYXMgYW4gZWxlbWVudFxuZm9yKGxldCBpID0gMDtpPHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlZFNoaXBzQXJyYXkubGVuZ3RoO2krKyl7XG4gIHBsYXllclNoaXBzQ29vcmRzLnB1c2gocGxheWVyMS5nYW1lYm9hcmQucGxhY2VkU2hpcHNBcnJheVtpXS5zaGlwQ29vcmRzQXJyYXkpXG59XG4vL2JlY2F1c2UgcGxheVNoaXBzQ29vcmRzIGlzIGFuIEFycmF5IG9mIGFycmF5cywgd2UgY2FuIGZsYXR0ZW4gdGhlIG5lc3RlZCBhcnJheXMgaW50byBhIHNpbmdsZSBhcnJheSB0byBsb29wIHRocm91Z2ggdG8gbWFrZSBncmFiYmluZyB0aGUgY2VsbHMgYW5kIGFkZGluZyB0byB0aGVtIGEgYml0IGVhc2llciBhbmQgbm90IG5lZWQgYSBuZXN0ZWQgbG9vcFxubGV0IGZsYXRDb29yZHMgPSBwbGF5ZXJTaGlwc0Nvb3Jkcy5mbGF0KDIpXG5mb3IobGV0IGkgPSAwO2k8ZmxhdENvb3Jkcy5sZW5ndGg7aSsrKXtcbiAgbGV0IHNoaXBDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmxhdENvb3Jkc1tpXX1gKVxuICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJylcbn1cblxufVxuXG5leHBvcnQgeyBhZGRHYW1lYm9hcmRzVG9Eb20sIGFkZFBsYXllclNoaXBzVG9Eb20gfVxuIiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyRmFjdG9yeS5qcydcbmltcG9ydCB7YWRkUGxheWVyU2hpcHNUb0RvbX0gZnJvbSAnLi9kb21GdW5jdGlvbnMuanMnXG5jb25zdCBnYW1lQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lSW5pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBsYXllcjEgPSBwbGF5ZXJGYWN0b3J5KClcbiAgICAgICAgbGV0IGFpUGxheWVyID0gcGxheWVyRmFjdG9yeSgpXG4gICAgICAgIHBsYXllcjEuZ2VuUmFuZG9tRmxlZXQoKVxuICAgICAgICBhaVBsYXllci5nZW5SYW5kb21GbGVldCgpXG4gICAgICAgIGFkZFBsYXllclNoaXBzVG9Eb20ocGxheWVyMSxhaVBsYXllcilcblxuICAgIH1cbiAgICBjb25zdCBjaGVja0lmV2lubmVyID0gKHBsYXllcjEsIHBsYXllcjIpID0+e1xuICAgICAgICBsZXQgd2lubmVyID0gJyc7XG4gICAgICAgIGlmKHBsYXllcjEuZ2FtZWJvYXJkLmFsbFNoaXBzSGF2ZVN1bmsoKSl7XG4gICAgICAgICAgICB3aW5uZXIgPSAncGxheWVyMidcbiAgICAgICAgfVxuICAgICAgICBpZihwbGF5ZXIyLmdhbWVib2FyZC5hbGxTaGlwc0hhdmVTdW5rKCkpe1xuICAgICAgICAgICAgd2lubmVyID0gJ3BsYXllcjEnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbm5lclxuICAgIH1cbiAgICByZXR1cm57XG4gICAgICAgIGdhbWVJbml0XG4gICAgfVxufVxuZXhwb3J0IHtnYW1lQ29udHJvbGxlcn0iLCJmdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQocGxheWVyU3RyLCBkb21FbGUpe1xuICAgIGxldCByb3dMZXR0ZXJzID0gWycwJywgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgIGxldCBnYW1lQmQgPSBkb21FbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0xldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoYHJvdy0ke3BsYXllclN0cn1gLCAndHInKVxuICAgICAgcm93LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwbGF5ZXJTdHJ9LXJvdyR7cm93TGV0dGVyc1tpXX1gKVxuICAgICAgLy9jcmVhdGUgY2VsbHMgd2l0aGluIGVhY2ggcm93XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCAndGQnKVxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtyb3dMZXR0ZXJzW2ldfSR7an1gKVxuICAgICAgICAvL3doaWxlIHNldHRpbmcgZmlyc3Qgcm93LCBhZGQgdGFibGUgY29sIGhlYWRlcnMgYW5kIGFkZCBzY29wZVxuICAgICAgICBpZihyb3dMZXR0ZXJzW2ldID09PSAnMCcpe1xuICAgICAgICAgIGlmKGogPT09IDApIHtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnICc7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGAke2p9YFxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywnY29sJylcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy93aGlsZSBzZXR0aW5nIGZpcnN0IGNvbHVtbiwgYWRkIHRhYmxlIHJvdyBoZWFkZXJzIGFuZCBhZGQgc2NvcGVcbiAgICAgICAgaWYoaiA9PT0gMCAmJiBpc05hTihyb3dMZXR0ZXJzW2ldKSl7XG4gICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGAke3Jvd0xldHRlcnNbaV19YFxuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzY29wZScsJ3JvdycpXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgICAgICB9IFxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICAgIH1cbiAgICAgIGdhbWVCZC5hcHBlbmQocm93KVxuICAgIH1cbiAgICBcbn1cbmV4cG9ydCB7cmVuZGVyR2FtZWJvYXJkfSIsImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeS5qcydcbmltcG9ydCB7IHRyYW5zbGF0ZUNvb3JkVG9JbmRleCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zLmpzJ1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gW11cbiAgbGV0IHBsYWNlZFNoaXBzQXJyYXkgPSBbXVxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vaW5pdGlhbGl6ZSBnYW1lYm9hcmQgdG8gYXJyYXkgb2YgbGVuZ3RoIDEwMCB3aXRoIHRoZSAyIHByb3BzIGJvdGggc2V0IHRvIGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgZ2FtZWJvYXJkLnB1c2goeyBoYXNTaGlwOiBmYWxzZSwgaXNIaXQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICguLi5jb29yZHMpID0+IHtcbiAgICBsZXQgZ2FtZWJvYXJkSW5kZXhlcyA9IFtdXG4gICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdHJhbnNsYXRlQ29vcmRUb0luZGV4KGNvb3JkKVxuICAgICAgZ2FtZWJvYXJkSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIH0pXG4gICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQoLi4uZ2FtZWJvYXJkSW5kZXhlcykgPT09IHRydWUpIHtcbiAgICAgIC8vY3JlYXRlIHNoaXBcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeSguLi5jb29yZHMpXG4gICAgICAvL2FkZCBzaGlwIHRvIEdhbWVib2FyZCdzIHBsYWNlZFNoaXBzQXJyYXlcbiAgICAgIHBsYWNlZFNoaXBzQXJyYXkucHVzaChzaGlwKVxuICAgICAgLy9wYXNzIGVhY2ggY29vcmRpbmF0ZSB0byB0aGUgdHJhbnNsYXRlIGZ1bmN0aW9uIHRvIGZpbmQgaXRzIEluZGV4IGluIHRoZSBnYW1lYm9hcmQgaW4gb3JkZXIgdG8gdXBkYXRlIGhhc1NoaXAgdG8gdHJ1ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmRJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBnSW5kZXggPSBnYW1lYm9hcmRJbmRleGVzW2ldXG4gICAgICAgIGdhbWVib2FyZFtnSW5kZXhdLmhhc1NoaXAgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGFjZW1lbnQnKVxuICB9XG4gIGNvbnN0IGlzVmFsaWRQbGFjZW1lbnQgPSAoLi4uaW5kZXhlcykgPT4ge1xuICAgIGxldCBpc1ZhbGlkQXJyYXkgPSBbXVxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZVxuICAgIGluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGdhbWVib2FyZC5sZW5ndGgpIGlzVmFsaWRBcnJheS5wdXNoKGZhbHNlKVxuICAgICAgZWxzZSBpZiAoZ2FtZWJvYXJkW2luZGV4XS5oYXNTaGlwID09PSB0cnVlKSBpc1ZhbGlkQXJyYXkucHVzaChmYWxzZSlcbiAgICAgIGVsc2UgaXNWYWxpZEFycmF5LnB1c2godHJ1ZSlcbiAgICB9KVxuICAgIGlmIChpc1ZhbGlkQXJyYXkuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfVxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gY29vcmQgPT4ge1xuICAgIGNvbnN0IGdiSW5kZXggPSB0cmFuc2xhdGVDb29yZFRvSW5kZXgoY29vcmQpXG4gICAgZ2FtZWJvYXJkW2diSW5kZXhdLmlzSGl0ID0gdHJ1ZVxuICAgIGxldCBoaXRPck5vdCA9ICdub3QgYSBoaXQnXG4gICAgaWYgKGdhbWVib2FyZFtnYkluZGV4XS5oYXNTaGlwID09PSB0cnVlKSB7XG4gICAgICBoaXRPck5vdCA9IGdldFNoaXBCeUNvb3JkKGNvb3JkKS5oaXQoY29vcmQpXG4gICAgfVxuICAgIHJldHVybiBoaXRPck5vdFxuICB9XG4gIGNvbnN0IGdldFNoaXBCeUNvb3JkID0gY29vcmQgPT4ge1xuICAgIGxldCBmb3VuZFNoaXAgPSBwbGFjZWRTaGlwc0FycmF5LnJlZHVjZShlbGUgPT5cbiAgICAgIGVsZS5zaGlwQ29vcmRzQXJyYXkuaW5jbHVkZXMoY29vcmQpXG4gICAgKVxuICAgIHJldHVybiBmb3VuZFNoaXBcbiAgfVxuICBjb25zdCBhbGxTaGlwc0hhdmVTdW5rID0gKCkgPT4ge1xuICAgIGxldCBhbGxBcmVTdW5rID0gdHJ1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2VkU2hpcHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYWNlZFNoaXBzQXJyYXlbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGFsbEFyZVN1bmsgPSBmYWxzZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsQXJlU3Vua1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGluaXQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHBsYWNlZFNoaXBzQXJyYXksXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRTaGlwQnlDb29yZCxcbiAgICBhbGxTaGlwc0hhdmVTdW5rXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9XG4iLCJleHBvcnQgY29uc3QgdHJhbnNsYXRlQ29vcmRUb0luZGV4ID0gY29vcmQgPT4ge1xuICAgIGlmIChjb29yZC5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlTGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgICBjb25zdCBsZXR0ZXJDaGFyID0gY29vcmRbMF1cbiAgICAgIGlmIChwb3NzaWJsZUxldHRlcnMuaW5jbHVkZXMobGV0dGVyQ2hhcikgJiYgIWlzTmFOKGNvb3JkWzFdKSkge1xuICAgICAgICBjb25zdCBib3ggPSBwYXJzZUludChcbiAgICAgICAgICBwb3NzaWJsZUxldHRlcnMuZmluZEluZGV4KGVsZSA9PiBlbGUgPT09IGxldHRlckNoYXIpICsgY29vcmRbMV1cbiAgICAgICAgKVxuICAgICAgICAvL2luZGV4IGlzIG9uZSBsZXNzIHRoYW4gdGhlIGJveCBvbiBnYW1lYm9hcmRcbiAgICAgICAgcmV0dXJuIGJveCAtIDFcbiAgICAgIH0gZWxzZSByZXR1cm4gJ0ludmFsaWQgQ29vcmRpbmF0ZXMnXG4gICAgfSBlbHNlIGlmIChjb29yZC5sZW5ndGggPT09IDMpIHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlTGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgICBjb25zdCBsZXR0ZXJDaGFyID0gY29vcmRbMF1cbiAgICAgIGlmIChwb3NzaWJsZUxldHRlcnMuaW5jbHVkZXMobGV0dGVyQ2hhcikgICYmICFpc05hTihjb29yZFsxXSkgICYmICFpc05hTihjb29yZFsyXSkgJiYgKGNvb3JkWzFdICsgY29vcmRbMl0gPCAxMSkpIHtcbiAgICAgICAgY29uc3QgYm94ID1cbiAgICAgICAgICBwYXJzZUludChwb3NzaWJsZUxldHRlcnMuZmluZEluZGV4KGVsZSA9PiBlbGUgPT09IGxldHRlckNoYXIpICogMTApICsgMTBcbiAgICAgICAgLy9pbmRleCBpcyBvbmUgbGVzcyB0aGFuIHRoZSBib3ggb24gZ2FtZWJvYXJkXG4gICAgICAgIHJldHVybiBib3ggLSAxXG4gICAgICB9IGVsc2UgcmV0dXJuICdJbnZhbGlkIENvb3JkaW5hdGVzJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgQ29vcmRpbmF0ZXMnXG4gICAgfVxuICB9XG5cbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gbmFtZSA9PiB7XG4gIGxldCBwbGF5ZXJOYW1lID0gbmFtZVxuICAvL2xldCBzaGlwcyA9IFtdXG4gIGxldCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KClcbiAgZ2FtZWJvYXJkLmluaXQoKVxuICBjb25zdCBzaG9vdCA9IChjb29yZCwgb3BwR2FtZWJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIG9wcEdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKVxuICB9XG4vKiBzdGFydGVkIHRoaXMgcmFuZG9tIHNoaXAgZ2VuZXJhdG9yIGJ1dCB0aGluayBJIHdpbGwgZXhwbG9yZSBtYW51YWwgcGxheWVyIHNlbGVjdGlvbiBmaXJzdCAgIFxuY29uc3QgZ2VuUmFuZG9tU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgYXhpcyA9IFsneCcsJ3knXVxuICAgIGxldCBkaXJlY3Rpb24gPSBheGlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogYXhpcy5sZW5ndGgpXVxuICAgIGxldCBjb29yZExldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgIGxldCBzdGFydExldHRlciA9IGNvb3JkTGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb29yZExldHRlcnMubGVuZ3RoKV0gXG4gICAgbGV0IHN0YXJ0TnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd4Jykge1xuICAgICAgbGV0IGNvb3JkcyA9IFtdXG4gICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICBpZihpPT09MCl7XG4gICAgICAgICAgY29vcmRzLnB1c2goYCR7c3RhcnRMZXR0ZXJ9KyR7c3RhcnROdW19YClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGNvb3Jkcy5wdXNoKGAke3N0YXJ0TGV0dGVyfSske3N0YXJ0TnVtICsgaX1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGNvb3JkcylcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7fVxuICAgIGxldCBjb29yZHMgPSBbXVxuICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoaT09PTApe1xuICAgICAgICAgIGNvb3Jkcy5wdXNoKGAke3N0YXJ0TGV0dGVyfSske3N0YXJ0TnVtfWApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IGFycmF5SW5kZXggPSBjb29yZExldHRlcnMuaW5kZXhPZihzdGFydExldHRlcilcbiAgICAgICAgICBjb29yZHMucHVzaChgJHtjb29yZExldHRlcnNbYXJyYXlJbmRleCtpXX0rJHtzdGFydE51bX1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGNvb3JkcylcbiAgfSAqL1xuICBjb25zdCBnZW5SYW5kb21GbGVldCA9ICgpID0+IHtcbiAgICAvLyBmb3Igbm93IEkgd2lsbCBoYXJkY29kZSBteSBvd24gYm9hcmRzIHRvIHVzZSB1bnRpbCBzaGlwIHBsYWNlbWVudCBpcyBpbXBsZW1lbnRlZFxuICAgIC8vIDF4IDUtY29vcmQgc2hpcCwgMXggNC1jb29yZCBzaGlwLCAyeCAzIGNvb3JkIHNoaXAsIDF4IDIgY29vcmQgc2hpcCwgNSBzaGlwcyBpbiB0b3RhbFxuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoJ0MyJywnQzMnLCdDNCcsJ0M1JywnQzYnKVxuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoJ0UyJywnRTMnLCdFNCcsJ0U1JylcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKCdBMScsJ0IxJywnQzEnKVxuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoJ0cyJywnRzMnLCdHNCcpXG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCgnSTInLCdJMycpXG5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBsYXllck5hbWUsXG4gICAgLy9zaGlwcyxcbiAgICBnYW1lYm9hcmQsXG4gICAgc2hvb3QsXG4gICAgLy9nZW5SYW5kb21TaGlwLFxuICAgIGdlblJhbmRvbUZsZWV0XG4gIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyRmFjdG9yeSB9XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9ICguLi5jb29yZHMpID0+IHtcbiAgY29uc3Qgc2hpcENvb3Jkc0FycmF5ID0gQXJyYXkoKVxuICBjb29yZHMubWFwKGNvb3JkID0+IHNoaXBDb29yZHNBcnJheS5wdXNoKGNvb3JkKSlcbiAgY29uc3QgaGl0ID0gY29vcmQgPT4ge1xuICAgIGlmIChzaGlwQ29vcmRzQXJyYXkuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICBjb25zdCBoaXRJbmRleCA9IHNoaXBDb29yZHNBcnJheS5maW5kSW5kZXgoZWxlID0+IGVsZSA9PT0gY29vcmQpXG4gICAgICBzaGlwQ29vcmRzQXJyYXlbaGl0SW5kZXhdID0gJ2hpdCdcbiAgICAgIHJldHVybiAnaGl0J1xuICAgIH1cbiAgfVxuICBsZXQgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChzaGlwQ29vcmRzQXJyYXkuZXZlcnkoZWxlID0+IGVsZSA9PT0gJ2hpdCcpKSByZXR1cm4gdHJ1ZVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNoaXBDb29yZHNBcnJheSxcbiAgICBpc1N1bmssXG4gICAgaGl0XG4gIH1cbn1cblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9