"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/(auth)/register/page",{

/***/ "(app-pages-browser)/./app/(routes)/(auth)/register/page.tsx":
/*!***********************************************!*\
  !*** ./app/(routes)/(auth)/register/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _register_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.css */ \"(app-pages-browser)/./app/(routes)/(auth)/register/register.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Register = ()=>{\n    _s();\n    const [Name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [Password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [Role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"User\");\n    const nameHandler = (data)=>{\n        setName(data.target.value);\n    };\n    const passwordHandler = (data)=>{\n        setPassword(data.target.value);\n    };\n    const roleHandler = (data)=>{\n        console.log(data.target.value);\n        setRole(data.target.value);\n    };\n    const signup = async ()=>{\n        if (Name !== null && Name !== \"\" && Password !== null && Password !== \"\" && Role !== null && Role !== \"\") {\n            const data = {\n                Name,\n                Password,\n                Role\n            };\n            const save = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/user/signup\", data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"SignUp-Page\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                id: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-container sign-up\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"create\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Create Account\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Name\",\n                                    onChange: nameHandler,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    onChange: passwordHandler,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: roleHandler,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"User\",\n                                            children: \"User\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Broker\",\n                                            children: \"Broker\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: signup,\n                                    children: \"Sign Up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right-panel right-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \" Hello!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Register with your personal details to look for a nice house\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        id: \"login\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"dashboard\",\n                                            children: \"Sign In\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 35\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/register/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Register, \"eN4RETK8WPEkYzxPs++Lc/nx5ps=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS8oYXV0aCkvcmVnaXN0ZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNYO0FBQ0w7QUFFRTtBQUUxQixNQUFNSSxXQUFXOztJQUVkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1VLGNBQWMsQ0FBQ0M7UUFDakJOLFFBQVFNLEtBQUtDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLGtCQUFrQixDQUFDSDtRQUNyQkosWUFBWUksS0FBS0MsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsTUFBTUUsY0FBYyxDQUFDSjtRQUNwQkssUUFBUUMsR0FBRyxDQUFDTixLQUFLQyxNQUFNLENBQUNDLEtBQUs7UUFDMUJKLFFBQVFFLEtBQUtDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1LLFNBQVM7UUFDWixJQUFHLFNBQVUsUUFBUWQsU0FBUyxNQUFRRSxhQUFhLFFBQVFBLGFBQWEsTUFBUUUsU0FBUyxRQUFRQSxTQUFTLElBQUk7WUFDM0csTUFBTUcsT0FBTztnQkFDVlA7Z0JBQ0FFO2dCQUNBRTtZQUNKO1lBQ0EsTUFBTVcsT0FBTyxNQUFNakIsNkNBQUtBLENBQUNrQixJQUFJLENBQUMscUNBQXFDVDtRQUNyRTtJQUNIO0lBRUQscUJBQ0UsOERBQUNVO2tCQUNELDRFQUFDQTtZQUFJQyxXQUFZO3NCQUNqQiw0RUFBQ0Q7Z0JBQUlDLFdBQVk7Z0JBQVlDLElBQUs7O2tDQUNoQyw4REFBQ0Y7d0JBQUlDLFdBQVk7a0NBQ2YsNEVBQUNFOzs4Q0FDQyw4REFBQ0g7b0NBQUlDLFdBQVU7OENBRWYsNEVBQUNHO2tEQUFHOzs7Ozs7Ozs7Ozs4Q0FHTiw4REFBQ0M7b0NBQU1DLE1BQU87b0NBQU9DLGFBQVk7b0NBQU9DLFVBQVVuQjtvQ0FBYW9CLFFBQVE7Ozs7Ozs4Q0FDdkUsOERBQUNKO29DQUFNQyxNQUFPO29DQUFXQyxhQUFZO29DQUFXQyxVQUFVZjtvQ0FBaUJnQixRQUFROzs7Ozs7OENBQ25GLDhEQUFDQztvQ0FBT0YsVUFBVWQ7O3NEQUNoQiw4REFBQ2lCOzRDQUFPbkIsT0FBTTtzREFBTzs7Ozs7O3NEQUNyQiw4REFBQ21COzRDQUFPbkIsT0FBTTtzREFBUzs7Ozs7Ozs7Ozs7OzhDQUV6Qiw4REFBQ29CO29DQUFPQyxTQUFTaEI7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU0zQiw4REFBQ0c7d0JBQUlDLFdBQVk7a0NBQ2YsNEVBQUNEOzRCQUFJQyxXQUFZO3NDQUNmLDRFQUFDRDtnQ0FBSUMsV0FBWTs7a0RBQ2pCLDhEQUFDRztrREFBRzs7Ozs7O2tEQUNGLDhEQUFDVTtrREFBRTs7Ozs7O2tEQUNILDhEQUFDRjt3Q0FBUVYsSUFBSztrREFBUSw0RUFBQ3RCLGtEQUFJQTs0Q0FBQ21DLE1BQU07c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlMUQ7R0F6RU1qQztLQUFBQTtBQTJFTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvKGF1dGgpL3JlZ2lzdGVyL3BhZ2UudHN4PzBhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBcIi4vcmVnaXN0ZXIuY3NzXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuXG4gICBjb25zdCBbTmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtQYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUobnVsbCk7XG4gICBjb25zdCBbUm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlVzZXJcIik7XG5cbiAgIGNvbnN0IG5hbWVIYW5kbGVyID0gKGRhdGEgOiBhbnkpID0+e1xuICAgICAgIHNldE5hbWUoZGF0YS50YXJnZXQudmFsdWUpO1xuICAgfVxuXG4gICBjb25zdCBwYXNzd29yZEhhbmRsZXIgPSAoZGF0YSA6IGFueSkgPT57XG4gICAgICAgc2V0UGFzc3dvcmQoZGF0YS50YXJnZXQudmFsdWUpO1xuICAgfVxuXG4gICBjb25zdCByb2xlSGFuZGxlciA9IChkYXRhIDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS50YXJnZXQudmFsdWUpXG4gICAgICAgc2V0Um9sZShkYXRhLnRhcmdldC52YWx1ZSk7XG4gICB9XG5cbiAgIGNvbnN0IHNpZ251cCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmKChOYW1lICE9PSBudWxsICYmIE5hbWUgIT09ICcnKSAmJiAoUGFzc3dvcmQgIT09IG51bGwgJiYgUGFzc3dvcmQgIT09ICcnKSAmJiAoUm9sZSAhPT0gbnVsbCAmJiBSb2xlICE9PSAnJykpe1xuICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIE5hbWUsXG4gICAgICAgICAgICBQYXNzd29yZCxcbiAgICAgICAgICAgIFJvbGVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzYXZlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXIvc2lnbnVwJywgZGF0YSk7XG4gICAgICB9XG4gICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJTaWduVXAtUGFnZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIiBpZCA9IFwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXIgc2lnbi11cFwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3JlYXRlJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHBsYWNlaG9sZGVyPSdOYW1lJyBvbkNoYW5nZT17bmFtZUhhbmRsZXJ9IHJlcXVpcmVkLz5cbiAgICAgICAgPGlucHV0IHR5cGUgPSBcInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBvbkNoYW5nZT17cGFzc3dvcmRIYW5kbGVyfSByZXF1aXJlZC8+XG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3JvbGVIYW5kbGVyfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVXNlclwiPlVzZXI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQnJva2VyXCI+QnJva2VyPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ251cH0+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJpZ2h0LXBhbmVsIHJpZ2h0LWxlZnRcIj5cbiAgICAgICAgICA8aDE+IEhlbGxvITwvaDE+XG4gICAgICAgICAgICA8cD5SZWdpc3RlciB3aXRoIHlvdXIgcGVyc29uYWwgZGV0YWlscyB0byBsb29rIGZvciBhIG5pY2UgaG91c2U8L3A+XG4gICAgICAgICAgICA8YnV0dG9uICBpZCA9IFwibG9naW5cIj48TGluayBocmVmPSAnZGFzaGJvYXJkJz5TaWduIEluPC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsImF4aW9zIiwiUmVnaXN0ZXIiLCJOYW1lIiwic2V0TmFtZSIsIlBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJSb2xlIiwic2V0Um9sZSIsIm5hbWVIYW5kbGVyIiwiZGF0YSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmRIYW5kbGVyIiwicm9sZUhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwic2lnbnVwIiwic2F2ZSIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImZvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/(auth)/register/page.tsx\n"));

/***/ })

});