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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hotkeys-hook */ \"./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.module.sass */ \"./components/Header/Header.module.sass\");\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Logo */ \"./components/Logo/index.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modal */ \"./components/Modal/index.tsx\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ConnectWallet */ \"./components/ConnectWallet/index.tsx\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Profile */ \"./components/Header/Profile/index.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menu = [\n    {\n        title: \"Discover\",\n        url: \"/discover\"\n    },\n    {\n        title: \"Feed\",\n        url: \"/feed\"\n    }, \n];\nvar Header = function(param) {\n    var className = param.className, noRegistration = param.noRegistration, light = param.light, empty = param.empty;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visibleProfile = ref[0], setVisibleProfile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), connect = ref1[0], setConnect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), registration = ref2[0], setRegistration = ref2[1];\n    (0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys)(\"esc\", function() {\n        return setVisibleProfile(false);\n    });\n    var handleClick = function() {\n        setConnect(false);\n        setRegistration(true);\n    };\n    var _obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().header), (_obj = {}, _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().profileOpen), visibleProfile), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().light), visibleProfile || light), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().empty), empty), _defineProperty(_obj, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().noRegistration), noRegistration && !registration), _obj), className),\n                children: empty ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                            light: visibleProfile || light\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().profile),\n                            headClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().profileHead),\n                            bodyClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().profileBody),\n                            onOpen: function() {\n                                return setVisibleProfile(!visibleProfile);\n                            },\n                            onClose: function() {\n                                return setVisibleProfile(false);\n                            },\n                            visible: visibleProfile\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().col),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                                light: visibleProfile || light\n                            }, void 0, false, {\n                                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().col),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"button-fill button-medium\", (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().button), (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().connect)),\n                                onClick: function() {\n                                    return setConnect(true);\n                                },\n                                children: \"connect wallet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().overlay), _defineProperty({}, (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().visible), visibleProfile))\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().modal),\n                closeClassName: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_8___default().close),\n                visible: connect,\n                onClose: function() {\n                    return setConnect(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onClickLogo: function() {\n                        return setConnect(false);\n                    },\n                    onContinue: handleClick\n                }, void 0, false, {\n                    fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                    lineNumber: 162,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aswincj/Riafy/Projects/Genesis Website/Development/R10 Website React/components/Header/index.tsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"z1IVZou+z+XC3CstY+XGARc3m4I=\", false, function() {\n    return [\n        react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFVixpREFBRSxDQUNULDJCQUEyQixFQUMzQkMsbUVBQWEsRUFDYkEsb0VBQWMsQ0FDakI7Z0NBQ0RrQyxPQUFPLEVBQUU7MkNBQU1sQixVQUFVLENBQUMsSUFBSSxDQUFDO2lDQUFBOzBDQUNsQyxnQkFFRDs7Ozs7cUNBQVM7Ozs7O2lDQXVCUDs7Z0NBQ1A7Ozs7O3FCQUVGOzBCQUNULDhEQUFDZSxLQUFHO2dCQUNBdEIsU0FBUyxFQUFFVixpREFBRSxDQUFDQyxvRUFBYyxFQUN4QixvQkFBQ0Esb0VBQWMsRUFBR2EsY0FBYyxFQUNsQzs7Ozs7cUJBQ0M7MEJBQ1AsOERBQUNYLHlEQUFLO2dCQUNGTyxTQUFTLEVBQUVULGtFQUFZO2dCQUN2QnFDLGNBQWMsRUFBRXJDLGtFQUFZO2dCQUM1QjhCLE9BQU8sRUFBRWYsT0FBTztnQkFDaEJjLE9BQU8sRUFBRTsyQkFBTWIsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFBQTswQkFFaEMsNEVBQUNiLGlFQUFhO29CQUNWb0MsV0FBVyxFQUFFOytCQUFNdkIsVUFBVSxDQUFDLEtBQUssQ0FBQztxQkFBQTtvQkFDcEN3QixVQUFVLEVBQUVyQixXQUFXOzs7Ozt5QkFDekI7Ozs7O3FCQUNFOztvQkFDVCxDQUNMO0NBQ0w7R0F0SUtYLE1BQU07O1FBSVJWLDBEQUFVOzs7QUFKUlUsS0FBQUEsTUFBTTtBQXdJWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9mMmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIb3RrZXlzIH0gZnJvbSBcInJlYWN0LWhvdGtleXMtaG9va1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Fzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dvXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQC9jb21wb25lbnRzL0ljb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5pbXBvcnQgRGlzY292ZXIgZnJvbSBcIi4vRGlzY292ZXJcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcblxuaW1wb3J0IHsgcmVzdWx0U2VhcmNoIH0gZnJvbSBcIkAvbW9ja3MvcmVzdWx0U2VhcmNoXCI7XG5cbmNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJEaXNjb3ZlclwiLFxuICAgICAgICB1cmw6IFwiL2Rpc2NvdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlZWRcIixcbiAgICAgICAgdXJsOiBcIi9mZWVkXCIsXG4gICAgfSxcbl07XG5cbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG5vUmVnaXN0cmF0aW9uPzogYm9vbGVhbjtcbiAgICBsaWdodD86IGJvb2xlYW47XG4gICAgZW1wdHk/OiBib29sZWFuO1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgY2xhc3NOYW1lLCBub1JlZ2lzdHJhdGlvbiwgbGlnaHQsIGVtcHR5IH06IEhlYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGVQcm9maWxlLCBzZXRWaXNpYmxlUHJvZmlsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2Nvbm5lY3QsIHNldENvbm5lY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtyZWdpc3RyYXRpb24sIHNldFJlZ2lzdHJhdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgdXNlSG90a2V5cyhcImVzY1wiLCAoKSA9PiBzZXRWaXNpYmxlUHJvZmlsZShmYWxzZSkpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldENvbm5lY3QoZmFsc2UpO1xuICAgICAgICBzZXRSZWdpc3RyYXRpb24odHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aGVhZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5wcm9maWxlT3Blbl06IHZpc2libGVQcm9maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5saWdodF06IHZpc2libGVQcm9maWxlIHx8IGxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5lbXB0eV06IGVtcHR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ub1JlZ2lzdHJhdGlvbl06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWdpc3RyYXRpb24gJiYgIXJlZ2lzdHJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZW1wdHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e3Zpc2libGVQcm9maWxlIHx8IGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkQ2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUhlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keUNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VmlzaWJsZVByb2ZpbGUoIXZpc2libGVQcm9maWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlUHJvZmlsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZVByb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0PXt2aXNpYmxlUHJvZmlsZSB8fCBsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXtyZXN1bHRTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0PXt2aXNpYmxlUHJvZmlsZSB8fCBsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RGlzY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0PXt2aXNpYmxlUHJvZmlsZSB8fCBsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay51cmx9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3Ryb2tlIGJ1dHRvbi1tZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5jcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNyZWF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tZmlsbCBidXR0b24tbWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29ubmVjdCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Qgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImZsYXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2libGVQcm9maWxlKCF2aXNpYmxlUHJvZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlUHJvZmlsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGVQcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0J1cmdlcj17c3R5bGVzLmJ1cmdlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VhcmNoPXtyZXN1bHRTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLm92ZXJsYXksIHtcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy52aXNpYmxlXTogdmlzaWJsZVByb2ZpbGUsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cbiAgICAgICAgICAgICAgICBjbG9zZUNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e2Nvbm5lY3R9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q29ubmVjdChmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbm5lY3RXYWxsZXRcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja0xvZ289eygpID0+IHNldENvbm5lY3QoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbnRpbnVlPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUhvdGtleXMiLCJjbiIsInN0eWxlcyIsIkxvZ28iLCJNb2RhbCIsIkNvbm5lY3RXYWxsZXQiLCJQcm9maWxlIiwibWVudSIsInRpdGxlIiwidXJsIiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwibm9SZWdpc3RyYXRpb24iLCJsaWdodCIsImVtcHR5IiwidmlzaWJsZVByb2ZpbGUiLCJzZXRWaXNpYmxlUHJvZmlsZSIsImNvbm5lY3QiLCJzZXRDb25uZWN0IiwicmVnaXN0cmF0aW9uIiwic2V0UmVnaXN0cmF0aW9uIiwiaGFuZGxlQ2xpY2siLCJoZWFkZXIiLCJwcm9maWxlT3BlbiIsImxvZ28iLCJwcm9maWxlIiwiaGVhZENsYXNzTmFtZSIsInByb2ZpbGVIZWFkIiwiYm9keUNsYXNzTmFtZSIsInByb2ZpbGVCb2R5Iiwib25PcGVuIiwib25DbG9zZSIsInZpc2libGUiLCJkaXYiLCJjb2wiLCJidXR0b24iLCJvbkNsaWNrIiwib3ZlcmxheSIsIm1vZGFsIiwiY2xvc2VDbGFzc05hbWUiLCJjbG9zZSIsIm9uQ2xpY2tMb2dvIiwib25Db250aW51ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});