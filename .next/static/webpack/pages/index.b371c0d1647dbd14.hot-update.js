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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chat */ \"./components/Chat.js\");\n/* harmony import */ var _styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Styles.module.css */ \"./styles/Styles.module.css\");\n/* harmony import */ var _styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar IndexPage = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(IndexPage, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(IndexPage);\n    function IndexPage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, IndexPage);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            user: null,\n            show: true,\n            closeB: false,\n            closeF: false\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"handleKeyUp\", function(evt) {\n            if (evt.keyCode === 13) {\n                var user = evt.target.value;\n                var show = false;\n                _this.setState({\n                    user: user,\n                    show: show\n                });\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"handleClose\", function() {\n            _this.setState({\n                closeF: true\n            });\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(IndexPage, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                var query = window.matchMedia(\"(max-width: 768px)\");\n                var stop = setInterval(function() {\n                    if (query.matches && !_this.state.show) {\n                        _this.setState({\n                            closeB: true\n                        });\n                    } else {\n                        _this.setState({\n                            closeB: false\n                        });\n                    }\n                }, 100);\n            }\n        },\n        {\n            key: \"componentDidUpdate\",\n            value: function componentDidUpdate() {\n                var _this = this;\n                var query = window.matchMedia(\"(max-width: 768px)\");\n                var stop = setInterval(function() {\n                    if (query.matches && !_this.state.show) {\n                        _this.setState({\n                            closeB: true\n                        });\n                    } else {\n                        _this.setState({\n                            closeB: false\n                        });\n                    }\n                }, 100);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var user = this.state.user;\n                var closeB = this.state.closeB;\n                var show = this.state.show;\n                var closeF = this.state.closeF;\n                var nameInputStyles = {\n                    background: \"transparent\",\n                    color: \"white\",\n                    border: 0,\n                    borderBottom: \"1px solid #666\",\n                    borderRadius: 0,\n                    fontSize: \"3rem\",\n                    fontWeight: 500,\n                    boxShadow: \"none !important\"\n                };\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"UniChat\"\n                        }, void 0, false, {\n                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            pageTitle: \"Realtime Chat\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                className: \"container-fluid h-100 bg-dark \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row w-100 h-100 \".concat((_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().position), \" \").concat(closeF && (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().absolute)),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                            className: \"d-flex flex-row flex-wrap align-items-center align-content-center px-5 \".concat((_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().sec), \" \").concat(closeF && (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().translateS)),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"px-5 mx-5\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                        href: \"/home\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().layout),\n                                                            children: \"Go to home\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"d-block w-200 text-light \".concat((_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().userG)),\n                                                        style: {\n                                                            marginTop: -70\n                                                        },\n                                                        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().hello),\n                                                                    children: \"Hello!\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                                    lineNumber: 89,\n                                                                    columnNumber: 25\n                                                                }, this),\n                                                                \" \",\n                                                                user,\n                                                                \" tap the Start button to begin\",\n                                                                closeB && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                    className: (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().closeBtn),\n                                                                    onClick: this.handleClose,\n                                                                    children: \"Start\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                                    lineNumber: 91,\n                                                                    columnNumber: 27\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 23\n                                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().layoutName),\n                                                            children: \"What is your name\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"text\",\n                                                        className: \"form-control mt-3 px-3 py-2\",\n                                                        onKeyUp: this.handleKeyUp,\n                                                        autoComplete: \"off\",\n                                                        style: nameInputStyles\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                            className: \"position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0 \".concat((_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().main_chat), \" \").concat(closeF && (_styles_Styles_module_css__WEBPACK_IMPORTED_MODULE_11___default().opacity)),\n                                            children: user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                activeUser: user\n                                            }, void 0, false, {\n                                                fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 26\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/samabdul/unichat/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return IndexPage;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexPage, {}, void 0, false, {\n        fileName: \"/Users/samabdul/unichat/pages/index.js\",\n        lineNumber: 131,\n        columnNumber: 22\n    }, _this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDbkQ7Z0VBQUNFLE1BQU0sa0JBQ0wsOERBQUM0QyxRQUFNO29FQUNMZCxTQUFTLEVBQUVwQyw0RUFBZTtvRUFDMUJvRCxPQUFPLEVBQUUsSUFBSSxDQUFDdEMsV0FBVzs4RUFDMUIsT0FFRDs7Ozs7d0VBQVM7Ozs7OztnRUFFTixpQkFFUCw4REFBQ3VCLEtBQUc7NERBQUNELFNBQVMsRUFBRXBDLDhFQUFpQjtzRUFBRSxtQkFBaUI7Ozs7O2dFQUFNOzs7Ozs0REFFdkQ7b0RBRU4sQ0FBQ0ksSUFBSSxrQkFDSiw4REFBQ2tELE9BQUs7d0RBQ0pDLElBQUksRUFBQyxNQUFNO3dEQUNYbkIsU0FBUyxFQUFDLDZCQUE2Qjt3REFDdkNvQixPQUFPLEVBQUUsSUFBSSxDQUFDaEQsV0FBVzt3REFDekJpRCxZQUFZLEVBQUMsS0FBSzt3REFDbEJWLEtBQUssRUFBRXZCLGVBQWU7Ozs7OzREQUN0Qjs7Ozs7O29EQUVBOzs7OztnREFDRTtzREFFViw4REFBQ2dCLFNBQU87NENBQ05KLFNBQVMsRUFBRSxpR0FBZ0csQ0FFdkc3QixNQUF3QixDQUQxQlAsNkVBQWdCLEVBQ2pCLEdBQUMsQ0FBMkIsUUFBekJPLE1BQU0sSUFBSVAsMkVBQWMsQ0FBRTtzREFFN0JJLElBQUksa0JBQUksOERBQUNMLHdEQUFJO2dEQUFDNkQsVUFBVSxFQUFFeEQsSUFBSTs7Ozs7b0RBQUk7Ozs7O2dEQUMzQjs7Ozs7O3dDQUNOOzs7OztvQ0FDRDs7Ozs7Z0NBQ0E7O2dDQUNSLENBQ0g7YUFDSDs7OztDQUNGLENBMUh1QlIsNENBQVMsQ0EwSGhDO0FBRUQsNkJBQWU7eUJBQU0sOERBQUNNLFNBQVM7Ozs7YUFBRztDQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHVzZXI6IG51bGwsIHNob3c6IHRydWUsIGNsb3NlQjogZmFsc2UsIGNsb3NlRjogZmFsc2UgfTtcblxuICBoYW5kbGVLZXlVcCA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBjb25zdCB1c2VyID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IHNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyLCBzaG93IH0pO1xuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY4cHgpXCIpO1xuXG4gICAgbGV0IHN0b3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAocXVlcnkubWF0Y2hlcyAmJiAhdGhpcy5zdGF0ZS5zaG93KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZUI6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VCOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjhweClcIik7XG5cbiAgICBsZXQgc3RvcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChxdWVyeS5tYXRjaGVzICYmICF0aGlzLnN0YXRlLnNob3cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlQjogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZUI6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VGOiB0cnVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjbG9zZUIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2xvc2VGIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgbmFtZUlucHV0U3R5bGVzID0ge1xuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgIzY2NlwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgZm9udFNpemU6IFwiM3JlbVwiLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHRpdGxlPntcIlVuaUNoYXRcIn08L3RpdGxlPlxuICAgICBcbiAgICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBDaGF0XCI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtgY29udGFpbmVyLWZsdWlkIGgtMTAwIGJnLWRhcmsgYH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdyB3LTEwMCBoLTEwMCAke3N0eWxlcy5wb3NpdGlvbn0gJHtcbiAgICAgICAgICAgICAgICBjbG9zZUYgJiYgc3R5bGVzLmFic29sdXRlXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIHB4LTUgJHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlcy5zZWNcbiAgICAgICAgICAgICAgICB9ICR7Y2xvc2VGICYmIHN0eWxlcy50cmFuc2xhdGVTfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgbXgtNVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5HbyB0byBob21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkLWJsb2NrIHctMjAwIHRleHQtbGlnaHQgJHtzdHlsZXMudXNlckd9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAtNzAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWxsb30+SGVsbG8hPC9zcGFuPiB7dXNlcn0gdGFwIHRoZSBTdGFydCBidXR0b24gdG8gYmVnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZUIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdG59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXROYW1lfT5XaGF0IGlzIHlvdXIgbmFtZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICB7IXVzZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTMgcHgtMyBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfVxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e25hbWVJbnB1dFN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LXdyYXAgaC0xMDAgYWxpZ24taXRlbXMtc3RhcnQgYWxpZ24tY29udGVudC1iZXR3ZWVuIGJnLXdoaXRlIHB4LTAgJHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlcy5tYWluX2NoYXRcbiAgICAgICAgICAgICAgICB9ICR7Y2xvc2VGICYmIHN0eWxlcy5vcGFjaXR5fWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiA8Q2hhdCBhY3RpdmVVc2VyPXt1c2VyfSAvPn1cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPEluZGV4UGFnZSAvPjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsIkxheW91dCIsIkNoYXQiLCJzdHlsZXMiLCJMaW5rIiwiSW5kZXhQYWdlIiwic3RhdGUiLCJ1c2VyIiwic2hvdyIsImNsb3NlQiIsImNsb3NlRiIsImhhbmRsZUtleVVwIiwiZXZ0Iiwia2V5Q29kZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJoYW5kbGVDbG9zZSIsImNvbXBvbmVudERpZE1vdW50IiwicXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwic3RvcCIsInNldEludGVydmFsIiwibWF0Y2hlcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInJlbmRlciIsIm5hbWVJbnB1dFN0eWxlcyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJveFNoYWRvdyIsInRpdGxlIiwicGFnZVRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInBvc2l0aW9uIiwiYWJzb2x1dGUiLCJzZWN0aW9uIiwic2VjIiwidHJhbnNsYXRlUyIsImhyZWYiLCJsYXlvdXQiLCJzcGFuIiwidXNlckciLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlbGxvIiwiYnV0dG9uIiwiY2xvc2VCdG4iLCJvbkNsaWNrIiwibGF5b3V0TmFtZSIsImlucHV0IiwidHlwZSIsIm9uS2V5VXAiLCJhdXRvQ29tcGxldGUiLCJtYWluX2NoYXQiLCJvcGFjaXR5IiwiYWN0aXZlVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});