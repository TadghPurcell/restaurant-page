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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\", \"hidden\");\n\n  const locationDetails = document.createElement(\"div\");\n  locationDetails.classList.add(\"location-details\");\n\n  const createDetails = function (title, ...contents) {\n    const details = document.createElement(\"div\");\n    details.classList.add(`${title}-details`);\n\n    const header = document.createElement(\"h3\");\n    header.classList.add(`${title}-header`);\n    header.textContent = title;\n    header.style.textTransform = \"Capitalize\";\n\n    const content = document.createElement(\"p\");\n    content.classList.add(`${title}-content`);\n\n    const span1 = document.createElement(\"span\");\n    span1.textContent = contents[0];\n\n    const span2 = document.createElement(\"span\");\n    span2.textContent = contents[1];\n\n    const span3 = document.createElement(\"span\");\n    span3.textContent = contents[2];\n\n    const span4 = document.createElement(\"span\");\n    span4.textContent = contents[3];\n\n    console.log(contents[3]);\n\n    if (contents[0]) content.appendChild(span1);\n    if (contents[1]) content.appendChild(span2);\n    if (contents[2]) content.appendChild(span3);\n    if (contents[3]) content.appendChild(span4);\n\n    details.appendChild(header);\n    details.appendChild(content);\n\n    return details;\n  };\n\n  const map = document.createElement(\"div\");\n  map.innerHTML = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19362.3471865442!2d-7.2489604110001835!3d52.6546779169583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1679380918545!5m2!1sen!2sie\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`;\n\n  locationDetails.appendChild(\n    createDetails(\n      \"address\",\n      \"158 Tulip Inn Street,\",\n      \"158 Tulip Inn Street,\",\n      \"Co. Kilkenny,\",\n      \"R95 E3792X\"\n    )\n  );\n  locationDetails.appendChild(map);\n\n  const informationDetails = document.createElement(\"div\");\n  informationDetails.classList.add(\"information-details\");\n\n  const contactDetails = document.createElement(\"div\");\n  contactDetails.classList.add(\"contact-details\");\n\n  const contactHeader = document.createElement(\"h3\");\n  contactHeader.classList.add(\"contact-header\");\n  contactHeader.textContent = \"Contact Us\";\n\n  const contactNumber = document.createElement(\"p\");\n  contactNumber.classList.add(\"number\");\n  contactNumber.textContent = \" +353 20 919 2682\";\n\n  const contactEmail = document.createElement(\"p\");\n  contactEmail.classList.add(\"email\");\n  contactEmail.textContent = \" TheButterSlip@fakeemail.com\";\n\n  contactDetails.appendChild(contactHeader);\n  contactDetails.appendChild(contactNumber);\n  contactDetails.appendChild(contactEmail);\n\n  informationDetails.appendChild(\n    createDetails(\n      \"hours\",\n      \"Monday-Friday: 07:30 - 16:00\",\n      \"Saturday: 08:30 - 15:00\",\n      \"Sunday: 9:30 - 16:00\"\n    )\n  );\n  informationDetails.appendChild(contactDetails);\n\n  contact.appendChild(locationDetails);\n  contact.appendChild(informationDetails);\n\n  return contact;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const logo = document.createElement(\"h1\");\n  logo.classList.add(\"logo\");\n  logo.textContent = \"The Butter Slip\";\n\n  const about = document.createElement(\"h2\");\n  about.classList.add(\"about\");\n  about.textContent =\n    \"Award winning artisan bakery and cafe located in the heart of Kilkenny City!\";\n\n  const mission = document.createElement(\"h6\");\n  mission.classList.add(\"mission\");\n  mission.textContent =\n    \"Our mission is to provide our customers with freshly baked goods and delicious coffee in a warm and welcoming atmosphere.\";\n\n  const createParagraph = function (text) {\n    const paragraph = document.createElement(\"p\");\n    paragraph.classList.add(\"paragraph\");\n    paragraph.textContent = text;\n\n    return paragraph;\n  };\n\n  home.appendChild(logo);\n  home.appendChild(about);\n  home.appendChild(mission);\n  home.appendChild(\n    createParagraph(\n      \"At The Butter Slip, we pride ourselves on using only the finest ingredients to create our baked goods. Our skilled bakers make everything from scratch each day, so you can be sure that you're getting the freshest and most flavorful products possible.\"\n    )\n  );\n  home.appendChild(\n    createParagraph(\n      \"Whether you're stopping in for breakfast, lunch, or just a quick snack, we have something for everyone. From our famous scones to our decadent cakes and pastries, we offer a wide variety of baked goods to satisfy any craving. And don't forget to pair your treat with one of our expertly crafted coffees or teas!\"\n    )\n  );\n  home.appendChild(\n    createParagraph(\n      \"At The Butter Slip, we believe that food is meant to be shared and enjoyed with others. That's why we've created a warm and inviting space where you can gather with friends, family, or colleagues to enjoy a delicious meal or just catch up over a cup of coffee.\"\n    )\n  );\n  home.appendChild(\n    createParagraph(\n      \"So come on in, grab a seat, and enjoy the delightful aromas and flavors of our artisan bakery and cafe. We can't wait to share our love of baking with you!\"\n    )\n  );\n\n  return home;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.querySelector(\".content\");\n\ncontent.appendChild((0,_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\ncontent.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n\n  const logo = document.createElement(\"h1\");\n  logo.classList.add(\"logo\");\n  logo.textContent = \"The Butter Slip\";\n  header.appendChild(logo);\n\n  const headerTabs = document.createElement(\"div\");\n  headerTabs.classList.add(\"header-tabs\");\n\n  const btnHome = document.createElement(\"button\");\n  btnHome.classList.add(\"btn\", \"btn-home\");\n  btnHome.textContent = \"Home\";\n  btnHome.setAttribute(\"autofocus\", \"\");\n  headerTabs.appendChild(btnHome);\n\n  btnHome.addEventListener(\"click\", function () {\n    document.querySelector(\".home\").classList.remove(\"hidden\");\n    document.querySelector(\".menu\").classList.add(\"hidden\");\n    document.querySelector(\".contact\").classList.add(\"hidden\");\n  });\n\n  const btnMenu = document.createElement(\"button\");\n  btnMenu.classList.add(\"btn\", \"btn-menu\");\n  btnMenu.textContent = \"Menu\";\n  headerTabs.appendChild(btnMenu);\n\n  btnMenu.addEventListener(\"click\", function () {\n    document.querySelector(\".home\").classList.add(\"hidden\");\n    document.querySelector(\".menu\").classList.remove(\"hidden\");\n    document.querySelector(\".contact\").classList.add(\"hidden\");\n  });\n\n  const btnContact = document.createElement(\"button\");\n  btnContact.classList.add(\"btn\", \"btn-contact\");\n  btnContact.textContent = \"Contact\";\n  headerTabs.appendChild(btnContact);\n\n  btnContact.addEventListener(\"click\", function () {\n    document.querySelector(\".home\").classList.add(\"hidden\");\n    document.querySelector(\".menu\").classList.add(\"hidden\");\n    document.querySelector(\".contact\").classList.remove(\"hidden\");\n  });\n\n  header.appendChild(headerTabs);\n\n  return header;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/init.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nconst createMenuItem = function (title, content, price, addOn) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.classList.add(\"item\");\n\n  const menuItemTitle = document.createElement(\"h3\");\n  menuItemTitle.classList.add(\"title\");\n  menuItemTitle.textContent = title;\n\n  const menuItemContent = document.createElement(\"p\");\n  menuItemContent.classList.add(\"content\");\n  menuItemContent.textContent = content;\n\n  const menuItemPrice = document.createElement(\"p\");\n  menuItemPrice.classList.add(\"price\");\n  menuItemPrice.textContent = price;\n\n  const menuItemAddOn = document.createElement(\"p\");\n  menuItemAddOn.classList.add(\"addon\");\n  menuItemAddOn.textContent = addOn;\n\n  menuItem.appendChild(menuItemTitle);\n  if (content) menuItem.appendChild(menuItemContent);\n  menuItem.appendChild(menuItemPrice);\n  if (addOn) menuItem.appendChild(menuItemAddOn);\n\n  return menuItem;\n};\n\nfunction createDrinksMenu() {\n  const drinksMenu = document.createElement(\"div\");\n  drinksMenu.classList.add(\"drinks-menu\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menu-title\");\n\n  const menuTitleName = document.createElement(\"h1\");\n  menuTitleName.classList.add(\"menu-title-name\");\n  menuTitleName.textContent = \"Drinks\";\n\n  menuTitle.appendChild(menuTitleName);\n  drinksMenu.appendChild(menuTitle);\n\n  const drinks = document.createElement(\"div\");\n  drinks.classList.add(\"drinks\");\n\n  drinks.appendChild(createMenuItem(\"Espresso\", \"\", \"€2.80\"));\n  drinks.appendChild(createMenuItem(\"Americano\", \"\", \"€3.20\"));\n  drinks.appendChild(createMenuItem(\"Flat White\", \"\", \"€3.60\"));\n  drinks.appendChild(createMenuItem(\"Cappuccino\", \"\", \"€4\"));\n  drinks.appendChild(createMenuItem(\"Latte\", \"\", \"€4.10\"));\n  drinks.appendChild(createMenuItem(\"Mocha\", \"\", \"€4.20\"));\n  drinks.appendChild(createMenuItem(\"Tea\", \"\", \"€2.80\"));\n  drinks.appendChild(createMenuItem(\"Hot Chocolate\", \"\", \"€4\"));\n\n  drinksMenu.append(drinks);\n\n  return drinksMenu;\n}\n\nfunction createBreakfastMenu() {\n  const breakfastMenu = document.createElement(\"div\");\n  breakfastMenu.classList.add(\"breakfast-menu\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menu-title\");\n\n  const menuTitleName = document.createElement(\"h1\");\n  menuTitleName.classList.add(\"menu-title-name\");\n  menuTitleName.textContent = \"Breakfast\";\n\n  menuTitle.appendChild(menuTitleName);\n  breakfastMenu.appendChild(menuTitle);\n\n  const breakfast = document.createElement(\"div\");\n  breakfast.classList.add(\"breakfast\");\n\n  breakfast.appendChild(\n    createMenuItem(\n      \"Granola\",\n      \"Granola with acai berry, greek yoghurt, berries, honey & nuts\",\n      \"€8.50\"\n    )\n  );\n  breakfast.appendChild(\n    createMenuItem(\n      \"Smashed Avocado\",\n      \"Smashed avocado on toasted sourdough bread, topped with a poached egg and served with grilled tomatoes\",\n      \"€11.20\",\n      \"Add Bacon €3.50\"\n    )\n  );\n  breakfast.appendChild(\n    createMenuItem(\n      \"Blueberry & Banana Pancakes\",\n      \"Buttermilk pancakes w/ blueberry home compote, mascarpone, maple syrup & hazelnuts\",\n      \"€10.50\"\n    )\n  );\n  breakfast.appendChild(\n    createMenuItem(\n      \"Irish Brekkie Sandwich\",\n      \"Bacon, sausage, Clonakilty black pudding, cheddar cheese and BallyMaloe relish\",\n      \"€11.20\"\n    )\n  );\n  breakfast.appendChild(\n    createMenuItem(\n      \"Classic Pancakes\",\n      \"Stack of fluffy pancakes served with Nutella and strawberries\",\n      \"€10.20\"\n    )\n  );\n  breakfast.appendChild(\n    createMenuItem(\n      \"Scrambled Eggs\",\n      \"Scrambled eggs served on you choice of bread, sourdough, white and brown\",\n      \"€9.60\"\n    )\n  );\n\n  breakfastMenu.appendChild(breakfast);\n\n  return breakfastMenu;\n}\n\nfunction createLunchMenu() {\n  const lunchMenu = document.createElement(\"div\");\n  lunchMenu.classList.add(\"lunch-menu\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menu-title\");\n\n  const menuTitleName = document.createElement(\"h1\");\n  menuTitleName.classList.add(\"menu-title-name\");\n  menuTitleName.textContent = \"Lunch\";\n\n  menuTitle.appendChild(menuTitleName);\n  lunchMenu.appendChild(menuTitle);\n\n  const lunch = document.createElement(\"div\");\n  lunch.classList.add(\"lunch\");\n\n  lunch.appendChild(\n    createMenuItem(\n      \"Chicken & Pesto Pasta\",\n      \"Griled chicken, basil pesto, sundried tomatoes and feta cheese served with durum pasta\",\n      \"€13.50\",\n      \"Add Bacon €3.50\"\n    )\n  );\n  lunch.appendChild(\n    createMenuItem(\n      \"BLT Sandwich\",\n      \"Freshly toasted sourdough bread topped with bacon, lettuce and tomato\",\n      \"€12\"\n    )\n  );\n  lunch.appendChild(\n    createMenuItem(\n      \"Goat's Cheese Tartlet\",\n      \"With caramelized red onions and pecan nuts\",\n      \"€11.70\"\n    )\n  );\n  lunch.appendChild(\n    createMenuItem(\n      \"Vegetarian Lasagna\",\n      \"Lasagna with zucchini, squash, carrot, roasted cauliflower & mushrooms\",\n      \"€14.50\"\n    )\n  );\n  lunch.appendChild(\n    createMenuItem(\n      \"Soup of The Day!\",\n      \"Served with wholemeal brown bread and Irish butter\",\n      \"€6.50\"\n    )\n  );\n  lunch.appendChild(\n    createMenuItem(\n      \"Salad of The Day!\",\n      \"Served with our famous sourdough bread\",\n      \"€11.60\"\n    )\n  );\n\n  lunchMenu.appendChild(lunch);\n\n  return lunchMenu;\n}\n\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\", \"hidden\");\n  menu.appendChild(createBreakfastMenu());\n  menu.appendChild(createLunchMenu());\n  menu.appendChild(createDrinksMenu());\n\n  return menu;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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