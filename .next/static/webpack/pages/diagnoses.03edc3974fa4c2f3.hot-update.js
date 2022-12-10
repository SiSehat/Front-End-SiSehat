"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/diagnoses",{

/***/ "./components/MedicineList.js":
/*!************************************!*\
  !*** ./components/MedicineList.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Diagnose_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Diagnose.module.css */ \"./styles/Diagnose.module.css\");\n/* harmony import */ var _styles_Diagnose_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Diagnose_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst MedicineList = (param)=>{\n    let { diagnoses  } = param;\n    _s();\n    const [medicine, setMedicine] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const findMedicine = async (medicines)=>{\n            const resp = await fetch(\"https://api-si-sehat.vercel.app/medicine\", {\n                method: \"POST\",\n                headers: {\n                    \"content-type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    medicines: medicines\n                })\n            });\n            const data = await resp.json();\n            setMedicine(data);\n            return data;\n        };\n        findMedicine(diagnoses.obat);\n    }, [\n        diagnoses\n    ]);\n    if (medicine.status === \"fail\" || medicine.data == undefined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"gak ada obat\"\n        }, void 0, false, {\n            fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined);\n    }\n    console.log(\"luar if\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Kemungkinan Obat\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            medicine.data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"disease__card\",\n                    className: (_styles_Diagnose_module_css__WEBPACK_IMPORTED_MODULE_3___default().disease__card),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\",\n                            className: (_styles_Diagnose_module_css__WEBPACK_IMPORTED_MODULE_3___default().disease__header),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n                                lineNumber: 38,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"image\", {\n                            src: item.thumbnail_url\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Diagnose_module_css__WEBPACK_IMPORTED_MODULE_3___default().disease__desc),\n                            children: item.short_desc\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Project\\\\New folder\\\\Front-End-SiSehat\\\\components\\\\MedicineList.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MedicineList, \"R2PD80fZWQLcZwiuplShaZF4kJM=\");\n_c = MedicineList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MedicineList);\nvar _c;\n$RefreshReg$(_c, \"MedicineList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGljaW5lTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDYztBQUM3QjtBQUU1QixNQUFNSSxlQUFlLFNBQW1CO1FBQWxCLEVBQUVDLFVBQVMsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNUSxlQUFlLE9BQU9DLFlBQWM7WUFDdEMsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLDRDQUE0QztnQkFDakVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNqQlAsV0FBV0E7Z0JBQ2Y7WUFDSjtZQUNBLE1BQU1RLE9BQU8sTUFBTVAsS0FBS1EsSUFBSTtZQUM1QlgsWUFBWVU7WUFDWixPQUFPQTtRQUNYO1FBQ0FULGFBQWFILFVBQVVjLElBQUk7SUFDL0IsR0FBRztRQUFDZDtLQUFVO0lBRWQsSUFBR0MsU0FBU2MsTUFBTSxLQUFHLFVBQVFkLFNBQVNXLElBQUksSUFBRUksV0FBVztRQUNuRCxxQkFDSSw4REFBQ0M7c0JBQUc7Ozs7OztJQUVaLENBQUM7SUFFREMsUUFBUUMsR0FBRyxDQUFDO0lBQ1oscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIcEIsU0FBU1csSUFBSSxDQUFDVSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLDhEQUFDQztvQkFBSUMsSUFBRztvQkFBZ0JDLFdBQVc5QixrRkFBMkI7O3NDQUMxRCw4REFBQ0Msa0RBQUlBOzRCQUFDK0IsTUFBSzs0QkFBSUYsV0FBVzlCLG9GQUE2QjtzQ0FBRSw0RUFBQ2tDOzBDQUFJUixLQUFLUyxLQUFLOzs7Ozs7Ozs7OztzQ0FDeEUsOERBQUNDOzRCQUFNQyxLQUFLWCxLQUFLWSxhQUFhOzs7Ozs7c0NBQzlCLDhEQUFDQzs0QkFBRVQsV0FBVzlCLGtGQUEyQjtzQ0FBRzBCLEtBQUtlLFVBQVU7Ozs7Ozs7bUJBSE1kOzs7Ozs7Ozs7OztBQVFyRjtHQXhDTXpCO0tBQUFBO0FBMENOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVkaWNpbmVMaXN0LmpzPzg5OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEaWFnbm9zZVN0eWxlIGZyb20gJy4uL3N0eWxlcy9EaWFnbm9zZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmNvbnN0IE1lZGljaW5lTGlzdCA9ICh7IGRpYWdub3NlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbbWVkaWNpbmUsIHNldE1lZGljaW5lXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmluZE1lZGljaW5lID0gYXN5bmMgKG1lZGljaW5lcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLXNpLXNlaGF0LnZlcmNlbC5hcHAvbWVkaWNpbmUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGljaW5lczogbWVkaWNpbmVzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldE1lZGljaW5lKGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmRNZWRpY2luZShkaWFnbm9zZXMub2JhdClcclxuICAgIH0sIFtkaWFnbm9zZXNdKVxyXG5cclxuICAgIGlmKG1lZGljaW5lLnN0YXR1cz09PSdmYWlsJ3x8bWVkaWNpbmUuZGF0YT09dW5kZWZpbmVkICl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgxPmdhayBhZGEgb2JhdDwvaDE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdsdWFyIGlmJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8aDI+S2VtdW5na2luYW4gT2JhdDwvaDI+XHJcbiAgICAgICAgICAgIHttZWRpY2luZS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2Rpc2Vhc2VfX2NhcmQnIGNsYXNzTmFtZT17RGlhZ25vc2VTdHlsZS5kaXNlYXNlX19jYXJkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJyBjbGFzc05hbWU9e0RpYWdub3NlU3R5bGUuZGlzZWFzZV9faGVhZGVyfT48aDM+e2l0ZW0udGl0bGV9PC9oMz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz17aXRlbS50aHVtYm5haWxfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17RGlhZ25vc2VTdHlsZS5kaXNlYXNlX19kZXNjfT57aXRlbS5zaG9ydF9kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZGljaW5lTGlzdDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEaWFnbm9zZVN0eWxlIiwiTGluayIsIk1lZGljaW5lTGlzdCIsImRpYWdub3NlcyIsIm1lZGljaW5lIiwic2V0TWVkaWNpbmUiLCJmaW5kTWVkaWNpbmUiLCJtZWRpY2luZXMiLCJyZXNwIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9iYXQiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJoMSIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiaDIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImRpc2Vhc2VfX2NhcmQiLCJocmVmIiwiZGlzZWFzZV9faGVhZGVyIiwiaDMiLCJ0aXRsZSIsImltYWdlIiwic3JjIiwidGh1bWJuYWlsX3VybCIsInAiLCJkaXNlYXNlX19kZXNjIiwic2hvcnRfZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MedicineList.js\n"));

/***/ })

});