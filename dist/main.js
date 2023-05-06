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

/***/ "./src/change_content.js":
/*!*******************************!*\
  !*** ./src/change_content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeContent\": () => (/* binding */ changeContent)\n/* harmony export */ });\nconst cityName = document.querySelector('.city-name');\nconst cityTemperature = document.querySelector('.city-temperature');\nconst cityHumidity = document.querySelector('.city-humidity h5');\nconst cityHumiditySVG = document.querySelector('.weather-humidity-img');\nconst cityWind = document.querySelector('.city-wind h5');\nconst cityWindSVG = document.querySelector('.weather-wind-img');\n\nfunction changeContent(temperature){\n    cityName.innerText = `${temperature.location.name}, ${temperature.location.country}`;\n    cityTemperature.innerText = `${temperature.current.temp_c} °C`;\n    cityHumiditySVG.classList.remove('hidden');\n    cityHumidity.innerText = `${temperature.current.humidity}%`;\n    cityWindSVG.classList.remove('hidden');\n    cityWind.innerText = `${temperature.current.wind_kph}km/h`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/change_content.js?");

/***/ }),

/***/ "./src/fetch_api.js":
/*!**************************!*\
  !*** ./src/fetch_api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityNotFound\": () => (/* binding */ cityNotFound),\n/* harmony export */   \"fetchApiData\": () => (/* binding */ fetchApiData)\n/* harmony export */ });\n/* harmony import */ var _change_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_content */ \"./src/change_content.js\");\n\n\nconst cityNotFound = document.querySelector('.search-input-field-error-city-not-found');\nconst apiUrl = 'http://api.weatherapi.com/v1/';\nconst apiKey = 'd7ad6837fd37407e8e0163826230105';\n\nasync function fetchApiData(cityName){\n    try {\n        const temperatureData = await fetch(apiUrl + 'current.json?key=' + apiKey + '&q=' + cityName, {mode: 'cors', });\n        if(temperatureData.status !== 200){\n            cityNotFound.classList.remove('hidden');\n            return;\n        }\n        const temperature = await temperatureData.json();\n        cityNotFound.classList.add('hidden');\n        (0,_change_content__WEBPACK_IMPORTED_MODULE_0__.changeContent)(temperature);\n    } catch (err) {\n        console.log(err);\n    }\n}\n\n//# sourceURL=webpack://weather-app/./src/fetch_api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_api */ \"./src/fetch_api.js\");\n\n\nconst searchField = document.querySelector('#search-input-field');\nconst searchFieldButton = document.querySelector('#magnify-svg');\nconst searchFieldError = document.querySelector('.search-input-field-error')\n\nsearchFieldButton.addEventListener('click', () => {\n    if(searchField.value === ''){\n        searchFieldError.classList.remove('hidden');\n        return;\n    } else {\n        searchFieldError.classList.add('hidden');\n        (0,_fetch_api__WEBPACK_IMPORTED_MODULE_0__.fetchApiData)(searchField.value);\n    }\n});\n\nsearchField.addEventListener('keydown', (e) => {\n    if(e.key === 'Enter'){\n        if(searchField.value === ''){\n            searchFieldError.classList.remove('hidden');\n            return;\n        }\n        searchFieldError.classList.add('hidden');\n        (0,_fetch_api__WEBPACK_IMPORTED_MODULE_0__.fetchApiData)(searchField.value);\n    }\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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