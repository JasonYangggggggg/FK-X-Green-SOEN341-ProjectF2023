"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/(BrokerView)/view/page",{

/***/ "(app-pages-browser)/./app/(routes)/(BrokerView)/view/page.tsx":
/*!*************************************************!*\
  !*** ./app/(routes)/(BrokerView)/view/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addHouse; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.withCredentials = true;\nfunction addHouse() {\n    _s();\n    const [Reservations, setReservations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //onMount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    // Function to fetch and update house data\n    const getData = async ()=>{\n        try {\n            const reservations = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/reservation/getReservationDetails\");\n            setReservations(reservations.data);\n        // // Set the fetched data to the houseData state if needed\n        // setHouseData(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    /*useEffect(()=> {\n        axios.get('http://localhost:3001/reservation/getReservationDetails').then(res => {\n          console.log(res.data);\n        }).catch(err => console.log(err))\n        },[]);*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Here is the broker's page\",\n            Reservations.map((Reservation, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Reservations.ReserveeId\"\n                }, void 0, false, {\n                    fileName: \"/Users/alimurat/Desktop/Concordia 3rd semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(BrokerView)/view/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 5\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alimurat/Desktop/Concordia 3rd semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(BrokerView)/view/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(addHouse, \"bk7/1UHyORA0E2S3gmvFsKdZcz0=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS8oQnJva2VyVmlldykvdmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBR3pCO0FBR3RCRyw2Q0FBS0EsQ0FBQ0MsUUFBUSxDQUFDQyxlQUFlLEdBQUc7QUFFdEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDUSxPQUFNQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRWxDLFNBQVM7SUFDVEMsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCwwQ0FBMEM7SUFDMUMsTUFBTUEsVUFBVTtRQUNkLElBQUk7WUFDRixNQUFNQyxlQUFlLE1BQU1ULDZDQUFLQSxDQUFDVSxHQUFHLENBQUM7WUFFckNMLGdCQUFnQkksYUFBYUUsSUFBSTtRQUVqQywyREFBMkQ7UUFDM0Qsc0JBQXNCO1FBQ3hCLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUk7Ozs7Y0FJUSxHQUVSLHFCQUNFLDhEQUFDRTs7WUFBSTtZQUNGVixhQUFhVyxHQUFHLENBQUMsQ0FBQ0MsYUFBa0JDLGtCQUMzQyw4REFBQ0g7OEJBQUk7Ozs7Ozs7Ozs7OztBQUtMO0dBckNvQlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXMpLyhCcm9rZXJWaWV3KS92aWV3L3BhZ2UudHN4PzM4N2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICdAL2FwcC9fY29tcG9uZW50cy9faW5wdXQvaW5wdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2FwcC9fY29tcG9uZW50cy9fYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuICAgIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRIb3VzZSgpIHtcbiAgY29uc3QgW1Jlc2VydmF0aW9ucywgc2V0UmVzZXJ2YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3F1ZXJ5LHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vb25Nb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGZldGNoIGFuZCB1cGRhdGUgaG91c2UgZGF0YVxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNlcnZhdGlvbnMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVzZXJ2YXRpb24vZ2V0UmVzZXJ2YXRpb25EZXRhaWxzXCIpO1xuICAgICAgXG4gICAgICBzZXRSZXNlcnZhdGlvbnMocmVzZXJ2YXRpb25zLmRhdGEpO1xuXG4gICAgICAvLyAvLyBTZXQgdGhlIGZldGNoZWQgZGF0YSB0byB0aGUgaG91c2VEYXRhIHN0YXRlIGlmIG5lZWRlZFxuICAgICAgLy8gc2V0SG91c2VEYXRhKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAgICAgLyp1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Jlc2VydmF0aW9uL2dldFJlc2VydmF0aW9uRGV0YWlscycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgICB9LFtdKTsqL1xuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5IZXJlIGlzIHRoZSBicm9rZXIncyBwYWdlXG4gICAgICAgICAge1Jlc2VydmF0aW9ucy5tYXAoKFJlc2VydmF0aW9uOiBhbnksIGk6IG51bWJlcikgPT4gKFxuICAgIDxkaXY+UmVzZXJ2YXRpb25zLlJlc2VydmVlSWQ8L2Rpdj5cbiAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsImFkZEhvdXNlIiwiUmVzZXJ2YXRpb25zIiwic2V0UmVzZXJ2YXRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdldERhdGEiLCJyZXNlcnZhdGlvbnMiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwibWFwIiwiUmVzZXJ2YXRpb24iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/(BrokerView)/view/page.tsx\n"));

/***/ })

});