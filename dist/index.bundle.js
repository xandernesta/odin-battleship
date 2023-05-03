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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --dark-font-color: black;\n    --dark-gray:rgb(94, 94, 94);\n    --header-background-color:rgb(9, 61, 107);\n    --light-font-color: rgb(238, 238, 238);\n    --sidebar-background-color:rgb(14, 100, 100, .8);\n    --blue: rgb(9, 61, 107);\n    --light-blue: rgb(211, 236, 247);\n    --purple: rgb(94, 14, 144);\n    --aqua: #00B3BB;\n    --light-aqua: #00E6AA;\n    --dark-aqua: #0E9AA1;\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: #DFF1F6;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, \nbody {\n    margin:0;\n    height: 100%;\n    font-family: 'Montserrat';\n    font-weight: 400;\n    background: linear-gradient(180deg, var(--light-blue) 0%, var(--blue) 95.5%);\n}\n/* HEADER STYLE */\nheader {\n    display: inline-block;\n    width: 100%;\n    padding: 1rem;\n    border-color: 1px solid var(--dark-font-color);\n    text-align: left;\n  }\nh1 {\n    display: inline-block;\n    margin-left: .25rem;\n    font-family: 'Quantico';\n    font-size: 4rem;\n}\n/*CONTAINER STYLE*/\n#content {\n    padding:1rem;\n    /* transform: translateY(-100vw); */\n    /* opacity: 0; */\n    /* transition: 300ms ease-in-out; */\n    display: flex;\n    justify-content: center;\n  }\n/* .content.active {\n    transform: none;\n    opacity: 100%;\n} */\n.container-left,\n.container-right {\n    display: flex;\n    flex-direction: column;\n    justify-content:space-around;\n    align-items:center;\n    gap: 1rem;\n    width: 20rem;\n    margin: 2rem 14rem 2rem 14rem;\n    /* background: black; */\n}\nh3 {\n    color: #273547e7;\n    cursor: default;\n    font-size: 1.5rem;\n    margin: 0;\n}\n/*GAMEBOARD STYLE*/\n/*Table styling */\n.board {\n    display: table;\n    flex-shrink: 0;\n    table-layout: fixed;\n    border: 1px solid black;\n    width: 4rem;\n    height: 6rem;\n    /* grid-template-rows: repeat(10, 1fr); */\n    \n}\n.tr{ \n    display: table-row; \n    padding: 1rem;\n}\n.td{ \n    display: table-cell; \n    border: 1px solid black;\n    color: white;\n    text-align:center;\n    padding: .8rem 0 .5rem 0;\n    width: 3rem;\n    height: 3rem;\n}\n.td:not(.header):hover{\n    background: var(--dark-font-color);\n}\n\n/*FOOTER STYLE*/\nfooter{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.footer {\n    font-family: 'Mochiy Pop One';\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem 0;\n    color: var(--light-font-color);\n    background: var(--blue)\n}\na {\n    display: inline-block;\n    text-decoration:none;\n    color: var(--light-font-color);\n}\n\n.fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 4px;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg)  scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;IACI,wBAAwB;IACxB,2BAA2B;IAC3B,yCAAyC;IACzC,sCAAsC;IACtC,gDAAgD;IAChD,uBAAuB;IACvB,gCAAgC;IAChC,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,+BAA+B;IAC/B,oBAAoB;IACpB,qCAAqC;IACrC,2BAA2B;AAC/B;AACA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;IAEI,QAAQ;IACR,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,4EAA4E;AAChF;AACA,iBAAiB;AACjB;IACI,qBAAqB;IACrB,WAAW;IACX,aAAa;IACb,8CAA8C;IAC9C,gBAAgB;EAClB;AACF;IACI,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;AACA,kBAAkB;AAClB;IACI,YAAY;IACZ,mCAAmC;IACnC,gBAAgB;IAChB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;EACzB;AACF;;;GAGG;AACH;;IAEI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,SAAS;AACb;AACA,kBAAkB;AAClB,iBAAiB;AACjB;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,yCAAyC;;AAE7C;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kCAAkC;AACtC;;AAEA,eAAe;AACf;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;AACX;AACA;IACI,6BAA6B;IAC7B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,8BAA8B;IAC9B;AACJ;AACA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,sCAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,qCAAqC,EAAE,yCAAyC;IAChF,8BAA8B;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@100;400;500;600&family=Mochiy+Pop+One&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,500;0,700;1,100&family=Fraunces&family=Poppins:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,400&family=Montserrat:wght@300;400;500;600;700&family=Quantico&display=swap');\n:root {\n    --dark-font-color: black;\n    --dark-gray:rgb(94, 94, 94);\n    --header-background-color:rgb(9, 61, 107);\n    --light-font-color: rgb(238, 238, 238);\n    --sidebar-background-color:rgb(14, 100, 100, .8);\n    --blue: rgb(9, 61, 107);\n    --light-blue: rgb(211, 236, 247);\n    --purple: rgb(94, 14, 144);\n    --aqua: #00B3BB;\n    --light-aqua: #00E6AA;\n    --dark-aqua: #0E9AA1;\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: #DFF1F6;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, \nbody {\n    margin:0;\n    height: 100%;\n    font-family: 'Montserrat';\n    font-weight: 400;\n    background: linear-gradient(180deg, var(--light-blue) 0%, var(--blue) 95.5%);\n}\n/* HEADER STYLE */\nheader {\n    display: inline-block;\n    width: 100%;\n    padding: 1rem;\n    border-color: 1px solid var(--dark-font-color);\n    text-align: left;\n  }\nh1 {\n    display: inline-block;\n    margin-left: .25rem;\n    font-family: 'Quantico';\n    font-size: 4rem;\n}\n/*CONTAINER STYLE*/\n#content {\n    padding:1rem;\n    /* transform: translateY(-100vw); */\n    /* opacity: 0; */\n    /* transition: 300ms ease-in-out; */\n    display: flex;\n    justify-content: center;\n  }\n/* .content.active {\n    transform: none;\n    opacity: 100%;\n} */\n.container-left,\n.container-right {\n    display: flex;\n    flex-direction: column;\n    justify-content:space-around;\n    align-items:center;\n    gap: 1rem;\n    width: 20rem;\n    margin: 2rem 14rem 2rem 14rem;\n    /* background: black; */\n}\nh3 {\n    color: #273547e7;\n    cursor: default;\n    font-size: 1.5rem;\n    margin: 0;\n}\n/*GAMEBOARD STYLE*/\n/*Table styling */\n.board {\n    display: table;\n    flex-shrink: 0;\n    table-layout: fixed;\n    border: 1px solid black;\n    width: 4rem;\n    height: 6rem;\n    /* grid-template-rows: repeat(10, 1fr); */\n    \n}\n.tr{ \n    display: table-row; \n    padding: 1rem;\n}\n.td{ \n    display: table-cell; \n    border: 1px solid black;\n    color: white;\n    text-align:center;\n    padding: .8rem 0 .5rem 0;\n    width: 3rem;\n    height: 3rem;\n}\n.td:not(.header):hover{\n    background: var(--dark-font-color);\n}\n\n/*FOOTER STYLE*/\nfooter{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.footer {\n    font-family: 'Mochiy Pop One';\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem 0;\n    color: var(--light-font-color);\n    background: var(--blue)\n}\na {\n    display: inline-block;\n    text-decoration:none;\n    color: var(--light-font-color);\n}\n\n.fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 4px;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg)  scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n}"],"sourceRoot":""}]);
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



(0,_modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addGameboardsToDom)()
//these might need to go into gameController
//addPlayerShipsToDom()
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
function addPlayerShipsToDom(){
/*
* start with randomFleet generation for player AI fleet should get handled in gameController
* get coordinates of ships
* add classes to divs that have ships
* only change background of divs for player ships
*
*/

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtDQUFrQyxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZV9oZWxwZXJzL3JlbmRlckdhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNpbnplbDp3Z2h0QDQwMDs1MDA7NjAwJmZhbWlseT1JbnRlcjp3Z2h0QDEwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TW9jaGl5K1BvcCtPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw1MDA7MCw3MDA7MSwxMDAmZmFtaWx5PUZyYXVuY2VzJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDYwMDsxLDQwMCZmYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDQwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVF1YW50aWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWRhcmstZ3JheTpyZ2IoOTQsIDk0LCA5NCk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6cmdiKDksIDYxLCAxMDcpO1xcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxMDAsIDEwMCwgLjgpO1xcbiAgICAtLWJsdWU6IHJnYig5LCA2MSwgMTA3KTtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjExLCAyMzYsIDI0Nyk7XFxuICAgIC0tcHVycGxlOiByZ2IoOTQsIDE0LCAxNDQpO1xcbiAgICAtLWFxdWE6ICMwMEIzQkI7XFxuICAgIC0tbGlnaHQtYXF1YTogIzAwRTZBQTtcXG4gICAgLS1kYXJrLWFxdWE6ICMwRTlBQTE7XFxuICAgIC0tbWVudS1oNC1jb2xvcjogcmdiKDcsIDMzLCA1Nik7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNERkYxRjY7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBcXG5ib2R5IHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tbGlnaHQtYmx1ZSkgMCUsIHZhcigtLWJsdWUpIDk1LjUlKTtcXG59XFxuLyogSEVBREVSIFNUWUxFICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWFudGljbyc7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLypDT05UQUlORVIgU1RZTEUqL1xcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZ3KTsgKi9cXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG4gICAgLyogdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbi8qIC5jb250ZW50LmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG59ICovXFxuLmNvbnRhaW5lci1sZWZ0LFxcbi5jb250YWluZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMTRyZW0gMnJlbSAxNHJlbTtcXG4gICAgLyogYmFja2dyb3VuZDogYmxhY2s7ICovXFxufVxcbmgzIHtcXG4gICAgY29sb3I6ICMyNzM1NDdlNztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4vKkdBTUVCT0FSRCBTVFlMRSovXFxuLypUYWJsZSBzdHlsaW5nICovXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7ICovXFxuICAgIFxcbn1cXG4udHJ7IFxcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7IFxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4udGR7IFxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC44cmVtIDAgLjVyZW0gMDtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuLnRkOm5vdCguaGVhZGVyKTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG59XFxuXFxuLypGT09URVIgU1RZTEUqL1xcbmZvb3RlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb2NoaXkgUG9wIE9uZSc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSlcXG59XFxuYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgIHNjYWxlKDEuMSk7IC8qIERvbid0IHdhbnQgaXQgdG8gcm90YXRlIG9uIHRoaXMgcGFnZSAqL1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLGdEQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQywyQkFBMkI7QUFDL0I7QUFDQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7O0lBRUksUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRFQUE0RTtBQUNoRjtBQUNBLGlCQUFpQjtBQUNqQjtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQSxrQkFBa0I7QUFDbEI7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNGOzs7R0FHRztBQUNIOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7O0FBRTdDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBLGVBQWU7QUFDZjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87QUFDWDtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUMsRUFBRSx5Q0FBeUM7SUFDaEYsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNpbnplbDp3Z2h0QDQwMDs1MDA7NjAwJmZhbWlseT1JbnRlcjp3Z2h0QDEwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TW9jaGl5K1BvcCtPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw1MDA7MCw3MDA7MSwxMDAmZmFtaWx5PUZyYXVuY2VzJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDYwMDsxLDQwMCZmYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDQwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVF1YW50aWNvJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290IHtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWRhcmstZ3JheTpyZ2IoOTQsIDk0LCA5NCk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6cmdiKDksIDYxLCAxMDcpO1xcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxMDAsIDEwMCwgLjgpO1xcbiAgICAtLWJsdWU6IHJnYig5LCA2MSwgMTA3KTtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjExLCAyMzYsIDI0Nyk7XFxuICAgIC0tcHVycGxlOiByZ2IoOTQsIDE0LCAxNDQpO1xcbiAgICAtLWFxdWE6ICMwMEIzQkI7XFxuICAgIC0tbGlnaHQtYXF1YTogIzAwRTZBQTtcXG4gICAgLS1kYXJrLWFxdWE6ICMwRTlBQTE7XFxuICAgIC0tbWVudS1oNC1jb2xvcjogcmdiKDcsIDMzLCA1Nik7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNERkYxRjY7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBcXG5ib2R5IHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tbGlnaHQtYmx1ZSkgMCUsIHZhcigtLWJsdWUpIDk1LjUlKTtcXG59XFxuLyogSEVBREVSIFNUWUxFICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWFudGljbyc7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLypDT05UQUlORVIgU1RZTEUqL1xcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZ3KTsgKi9cXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXG4gICAgLyogdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbi8qIC5jb250ZW50LmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG59ICovXFxuLmNvbnRhaW5lci1sZWZ0LFxcbi5jb250YWluZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMTRyZW0gMnJlbSAxNHJlbTtcXG4gICAgLyogYmFja2dyb3VuZDogYmxhY2s7ICovXFxufVxcbmgzIHtcXG4gICAgY29sb3I6ICMyNzM1NDdlNztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4vKkdBTUVCT0FSRCBTVFlMRSovXFxuLypUYWJsZSBzdHlsaW5nICovXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7ICovXFxuICAgIFxcbn1cXG4udHJ7IFxcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7IFxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4udGR7IFxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC44cmVtIDAgLjVyZW0gMDtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuLnRkOm5vdCguaGVhZGVyKTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG59XFxuXFxuLypGT09URVIgU1RZTEUqL1xcbmZvb3RlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb2NoaXkgUG9wIE9uZSc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSlcXG59XFxuYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgIHNjYWxlKDEuMSk7IC8qIERvbid0IHdhbnQgaXQgdG8gcm90YXRlIG9uIHRoaXMgcGFnZSAqL1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7YWRkR2FtZWJvYXJkc1RvRG9tLCBhZGRQbGF5ZXJTaGlwc1RvRG9tfSBmcm9tICcuL21vZHVsZXMvZG9tRnVuY3Rpb25zLmpzJ1xuXG5hZGRHYW1lYm9hcmRzVG9Eb20oKVxuLy90aGVzZSBtaWdodCBuZWVkIHRvIGdvIGludG8gZ2FtZUNvbnRyb2xsZXJcbi8vYWRkUGxheWVyU2hpcHNUb0RvbSgpXG4vL2dlbmVyYXRlQUkgZmxlZXRcbiIsImltcG9ydCB7cmVuZGVyR2FtZWJvYXJkfSBmcm9tICcuL2dhbWVfaGVscGVycy9yZW5kZXJHYW1lYm9hcmQuanMnXG5mdW5jdGlvbiBhZGRHYW1lYm9hcmRzVG9Eb20gKCkge1xuICBsZXQgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWxlZnQnKVxuICBsZXQgbGVmdENvbnRhaW5lckgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBsZWZ0Q29udGFpbmVySDMudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIlxuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXJIMylcbiAgbGV0IGxlZnRHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0R2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJylcbiAgbGVmdEdhbWVib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbWVib2FyZC1sZWZ0JylcblxuICBsZXQgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItcmlnaHQnKVxuICBsZXQgcmlnaHRDb250YWluZXJIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcmlnaHRDb250YWluZXJIMy50ZXh0Q29udGVudCA9IFwiRW5lbXkncyBCb2FyZFwiXG4gIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVySDMpXG4gIGxldCByaWdodEdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHJpZ2h0R2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJylcbiAgcmlnaHRHYW1lYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lYm9hcmQtcmlnaHQnKVxuXG4gIC8vY3JlYXRlIHBsYXllcnMnIGdhbWVib2FyZCBkaXZzIGFuZCBhcHBlbmRzIHRvIHRoZSBkb21FbGVtZW50IHByb3ZpZGVkIGFzIHNlY29uZCBpbnB1dCBcbiAgcmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXInLCBsZWZ0R2FtZWJvYXJkKVxuICByZW5kZXJHYW1lYm9hcmQoJ2VuZW15JywgcmlnaHRHYW1lYm9hcmQpXG4gIC8vRW5kIG9mIHBsYXllcjIncyBnYW1lYm9hcmRcbiAgLy9hcHBlbmRzIHRvIGV4aXN0aW5nIGVsZW1lbnRzXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEdhbWVib2FyZClcbiAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRHYW1lYm9hcmQpXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcilcbn1cbmZ1bmN0aW9uIGFkZFBsYXllclNoaXBzVG9Eb20oKXtcbi8qXG4qIHN0YXJ0IHdpdGggcmFuZG9tRmxlZXQgZ2VuZXJhdGlvbiBmb3IgcGxheWVyIEFJIGZsZWV0IHNob3VsZCBnZXQgaGFuZGxlZCBpbiBnYW1lQ29udHJvbGxlclxuKiBnZXQgY29vcmRpbmF0ZXMgb2Ygc2hpcHNcbiogYWRkIGNsYXNzZXMgdG8gZGl2cyB0aGF0IGhhdmUgc2hpcHNcbiogb25seSBjaGFuZ2UgYmFja2dyb3VuZCBvZiBkaXZzIGZvciBwbGF5ZXIgc2hpcHNcbipcbiovXG5cbn1cblxuZXhwb3J0IHsgYWRkR2FtZWJvYXJkc1RvRG9tLCBhZGRQbGF5ZXJTaGlwc1RvRG9tIH1cbiIsImZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZChwbGF5ZXJTdHIsIGRvbUVsZSl7XG4gICAgbGV0IHJvd0xldHRlcnMgPSBbJzAnLCAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgbGV0IGdhbWVCZCA9IGRvbUVsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93TGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByb3cuY2xhc3NMaXN0LmFkZChgcm93LSR7cGxheWVyU3RyfWAsICd0cicpXG4gICAgICByb3cuc2V0QXR0cmlidXRlKCdpZCcsIGAke3BsYXllclN0cn0tcm93JHtyb3dMZXR0ZXJzW2ldfWApXG4gICAgICAvL2NyZWF0ZSBjZWxscyB3aXRoaW4gZWFjaCByb3dcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTE7IGorKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcsICd0ZCcpXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Jvd0xldHRlcnNbaV19JHtqfWApXG4gICAgICAgIC8vd2hpbGUgc2V0dGluZyBmaXJzdCByb3csIGFkZCB0YWJsZSBjb2wgaGVhZGVycyBhbmQgYWRkIHNjb3BlXG4gICAgICAgIGlmKHJvd0xldHRlcnNbaV0gPT09ICcwJyl7XG4gICAgICAgICAgaWYoaiA9PT0gMCkge1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcgJztcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYCR7an1gXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCdjb2wnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3doaWxlIHNldHRpbmcgZmlyc3QgY29sdW1uLCBhZGQgdGFibGUgcm93IGhlYWRlcnMgYW5kIGFkZCBzY29wZVxuICAgICAgICBpZihqID09PSAwICYmIGlzTmFOKHJvd0xldHRlcnNbaV0pKXtcbiAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYCR7cm93TGV0dGVyc1tpXX1gXG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywncm93JylcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgICAgIH0gXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKVxuICAgICAgfVxuICAgICAgZ2FtZUJkLmFwcGVuZChyb3cpXG4gICAgfVxuICAgIFxufVxuZXhwb3J0IHtyZW5kZXJHYW1lYm9hcmR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9