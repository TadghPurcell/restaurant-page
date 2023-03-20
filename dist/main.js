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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nconst content = document.querySelector(\".content\");\n\ncontent.appendChild((0,_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n\n  const logo = document.createElement(\"h1\");\n  logo.classList.add(\"logo\");\n  logo.textContent = \"The Butter Slip\";\n  header.appendChild(logo);\n\n  const headerTabs = document.createElement(\"div\");\n  headerTabs.classList.add(\"header-tabs\");\n\n  const btnHome = document.createElement(\"button\");\n  btnHome.classList.add(\"btn\", \"btn-home\");\n  btnHome.textContent = \"Home\";\n  btnHome.setAttribute(\"autofocus\", \"\");\n  headerTabs.appendChild(btnHome);\n\n  btnHome.addEventListener(\"click\", function () {\n    document.querySelector(\".home\").classList.remove(\"hidden\");\n    document.querySelector(\".menu\").classList.add(\"hidden\");\n    // btnMenu.classList.add(\"hidden\");\n    // btnContact.classList.add(\"hidden\");\n  });\n\n  const btnMenu = document.createElement(\"button\");\n  btnMenu.classList.add(\"btn\", \"btn-menu\");\n  btnMenu.textContent = \"Menu\";\n  headerTabs.appendChild(btnMenu);\n\n  btnMenu.addEventListener(\"click\", function () {\n    document.querySelector(\".home\").classList.add(\"hidden\");\n    document.querySelector(\".menu\").classList.remove(\"hidden\");\n  });\n\n  const btnContact = document.createElement(\"button\");\n  btnContact.classList.add(\"btn\", \"btn-contact\");\n  btnContact.textContent = \"Contact\";\n  headerTabs.appendChild(btnContact);\n\n  btnContact.addEventListener(\"click\", function () {\n    document.querySelector(\".home\").classList.add(\"hidden\");\n  });\n\n  header.appendChild(headerTabs);\n\n  return header;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/init.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createDrinksMenu() {\n  const drinksMenu = document.createElement(\"div\");\n  drinksMenu.classList.add(\"drinks-menu\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menu-title\");\n\n  const menuTitleName = document.createElement(\"h1\");\n  menuTitleName.classList.add(\"menu-title-name\");\n  menuTitleName.textContent = \"Drinks\";\n\n  menuTitle.appendChild(menuTitleName);\n  drinksMenu.appendChild(menuTitle);\n\n  const drinks = document.createElement(\"div\");\n  drinks.classList.add(\"drinks\");\n\n  const drinksItem1 = document.createElement(\"div\");\n  drinksItem1.classList.add(\"item\", \"item--1\");\n\n  const drinksItem1Title = document.createElement(\"h3\");\n  drinksItem1Title.classList.add(\"title\");\n  drinksItem1Title.textContent = \"Espresso\";\n  const drinksItem1Content = document.createElement(\"p\");\n  drinksItem1Content.classList.add(\"content\");\n  const drinksItem1Price = document.createElement(\"p\");\n  drinksItem1Price.classList.add(\"price\");\n  drinksItem1Price.textContent = \"€2.80\";\n\n  drinksItem1.appendChild(drinksItem1Title);\n  drinksItem1.appendChild(drinksItem1Content);\n  drinksItem1.appendChild(drinksItem1Price);\n  drinks.appendChild(drinksItem1);\n\n  const drinksItem2 = document.createElement(\"div\");\n  drinksItem2.classList.add(\"item\", \"item--2\");\n\n  const drinksItem2Title = document.createElement(\"h3\");\n  drinksItem2Title.classList.add(\"title\");\n  drinksItem2Title.textContent = \"Americano\";\n  const drinksItem2Content = document.createElement(\"p\");\n  drinksItem2Content.classList.add(\"content\");\n  const drinksItem2Price = document.createElement(\"p\");\n  drinksItem2Price.classList.add(\"price\");\n  drinksItem2Price.textContent = \"€3.20\";\n\n  drinksItem2.appendChild(drinksItem2Title);\n  drinksItem2.appendChild(drinksItem2Content);\n  drinksItem2.appendChild(drinksItem2Price);\n  drinks.appendChild(drinksItem2);\n\n  const drinksItem3 = document.createElement(\"div\");\n  drinksItem3.classList.add(\"item\", \"item--3\");\n\n  const drinksItem3Title = document.createElement(\"h3\");\n  drinksItem3Title.classList.add(\"title\");\n  drinksItem3Title.textContent = \"Flat White\";\n  const drinksItem3Content = document.createElement(\"p\");\n  drinksItem3Content.classList.add(\"content\");\n  const drinksItem3Price = document.createElement(\"p\");\n  drinksItem3Price.classList.add(\"price\");\n  drinksItem3Price.textContent = \"€3.60\";\n\n  drinksItem3.appendChild(drinksItem3Title);\n  drinksItem3.appendChild(drinksItem3Content);\n  drinksItem3.appendChild(drinksItem3Price);\n  drinks.appendChild(drinksItem3);\n\n  const drinksItem4 = document.createElement(\"div\");\n  drinksItem4.classList.add(\"item\", \"item--4\");\n\n  const drinksItem4Title = document.createElement(\"h3\");\n  drinksItem4Title.classList.add(\"title\");\n  drinksItem4Title.textContent = \"Cappuccino\";\n  const drinksItem4Content = document.createElement(\"p\");\n  drinksItem4Content.classList.add(\"content\");\n  const drinksItem4Price = document.createElement(\"p\");\n  drinksItem4Price.classList.add(\"price\");\n  drinksItem4Price.textContent = \"€4\";\n\n  drinksItem4.appendChild(drinksItem4Title);\n  drinksItem4.appendChild(drinksItem4Content);\n  drinksItem4.appendChild(drinksItem4Price);\n  drinks.appendChild(drinksItem4);\n\n  const drinksItem5 = document.createElement(\"div\");\n  drinksItem5.classList.add(\"item\", \"item--5\");\n\n  const drinksItem5Title = document.createElement(\"h3\");\n  drinksItem5Title.classList.add(\"title\");\n  drinksItem5Title.textContent = \"Latte\";\n  const drinksItem5Content = document.createElement(\"p\");\n  drinksItem5Content.classList.add(\"content\");\n  const drinksItem5Price = document.createElement(\"p\");\n  drinksItem5Price.classList.add(\"price\");\n  drinksItem5Price.textContent = \"€4.10\";\n\n  drinksItem5.appendChild(drinksItem5Title);\n  drinksItem5.appendChild(drinksItem5Content);\n  drinksItem5.appendChild(drinksItem5Price);\n  drinks.appendChild(drinksItem5);\n\n  const drinksItem6 = document.createElement(\"div\");\n  drinksItem6.classList.add(\"item\", \"item--6\");\n\n  const drinksItem6Title = document.createElement(\"h3\");\n  drinksItem6Title.classList.add(\"title\");\n  drinksItem6Title.textContent = \"Mocha\";\n  const drinksItem6Content = document.createElement(\"p\");\n  drinksItem6Content.classList.add(\"content\");\n  const drinksItem6Price = document.createElement(\"p\");\n  drinksItem6Price.classList.add(\"price\");\n  drinksItem6Price.textContent = \"€4.20\";\n\n  drinksItem6.appendChild(drinksItem6Title);\n  drinksItem6.appendChild(drinksItem6Content);\n  drinksItem6.appendChild(drinksItem6Price);\n  drinks.appendChild(drinksItem6);\n\n  const drinksItem7 = document.createElement(\"div\");\n  drinksItem7.classList.add(\"item\", \"item--7\");\n\n  const drinksItem7Title = document.createElement(\"h3\");\n  drinksItem7Title.classList.add(\"title\");\n  drinksItem7Title.textContent = \"Tea\";\n  const drinksItem7Content = document.createElement(\"p\");\n  drinksItem7Content.classList.add(\"content\");\n  const drinksItem7Price = document.createElement(\"p\");\n  drinksItem7Price.classList.add(\"price\");\n  drinksItem7Price.textContent = \"€2.80\";\n\n  drinksItem7.appendChild(drinksItem7Title);\n  drinksItem7.appendChild(drinksItem7Content);\n  drinksItem7.appendChild(drinksItem7Price);\n  drinks.appendChild(drinksItem7);\n\n  const drinksItem8 = document.createElement(\"div\");\n  drinksItem8.classList.add(\"item\", \"item--8\");\n\n  const drinksItem8Title = document.createElement(\"h3\");\n  drinksItem8Title.classList.add(\"title\");\n  drinksItem8Title.textContent = \"Hot Chocolate\";\n  const drinksItem8Content = document.createElement(\"p\");\n  drinksItem8Content.classList.add(\"content\");\n  const drinksItem8Price = document.createElement(\"p\");\n  drinksItem8Price.classList.add(\"price\");\n  drinksItem8Price.textContent = \"€4\";\n\n  drinksItem8.appendChild(drinksItem8Title);\n  drinksItem8.appendChild(drinksItem8Content);\n  drinksItem8.appendChild(drinksItem8Price);\n  drinks.appendChild(drinksItem8);\n\n  drinksMenu.append(drinks);\n\n  return drinksMenu;\n}\n\nfunction createBreakfastMenu() {\n  const breakfastMenu = document.createElement(\"div\");\n  breakfastMenu.classList.add(\"breakfast-menu\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menu-title\");\n\n  const menuTitleName = document.createElement(\"h1\");\n  menuTitleName.classList.add(\"menu-title-name\");\n  menuTitleName.textContent = \"Breakfast\";\n\n  menuTitle.appendChild(menuTitleName);\n  breakfastMenu.appendChild(menuTitle);\n\n  return breakfastMenu;\n}\n\nfunction createLunchMenu() {\n  const lunchMenu = document.createElement(\"div\");\n  lunchMenu.classList.add(\"lunch-menu\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menu-title\");\n\n  const menuTitleName = document.createElement(\"h1\");\n  menuTitleName.classList.add(\"menu-title-name\");\n  menuTitleName.textContent = \"Lunch\";\n\n  menuTitle.appendChild(menuTitleName);\n  lunchMenu.appendChild(menuTitle);\n\n  return lunchMenu;\n}\n\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\", \"hidden\");\n  menu.appendChild(createBreakfastMenu());\n  menu.appendChild(createLunchMenu());\n  menu.appendChild(createDrinksMenu());\n\n  return menu;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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