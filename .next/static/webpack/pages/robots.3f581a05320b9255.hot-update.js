"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/robots",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Robots = function(props) {\n    var _this1 = _this;\n    var robots = props.robots;\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Robots\"\n            }, void 0, false, {\n                fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: robots && robots.map(function(robot) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"robots/\".concat(robot.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: robot.name\n                            }, void 0, false, {\n                                fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this1)\n                    }, robot.id, false, {\n                        fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/barrylee/Desktop/next-ssr/pages/robots.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = Robots;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Robots);\nvar _c;\n$RefreshReg$(_c, \"Robots\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb2JvdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFFN0IsSUFBTUMsTUFBTSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDeEIsSUFBTSxNQUFRLEdBQUtBLEtBQUssQ0FBaEJDLE1BQU07SUFFZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBRW5CLHFCQUNFLDhEQUFDSSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxRQUFNOzs7OztxQkFBSzswQkFDZiw4REFBQ1Asa0RBQUk7Z0JBQUNRLElBQUksRUFBQyxHQUFHOzBCQUNaLDRFQUFDQyxRQUFNOzhCQUFDLE1BQUk7Ozs7O3lCQUFTOzs7OztxQkFDaEI7MEJBQ1AsOERBQUNILEtBQUc7MEJBQ0RILE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxHQUFHLENBQUNDLFNBQUFBLEtBQUs7eUNBQ3pCLDhEQUFDQyxJQUFFO2tDQUNILDRFQUFDWixrREFBSTs0QkFBQ1EsSUFBSSxFQUFFLFNBQVEsQ0FBVyxPQUFURyxLQUFLLENBQUNFLEVBQUUsQ0FBRTtzQ0FDOUIsNEVBQUNDLEdBQUM7MENBQUVILEtBQUssQ0FBQ0ksSUFBSTs7Ozs7c0NBQUs7Ozs7O2tDQUNkO3VCQUhFSixLQUFLLENBQUNFLEVBQUU7Ozs7OEJBSVo7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ1A7Q0FDRjtBQXRCS1osS0FBQUEsTUFBTTs7QUE4QlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yb2JvdHMuanM/NjgwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuXG5jb25zdCBSb2JvdHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByb2JvdHMgfSA9IHByb3BzO1xuXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Um9ib3RzPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICA8YnV0dG9uPkhvbWU8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyb2JvdHMgJiYgcm9ib3RzLm1hcChyb2JvdCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cm9ib3QuaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2Byb2JvdHMvJHtyb2JvdC5pZH1gfT5cbiAgICAgICAgICAgIDxhPntyb2JvdC5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9ib3RzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSb2JvdHMiLCJwcm9wcyIsInJvYm90cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImhyZWYiLCJidXR0b24iLCJtYXAiLCJyb2JvdCIsImxpIiwiaWQiLCJhIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/robots.js\n");

/***/ })

});