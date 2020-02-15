module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stefka1210/theLab/nextOne/components/Clock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Clock__Container",
  componentId: "sc-1o7ap0w-0"
})(["font-size:0.8rem;font-weight:700;"]);
const Time = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Clock__Time",
  componentId: "sc-1o7ap0w-1"
})(["display:flex;align-items:center;justify-content:center;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Clock__Label",
  componentId: "sc-1o7ap0w-2"
})(["text-align:left;font-size:0.6rem;margin-right:0.6em;"]);
const Value = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Clock__Value",
  componentId: "sc-1o7ap0w-3"
})(["text-align:right;"]);

class Clock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const {
      time
    } = this.state;
    const options = {
      // month: '2-digit',
      // day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const easternOptions = options;
    const local = new Intl.DateTimeFormat('de-DE', options).format(time);
    easternOptions.timeZone = 'America/New_York';
    const eastern = new Intl.DateTimeFormat('de-DE', easternOptions).format(time);
    return __jsx(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(Time, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "LOC"), __jsx(Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, local)), __jsx(Time, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "EST"), __jsx(Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, eastern)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Clock);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Clock */ "./components/Clock.js");
var _jsxFileName = "/Users/stefka1210/theLab/nextOne/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ATag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Header__ATag",
  componentId: "sc-15ikbb6-0"
})(["text-transform:uppercase;text-decoration:none;margin-right:60px;color:#4a4a4a;font-weight:600;cursor:pointer;&:hover{color:#1a1a1a;}"]);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-15ikbb6-1"
})(["display:flex;padding:0px;"]);
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__Navigation",
  componentId: "sc-15ikbb6-2"
})(["display:block;flex:1 1 1px;"]);
const TimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__TimeContainer",
  componentId: "sc-15ikbb6-3"
})(["display:block;"]);

const Header = () => __jsx(HeaderContainer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(Navigation, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  passHref: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(ATag, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/schedules",
  passHref: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(ATag, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Schedules")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  passHref: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx(ATag, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "About"))), __jsx(TimeContainer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx(_components_Clock__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/stefka1210/theLab/nextOne/components/MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const PageLayout = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "MyLayout__PageLayout",
  componentId: "sc-1faz02d-0"
})(["font-family:'Roboto Condensed',sans-serif;width:1596px;width:calc(100vw - 80px);padding:40px;"]);

const Layout = props => __jsx(PageLayout, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4294675624",
  __self: undefined
}, "body,html{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVma2ExMjEwL3RoZUxhYi9uZXh0T25lL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzJCLEFBSTBCLFNBQ0MsVUFDRywwRUFDTSw2RkFDSSxtR0FDTixpQkFDckIiLCJmaWxlIjoiL1VzZXJzL3N0ZWZrYTEyMTAvdGhlTGFiL25leHRPbmUvY29tcG9uZW50cy9NeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFBhZ2VMYXlvdXQgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDE1OTZweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG5gO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gICAgPFBhZ2VMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFnZUxheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/stefka1210/theLab/nextOne/components/MyLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./data/TeamColors.json":
/*!******************************!*\
  !*** ./data/TeamColors.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"abbreviation\":\"NJD\",\"hexFirst\":\"#cf152a\",\"hexSecond\":\"#1a1a1a\"},{\"id\":2,\"abbreviation\":\"NYI\",\"hexFirst\":\"#0f4294\",\"hexSecond\":\"#e65c17\"},{\"id\":3,\"abbreviation\":\"NYR\",\"hexFirst\":\"#1143AD\",\"hexSecond\":\"#CE1127\"},{\"id\":4,\"abbreviation\":\"PHI\",\"hexFirst\":\"#e65117\",\"hexSecond\":\"#1a1a1a\"},{\"id\":5,\"abbreviation\":\"PIT\",\"hexFirst\":\"#f5b51e\",\"hexSecond\":\"#1a1a1a\"},{\"id\":6,\"abbreviation\":\"BOS\",\"hexFirst\":\"#1a1a1a\",\"hexSecond\":\"#e6a817\"},{\"id\":7,\"abbreviation\":\"BUF\",\"hexFirst\":\"#082a54\",\"hexSecond\":\"#e6a817\"},{\"id\":8,\"abbreviation\":\"MTL\",\"hexFirst\":\"#af1e2d\",\"hexSecond\":\"#192168\"},{\"id\":9,\"abbreviation\":\"OTT\",\"hexFirst\":\"#cf152a\",\"hexSecond\":\"#1a1a1a\"},{\"id\":10,\"abbreviation\":\"TOR\",\"hexFirst\":\"#0a2f69\",\"hexSecond\":\"#0a2f69\"},{\"id\":12,\"abbreviation\":\"CAR\",\"hexFirst\":\"#E51939\",\"hexSecond\":\"#1a1a1a\"},{\"id\":13,\"abbreviation\":\"FLA\",\"hexFirst\":\"#cf152a\",\"hexSecond\":\"#082A54\"},{\"id\":14,\"abbreviation\":\"TBL\",\"hexFirst\":\"#0a2f69\",\"hexSecond\":\"#1a1a1a\"},{\"id\":15,\"abbreviation\":\"WSH\",\"hexFirst\":\"#cf152a\",\"hexSecond\":\"#041E41\"},{\"id\":16,\"abbreviation\":\"CHI\",\"hexFirst\":\"#cf152a\",\"hexSecond\":\"#1a1a1a\"},{\"id\":17,\"abbreviation\":\"DET\",\"hexFirst\":\"#cf152a\",\"hexSecond\":\"#cf152a\"},{\"id\":18,\"abbreviation\":\"NSH\",\"hexFirst\":\"#e6a817\",\"hexSecond\":\"#082a54\"},{\"id\":19,\"abbreviation\":\"STL\",\"hexFirst\":\"#082a54\",\"hexSecond\":\"#FCB514\"},{\"id\":20,\"abbreviation\":\"CGY\",\"hexFirst\":\"#CE1126\",\"hexSecond\":\"#F3BC52\"},{\"id\":21,\"abbreviation\":\"COL\",\"hexFirst\":\"#6F263D\",\"hexSecond\":\"#236192\"},{\"id\":22,\"abbreviation\":\"EDM\",\"hexFirst\":\"#FF4C00\",\"hexSecond\":\"#041E41\"},{\"id\":23,\"abbreviation\":\"VAN\",\"hexFirst\":\"#002D55\",\"hexSecond\":\"#008852\"},{\"id\":24,\"abbreviation\":\"ANA\",\"hexFirst\":\"#1a1a1a\",\"hexSecond\":\"#F95602\"},{\"id\":25,\"abbreviation\":\"DAL\",\"hexFirst\":\"#00684D\",\"hexSecond\":\"#1a1a1a\"},{\"id\":26,\"abbreviation\":\"LAK\",\"hexFirst\":\"#1a1a1a\",\"hexSecond\":\"#A2AAAD\"},{\"id\":28,\"abbreviation\":\"SJS\",\"hexFirst\":\"#006D75\",\"hexSecond\":\"#EA7200\"},{\"id\":29,\"abbreviation\":\"CBJ\",\"hexFirst\":\"#002654\",\"hexSecond\":\"#CE1126\"},{\"id\":30,\"abbreviation\":\"MIN\",\"hexFirst\":\"#024930\",\"hexSecond\":\"#AF1E29\"},{\"id\":52,\"abbreviation\":\"WPG\",\"hexFirst\":\"#041E41\",\"hexSecond\":\"#0060A5\"},{\"id\":53,\"abbreviation\":\"ARI\",\"hexFirst\":\"#8C2633\",\"hexSecond\":\"#1a1a1a\"},{\"id\":54,\"abbreviation\":\"VKG\",\"hexFirst\":\"#333F42\",\"hexSecond\":\"#B4975A\"}]");

/***/ }),

/***/ "./data/franchise.json":
/*!*****************************!*\
  !*** ./data/franchise.json ***!
  \*****************************/
/*! exports provided: copyright, teams, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"copyright\":\"NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2020. All Rights Reserved.\",\"teams\":[{\"id\":1,\"name\":\"New Jersey Devils\",\"link\":\"/api/v1/teams/1\",\"venue\":{\"name\":\"Prudential Center\",\"link\":\"/api/v1/venues/null\",\"city\":\"Newark\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"NJD\",\"teamName\":\"Devils\",\"locationName\":\"New Jersey\",\"firstYearOfPlay\":\"1982\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":23,\"teamName\":\"Devils\",\"link\":\"/api/v1/franchises/23\"},\"shortName\":\"New Jersey\",\"officialSiteUrl\":\"http://www.newjerseydevils.com/\",\"franchiseId\":23,\"active\":true},{\"id\":2,\"name\":\"New York Islanders\",\"link\":\"/api/v1/teams/2\",\"venue\":{\"id\":5026,\"name\":\"Barclays Center\",\"link\":\"/api/v1/venues/5026\",\"city\":\"Brooklyn\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"NYI\",\"teamName\":\"Islanders\",\"locationName\":\"New York\",\"firstYearOfPlay\":\"1972\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":22,\"teamName\":\"Islanders\",\"link\":\"/api/v1/franchises/22\"},\"shortName\":\"NY Islanders\",\"officialSiteUrl\":\"http://www.newyorkislanders.com/\",\"franchiseId\":22,\"active\":true},{\"id\":3,\"name\":\"New York Rangers\",\"link\":\"/api/v1/teams/3\",\"venue\":{\"id\":5054,\"name\":\"Madison Square Garden\",\"link\":\"/api/v1/venues/5054\",\"city\":\"New York\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"NYR\",\"teamName\":\"Rangers\",\"locationName\":\"New York\",\"firstYearOfPlay\":\"1926\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":10,\"teamName\":\"Rangers\",\"link\":\"/api/v1/franchises/10\"},\"shortName\":\"NY Rangers\",\"officialSiteUrl\":\"http://www.newyorkrangers.com/\",\"franchiseId\":10,\"active\":true},{\"id\":4,\"name\":\"Philadelphia Flyers\",\"link\":\"/api/v1/teams/4\",\"venue\":{\"id\":5096,\"name\":\"Wells Fargo Center\",\"link\":\"/api/v1/venues/5096\",\"city\":\"Philadelphia\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"PHI\",\"teamName\":\"Flyers\",\"locationName\":\"Philadelphia\",\"firstYearOfPlay\":\"1967\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":16,\"teamName\":\"Flyers\",\"link\":\"/api/v1/franchises/16\"},\"shortName\":\"Philadelphia\",\"officialSiteUrl\":\"http://www.philadelphiaflyers.com/\",\"franchiseId\":16,\"active\":true},{\"id\":5,\"name\":\"Pittsburgh Penguins\",\"link\":\"/api/v1/teams/5\",\"venue\":{\"id\":5034,\"name\":\"PPG Paints Arena\",\"link\":\"/api/v1/venues/5034\",\"city\":\"Pittsburgh\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"PIT\",\"teamName\":\"Penguins\",\"locationName\":\"Pittsburgh\",\"firstYearOfPlay\":\"1967\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":17,\"teamName\":\"Penguins\",\"link\":\"/api/v1/franchises/17\"},\"shortName\":\"Pittsburgh\",\"officialSiteUrl\":\"http://pittsburghpenguins.com/\",\"franchiseId\":17,\"active\":true},{\"id\":6,\"name\":\"Boston Bruins\",\"link\":\"/api/v1/teams/6\",\"venue\":{\"id\":5085,\"name\":\"TD Garden\",\"link\":\"/api/v1/venues/5085\",\"city\":\"Boston\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"BOS\",\"teamName\":\"Bruins\",\"locationName\":\"Boston\",\"firstYearOfPlay\":\"1924\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":6,\"teamName\":\"Bruins\",\"link\":\"/api/v1/franchises/6\"},\"shortName\":\"Boston\",\"officialSiteUrl\":\"http://www.bostonbruins.com/\",\"franchiseId\":6,\"active\":true},{\"id\":7,\"name\":\"Buffalo Sabres\",\"link\":\"/api/v1/teams/7\",\"venue\":{\"id\":5039,\"name\":\"KeyBank Center\",\"link\":\"/api/v1/venues/5039\",\"city\":\"Buffalo\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"BUF\",\"teamName\":\"Sabres\",\"locationName\":\"Buffalo\",\"firstYearOfPlay\":\"1970\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":19,\"teamName\":\"Sabres\",\"link\":\"/api/v1/franchises/19\"},\"shortName\":\"Buffalo\",\"officialSiteUrl\":\"http://www.sabres.com/\",\"franchiseId\":19,\"active\":true},{\"id\":8,\"name\":\"Montréal Canadiens\",\"link\":\"/api/v1/teams/8\",\"venue\":{\"id\":5028,\"name\":\"Bell Centre\",\"link\":\"/api/v1/venues/5028\",\"city\":\"Montréal\",\"timeZone\":{\"id\":\"America/Montreal\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"MTL\",\"teamName\":\"Canadiens\",\"locationName\":\"Montréal\",\"firstYearOfPlay\":\"1909\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":1,\"teamName\":\"Canadiens\",\"link\":\"/api/v1/franchises/1\"},\"shortName\":\"Montréal\",\"officialSiteUrl\":\"http://www.canadiens.com/\",\"franchiseId\":1,\"active\":true},{\"id\":9,\"name\":\"Ottawa Senators\",\"link\":\"/api/v1/teams/9\",\"venue\":{\"id\":5031,\"name\":\"Canadian Tire Centre\",\"link\":\"/api/v1/venues/5031\",\"city\":\"Ottawa\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"OTT\",\"teamName\":\"Senators\",\"locationName\":\"Ottawa\",\"firstYearOfPlay\":\"1990\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":30,\"teamName\":\"Senators\",\"link\":\"/api/v1/franchises/30\"},\"shortName\":\"Ottawa\",\"officialSiteUrl\":\"http://www.ottawasenators.com/\",\"franchiseId\":30,\"active\":true},{\"id\":10,\"name\":\"Toronto Maple Leafs\",\"link\":\"/api/v1/teams/10\",\"venue\":{\"name\":\"Scotiabank Arena\",\"link\":\"/api/v1/venues/null\",\"city\":\"Toronto\",\"timeZone\":{\"id\":\"America/Toronto\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"TOR\",\"teamName\":\"Maple Leafs\",\"locationName\":\"Toronto\",\"firstYearOfPlay\":\"1917\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":5,\"teamName\":\"Maple Leafs\",\"link\":\"/api/v1/franchises/5\"},\"shortName\":\"Toronto\",\"officialSiteUrl\":\"http://www.mapleleafs.com/\",\"franchiseId\":5,\"active\":true},{\"id\":12,\"name\":\"Carolina Hurricanes\",\"link\":\"/api/v1/teams/12\",\"venue\":{\"id\":5066,\"name\":\"PNC Arena\",\"link\":\"/api/v1/venues/5066\",\"city\":\"Raleigh\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"CAR\",\"teamName\":\"Hurricanes\",\"locationName\":\"Carolina\",\"firstYearOfPlay\":\"1979\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":26,\"teamName\":\"Hurricanes\",\"link\":\"/api/v1/franchises/26\"},\"shortName\":\"Carolina\",\"officialSiteUrl\":\"http://www.carolinahurricanes.com/\",\"franchiseId\":26,\"active\":true},{\"id\":13,\"name\":\"Florida Panthers\",\"link\":\"/api/v1/teams/13\",\"venue\":{\"id\":5027,\"name\":\"BB&T Center\",\"link\":\"/api/v1/venues/5027\",\"city\":\"Sunrise\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"FLA\",\"teamName\":\"Panthers\",\"locationName\":\"Florida\",\"firstYearOfPlay\":\"1993\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":33,\"teamName\":\"Panthers\",\"link\":\"/api/v1/franchises/33\"},\"shortName\":\"Florida\",\"officialSiteUrl\":\"http://www.floridapanthers.com/\",\"franchiseId\":33,\"active\":true},{\"id\":14,\"name\":\"Tampa Bay Lightning\",\"link\":\"/api/v1/teams/14\",\"venue\":{\"name\":\"AMALIE Arena\",\"link\":\"/api/v1/venues/null\",\"city\":\"Tampa\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"TBL\",\"teamName\":\"Lightning\",\"locationName\":\"Tampa Bay\",\"firstYearOfPlay\":\"1991\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":31,\"teamName\":\"Lightning\",\"link\":\"/api/v1/franchises/31\"},\"shortName\":\"Tampa Bay\",\"officialSiteUrl\":\"http://www.tampabaylightning.com/\",\"franchiseId\":31,\"active\":true},{\"id\":15,\"name\":\"Washington Capitals\",\"link\":\"/api/v1/teams/15\",\"venue\":{\"id\":5094,\"name\":\"Capital One Arena\",\"link\":\"/api/v1/venues/5094\",\"city\":\"Washington\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"WSH\",\"teamName\":\"Capitals\",\"locationName\":\"Washington\",\"firstYearOfPlay\":\"1974\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":24,\"teamName\":\"Capitals\",\"link\":\"/api/v1/franchises/24\"},\"shortName\":\"Washington\",\"officialSiteUrl\":\"http://www.washingtoncapitals.com/\",\"franchiseId\":24,\"active\":true},{\"id\":16,\"name\":\"Chicago Blackhawks\",\"link\":\"/api/v1/teams/16\",\"venue\":{\"id\":5092,\"name\":\"United Center\",\"link\":\"/api/v1/venues/5092\",\"city\":\"Chicago\",\"timeZone\":{\"id\":\"America/Chicago\",\"offset\":-6,\"tz\":\"CST\"}},\"abbreviation\":\"CHI\",\"teamName\":\"Blackhawks\",\"locationName\":\"Chicago\",\"firstYearOfPlay\":\"1926\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":11,\"teamName\":\"Blackhawks\",\"link\":\"/api/v1/franchises/11\"},\"shortName\":\"Chicago\",\"officialSiteUrl\":\"http://www.chicagoblackhawks.com/\",\"franchiseId\":11,\"active\":true},{\"id\":17,\"name\":\"Detroit Red Wings\",\"link\":\"/api/v1/teams/17\",\"venue\":{\"id\":5145,\"name\":\"Little Caesars Arena\",\"link\":\"/api/v1/venues/5145\",\"city\":\"Detroit\",\"timeZone\":{\"id\":\"America/Detroit\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"DET\",\"teamName\":\"Red Wings\",\"locationName\":\"Detroit\",\"firstYearOfPlay\":\"1926\",\"division\":{\"id\":17,\"name\":\"Atlantic\",\"nameShort\":\"ATL\",\"link\":\"/api/v1/divisions/17\",\"abbreviation\":\"A\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":12,\"teamName\":\"Red Wings\",\"link\":\"/api/v1/franchises/12\"},\"shortName\":\"Detroit\",\"officialSiteUrl\":\"http://www.detroitredwings.com/\",\"franchiseId\":12,\"active\":true},{\"id\":18,\"name\":\"Nashville Predators\",\"link\":\"/api/v1/teams/18\",\"venue\":{\"id\":5030,\"name\":\"Bridgestone Arena\",\"link\":\"/api/v1/venues/5030\",\"city\":\"Nashville\",\"timeZone\":{\"id\":\"America/Chicago\",\"offset\":-6,\"tz\":\"CST\"}},\"abbreviation\":\"NSH\",\"teamName\":\"Predators\",\"locationName\":\"Nashville\",\"firstYearOfPlay\":\"1997\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":34,\"teamName\":\"Predators\",\"link\":\"/api/v1/franchises/34\"},\"shortName\":\"Nashville\",\"officialSiteUrl\":\"http://www.nashvillepredators.com/\",\"franchiseId\":34,\"active\":true},{\"id\":19,\"name\":\"St. Louis Blues\",\"link\":\"/api/v1/teams/19\",\"venue\":{\"id\":5076,\"name\":\"Enterprise Center\",\"link\":\"/api/v1/venues/5076\",\"city\":\"St. Louis\",\"timeZone\":{\"id\":\"America/Chicago\",\"offset\":-6,\"tz\":\"CST\"}},\"abbreviation\":\"STL\",\"teamName\":\"Blues\",\"locationName\":\"St. Louis\",\"firstYearOfPlay\":\"1967\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":18,\"teamName\":\"Blues\",\"link\":\"/api/v1/franchises/18\"},\"shortName\":\"St Louis\",\"officialSiteUrl\":\"http://www.stlouisblues.com/\",\"franchiseId\":18,\"active\":true},{\"id\":20,\"name\":\"Calgary Flames\",\"link\":\"/api/v1/teams/20\",\"venue\":{\"id\":5075,\"name\":\"Scotiabank Saddledome\",\"link\":\"/api/v1/venues/5075\",\"city\":\"Calgary\",\"timeZone\":{\"id\":\"America/Denver\",\"offset\":-7,\"tz\":\"MST\"}},\"abbreviation\":\"CGY\",\"teamName\":\"Flames\",\"locationName\":\"Calgary\",\"firstYearOfPlay\":\"1980\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":21,\"teamName\":\"Flames\",\"link\":\"/api/v1/franchises/21\"},\"shortName\":\"Calgary\",\"officialSiteUrl\":\"http://www.calgaryflames.com/\",\"franchiseId\":21,\"active\":true},{\"id\":21,\"name\":\"Colorado Avalanche\",\"link\":\"/api/v1/teams/21\",\"venue\":{\"id\":5064,\"name\":\"Pepsi Center\",\"link\":\"/api/v1/venues/5064\",\"city\":\"Denver\",\"timeZone\":{\"id\":\"America/Denver\",\"offset\":-7,\"tz\":\"MST\"}},\"abbreviation\":\"COL\",\"teamName\":\"Avalanche\",\"locationName\":\"Colorado\",\"firstYearOfPlay\":\"1979\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":27,\"teamName\":\"Avalanche\",\"link\":\"/api/v1/franchises/27\"},\"shortName\":\"Colorado\",\"officialSiteUrl\":\"http://www.coloradoavalanche.com/\",\"franchiseId\":27,\"active\":true},{\"id\":22,\"name\":\"Edmonton Oilers\",\"link\":\"/api/v1/teams/22\",\"venue\":{\"id\":5100,\"name\":\"Rogers Place\",\"link\":\"/api/v1/venues/5100\",\"city\":\"Edmonton\",\"timeZone\":{\"id\":\"America/Edmonton\",\"offset\":-7,\"tz\":\"MST\"}},\"abbreviation\":\"EDM\",\"teamName\":\"Oilers\",\"locationName\":\"Edmonton\",\"firstYearOfPlay\":\"1979\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":25,\"teamName\":\"Oilers\",\"link\":\"/api/v1/franchises/25\"},\"shortName\":\"Edmonton\",\"officialSiteUrl\":\"http://www.edmontonoilers.com/\",\"franchiseId\":25,\"active\":true},{\"id\":23,\"name\":\"Vancouver Canucks\",\"link\":\"/api/v1/teams/23\",\"venue\":{\"id\":5073,\"name\":\"Rogers Arena\",\"link\":\"/api/v1/venues/5073\",\"city\":\"Vancouver\",\"timeZone\":{\"id\":\"America/Vancouver\",\"offset\":-8,\"tz\":\"PST\"}},\"abbreviation\":\"VAN\",\"teamName\":\"Canucks\",\"locationName\":\"Vancouver\",\"firstYearOfPlay\":\"1970\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":20,\"teamName\":\"Canucks\",\"link\":\"/api/v1/franchises/20\"},\"shortName\":\"Vancouver\",\"officialSiteUrl\":\"http://www.canucks.com/\",\"franchiseId\":20,\"active\":true},{\"id\":24,\"name\":\"Anaheim Ducks\",\"link\":\"/api/v1/teams/24\",\"venue\":{\"id\":5046,\"name\":\"Honda Center\",\"link\":\"/api/v1/venues/5046\",\"city\":\"Anaheim\",\"timeZone\":{\"id\":\"America/Los_Angeles\",\"offset\":-8,\"tz\":\"PST\"}},\"abbreviation\":\"ANA\",\"teamName\":\"Ducks\",\"locationName\":\"Anaheim\",\"firstYearOfPlay\":\"1993\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":32,\"teamName\":\"Ducks\",\"link\":\"/api/v1/franchises/32\"},\"shortName\":\"Anaheim\",\"officialSiteUrl\":\"http://www.anaheimducks.com/\",\"franchiseId\":32,\"active\":true},{\"id\":25,\"name\":\"Dallas Stars\",\"link\":\"/api/v1/teams/25\",\"venue\":{\"id\":5019,\"name\":\"American Airlines Center\",\"link\":\"/api/v1/venues/5019\",\"city\":\"Dallas\",\"timeZone\":{\"id\":\"America/Chicago\",\"offset\":-6,\"tz\":\"CST\"}},\"abbreviation\":\"DAL\",\"teamName\":\"Stars\",\"locationName\":\"Dallas\",\"firstYearOfPlay\":\"1967\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":15,\"teamName\":\"Stars\",\"link\":\"/api/v1/franchises/15\"},\"shortName\":\"Dallas\",\"officialSiteUrl\":\"http://www.dallasstars.com/\",\"franchiseId\":15,\"active\":true},{\"id\":26,\"name\":\"Los Angeles Kings\",\"link\":\"/api/v1/teams/26\",\"venue\":{\"id\":5081,\"name\":\"STAPLES Center\",\"link\":\"/api/v1/venues/5081\",\"city\":\"Los Angeles\",\"timeZone\":{\"id\":\"America/Los_Angeles\",\"offset\":-8,\"tz\":\"PST\"}},\"abbreviation\":\"LAK\",\"teamName\":\"Kings\",\"locationName\":\"Los Angeles\",\"firstYearOfPlay\":\"1967\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":14,\"teamName\":\"Kings\",\"link\":\"/api/v1/franchises/14\"},\"shortName\":\"Los Angeles\",\"officialSiteUrl\":\"http://www.lakings.com/\",\"franchiseId\":14,\"active\":true},{\"id\":28,\"name\":\"San Jose Sharks\",\"link\":\"/api/v1/teams/28\",\"venue\":{\"name\":\"SAP Center at San Jose\",\"link\":\"/api/v1/venues/null\",\"city\":\"San Jose\",\"timeZone\":{\"id\":\"America/Los_Angeles\",\"offset\":-8,\"tz\":\"PST\"}},\"abbreviation\":\"SJS\",\"teamName\":\"Sharks\",\"locationName\":\"San Jose\",\"firstYearOfPlay\":\"1990\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":29,\"teamName\":\"Sharks\",\"link\":\"/api/v1/franchises/29\"},\"shortName\":\"San Jose\",\"officialSiteUrl\":\"http://www.sjsharks.com/\",\"franchiseId\":29,\"active\":true},{\"id\":29,\"name\":\"Columbus Blue Jackets\",\"link\":\"/api/v1/teams/29\",\"venue\":{\"id\":5059,\"name\":\"Nationwide Arena\",\"link\":\"/api/v1/venues/5059\",\"city\":\"Columbus\",\"timeZone\":{\"id\":\"America/New_York\",\"offset\":-5,\"tz\":\"EST\"}},\"abbreviation\":\"CBJ\",\"teamName\":\"Blue Jackets\",\"locationName\":\"Columbus\",\"firstYearOfPlay\":\"1997\",\"division\":{\"id\":18,\"name\":\"Metropolitan\",\"nameShort\":\"Metro\",\"link\":\"/api/v1/divisions/18\",\"abbreviation\":\"M\"},\"conference\":{\"id\":6,\"name\":\"Eastern\",\"link\":\"/api/v1/conferences/6\"},\"franchise\":{\"franchiseId\":36,\"teamName\":\"Blue Jackets\",\"link\":\"/api/v1/franchises/36\"},\"shortName\":\"Columbus\",\"officialSiteUrl\":\"http://www.bluejackets.com/\",\"franchiseId\":36,\"active\":true},{\"id\":30,\"name\":\"Minnesota Wild\",\"link\":\"/api/v1/teams/30\",\"venue\":{\"id\":5098,\"name\":\"Xcel Energy Center\",\"link\":\"/api/v1/venues/5098\",\"city\":\"St. Paul\",\"timeZone\":{\"id\":\"America/Chicago\",\"offset\":-6,\"tz\":\"CST\"}},\"abbreviation\":\"MIN\",\"teamName\":\"Wild\",\"locationName\":\"Minnesota\",\"firstYearOfPlay\":\"1997\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":37,\"teamName\":\"Wild\",\"link\":\"/api/v1/franchises/37\"},\"shortName\":\"Minnesota\",\"officialSiteUrl\":\"http://www.wild.com/\",\"franchiseId\":37,\"active\":true},{\"id\":52,\"name\":\"Winnipeg Jets\",\"link\":\"/api/v1/teams/52\",\"venue\":{\"id\":5058,\"name\":\"Bell MTS Place\",\"link\":\"/api/v1/venues/5058\",\"city\":\"Winnipeg\",\"timeZone\":{\"id\":\"America/Winnipeg\",\"offset\":-6,\"tz\":\"CST\"}},\"abbreviation\":\"WPG\",\"teamName\":\"Jets\",\"locationName\":\"Winnipeg\",\"firstYearOfPlay\":\"2011\",\"division\":{\"id\":16,\"name\":\"Central\",\"nameShort\":\"CEN\",\"link\":\"/api/v1/divisions/16\",\"abbreviation\":\"C\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":35,\"teamName\":\"Jets\",\"link\":\"/api/v1/franchises/35\"},\"shortName\":\"Winnipeg\",\"officialSiteUrl\":\"http://winnipegjets.com/\",\"franchiseId\":35,\"active\":true},{\"id\":53,\"name\":\"Arizona Coyotes\",\"link\":\"/api/v1/teams/53\",\"venue\":{\"id\":5043,\"name\":\"Gila River Arena\",\"link\":\"/api/v1/venues/5043\",\"city\":\"Glendale\",\"timeZone\":{\"id\":\"America/Phoenix\",\"offset\":-7,\"tz\":\"MST\"}},\"abbreviation\":\"ARI\",\"teamName\":\"Coyotes\",\"locationName\":\"Arizona\",\"firstYearOfPlay\":\"1979\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":28,\"teamName\":\"Coyotes\",\"link\":\"/api/v1/franchises/28\"},\"shortName\":\"Arizona\",\"officialSiteUrl\":\"http://www.arizonacoyotes.com/\",\"franchiseId\":28,\"active\":true},{\"id\":54,\"name\":\"Vegas Golden Knights\",\"link\":\"/api/v1/teams/54\",\"venue\":{\"id\":5178,\"name\":\"T-Mobile Arena\",\"link\":\"/api/v1/venues/5178\",\"city\":\"Las Vegas\",\"timeZone\":{\"id\":\"America/Los_Angeles\",\"offset\":-8,\"tz\":\"PST\"}},\"abbreviation\":\"VGK\",\"teamName\":\"Golden Knights\",\"locationName\":\"Vegas\",\"firstYearOfPlay\":\"2016\",\"division\":{\"id\":15,\"name\":\"Pacific\",\"nameShort\":\"PAC\",\"link\":\"/api/v1/divisions/15\",\"abbreviation\":\"P\"},\"conference\":{\"id\":5,\"name\":\"Western\",\"link\":\"/api/v1/conferences/5\"},\"franchise\":{\"franchiseId\":38,\"teamName\":\"Golden Knights\",\"link\":\"/api/v1/franchises/38\"},\"shortName\":\"Vegas\",\"officialSiteUrl\":\"http://www.vegasgoldenknights.com/\",\"franchiseId\":38,\"active\":true}]}");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_franchise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/franchise */ "./data/franchise.json");
var _data_franchise__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/franchise */ "./data/franchise.json", 1);
/* harmony import */ var _data_TeamColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/TeamColors */ "./data/TeamColors.json");
var _data_TeamColors__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/TeamColors */ "./data/TeamColors.json", 1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/stefka1210/theLab/nextOne/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TeamList = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__TeamList",
  componentId: "sc-1h0jejb-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));grid-template-rows:repeat(auto-fit,minmax(240px,1fr));gap:20px;"]);
const FranLogo = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "pages__FranLogo",
  componentId: "sc-1h0jejb-1"
})(["margin-top:8px;height:80px;transform:scale(1);transition:transform 300ms ease-in-out;svg{height:100%;}"]);
const LocName = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__LocName",
  componentId: "sc-1h0jejb-2"
})(["font-size:14px;font-size:1.1rem;letter-spacing:0em;transition:letter-spacing 300ms ease-in-out;"]);
const NickName = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__NickName",
  componentId: "sc-1h0jejb-3"
})(["font-size:1.6rem;letter-spacing:0em;transition:letter-spacing 300ms ease-in-out;"]);
const ColorsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__ColorsContainer",
  componentId: "sc-1h0jejb-4"
})(["display:flex;align-items:center;justify-content:center;margin-top:12px;height:14px;width:40px;"]);
const Color = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__Color",
  componentId: "sc-1h0jejb-5"
})(["height:100%;flex:1 1 1px;background:", ";"], props => props.teamColor || 'palevioletred');
const Team = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__Team",
  componentId: "sc-1h0jejb-6"
})(["display:flex;align-items:center;justify-content:center;position:relative;width:240px;height:240px;background:#cccccc;cursor:pointer;&:hover{background:#414141;color:white;", "{transform:scale(1.2);transition:transform 300ms ease-in-out;}", "{letter-spacing:0.08em;transition:letter-spacing 300ms ease-in-out;}", "{letter-spacing:0.08em;transition:letter-spacing 300ms ease-in-out;}}"], FranLogo, LocName, NickName);
const ATag = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.a.withConfig({
  displayName: "pages__ATag",
  componentId: "sc-1h0jejb-7"
})(["display:flex;flex-direction:column;align-items:center;font-weight:700;text-align:center;padding:8px;text-transform:uppercase;text-decoration:none;color:inherit;"]);
const TeamId = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "pages__TeamId",
  componentId: "sc-1h0jejb-8"
})(["font-size:1rem;"]);

const getTeamLogo = short => {
  const teamId = _data_franchise__WEBPACK_IMPORTED_MODULE_4__.teams.find(x => x.abbreviation === `${short}`).id;
  const shortUpped = short.toUpperCase();
  const logoFileName = `${teamId}_${shortUpped}.svg`;
  return logoFileName;
};

const getTeamColor = (teamId, colorType) => {
  const teamObj = _data_TeamColors__WEBPACK_IMPORTED_MODULE_5__.find(x => x.id === teamId);

  if (colorType == 'second') {
    return teamObj.hexSecond;
  } else {
    return teamObj.hexFirst;
  }
};

const Index = props => {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "NHL Teams"), __jsx(TeamList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, props.teams.map(team => __jsx(Team, {
    key: team.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/[id]",
    as: `/p/${team.teamName}`,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(ATag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx(TeamId, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, team.id, " - ", team.abbreviation), __jsx(LocName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, team.locationName), __jsx(NickName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, team.teamName), __jsx(FranLogo, {
    src: `/logos/${getTeamLogo(team.abbreviation)}`,
    alt: `franlogo_${team.abbreviation}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), __jsx(ColorsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(Color, {
    teamColor: getTeamColor(team.id, 'first'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), __jsx(Color, {
    teamColor: getTeamColor(team.id, 'second'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }))))))));
};

Index.getInitialProps = async function () {
  // const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
  // const data = await res.json();
  const data = _data_franchise__WEBPACK_IMPORTED_MODULE_4__;
  return {
    teams: data.teams
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stefka1210/theLab/nextOne/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map