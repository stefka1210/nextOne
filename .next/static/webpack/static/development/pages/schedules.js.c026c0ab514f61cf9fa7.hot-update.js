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
/* harmony import */ var _data_franchise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/franchise */ "./data/franchise.json");
var _data_franchise__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/franchise */ "./data/franchise.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/stefka1210/theLab/nextOne/pages/schedules.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var MatchList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "schedules__MatchList",
  componentId: "sc-1f0vohs-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;"]);
var FranLogo = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "schedules__FranLogo",
  componentId: "sc-1f0vohs-1"
})(["position:absolute;:first-child{left:0px;}:last-child{right:0px;}width:25%;height:25%;transform:scale(1);transition:transform 300ms ease-in-out;z-index:11;svg{height:100%;width:100%;}"]);
var Match = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "schedules__Match",
  componentId: "sc-1f0vohs-2"
})(["background:#ccc;height:240px;display:flex;align-items:center;justify-content:center;cursor:pointer;&:hover{background:#9a9a9a;color:white;", "{transform:scale(1.2);transition:transform 300ms ease-in-out;}}"], FranLogo);
var ATag = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "schedules__ATag",
  componentId: "sc-1f0vohs-3"
})(["position:relative;display:flex;align-items:center;justify-content:center;text-transform:none;color:inherit;text-decoration:none;width:100%;height:100%;"]);
var TeamName = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "schedules__TeamName",
  componentId: "sc-1f0vohs-4"
})(["font-size:2rem;font-weight:700;"]);
var Meta = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "schedules__Meta",
  componentId: "sc-1f0vohs-5"
})(["display:flex;font-size:1rem;padding:0px 30px;align-items:center;"]);

var getTeamLogo = function getTeamLogo(_short) {
  var teamId = _data_franchise__WEBPACK_IMPORTED_MODULE_5__.teams.find(function (x) {
    return x.abbreviation === "".concat(_short);
  }).id;

  var shortUpped = _short.toUpperCase();

  var logoFileName = "".concat(teamId, "_").concat(shortUpped, ".svg");
  return logoFileName;
};

var Schedules = function Schedules(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "NHL Schedules"), __jsx(MatchList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.matches.map(function (match) {
    return __jsx(Match, {
      key: match.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/match/[id]",
      as: "/match/".concat(match.id),
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(ATag, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(FranLogo, {
      src: "/logos/".concat(getTeamLogo(match.a)),
      alt: "img-franlogo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(TeamName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, match.a), __jsx(Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "@"), __jsx(TeamName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, match.h), __jsx(FranLogo, {
      src: "/logos/".concat(getTeamLogo(match.h)),
      alt: "img-franlogo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }))));
  })));
};

Schedules.getInitialProps = function _callee() {
  var data, time, options, easterndate, year, month, day, searchEasternDate, date, searchDate, matchesOnDate;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_4__; // search matches in eastern-time "Today"

          time = new Date();
          options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          };
          options.timeZone = 'America/New_York';
          easterndate = new Intl.DateTimeFormat('de-DE', options).format(time);
          console.log('easternSearchdate:::', easterndate);
          year = easterndate.slice(6, 10);
          month = easterndate.slice(3, 5);
          day = easterndate.slice(0, 2);
          searchEasternDate = year + month + day;
          console.log('easternSearchdate:::', searchEasternDate); /// END ---------------
          //ToDo: Eastern Standard Time

          date = new Date().toISOString();
          searchDate = date.substr(0, date.length - 14).replace(/\-/g, '');
          console.log('searchdate:', searchdate);
          matchesOnDate = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(data).filter(function (entry) {
            return entry.est.indexOf(searchDate) > -1;
          });
          return _context.abrupt("return", {
            matches: matchesOnDate
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Schedules);

/***/ })

})
//# sourceMappingURL=schedules.js.c026c0ab514f61cf9fa7.hot-update.js.map