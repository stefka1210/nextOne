webpackHotUpdate("static/development/pages/schedules.js",{

/***/ "./pages/schedules.js":
/*!****************************!*\
  !*** ./pages/schedules.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/SeasonSchedule-20192020 */ "./data/SeasonSchedule-20192020.json");
var _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/SeasonSchedule-20192020 */ "./data/SeasonSchedule-20192020.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/stefka1210/theLab/nextOne/pages/schedules.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import fetch from 'isomorphic-unfetch';
// const SeasonSchedules = [
//     {id: 2019020001, est: '20191002 19:00:00', a: 'OTT', h: 'TOR'},
//     {id: 2019020002, est: '20191002 20:00:00', a: 'WSH', h: 'STL'},
//     {id: 2019020003, est: '20191002 22:00:00', a: 'VAN', h: 'EDM'},
//     {id: 2019020034, est: '20191007 19:00:00', a: 'STL', h: 'TOR'},
//     {id: 2019020035, est: '20191007 19:00:00', a: 'BUF', h: 'CBJ'},
//     {id: 2019020036, est: '20191008 19:00:00', a: 'CAR', h: 'FLA'}
// ];

var MatchList = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "schedules__MatchList",
  componentId: "sc-1f0vohs-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(480px,1fr));gap:30px;padding:20px 0px;"]);
var Match = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "schedules__Match",
  componentId: "sc-1f0vohs-1"
})(["width:480px;background:#ccc;height:240px;display:flex;align-items:center;justify-content:center;"]);
var ATag = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a.withConfig({
  displayName: "schedules__ATag",
  componentId: "sc-1f0vohs-2"
})(["display:flex;align-items:center;text-transform:none;"]);
var TeamName = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "schedules__TeamName",
  componentId: "sc-1f0vohs-3"
})(["font-size:2rem;font-weight:700;"]);
var Meta = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "schedules__Meta",
  componentId: "sc-1f0vohs-4"
})(["display:flex;font-size:1rem;padding:0px 30px;align-items:center;"]);

var Schedules = function Schedules(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "NHL Schedules"), __jsx(MatchList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, props.matches.map(function (match) {
    return __jsx(Match, {
      key: match.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(match.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(ATag, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(TeamName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, match.a), __jsx(Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "@"), __jsx(TeamName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, match.h))));
  })));
};

Schedules.getInitialProps = function _callee() {
  var data, searchDate, matchesOnDate;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_4__;
          searchDate = '20200212';
          matchesOnDate = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(data).filter(function (entry) {
            return entry.est.indexOf(searchDate) > -1;
          });
          console.log('matchesOnDate:' + matchesOnDate[0].a);
          return _context.abrupt("return", {
            matches: matchesOnDate
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Schedules);

/***/ })

})
//# sourceMappingURL=schedules.js.e6ec0cb81dc8f15d48b1.hot-update.js.map