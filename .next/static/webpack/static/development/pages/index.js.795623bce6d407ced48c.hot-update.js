webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_franchise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/franchise */ "./data/franchise.json");
var _data_franchise__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/franchise */ "./data/franchise.json", 1);
/* harmony import */ var _data_TeamColors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/TeamColors */ "./data/TeamColors.json");
var _data_TeamColors__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/TeamColors */ "./data/TeamColors.json", 1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/stefka1210/theLab/nextOne/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var TeamList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__TeamList",
  componentId: "sc-1h0jejb-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));grid-template-rows:repeat(auto-fit,minmax(240px,1fr));gap:20px;"]);
var FranLogo = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "pages__FranLogo",
  componentId: "sc-1h0jejb-1"
})(["margin-top:8px;height:80px;transform:scale(1);transition:transform 300ms ease-in-out;svg{height:100%;}"]);
var LocName = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__LocName",
  componentId: "sc-1h0jejb-2"
})(["font-size:14px;font-size:1.1rem;letter-spacing:0em;transition:letter-spacing 300ms ease-in-out;"]);
var NickName = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__NickName",
  componentId: "sc-1h0jejb-3"
})(["font-size:1.6rem;letter-spacing:0em;transition:letter-spacing 300ms ease-in-out;"]);
var ColorsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__ColorsContainer",
  componentId: "sc-1h0jejb-4"
})(["display:flex;align-items:center;justify-content:center;margin-top:12px;height:14px;width:40px;"]);
var Color = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__Color",
  componentId: "sc-1h0jejb-5"
})(["height:100%;flex:1 1 1px;background:", ";"], function (props) {
  return props.teamColor || 'palevioletred';
});
var Team = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__Team",
  componentId: "sc-1h0jejb-6"
})(["display:flex;align-items:center;justify-content:center;position:relative;width:240px;height:240px;background:#cccccc;cursor:pointer;&:hover{background:#414141;color:white;", "{transform:scale(1.2);transition:transform 300ms ease-in-out;}", "{letter-spacing:0.08em;transition:letter-spacing 300ms ease-in-out;}", "{letter-spacing:0.08em;transition:letter-spacing 300ms ease-in-out;}}"], FranLogo, LocName, NickName);
var ATag = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].a.withConfig({
  displayName: "pages__ATag",
  componentId: "sc-1h0jejb-7"
})(["display:flex;flex-direction:column;align-items:center;font-weight:700;text-align:center;padding:8px;text-transform:uppercase;"]);
var TeamId = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__TeamId",
  componentId: "sc-1h0jejb-8"
})(["font-size:1rem;"]);

var getTeamLogo = function getTeamLogo(_short) {
  var teamId = _data_franchise__WEBPACK_IMPORTED_MODULE_5__.teams.find(function (x) {
    return x.abbreviation === "".concat(_short);
  }).id;

  var shortUpped = _short.toUpperCase();

  var logoFileName = "".concat(teamId, "_").concat(shortUpped, ".svg");
  return logoFileName;
};

var getTeamColor = function getTeamColor(teamId, colorType) {
  var teamObj = _data_TeamColors__WEBPACK_IMPORTED_MODULE_6__.find(function (x) {
    return x.id === teamId;
  });

  if (colorType == 'dark') {
    return teamObj.hexDark;
  } else {
    return teamObj.hexBright;
  }
};

var Index = function Index(props) {
  console.log(props);
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "NHL Teams"), __jsx(TeamList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, props.teams.map(function (team) {
    return __jsx(Team, {
      key: team.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(team.teamName),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(ATag, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx(TeamId, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, team.id, " - ", team.abbreviation), __jsx(LocName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, team.locationName), __jsx(NickName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, team.teamName), __jsx(FranLogo, {
      src: "/logos/".concat(getTeamLogo(team.abbreviation)),
      alt: "franlogo_".concat(team.abbreviation),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), __jsx(ColorsContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(Color, {
      teamColor: getTeamColor(team.id, 'bright'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), __jsx(Color, {
      teamColor: getTeamColor(team.id, 'dark'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })))));
  })));
};

Index.getInitialProps = function _callee() {
  var data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
          // const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
          // const data = await res.json();
          data = _data_franchise__WEBPACK_IMPORTED_MODULE_5__;
          console.log("team data fetched. Count: ".concat(data.teams));
          return _context.abrupt("return", {
            teams: data.teams
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.795623bce6d407ced48c.hot-update.js.map