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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_CountDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountDown */ \"./pages/components/CountDown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\an\\\\Desktop\\\\DTS\\\\client\\\\pages\\\\governance\\\\[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Detail = function Detail() {\n  _s();\n\n  var params = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var Dtoken = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.user.contracts.Dtoken;\n  });\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      tokenTime = _useState[0],\n      setTokenTime = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isTimeOver = _useState2[0],\n      setIsTimeOver = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      date = _useState3[0],\n      setdate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      hours = _useState4[0],\n      sethours = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      minutes = _useState5[0],\n      setminutes = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      seconds = _useState6[0],\n      setseconds = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      count = _useState7[0],\n      setcount = _useState7[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // setTokenId(params.query.id);\n    endTime();\n  }, []);\n\n  function endTime() {\n    return _endTime.apply(this, arguments);\n  }\n\n  function _endTime() {\n    _endTime = (0,C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var time, tokenJsTime, year, month, day, hour, minute, second;\n      return C_Users_an_Desktop_DTS_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(params.query.tokenId);\n              _context.next = 3;\n              return Dtoken.getVotingDate(parseInt(params.query.id));\n\n            case 3:\n              time = _context.sent;\n              tokenJsTime = parseInt(time) * 1000;\n              setTokenTime(tokenJsTime);\n              year = new Date(tokenJsTime).getFullYear().toString().slice(-2); //년도 뒤에 두자리\n\n              month = (\"0\" + (new Date(tokenJsTime).getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)\n\n              day = (\"0\" + new Date(tokenJsTime).getDate()).slice(-2); //일 2자리 (01, 02 ... 31)\n\n              hour = (\"0\" + new Date(tokenJsTime).getHours()).slice(-2); //시 2자리 (00, 01 ... 23)\n\n              minute = (\"0\" + new Date(tokenJsTime).getMinutes()).slice(-2); //분 2자리 (00, 01 ... 59)\n\n              second = (\"0\" + new Date(tokenJsTime).getSeconds()).slice(-2); //초 2자리 (00, 01 ... 59)\n\n              setdate(day);\n              sethours(hour);\n              setminutes(minute);\n              setseconds(second);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _endTime.apply(this, arguments);\n  }\n\n  var submit = function submit() {}; // 등록하는 곳에서 선택한 날짜로 불러와야함, 지금은 임의로 두고 작업\n\n\n  var endDate = new Date(\"2023-01-30 15:20:10\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ContentWrap, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n          children: \"\\uD22C\\uD45C \\uC81C\\uBAA9\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: isTimeOver ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n            children: \"\\uD22C\\uD45C\\uAE30\\uAC04\\uC774 \\uC885\\uB8CC\\uB418\\uC5C8\\uC2B5\\uB2C8\\uB2E4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Timer, {\n            isTimeOver: isTimeOver,\n            children: [date, \"\\uC77C \", hours, \"\\uC2DC\\uAC04 \", minutes, \"\\uBD84 \", seconds, \"\\uCD08 \\uAE4C\\uC9C0\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: \"\\uC568\\uBC94\\uC544\\uD2B8 \\uBCC0\\uACBD\\uD558\\uACE0 \\uC2F6\\uC5B4\\uC694 \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Btn, {\n            children: \"\\uCC2C\\uC131\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Btn, {\n            children: \"\\uBC18\\uB300\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"xe/9/mVcp77kCt50zFPA/e8aoRQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = Detail;\nvar MainContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"id__MainContainer\",\n  componentId: \"sc-bryy2c-0\"\n})([\"\", \";\"], function (props) {\n  return props.theme.gridLayout.mainGrid;\n}); // 투표 안건 정보 보여주는 부분\n\n_c2 = MainContainer;\nvar ContentWrap = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"id__ContentWrap\",\n  componentId: \"sc-bryy2c-1\"\n})([\"\", \";font-size:1.5rem;> :nth-child(2){margin:1rem 0;}> :nth-child(3){width:80rem;height:10rem;padding:1rem;border:1px solid white;}> :last-child{width:80rem;display:flex;justify-content:space-evenly;}\"], function (props) {\n  return props.theme.align.flexStart;\n}); // 버튼\n\n_c3 = ContentWrap;\nvar Btn = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button.withConfig({\n  displayName: \"id__Btn\",\n  componentId: \"sc-bryy2c-2\"\n})([\"margin:1rem 0;\", \";width:30rem;height:4rem;\"], function (props) {\n  return props.theme.button.basicBtn;\n}); // 댓글 전체박스\n\n_c4 = Btn;\nvar ReplyWrap = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"id__ReplyWrap\",\n  componentId: \"sc-bryy2c-3\"\n})([\"font-size:1.5rem;margin:4rem 0;\"]);\nvar WriteReply = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"id__WriteReply\",\n  componentId: \"sc-bryy2c-4\"\n})([\"\", \";background-color:rgba(255,255,255,0.3);border-radius:1rem;padding:2rem;margin:1rem 0;width:80rem;> input{width:70rem;height:4rem;font-size:1.5rem;border:1px solid white;border-bottom-left-radius:1rem;border-top-left-radius:1rem;}> button{width:5rem;height:4rem;cursor:pointer;font-size:1.5rem;border:1px solid white;border-left:none;border-bottom-right-radius:1rem;border-top-right-radius:1rem;}\"], function (props) {\n  return props.theme.align.flexCenter;\n});\nvar ShowReply = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].ul.withConfig({\n  displayName: \"id__ShowReply\",\n  componentId: \"sc-bryy2c-5\"\n})([\"width:80rem;> :first-child{font-size:1.8rem;font-weight:900;margin:0.5rem 0;}> :last-child{height:auto;padding:1.5rem;background-color:rgba(255,255,255,0.1);}\"]);\nvar Timer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].span.withConfig({\n  displayName: \"id__Timer\",\n  componentId: \"sc-bryy2c-6\"\n})([\"color:red;font-size:2.2rem;font-weight:800;\"]);\n_c5 = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Detail\");\n$RefreshReg$(_c2, \"MainContainer\");\n$RefreshReg$(_c3, \"ContentWrap\");\n$RefreshReg$(_c4, \"Btn\");\n$RefreshReg$(_c5, \"Timer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aWRdLmpzP2QwMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ291bnREb3duIGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50RG93blwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBEZXRhaWwgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBwYXJhbXMgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBEdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuY29udHJhY3RzLkR0b2tlbik7XG4gIFxuICBcbiAgY29uc3QgW3Rva2VuVGltZSwgc2V0VG9rZW5UaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNUaW1lT3Zlciwgc2V0SXNUaW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaG91cnMsIHNldGhvdXJzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWludXRlcywgc2V0bWludXRlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlY29uZHMsIHNldHNlY29uZHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Y291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2V0VG9rZW5JZChwYXJhbXMucXVlcnkuaWQpO1xuICAgIGVuZFRpbWUoKTtcbiAgfSxbXSlcblxuICBhc3luYyBmdW5jdGlvbiBlbmRUaW1lKCl7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLnF1ZXJ5LnRva2VuSWQpO1xuICAgIGNvbnN0IHRpbWUgPSBhd2FpdCBEdG9rZW4uZ2V0Vm90aW5nRGF0ZShwYXJzZUludChwYXJhbXMucXVlcnkuaWQpKTtcbiAgICBjb25zdCB0b2tlbkpzVGltZSA9IHBhcnNlSW50KHRpbWUpKjEwMDA7XG4gICAgc2V0VG9rZW5UaW1lKHRva2VuSnNUaW1lKTtcbiAgICB2YXIgeWVhciA9IG5ldyBEYXRlKHRva2VuSnNUaW1lKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpOyAvL+uFhOuPhCDrkqTsl5Ag65GQ7J6Q66asXG4gICAgdmFyIG1vbnRoID0gKFwiMFwiICsgKG5ldyBEYXRlKHRva2VuSnNUaW1lKS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTsgLy/sm5QgMuyekOumrCAoMDEsIDAyIC4uLiAxMilcbiAgICB2YXIgZGF5ID0gKFwiMFwiICsgbmV3IERhdGUodG9rZW5Kc1RpbWUpLmdldERhdGUoKSkuc2xpY2UoLTIpOyAvL+ydvCAy7J6Q66asICgwMSwgMDIgLi4uIDMxKVxuICAgIHZhciBob3VyID0gKFwiMFwiICsgbmV3IERhdGUodG9rZW5Kc1RpbWUpLmdldEhvdXJzKCkpLnNsaWNlKC0yKTsgLy/si5wgMuyekOumrCAoMDAsIDAxIC4uLiAyMylcbiAgICB2YXIgbWludXRlID0gKFwiMFwiICsgbmV3IERhdGUodG9rZW5Kc1RpbWUpLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpOyAvL+u2hCAy7J6Q66asICgwMCwgMDEgLi4uIDU5KVxuICAgIHZhciBzZWNvbmQgPSAoXCIwXCIgKyBuZXcgRGF0ZSh0b2tlbkpzVGltZSkuZ2V0U2Vjb25kcygpKS5zbGljZSgtMik7IC8v7LSIIDLsnpDrpqwgKDAwLCAwMSAuLi4gNTkpXG4gICAgc2V0ZGF0ZShkYXkpO1xuICAgIHNldGhvdXJzKGhvdXIpO1xuICAgIHNldG1pbnV0ZXMobWludXRlKTtcbiAgICBzZXRzZWNvbmRzKHNlY29uZCk7XG4gIH1cbiAgXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcblxuICB9XG5cblxuICAvLyDrk7HroZ3tlZjripQg6rOz7JeQ7IScIOyEoO2Dne2VnCDrgqDsp5zroZwg67aI65+s7JmA7JW87ZWoLCDsp4DquIjsnYAg7J6E7J2Y66GcIOuRkOqzoCDsnpHsl4VcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKFwiMjAyMy0wMS0zMCAxNToyMDoxMFwiKTtcblxuXG4gIHJldHVybiAoXG4gICAgPE1haW5Db250YWluZXI+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnRlbnRXcmFwPlxuICAgICAgICAgIDxoMT7tiKztkZwg7KCc66qpPC9oMT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzVGltZU92ZXIgPyAoXG4gICAgICAgICAgICAgIDxoMj7tiKztkZzquLDqsITsnbQg7KKF66OM65CY7JeI7Iq164uI64ukPC9oMj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUaW1lciBpc1RpbWVPdmVyPXtpc1RpbWVPdmVyfT5cbiAgICAgICAgICAgICAgICB7ZGF0ZX3snbwge2hvdXJzfeyLnOqwhCB7bWludXRlc33rtoQge3NlY29uZHN97LSIIOq5jOyngFxuICAgICAgICAgICAgICA8L1RpbWVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PuyVqOuylOyVhO2KuCDrs4Dqsr3tlZjqs6Ag7Iu27Ja07JqUIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnRuPuywrOyEsTwvQnRuPlxuICAgICAgICAgICAgPEJ0bj7rsJjrjIA8L0J0bj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250ZW50V3JhcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L01haW5Db250YWluZXI+XG4gICk7XG59O1xuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ncmlkTGF5b3V0Lm1haW5HcmlkfTtcbmA7XG4vLyDtiKztkZwg7JWI6rG0IOygleuztCDrs7Tsl6zso7zripQg67aA67aEXG5jb25zdCBDb250ZW50V3JhcCA9IHN0eWxlZC5kaXZgXG4gICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hbGlnbi5mbGV4U3RhcnR9O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgLy8g7KKF66OM6rmM7KeAfiDslYzroKTso7zripQg66y46rWsXG4gID4gOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cbiAgLy8g7Ja065akIOuCtOyaqeyXkCDrjIDtlZwg7Yis7ZGc7J247KeAIOyEpOuqhSDsnojripQg7LC9XG4gID4gOm50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDgwcmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgfVxuICA+IDpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogODByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuYDtcbi8vIOuyhO2KvFxuY29uc3QgQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgbWFyZ2luOiAxcmVtIDA7XG4gICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5idXR0b24uYmFzaWNCdG59O1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogNHJlbTtcbmA7XG4vLyDrjJPquIAg7KCE7LK067CV7IqkXG5jb25zdCBSZXBseVdyYXAgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiA0cmVtIDA7XG5gO1xuY29uc3QgV3JpdGVSZXBseSA9IHN0eWxlZC5kaXZgXG4gICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hbGlnbi5mbGV4Q2VudGVyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgd2lkdGg6IDgwcmVtO1xuICA+IGlucHV0IHtcbiAgICB3aWR0aDogNzByZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcbiAgfVxuICA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbiAgfVxuYDtcbmNvbnN0IFNob3dSZXBseSA9IHN0eWxlZC51bGBcbiAgd2lkdGg6IDgwcmVtO1xuICA+IDpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG4gID4gOmxhc3QtY2hpbGQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG5gO1xuY29uc3QgVGltZXIgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG5gO1xuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJDb3VudERvd24iLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsIkRldGFpbCIsInBhcmFtcyIsIkR0b2tlbiIsInN0YXRlIiwidXNlciIsImNvbnRyYWN0cyIsInRva2VuVGltZSIsInNldFRva2VuVGltZSIsImlzVGltZU92ZXIiLCJzZXRJc1RpbWVPdmVyIiwiZGF0ZSIsInNldGRhdGUiLCJob3VycyIsInNldGhvdXJzIiwibWludXRlcyIsInNldG1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0c2Vjb25kcyIsImNvdW50Iiwic2V0Y291bnQiLCJlbmRUaW1lIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidG9rZW5JZCIsImdldFZvdGluZ0RhdGUiLCJwYXJzZUludCIsImlkIiwidGltZSIsInRva2VuSnNUaW1lIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwic2xpY2UiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwic3VibWl0IiwiZW5kRGF0ZSIsIk1haW5Db250YWluZXIiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZ3JpZExheW91dCIsIm1haW5HcmlkIiwiQ29udGVudFdyYXAiLCJhbGlnbiIsImZsZXhTdGFydCIsIkJ0biIsImJ1dHRvbiIsImJhc2ljQnRuIiwiUmVwbHlXcmFwIiwiV3JpdGVSZXBseSIsImZsZXhDZW50ZXIiLCJTaG93UmVwbHkiLCJ1bCIsIlRpbWVyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/governance/[id].js\n"));

/***/ })

});