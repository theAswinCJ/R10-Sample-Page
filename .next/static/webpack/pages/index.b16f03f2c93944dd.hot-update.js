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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hotkeys-hook */ \"./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header.module.sass */ \"./components/Header/Header.module.sass\");\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Logo */ \"./components/Logo/index.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modal */ \"./components/Modal/index.tsx\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ConnectWallet */ \"./components/ConnectWallet/index.tsx\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ \"./components/Header/Search/index.tsx\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile */ \"./components/Header/Profile/index.tsx\");\n/* harmony import */ var _mocks_resultSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/mocks/resultSearch */ \"./mocks/resultSearch.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menu = [\n    {\n        title: \"Discover\",\n        url: \"/discover\"\n    },\n    {\n        title: \"Feed\",\n        url: \"/feed\"\n    }, \n];\nvar Header = function(param) {\n    var className = param.className, noRegistration = param.noRegistration, light = param.light, empty = param.empty;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visibleProfile = ref[0], setVisibleProfile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), connect = ref1[0], setConnect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), registration = ref2[0], setRegistration = ref2[1];\n    (0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys)(\"esc\", function() {\n        return setVisibleProfile(false);\n    });\n    var handleClick = function() {\n        setConnect(false);\n        setRegistration(true);\n    };\n    var _obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().header), (_obj = {}, _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().profileOpen), visibleProfile), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().light), visibleProfile || light), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().empty), empty), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().noRegistration), noRegistration && !registration), _obj), className),\n                children: empty ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().logo),\n                            light: visibleProfile || light\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().profile),\n                            headClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().profileHead),\n                            bodyClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().profileBody),\n                            onOpen: function() {\n                                return setVisibleProfile(!visibleProfile);\n                            },\n                            onClose: function() {\n                                return setVisibleProfile(false);\n                            },\n                            visible: visibleProfile\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().col),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().logo),\n                                light: visibleProfile || light\n                            }, void 0, false, {\n                                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().search),\n                                result: _mocks_resultSearch__WEBPACK_IMPORTED_MODULE_9__.resultSearch,\n                                light: visibleProfile || light\n                            }, void 0, false, {\n                                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().overlay), _defineProperty({}, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().visible), visibleProfile))\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().modal),\n                closeClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_10___default().close),\n                visible: connect,\n                onClose: function() {\n                    return setConnect(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onClickLogo: function() {\n                        return setConnect(false);\n                    },\n                    onContinue: handleClick\n                }, void 0, false, {\n                    fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                    lineNumber: 162,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"z1IVZou+z+XC3CstY+XGARc3m4I=\", false, function() {\n    return [\n        react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qk8sS0FBSyxFQUFFRSxjQUFjLElBQUlGLEtBQUs7Ozs7O3FDQUNoQzs7Ozs7OzZCQUNBO2lDQTREUDs7Ozs7cUJBRUY7MEJBQ1QsOERBQUNvQixLQUFHO2dCQUNBdEIsU0FBUyxFQUFFWixpREFBRSxDQUFDQyxxRUFBYyxFQUN4QixvQkFBQ0EscUVBQWMsRUFBR2UsY0FBYyxFQUNsQzs7Ozs7cUJBQ0M7MEJBQ1AsOERBQUNiLHlEQUFLO2dCQUNGUyxTQUFTLEVBQUVYLG1FQUFZO2dCQUN2QnVDLGNBQWMsRUFBRXZDLG1FQUFZO2dCQUM1QmdDLE9BQU8sRUFBRWYsT0FBTztnQkFDaEJjLE9BQU8sRUFBRTsyQkFBTWIsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFBQTswQkFFaEMsNEVBQUNmLGlFQUFhO29CQUNWc0MsV0FBVyxFQUFFOytCQUFNdkIsVUFBVSxDQUFDLEtBQUssQ0FBQztxQkFBQTtvQkFDcEN3QixVQUFVLEVBQUVyQixXQUFXOzs7Ozt5QkFDekI7Ozs7O3FCQUNFOztvQkFDVCxDQUNMO0NBQ0w7R0F0SUtYLE1BQU07O1FBSVJaLDBEQUFVOzs7QUFKUlksS0FBQUEsTUFBTTtBQXdJWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9mMmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIb3RrZXlzIH0gZnJvbSBcInJlYWN0LWhvdGtleXMtaG9va1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Fzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dvXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQC9jb21wb25lbnRzL0ljb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5pbXBvcnQgRGlzY292ZXIgZnJvbSBcIi4vRGlzY292ZXJcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcblxuaW1wb3J0IHsgcmVzdWx0U2VhcmNoIH0gZnJvbSBcIkAvbW9ja3MvcmVzdWx0U2VhcmNoXCI7XG5cbmNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJEaXNjb3ZlclwiLFxuICAgICAgICB1cmw6IFwiL2Rpc2NvdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlZWRcIixcbiAgICAgICAgdXJsOiBcIi9mZWVkXCIsXG4gICAgfSxcbl07XG5cbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG5vUmVnaXN0cmF0aW9uPzogYm9vbGVhbjtcbiAgICBsaWdodD86IGJvb2xlYW47XG4gICAgZW1wdHk/OiBib29sZWFuO1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgY2xhc3NOYW1lLCBub1JlZ2lzdHJhdGlvbiwgbGlnaHQsIGVtcHR5IH06IEhlYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGVQcm9maWxlLCBzZXRWaXNpYmxlUHJvZmlsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2Nvbm5lY3QsIHNldENvbm5lY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtyZWdpc3RyYXRpb24sIHNldFJlZ2lzdHJhdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgdXNlSG90a2V5cyhcImVzY1wiLCAoKSA9PiBzZXRWaXNpYmxlUHJvZmlsZShmYWxzZSkpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldENvbm5lY3QoZmFsc2UpO1xuICAgICAgICBzZXRSZWdpc3RyYXRpb24odHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aGVhZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5wcm9maWxlT3Blbl06IHZpc2libGVQcm9maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5saWdodF06IHZpc2libGVQcm9maWxlIHx8IGxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5lbXB0eV06IGVtcHR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ub1JlZ2lzdHJhdGlvbl06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWdpc3RyYXRpb24gJiYgIXJlZ2lzdHJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZW1wdHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e3Zpc2libGVQcm9maWxlIHx8IGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkQ2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUhlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keUNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VmlzaWJsZVByb2ZpbGUoIXZpc2libGVQcm9maWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlUHJvZmlsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZVByb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0PXt2aXNpYmxlUHJvZmlsZSB8fCBsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3Jlc3VsdFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e3Zpc2libGVQcm9maWxlIHx8IGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc2NvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodD17dmlzaWJsZVByb2ZpbGUgfHwgbGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudS5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLnVybH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3Ryb2tlIGJ1dHRvbi1tZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5jcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNyZWF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHJva2UgYnV0dG9uLW1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5jb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbm5lY3QodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0IHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImZsYXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW49eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlUHJvZmlsZSghdmlzaWJsZVByb2ZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlzaWJsZVByb2ZpbGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlUHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQnVyZ2VyPXtzdHlsZXMuYnVyZ2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZWFyY2g9e3Jlc3VsdFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMub3ZlcmxheSwge1xuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLnZpc2libGVdOiB2aXNpYmxlUHJvZmlsZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgICAgICAgICAgIGNsb3NlQ2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17Y29ubmVjdH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDb25uZWN0KGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdFdhbGxldFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTG9nbz17KCkgPT4gc2V0Q29ubmVjdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29udGludWU9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlSG90a2V5cyIsImNuIiwic3R5bGVzIiwiTG9nbyIsIk1vZGFsIiwiQ29ubmVjdFdhbGxldCIsIlNlYXJjaCIsIlByb2ZpbGUiLCJyZXN1bHRTZWFyY2giLCJtZW51IiwidGl0bGUiLCJ1cmwiLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJub1JlZ2lzdHJhdGlvbiIsImxpZ2h0IiwiZW1wdHkiLCJ2aXNpYmxlUHJvZmlsZSIsInNldFZpc2libGVQcm9maWxlIiwiY29ubmVjdCIsInNldENvbm5lY3QiLCJyZWdpc3RyYXRpb24iLCJzZXRSZWdpc3RyYXRpb24iLCJoYW5kbGVDbGljayIsImhlYWRlciIsInByb2ZpbGVPcGVuIiwibG9nbyIsInByb2ZpbGUiLCJoZWFkQ2xhc3NOYW1lIiwicHJvZmlsZUhlYWQiLCJib2R5Q2xhc3NOYW1lIiwicHJvZmlsZUJvZHkiLCJvbk9wZW4iLCJvbkNsb3NlIiwidmlzaWJsZSIsImRpdiIsImNvbCIsInNlYXJjaCIsInJlc3VsdCIsIm92ZXJsYXkiLCJtb2RhbCIsImNsb3NlQ2xhc3NOYW1lIiwiY2xvc2UiLCJvbkNsaWNrTG9nbyIsIm9uQ29udGludWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});