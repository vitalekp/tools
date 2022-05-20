/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser)\n/* harmony export */ });\n// file path: src/profile/gateway.js\r\n\r\nasync function fetchUser(userId) {\r\n  try {\r\n    const response = await fetch(`https://api.github.com/users/${userId}`);\r\n    return await response.json();\r\n  } catch (error) {\r\n    throw new Error(\"Failed to get user data\");\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ087QUFDUDtBQUNBLGlFQUFpRSxPQUFPO0FBQ3hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2syLy4vc3JjL3Byb2ZpbGUvZ2F0ZXdheS5qcz9jMjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL3Byb2ZpbGUvZ2F0ZXdheS5qc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcih1c2VySWQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJJZH1gKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBkYXRhXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway */ \"./src/profile/gateway.js\");\n/* harmony import */ var _printProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printProfile */ \"./src/profile/printProfile.js\");\n// file path: src/profile/index.js\r\n\r\n\r\n\r\n\r\n(0,_gateway__WEBPACK_IMPORTED_MODULE_0__.fetchUser)(\"github\").then(({ name, location }) =>\r\n  (0,_printProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    name,\r\n    location,\r\n  })\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ3NDO0FBQ0k7QUFDMUM7QUFDQSxtREFBUyxtQkFBbUIsZ0JBQWdCO0FBQzVDLEVBQUUseURBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzazIvLi9zcmMvcHJvZmlsZS9pbmRleC5qcz9hNjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL3Byb2ZpbGUvaW5kZXguanNcclxuXHJcbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gXCIuL2dhdGV3YXlcIjtcclxuaW1wb3J0IHByaW50UHJvZmlsZSBmcm9tIFwiLi9wcmludFByb2ZpbGVcIjtcclxuXHJcbmZldGNoVXNlcihcImdpdGh1YlwiKS50aGVuKCh7IG5hbWUsIGxvY2F0aW9uIH0pID0+XHJcbiAgcHJpbnRQcm9maWxlKHtcclxuICAgIG5hbWUsXHJcbiAgICBsb2NhdGlvbixcclxuICB9KVxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ }),

/***/ "./src/profile/printProfile.js":
/*!*************************************!*\
  !*** ./src/profile/printProfile.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// file path: src/profile/printProfile.js\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((profileData) => {\r\n  const { name, location } = profileData;\r\n  console.log(`${name} from ${location}`);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmLFVBQVUsaUJBQWlCO0FBQzNCLGlCQUFpQixNQUFNLE9BQU8sU0FBUztBQUN2QyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMi8uL3NyYy9wcm9maWxlL3ByaW50UHJvZmlsZS5qcz9iMjMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL3Byb2ZpbGUvcHJpbnRQcm9maWxlLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvZmlsZURhdGEpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGxvY2F0aW9uIH0gPSBwcm9maWxlRGF0YTtcclxuICBjb25zb2xlLmxvZyhgJHtuYW1lfSBmcm9tICR7bG9jYXRpb259YCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/profile/printProfile.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/profile/index.js");
/******/ 	
/******/ })()
;