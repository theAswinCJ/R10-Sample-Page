"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Logo/index.tsx":
/*!***********************************!*\
  !*** ./components/Logo/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.module.sass */ \"./components/Logo/Logo.module.sass\");\n/* harmony import */ var _Logo_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_sass__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\n\n\nvar Logo = function(param) {\n    var className = param.className, light = param.light, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Logo_module_sass__WEBPACK_IMPORTED_MODULE_3___default().logo), _defineProperty({}, (_Logo_module_sass__WEBPACK_IMPORTED_MODULE_3___default().light), light), className),\n            onClick: onClick\n        }, void 0, false, {\n            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Logo/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Logo/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ28vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRDtBQUNZO0FBUXhDLElBQU1HLElBQUksR0FBRztRQUFHQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE9BQU8sU0FBUEEsT0FBTzt5QkFDckMsOERBQUNOLGtEQUFJO1FBQUNPLElBQUksRUFBQyxHQUFHO2tCQUNWLDRFQUFDQyxHQUFDO1lBQ0VKLFNBQVMsRUFBRUgsaURBQUUsQ0FBQ0MsK0RBQVcsRUFBSSxvQkFBQ0EsZ0VBQVksRUFBR0csS0FBSyxHQUFJRCxTQUFTLENBQUM7WUFDaEVFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7aUJBZ0JoQjs7Ozs7YUFDRDtDQUNWO0FBdEJLSCxLQUFBQSxJQUFJO0FBd0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dvL2luZGV4LnRzeD9lNWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Mb2dvLm1vZHVsZS5zYXNzXCI7XG5cbnR5cGUgTG9nb1Byb3BzID0ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBsaWdodD86IGJvb2xlYW47XG4gICAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBMb2dvID0gKHsgY2xhc3NOYW1lLCBsaWdodCwgb25DbGljayB9OiBMb2dvUHJvcHMpID0+IChcbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMubG9nbywgeyBbc3R5bGVzLmxpZ2h0XTogbGlnaHQgfSwgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNjhcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzAxMDEwMVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNjggNDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQgMi4zMDlhOCA4IDAgMCAwLTggMEw2LjY4IDcuNjlhOCA4IDAgMCAwLTQgNi45Mjh2MTAuNzYyYTggOCAwIDAgMCA0IDYuOTI4TDE2IDM3LjY5YTggOCAwIDAgMCA4IDBsOS4zMjEtNS4zODFhOCA4IDAgMCAwIDQtNi45MjhWMTQuNjE5YTggOCAwIDAgMC00LTYuOTI4TDI0IDIuMzA5ek0yMCAzMGM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMC0xMCA0LjQ3Ny0xMCAxMCA0LjQ3NyAxMCAxMCAxMHpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjE5Ljk5OVwiIGN5PVwiMjBcIiByPVwiNC40NDRcIiAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjkuNDIxIDE4LjA5MWgtNC44MDdhMy4yNiAzLjI2IDAgMCAwLS4yNzMtMS4wODJjLS4xNDItLjMyNC0uMzQxLS42MDItLjU5Ny0uODM1YTIuNDkgMi40OSAwIDAgMC0uOTEyLS41NDYgMy41NCAzLjU0IDAgMCAwLTEuMjE5LS4xOTZjLS43OTUgMC0xLjQ2OS4xOTMtMi4wMi41OC0uNTQ2LjM4Ni0uOTYuOTQtMS4yNDQgMS42NjItLjI3OC43MjItLjQxOCAxLjU4OC0uNDE4IDIuNTk5IDAgMS4wNjguMTQyIDEuOTYzLjQyNiAyLjY4NS4yOS43MTYuNzA3IDEuMjU2IDEuMjUzIDEuNjE5LjU0Ni4zNTggMS4yMDIuNTM3IDEuOTY5LjUzN2EzLjk1IDMuOTUgMCAwIDAgMS4xNzYtLjE2MiAyLjc2IDIuNzYgMCAwIDAgLjkwMy0uNDg2Yy4yNTYtLjIxLjQ2My0uNDYzLjYyMi0uNzU5LjE2NS0uMzAxLjI3Ni0uNjM5LjMzMi0xLjAxNGw0LjgwNy4wMzRjLS4wNTcuNzM5LS4yNjQgMS40OTEtLjYyMiAyLjI1OS0uMzU4Ljc2MS0uODY3IDEuNDY2LTEuNTI2IDIuMTE0LS42NTMuNjQyLTEuNDYzIDEuMTU5LTIuNDI5IDEuNTUxcy0yLjA4OC41ODgtMy4zNjcuNTg4Yy0xLjYwMiAwLTMuMDQtLjM0NC00LjMxMi0xLjAzMS0xLjI2Ny0uNjg3LTIuMjctMS42OTktMy4wMDktMy4wMzQtLjczMy0xLjMzNS0xLjA5OS0yLjk2OS0xLjA5OS00LjkwMSAwLTEuOTQzLjM3NS0zLjU3OSAxLjEyNS00LjkwOS43NS0xLjMzNSAxLjc2MS0yLjM0NCAzLjAzNC0zLjAyNSAxLjI3My0uNjg3IDIuNjkzLTEuMDMxIDQuMjYxLTEuMDMxIDEuMTAyIDAgMi4xMTcuMTUxIDMuMDQzLjQ1MnMxLjczOS43NDIgMi40MzggMS4zMjFjLjY5OS41NzQgMS4yNjEgMS4yODEgMS42ODggMi4xMjJzLjY4NSAxLjgwNC43NzYgMi44ODl6TTcxLjU3IDI5VjExLjU0Nmg3LjUzNGMxLjI5NiAwIDIuNDI5LjIzNiAzLjQwMS43MDdzMS43MjcgMS4xNTEgMi4yNjcgMi4wMzcuODEgMS45NDkuODEgMy4xODhjMCAxLjI1LS4yNzggMi4zMDQtLjgzNSAzLjE2Mi0uNTUxLjg1OC0xLjMyNyAxLjUwNi0yLjMyNyAxLjk0My0uOTk0LjQzOC0yLjE1Ni42NTYtMy40ODYuNjU2aC00LjV2LTMuNjgyaDMuNTQ2Yy41NTcgMCAxLjAzMS0uMDY4IDEuNDIzLS4yMDQuMzk4LS4xNDIuNzAyLS4zNjYuOTEyLS42NzMuMjE2LS4zMDcuMzI0LS43MDcuMzI0LTEuMjAyIDAtLjUtLjEwOC0uOTA2LS4zMjQtMS4yMTktLjIxLS4zMTgtLjUxNC0uNTUxLS45MTItLjY5OS0uMzkyLS4xNTMtLjg2Ny0uMjMtMS40MjMtLjIzaC0xLjY3MVYyOUg3MS41N3ptMTAuMjI3LTguMDExTDg2LjE2MSAyOWgtNS4xNDhsLTQuMjYxLTguMDExaDUuMDQ2em00LjI2OC05LjQ0M2g1LjI4NGwzLjQwOSA3LjA5MWguMTM2bDMuNDA5LTcuMDkxaDUuMjg0bC02LjQwOSAxMS45NjZWMjloLTQuNzA1di01LjQ4OWwtNi40MDktMTEuOTY2ek0xMDUuMTMzIDI5VjExLjU0Nmg3LjUzNGMxLjI5NSAwIDIuNDI5LjI1NiAzLjQuNzY3czEuNzI4IDEuMjMgMi4yNjggMi4xNTYuODA5IDIuMDA4LjgwOSAzLjI0N2MwIDEuMjUtLjI3OCAyLjMzMi0uODM1IDMuMjQ3LS41NTEuOTE1LTEuMzI3IDEuNjE5LTIuMzI3IDIuMTE0LS45OTQuNDk0LTIuMTU2Ljc0Mi0zLjQ4Ni43NDJoLTQuNXYtMy42ODJoMy41NDZjLjU1NyAwIDEuMDMxLS4wOTcgMS40MjMtLjI5LjM5OC0uMTk5LjcwMi0uNDguOTEyLS44NDQuMjE2LS4zNjQuMzI0LS43OTMuMzI0LTEuMjg3IDAtLjUtLjEwOC0uOTI2LS4zMjQtMS4yNzgtLjIxLS4zNTgtLjUxNC0uNjMxLS45MTItLjgxOC0uMzkyLS4xOTMtLjg2Ni0uMjktMS40MjMtLjI5aC0xLjY3MVYyOWgtNC43Mzh6bTE1LjI3My0xMy42MzZ2LTMuODE4aDE1LjE3djMuODE4aC01LjI1VjI5aC00LjY3VjE1LjM2NGgtNS4yNXpNMTM3LjM1OSAyOVYxMS41NDZoMTIuNTh2My44MThoLTcuODQxdjNoNy4xOTN2My44MThoLTcuMTkzdjNoNy44MDdWMjloLTEyLjU0NnptMTQuOTMgMFYxMS41NDZoNy41MzRjMS4yOTYgMCAyLjQyOS4yMzYgMy40MDEuNzA3YTUuMyA1LjMgMCAwIDEgMi4yNjcgMi4wMzdjLjU0Ljg4Ni44MDkgMS45NDkuODA5IDMuMTg4IDAgMS4yNS0uMjc4IDIuMzA0LS44MzUgMy4xNjItLjU1MS44NTgtMS4zMjcgMS41MDYtMi4zMjcgMS45NDMtLjk5NC40MzgtMi4xNTYuNjU2LTMuNDg1LjY1NmgtNC41di0zLjY4MmgzLjU0NWMuNTU3IDAgMS4wMzEtLjA2OCAxLjQyMy0uMjA0LjM5OC0uMTQyLjcwMi0uMzY2LjkxMi0uNjczLjIxNi0uMzA3LjMyNC0uNzA3LjMyNC0xLjIwMiAwLS41LS4xMDgtLjkwNi0uMzI0LTEuMjE5LS4yMS0uMzE4LS41MTQtLjU1MS0uOTEyLS42OTktLjM5Mi0uMTUzLS44NjYtLjIzLTEuNDIzLS4yM2gtMS42N1YyOWgtNC43Mzl6bTEwLjIyNy04LjAxMUwxNjYuODggMjloLTUuMTQ4bC00LjI2MS04LjAxMWg1LjA0NXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+ICovfVxuICAgICAgICA8L2E+XG4gICAgPC9MaW5rPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY24iLCJzdHlsZXMiLCJMb2dvIiwiY2xhc3NOYW1lIiwibGlnaHQiLCJvbkNsaWNrIiwiaHJlZiIsImEiLCJsb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Logo/index.tsx\n");

/***/ })

});