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

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hotkeys-hook */ \"./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header.module.sass */ \"./components/Header/Header.module.sass\");\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Logo */ \"./components/Logo/index.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modal */ \"./components/Modal/index.tsx\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ConnectWallet */ \"./components/ConnectWallet/index.tsx\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ \"./components/Header/Search/index.tsx\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile */ \"./components/Header/Profile/index.tsx\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu */ \"./components/Header/Menu/index.tsx\");\n/* harmony import */ var _mocks_resultSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/mocks/resultSearch */ \"./mocks/resultSearch.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menu = [\n    {\n        title: \"Discover\",\n        url: \"/discover\"\n    },\n    {\n        title: \"Feed\",\n        url: \"/feed\"\n    }, \n];\nvar Header = function(param) {\n    var className = param.className, noRegistration = param.noRegistration, light = param.light, empty = param.empty;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visibleProfile = ref[0], setVisibleProfile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), connect = ref1[0], setConnect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), registration = ref2[0], setRegistration = ref2[1];\n    (0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys)(\"esc\", function() {\n        return setVisibleProfile(false);\n    });\n    var handleClick = function() {\n        setConnect(false);\n        setRegistration(true);\n    };\n    var _obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().header), (_obj = {}, _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().profileOpen), visibleProfile), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().light), visibleProfile || light), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().empty), empty), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().noRegistration), noRegistration && !registration), _obj), className),\n                children: empty ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().logo),\n                            light: visibleProfile || light\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().profile),\n                            headClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().profileHead),\n                            bodyClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().profileBody),\n                            onOpen: function() {\n                                return setVisibleProfile(!visibleProfile);\n                            },\n                            onClose: function() {\n                                return setVisibleProfile(false);\n                            },\n                            visible: visibleProfile\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().col),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().logo),\n                                    light: visibleProfile || light\n                                }, void 0, false, {\n                                    fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().search),\n                                    result: _mocks_resultSearch__WEBPACK_IMPORTED_MODULE_10__.resultSearch,\n                                    light: visibleProfile || light\n                                }, void 0, false, {\n                                    fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().col),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                classBurger: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().burger),\n                                resultSearch: _mocks_resultSearch__WEBPACK_IMPORTED_MODULE_10__.resultSearch\n                            }, void 0, false, {\n                                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().overlay), _defineProperty({}, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().visible), visibleProfile))\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().modal),\n                closeClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_11___default().close),\n                visible: connect,\n                onClose: function() {\n                    return setConnect(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onClickLogo: function() {\n                        return setConnect(false);\n                    },\n                    onContinue: handleClick\n                }, void 0, false, {\n                    fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                    lineNumber: 162,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"z1IVZou+z+XC3CstY+XGARc3m4I=\", false, function() {\n    return [\n        react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2U7QUFFcEI7QUFDYztBQUNMO0FBRUU7QUFDZ0I7QUFDekI7QUFFRTtBQUNOO0FBRTBCOztBQUVwRCxJQUFNVyxJQUFJLEdBQUc7SUFDVDtRQUNJQyxLQUFLLEVBQUUsVUFBVTtRQUNqQkMsR0FBRyxFQUFFLFdBQVc7S0FDbkI7SUFDRDtRQUNJRCxLQUFLLEVBQUUsTUFBTTtRQUNiQyxHQUFHLEVBQUUsT0FBTztLQUNmO0NBQ0o7QUFTRCxJQUFNQyxNQUFNLEdBQUcsZ0JBQThEO1FBQTNEQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsY0FBYyxTQUFkQSxjQUFjLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ3JELElBQTRDbEIsR0FBd0IsR0FBeEJBLCtDQUFRLENBQVUsS0FBSyxDQUFDLEVBbkN4RSxjQW1DeUIsR0FBdUJBLEdBQXdCLEdBQS9DLEVBbkN6QixpQkFtQzRDLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3hDLElBQThCQSxJQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFwQzFELE9Bb0NrQixHQUFnQkEsSUFBd0IsR0FBeEMsRUFwQ2xCLFVBb0M4QixHQUFJQSxJQUF3QixHQUE1QjtJQUMxQixJQUF3Q0EsSUFBd0IsR0FBeEJBLCtDQUFRLENBQVUsS0FBSyxDQUFDLEVBckNwRSxZQXFDdUIsR0FBcUJBLElBQXdCLEdBQTdDLEVBckN2QixlQXFDd0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFDcENDLDhEQUFVLENBQUMsS0FBSyxFQUFFO2VBQU1tQixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFbEQsSUFBTUssV0FBVyxHQUFHLFdBQU07UUFDdEJILFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQkUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCO1FBT2UsSUFNQztJQVhqQixxQkFDSTs7MEJBQ0ksOERBQUNFLFFBQU07Z0JBQ0hYLFNBQVMsRUFBRWIsaURBQUUsQ0FDVEMsb0VBQWEsR0FDYixJQU1DLE9BTEcsZ0JBREosSUFNQyxFQUxJQSx5RUFBa0IsRUFBR2dCLGNBQWMsR0FDcEMsZ0JBRkosSUFNQyxFQUpJaEIsbUVBQVksRUFBR2dCLGNBQWMsSUFBSUYsS0FBSyxHQUN2QyxnQkFISixJQU1DLEVBSElkLG1FQUFZLEVBQUdlLEtBQUssR0FDckIsZ0JBSkosSUFNQyxFQUZJZiw0RUFBcUIsRUFDbEJhLGNBQWMsSUFBSSxDQUFDTyxZQUFZLEdBTHZDLElBTUMsR0FDRFIsU0FBUyxDQUNaOzBCQUVBRyxLQUFLLGlCQUNGOztzQ0FDSSw4REFBQ2Qsd0RBQUk7NEJBQ0RXLFNBQVMsRUFBRVosa0VBQVc7NEJBQ3RCYyxLQUFLLEVBQUVFLGNBQWMsSUFBSUYsS0FBSzs7Ozs7aUNBQ2hDO3NDQUNGLDhEQUFDVCxnREFBTzs0QkFDSk8sU0FBUyxFQUFFWixxRUFBYzs0QkFDekIyQixhQUFhLEVBQUUzQix5RUFBa0I7NEJBQ2pDNkIsYUFBYSxFQUFFN0IseUVBQWtCOzRCQUNqQytCLE1BQU0sRUFBRTt1Q0FBTWQsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDOzZCQUFBOzRCQUNoRGdCLE9BQU8sRUFBRTt1Q0FBTWYsaUJBQWlCLENBQUMsS0FBSyxDQUFDOzZCQUFBOzRCQUN2Q2dCLE9BQU8sRUFBRWpCLGNBQWM7Ozs7O2lDQUN6Qjs7Z0NBQ0gsaUJBRUg7O3NDQUNJLDhEQUFDa0IsS0FBRzs0QkFBQ3RCLFNBQVMsRUFBRVosaUVBQVU7OzhDQUN0Qiw4REFBQ0Msd0RBQUk7b0NBQ0RXLFNBQVMsRUFBRVosa0VBQVc7b0NBQ3RCYyxLQUFLLEVBQUVFLGNBQWMsSUFBSUYsS0FBSzs7Ozs7eUNBQ2hDOzhDQUNGLDhEQUFDViwrQ0FBTTtvQ0FDSFEsU0FBUyxFQUFFWixvRUFBYTtvQ0FDeEJxQyxNQUFNLEVBQUU5Qiw4REFBWTtvQ0FDcEJPLEtBQUssRUFBRUUsY0FBYyxJQUFJRixLQUFLOzs7Ozt5Q0FDaEM7Ozs7OztpQ0FDQTtzQ0FDTiw4REFBQ29CLEtBQUc7NEJBQUN0QixTQUFTLEVBQUVaLGlFQUFVO3NDQXNEdEIsNEVBQUNNLDZDQUFJO2dDQUNEZ0MsV0FBVyxFQUFFdEMsb0VBQWE7Z0NBQzFCTyxZQUFZLEVBQUVBLDhEQUFZOzs7OztxQ0FDNUI7Ozs7O2lDQUNBOztnQ0FDUDs7Ozs7cUJBRUY7MEJBQ1QsOERBQUMyQixLQUFHO2dCQUNBdEIsU0FBUyxFQUFFYixpREFBRSxDQUFDQyxxRUFBYyxFQUN4QixvQkFBQ0EscUVBQWMsRUFBR2dCLGNBQWMsRUFDbEM7Ozs7O3FCQUNDOzBCQUNQLDhEQUFDZCx5REFBSztnQkFDRlUsU0FBUyxFQUFFWixtRUFBWTtnQkFDdkIwQyxjQUFjLEVBQUUxQyxtRUFBWTtnQkFDNUJpQyxPQUFPLEVBQUVmLE9BQU87Z0JBQ2hCYyxPQUFPLEVBQUU7MkJBQU1iLFVBQVUsQ0FBQyxLQUFLLENBQUM7aUJBQUE7MEJBRWhDLDRFQUFDaEIsaUVBQWE7b0JBQ1Z5QyxXQUFXLEVBQUU7K0JBQU16QixVQUFVLENBQUMsS0FBSyxDQUFDO3FCQUFBO29CQUNwQzBCLFVBQVUsRUFBRXZCLFdBQVc7Ozs7O3lCQUN6Qjs7Ozs7cUJBQ0U7O29CQUNULENBQ0w7Q0FDTDtHQXRJS1gsTUFBTTs7UUFJUmIsMERBQVU7OztBQUpSYSxLQUFBQSxNQUFNO0FBd0laLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2YyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhvdGtleXMgfSBmcm9tIFwicmVhY3QtaG90a2V5cy1ob29rXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5zYXNzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQC9jb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBJY29uIGZyb20gXCJAL2NvbXBvbmVudHMvSWNvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxcIjtcbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcbmltcG9ydCBEaXNjb3ZlciBmcm9tIFwiLi9EaXNjb3ZlclwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZVwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuXG5pbXBvcnQgeyByZXN1bHRTZWFyY2ggfSBmcm9tIFwiQC9tb2Nrcy9yZXN1bHRTZWFyY2hcIjtcblxuY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkRpc2NvdmVyXCIsXG4gICAgICAgIHVybDogXCIvZGlzY292ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmVlZFwiLFxuICAgICAgICB1cmw6IFwiL2ZlZWRcIixcbiAgICB9LFxuXTtcblxudHlwZSBIZWFkZXJQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgbm9SZWdpc3RyYXRpb24/OiBib29sZWFuO1xuICAgIGxpZ2h0PzogYm9vbGVhbjtcbiAgICBlbXB0eT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUsIG5vUmVnaXN0cmF0aW9uLCBsaWdodCwgZW1wdHkgfTogSGVhZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZVByb2ZpbGUsIHNldFZpc2libGVQcm9maWxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY29ubmVjdCwgc2V0Q29ubmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3JlZ2lzdHJhdGlvbiwgc2V0UmVnaXN0cmF0aW9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICB1c2VIb3RrZXlzKFwiZXNjXCIsICgpID0+IHNldFZpc2libGVQcm9maWxlKGZhbHNlKSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29ubmVjdChmYWxzZSk7XG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbih0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoZWFkZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMuaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLnByb2ZpbGVPcGVuXTogdmlzaWJsZVByb2ZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmxpZ2h0XTogdmlzaWJsZVByb2ZpbGUgfHwgbGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmVtcHR5XTogZW1wdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLm5vUmVnaXN0cmF0aW9uXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1JlZ2lzdHJhdGlvbiAmJiAhcmVnaXN0cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbXB0eSA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodD17dmlzaWJsZVByb2ZpbGUgfHwgbGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRDbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlSGVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5Q2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBzZXRWaXNpYmxlUHJvZmlsZSghdmlzaWJsZVByb2ZpbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpc2libGVQcm9maWxlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlUHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e3Zpc2libGVQcm9maWxlIHx8IGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0U2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodD17dmlzaWJsZVByb2ZpbGUgfHwgbGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RGlzY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0PXt2aXNpYmxlUHJvZmlsZSB8fCBsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay51cmx9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3Ryb2tlIGJ1dHRvbi1tZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5jcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNyZWF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0cm9rZSBidXR0b24tbWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29ubmVjdCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Qgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMubm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJmbGFzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW49eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlUHJvZmlsZSghdmlzaWJsZVByb2ZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlzaWJsZVByb2ZpbGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlUHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0J1cmdlcj17c3R5bGVzLmJ1cmdlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VhcmNoPXtyZXN1bHRTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMub3ZlcmxheSwge1xuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLnZpc2libGVdOiB2aXNpYmxlUHJvZmlsZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgICAgICAgICAgIGNsb3NlQ2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17Y29ubmVjdH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDb25uZWN0KGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdFdhbGxldFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTG9nbz17KCkgPT4gc2V0Q29ubmVjdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29udGludWU9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlSG90a2V5cyIsImNuIiwic3R5bGVzIiwiTG9nbyIsIk1vZGFsIiwiQ29ubmVjdFdhbGxldCIsIlNlYXJjaCIsIlByb2ZpbGUiLCJNZW51IiwicmVzdWx0U2VhcmNoIiwibWVudSIsInRpdGxlIiwidXJsIiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwibm9SZWdpc3RyYXRpb24iLCJsaWdodCIsImVtcHR5IiwidmlzaWJsZVByb2ZpbGUiLCJzZXRWaXNpYmxlUHJvZmlsZSIsImNvbm5lY3QiLCJzZXRDb25uZWN0IiwicmVnaXN0cmF0aW9uIiwic2V0UmVnaXN0cmF0aW9uIiwiaGFuZGxlQ2xpY2siLCJoZWFkZXIiLCJwcm9maWxlT3BlbiIsImxvZ28iLCJwcm9maWxlIiwiaGVhZENsYXNzTmFtZSIsInByb2ZpbGVIZWFkIiwiYm9keUNsYXNzTmFtZSIsInByb2ZpbGVCb2R5Iiwib25PcGVuIiwib25DbG9zZSIsInZpc2libGUiLCJkaXYiLCJjb2wiLCJzZWFyY2giLCJyZXN1bHQiLCJjbGFzc0J1cmdlciIsImJ1cmdlciIsIm92ZXJsYXkiLCJtb2RhbCIsImNsb3NlQ2xhc3NOYW1lIiwiY2xvc2UiLCJvbkNsaWNrTG9nbyIsIm9uQ29udGludWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});