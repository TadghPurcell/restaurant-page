/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const logo = document.createElement(\"h1\");\n  logo.classList.add(\"logo\");\n  logo.textContent = \"The Butter Slip\";\n\n  const about = document.createElement(\"h2\");\n  about.classList.add(\"about\");\n  about.textContent =\n    \"Award winning artisan bakery and cafe located in the heart of Kilkenny City!\";\n\n  const mission = document.createElement(\"h6\");\n  mission.classList.add(\"mission\");\n  mission.textContent =\n    \"Our mission is to provide our customers with freshly baked goods and delicious coffee in a warm and welcoming atmosphere.\";\n\n  const paragraph1 = document.createElement(\"p\");\n  paragraph1.classList.add(\"paragraph--1\");\n  paragraph1.textContent =\n    \"At The Butter Slip, we pride ourselves on using only the finest ingredients to create our baked goods. Our skilled bakers make everything from scratch each day, so you can be sure that you're getting the freshest and most flavorful products possible.\";\n\n  const paragraph2 = document.createElement(\"p\");\n  paragraph2.classList.add(\"paragraph--2\");\n  paragraph2.textContent =\n    \"  Whether you're stopping in for breakfast, lunch, or just a quick snack, we have something for everyone. From our famous scones to our decadent cakes and pastries, we offer a wide variety of baked goods to satisfy any craving. And don't forget to pair your treat with one of our expertly crafted coffees or teas!\";\n\n  const paragraph3 = document.createElement(\"p\");\n  paragraph3.classList.add(\"paragraph--3\");\n  paragraph3.textContent =\n    \"At The Butter Slip, we believe that food is meant to be shared and enjoyed with others. That's why we've created a warm and inviting space where you can gather with friends, family, or colleagues to enjoy a delicious meal or just catch up over a cup of coffee.\";\n\n  const paragraph4 = document.createElement(\"p\");\n  paragraph4.classList.add(\"paragraph--4\");\n  paragraph4.textContent =\n    \"  So come on in, grab a seat, and enjoy the delightful aromas and flavors of our artisan bakery and cafe. We can't wait to share our love of baking with you!\";\n\n  home.appendChild(logo);\n  home.appendChild(about);\n  home.appendChild(mission);\n  home.appendChild(paragraph1);\n  home.appendChild(paragraph2);\n  home.appendChild(paragraph3);\n  home.appendChild(paragraph4);\n\n  return home;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nconst content = document.querySelector(\".content\");\n\ncontent.appendChild((0,_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n\n  const logo = document.createElement(\"h1\");\n  logo.classList.add(\"logo\");\n  logo.textContent = \"The Butter Slip\";\n  header.appendChild(logo);\n\n  const headerTabs = document.createElement(\"div\");\n  headerTabs.classList.add(\"header-tabs\");\n\n  const btnHome = document.createElement(\"button\");\n  btnHome.classList.add(\"btn\", \"btn-home\");\n  btnHome.textContent = \"Home\";\n  headerTabs.appendChild(btnHome);\n\n  const btnMenu = document.createElement(\"button\");\n  btnMenu.classList.add(\"btn\", \"btn-menu\");\n  btnMenu.textContent = \"Menu\";\n  headerTabs.appendChild(btnMenu);\n\n  const btnContact = document.createElement(\"button\");\n  btnContact.classList.add(\"btn\", \"btn-contact\");\n  btnContact.textContent = \"Contact\";\n  headerTabs.appendChild(btnContact);\n\n  header.appendChild(headerTabs);\n\n  return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n\n//# sourceURL=webpack://restaurant-page/./src/init.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;