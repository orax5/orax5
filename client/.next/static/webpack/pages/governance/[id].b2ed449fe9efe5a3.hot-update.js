"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/governance/[id]",{

/***/ "./pages/governance/[id].js":
/*!**********************************!*\
  !*** ./pages/governance/[id].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_CountDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountDown */ \"./pages/components/CountDown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\an\\\\Desktop\\\\DTS\\\\client\\\\pages\\\\governance\\\\[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Detail = function Detail() {\n  _s();\n\n  var Dtoken = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.user.contracts.Dtoken;\n  });\n  var params = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var submit = function submit() {\n    console.log(params.query.id);\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isTimeOver = _useState[0],\n      setIsTimeOver = _useState[1]; // 등록하는 곳에서 선택한 날짜로 불러와야함, 지금은 임의로 두고 작업\n\n\n  var endDate = new Date(\"2023-01-30 15:20:10\");\n\n  var _CountDown = (0,_components_CountDown__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(endDate, setIsTimeOver),\n      _CountDown2 = (0,C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CountDown, 4),\n      date = _CountDown2[0],\n      hours = _CountDown2[1],\n      minutes = _CountDown2[2],\n      seconds = _CountDown2[3]; // 댓글 더미데이터\n\n\n  var replies = [{\n    name: \"김치만두\",\n    content: \"앨범아트 바꾸지 말자\"\n  }, {\n    name: \"만두만두\",\n    content: \"222\"\n  }, {\n    name: \"고기만두\",\n    content: \"333\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ContentWrap, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: \"\\uD22C\\uD45C \\uC81C\\uBAA9\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: isTimeOver ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n            children: \"\\uD22C\\uD45C\\uAE30\\uAC04\\uC774 \\uC885\\uB8CC\\uB418\\uC5C8\\uC2B5\\uB2C8\\uB2E4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Timer, {\n            isTimeOver: isTimeOver,\n            children: [date, \"\\uC77C \", hours, \"\\uC2DC\\uAC04 \", minutes, \"\\uBD84 \", seconds, \"\\uCD08\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: \"\\uC568\\uBC94\\uC544\\uD2B8 \\uBCC0\\uACBD\\uD558\\uACE0 \\uC2F6\\uC5B4\\uC694 \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Btn, {\n            children: \"\\uCC2C\\uC131\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Btn, {\n            children: \"\\uBC18\\uB300\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ReplyWrap, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: \"\\uB313\\uAE00(3)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(WriteReply, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n            onClick: submit,\n            children: \"\\uB4F1\\uB85D\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), replies.map(function (reply, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ShowReply, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n              children: reply.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n              children: [\"\\u21B3 \", reply.content]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this)]\n          }, idx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"F4yM9YfTZeVBQ+RAmQjkYUNCj/Y=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Detail;\nvar MainContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"id__MainContainer\",\n  componentId: \"sc-bryy2c-0\"\n})([\"\", \";\"], function (props) {\n  return props.theme.gridLayout.mainGrid;\n}); // 투표 안건 정보 보여주는 부분\n\n_c2 = MainContainer;\nvar ContentWrap = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"id__ContentWrap\",\n  componentId: \"sc-bryy2c-1\"\n})([\"\", \";font-size:1.5rem;> :nth-child(2){margin:1rem 0;}> :nth-child(3){width:80rem;height:10rem;padding:1rem;border:1px solid white;}> :last-child{width:80rem;display:flex;justify-content:space-evenly;}\"], function (props) {\n  return props.theme.align.flexStart;\n}); // 버튼\n\n_c3 = ContentWrap;\nvar Btn = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button.withConfig({\n  displayName: \"id__Btn\",\n  componentId: \"sc-bryy2c-2\"\n})([\"margin:1rem 0;\", \";width:30rem;height:4rem;\"], function (props) {\n  return props.theme.button.basicBtn;\n}); // 댓글 전체박스\n\n_c4 = Btn;\nvar ReplyWrap = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"id__ReplyWrap\",\n  componentId: \"sc-bryy2c-3\"\n})([\"font-size:1.5rem;margin:4rem 0;\"]);\n_c5 = ReplyWrap;\nvar WriteReply = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"id__WriteReply\",\n  componentId: \"sc-bryy2c-4\"\n})([\"\", \";background-color:rgba(255,255,255,0.3);border-radius:1rem;padding:2rem;margin:1rem 0;width:80rem;> input{width:70rem;height:4rem;font-size:1.5rem;border:1px solid white;border-bottom-left-radius:1rem;border-top-left-radius:1rem;}> button{width:5rem;height:4rem;cursor:pointer;font-size:1.5rem;border:1px solid white;border-left:none;border-bottom-right-radius:1rem;border-top-right-radius:1rem;}\"], function (props) {\n  return props.theme.align.flexCenter;\n});\n_c6 = WriteReply;\nvar ShowReply = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].ul.withConfig({\n  displayName: \"id__ShowReply\",\n  componentId: \"sc-bryy2c-5\"\n})([\"width:80rem;> :first-child{font-size:1.8rem;font-weight:900;margin:0.5rem 0;}> :last-child{height:auto;padding:1.5rem;background-color:rgba(255,255,255,0.1);}\"]);\n_c7 = ShowReply;\nvar Timer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].span.withConfig({\n  displayName: \"id__Timer\",\n  componentId: \"sc-bryy2c-6\"\n})([\"color:red;font-size:2.2rem;font-weight:800;\"]);\n_c8 = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Detail\");\n$RefreshReg$(_c2, \"MainContainer\");\n$RefreshReg$(_c3, \"ContentWrap\");\n$RefreshReg$(_c4, \"Btn\");\n$RefreshReg$(_c5, \"ReplyWrap\");\n$RefreshReg$(_c6, \"WriteReply\");\n$RefreshReg$(_c7, \"ShowReply\");\n$RefreshReg$(_c8, \"Timer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nb3Zlcm5hbmNlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0VBQUE7O0VBRW5CLElBQU1DLE1BQU0sR0FBR0gsd0RBQVcsQ0FBQyxVQUFDSSxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBQVgsQ0FBcUJILE1BQWhDO0VBQUEsQ0FBRCxDQUExQjtFQUNBLElBQU1JLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7O0VBRUEsSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtJQUNuQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUF6QjtFQUNELENBRkQ7O0VBSUEsZ0JBQW9DZiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7RUFBQSxJQUFPZ0IsVUFBUDtFQUFBLElBQW1CQyxhQUFuQixnQkFUbUIsQ0FXbkI7OztFQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMscUJBQVQsQ0FBaEI7O0VBRUEsaUJBQXdDakIsaUVBQVMsQ0FBQ2dCLE9BQUQsRUFBVUQsYUFBVixDQUFqRDtFQUFBO0VBQUEsSUFBT0csSUFBUDtFQUFBLElBQWFDLEtBQWI7RUFBQSxJQUFvQkMsT0FBcEI7RUFBQSxJQUE2QkMsT0FBN0Isa0JBZG1CLENBZ0JuQjs7O0VBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7SUFBRUMsSUFBSSxFQUFFLE1BQVI7SUFBZ0JDLE9BQU8sRUFBRTtFQUF6QixDQURjLEVBRWQ7SUFBRUQsSUFBSSxFQUFFLE1BQVI7SUFBZ0JDLE9BQU8sRUFBRTtFQUF6QixDQUZjLEVBR2Q7SUFBRUQsSUFBSSxFQUFFLE1BQVI7SUFBZ0JDLE9BQU8sRUFBRTtFQUF6QixDQUhjLENBQWhCO0VBS0Esb0JBQ0UsOERBQUMsYUFBRDtJQUFBLHdCQUNFO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUVFO01BQUEsd0JBQ0UsOERBQUMsV0FBRDtRQUFBLHdCQUNFO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFFRTtVQUFBLFVBQ0dWLFVBQVUsZ0JBQ1Q7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FEUyxnQkFHVCw4REFBQyxLQUFEO1lBQU8sVUFBVSxFQUFFQSxVQUFuQjtZQUFBLFdBQ0dJLElBREgsYUFDV0MsS0FEWCxtQkFDcUJDLE9BRHJCLGFBQ2dDQyxPQURoQztVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFKSjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRkYsZUFXRTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVhGLGVBWUU7VUFBQSx3QkFDRSw4REFBQyxHQUFEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFFRSw4REFBQyxHQUFEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBWkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUFtQkUsOERBQUMsU0FBRDtRQUFBLHdCQUNFO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFFRSw4REFBQyxVQUFEO1VBQUEsd0JBQ0U7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURGLGVBRUU7WUFBUSxPQUFPLEVBQUVaLE1BQWpCO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRkYsRUFNR2EsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO1VBQUEsb0JBQ1gsOERBQUMsU0FBRDtZQUFBLHdCQUNFO2NBQUEsVUFBS0QsS0FBSyxDQUFDSDtZQUFYO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FERixlQUVFO2NBQUEsc0JBQU9HLEtBQUssQ0FBQ0YsT0FBYjtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FGRjtVQUFBLEdBQWdCRyxHQUFoQjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRFc7UUFBQSxDQUFaLENBTkg7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBbkJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZGLGVBbUNFO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FuQ0Y7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUF1Q0QsQ0E3REQ7O0dBQU14QjtVQUVXRixzREFDQUM7OztLQUhYQztBQThETixJQUFNeUIsYUFBYSxnQkFBRzdCLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGNBQ2YsVUFBQytCLEtBQUQ7RUFBQSxPQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBWixDQUF1QkMsUUFBbEM7QUFBQSxDQURlLENBQW5CLEVBR0E7O01BSE1MO0FBSU4sSUFBTU0sV0FBVyxnQkFBR25DLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGlOQUNiLFVBQUMrQixLQUFEO0VBQUEsT0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlJLEtBQVosQ0FBa0JDLFNBQTdCO0FBQUEsQ0FEYSxDQUFqQixFQW9CQTs7TUFwQk1GO0FBcUJOLElBQU1HLEdBQUcsZ0JBQUd0QywyRUFBSDtFQUFBO0VBQUE7QUFBQSxvREFFTCxVQUFDK0IsS0FBRDtFQUFBLE9BQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxNQUFaLENBQW1CQyxRQUE5QjtBQUFBLENBRkssQ0FBVCxFQU1BOztNQU5NRjtBQU9OLElBQU1HLFNBQVMsZ0JBQUd6Qyx3RUFBSDtFQUFBO0VBQUE7QUFBQSx1Q0FBZjtNQUFNeUM7QUFJTixJQUFNQyxVQUFVLGdCQUFHMUMsd0VBQUg7RUFBQTtFQUFBO0FBQUEseVpBQ1osVUFBQytCLEtBQUQ7RUFBQSxPQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksS0FBWixDQUFrQk8sVUFBN0I7QUFBQSxDQURZLENBQWhCO01BQU1EO0FBMEJOLElBQU1FLFNBQVMsZ0JBQUc1Qyx1RUFBSDtFQUFBO0VBQUE7QUFBQSxzS0FBZjtNQUFNNEM7QUFhTixJQUFNRSxLQUFLLGdCQUFHOUMseUVBQUg7RUFBQTtFQUFBO0FBQUEsbURBQVg7TUFBTThDO0FBS04sK0RBQWUxQyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dvdmVybmFuY2UvW2lkXS5qcz9kMDBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnREb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IERldGFpbCA9ICgpID0+IHtcblxuICBjb25zdCBEdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY29udHJhY3RzLkR0b2tlbik7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMucXVlcnkuaWQpO1xuICB9XG5cbiAgY29uc3QgW2lzVGltZU92ZXIsIHNldElzVGltZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOuTseuhne2VmOuKlCDqs7Psl5DshJwg7ISg7YOd7ZWcIOuCoOynnOuhnCDrtojrn6zsmYDslbztlagsIOyngOq4iOydgCDsnoTsnZjroZwg65GQ6rOgIOyekeyXhVxuICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoXCIyMDIzLTAxLTMwIDE1OjIwOjEwXCIpO1xuXG4gIGNvbnN0IFtkYXRlLCBob3VycywgbWludXRlcywgc2Vjb25kc10gPSBDb3VudERvd24oZW5kRGF0ZSwgc2V0SXNUaW1lT3Zlcik7XG5cbiAgLy8g64yT6riAIOuNlOuvuOuNsOydtO2EsFxuICBjb25zdCByZXBsaWVzID0gW1xuICAgIHsgbmFtZTogXCLquYDsuZjrp4zrkZBcIiwgY29udGVudDogXCLslajrspTslYTtirgg67CU6r647KeAIOunkOyekFwiIH0sXG4gICAgeyBuYW1lOiBcIuunjOuRkOunjOuRkFwiLCBjb250ZW50OiBcIjIyMlwiIH0sXG4gICAgeyBuYW1lOiBcIuqzoOq4sOunjOuRkFwiLCBjb250ZW50OiBcIjMzM1wiIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPE1haW5Db250YWluZXI+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnRlbnRXcmFwPlxuICAgICAgICAgIDxoMT7tiKztkZwg7KCc66qpPC9oMT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzVGltZU92ZXIgPyAoXG4gICAgICAgICAgICAgIDxoMj7tiKztkZzquLDqsITsnbQg7KKF66OM65CY7JeI7Iq164uI64ukPC9oMj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUaW1lciBpc1RpbWVPdmVyPXtpc1RpbWVPdmVyfT5cbiAgICAgICAgICAgICAgICB7ZGF0ZX3snbwge2hvdXJzfeyLnOqwhCB7bWludXRlc33rtoQge3NlY29uZHN97LSIXG4gICAgICAgICAgICAgIDwvVGltZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+7JWo67KU7JWE7Yq4IOuzgOqyve2VmOqzoCDsi7bslrTsmpQgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdG4+7LCs7ISxPC9CdG4+XG4gICAgICAgICAgICA8QnRuPuuwmOuMgDwvQnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRlbnRXcmFwPlxuICAgICAgICB7Lyog64yT6riAIO2VoOyngCDslYjtlaDsp4Ag66qw65287JqUICovfVxuICAgICAgICA8UmVwbHlXcmFwPlxuICAgICAgICAgIDxoMT7rjJPquIAoMyk8L2gxPlxuICAgICAgICAgIDxXcml0ZVJlcGx5PlxuICAgICAgICAgICAgPGlucHV0IC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0+65Ox66GdPC9idXR0b24+XG4gICAgICAgICAgPC9Xcml0ZVJlcGx5PlxuICAgICAgICAgIHtyZXBsaWVzLm1hcCgocmVwbHksIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFNob3dSZXBseSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIDxsaT57cmVwbHkubmFtZX08L2xpPlxuICAgICAgICAgICAgICA8bGk+4oazIHtyZXBseS5jb250ZW50fTwvbGk+XG4gICAgICAgICAgICA8L1Nob3dSZXBseT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9SZXBseVdyYXA+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9NYWluQ29udGFpbmVyPlxuICApO1xufTtcbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ3JpZExheW91dC5tYWluR3JpZH07XG5gO1xuLy8g7Yis7ZGcIOyViOqxtCDsoJXrs7Qg67O07Jes7KO864qUIOu2gOu2hFxuY29uc3QgQ29udGVudFdyYXAgPSBzdHlsZWQuZGl2YFxuICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWxpZ24uZmxleFN0YXJ0fTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8vIOyiheujjOq5jOyngH4g7JWM66Ck7KO864qUIOusuOq1rFxuICA+IDpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICB9XG4gIC8vIOyWtOuWpCDrgrTsmqnsl5Ag64yA7ZWcIO2IrO2RnOyduOyngCDshKTrqoUg7J6I64qUIOywvVxuICA+IDpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiA4MHJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIH1cbiAgPiA6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDgwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbmA7XG4vLyDrsoTtirxcbmNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXG4gIG1hcmdpbjogMXJlbSAwO1xuICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnV0dG9uLmJhc2ljQnRufTtcbiAgd2lkdGg6IDMwcmVtO1xuICBoZWlnaHQ6IDRyZW07XG5gO1xuLy8g64yT6riAIOyghOyytOuwleyKpFxuY29uc3QgUmVwbHlXcmFwID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogNHJlbSAwO1xuYDtcbmNvbnN0IFdyaXRlUmVwbHkgPSBzdHlsZWQuZGl2YFxuICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWxpZ24uZmxleENlbnRlcn07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA4MHJlbTtcbiAgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDcwcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gIH1cbiAgPiBidXR0b24ge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG4gIH1cbmA7XG5jb25zdCBTaG93UmVwbHkgPSBzdHlsZWQudWxgXG4gIHdpZHRoOiA4MHJlbTtcbiAgPiA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuICA+IDpsYXN0LWNoaWxkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuYDtcbmNvbnN0IFRpbWVyID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuYDtcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ291bnREb3duIiwidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJEZXRhaWwiLCJEdG9rZW4iLCJzdGF0ZSIsInVzZXIiLCJjb250cmFjdHMiLCJwYXJhbXMiLCJzdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsImlzVGltZU92ZXIiLCJzZXRJc1RpbWVPdmVyIiwiZW5kRGF0ZSIsIkRhdGUiLCJkYXRlIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInJlcGxpZXMiLCJuYW1lIiwiY29udGVudCIsIm1hcCIsInJlcGx5IiwiaWR4IiwiTWFpbkNvbnRhaW5lciIsImRpdiIsInByb3BzIiwidGhlbWUiLCJncmlkTGF5b3V0IiwibWFpbkdyaWQiLCJDb250ZW50V3JhcCIsImFsaWduIiwiZmxleFN0YXJ0IiwiQnRuIiwiYnV0dG9uIiwiYmFzaWNCdG4iLCJSZXBseVdyYXAiLCJXcml0ZVJlcGx5IiwiZmxleENlbnRlciIsIlNob3dSZXBseSIsInVsIiwiVGltZXIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/governance/[id].js\n"));

/***/ })

});