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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./data/SeasonSchedule-20192020.json":
/*!*******************************************!*\
  !*** ./data/SeasonSchedule-20192020.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":2019020001,\"est\":\"20191002 19:00:00\",\"a\":\"OTT\",\"h\":\"TOR\"},{\"id\":2019020002,\"est\":\"20191002 20:00:00\",\"a\":\"WSH\",\"h\":\"STL\"},{\"id\":2019020003,\"est\":\"20191002 22:00:00\",\"a\":\"VAN\",\"h\":\"EDM\"},{\"id\":2019020004,\"est\":\"20191002 22:30:00\",\"a\":\"SJS\",\"h\":\"VGK\"},{\"id\":2019020005,\"est\":\"20191003 19:00:00\",\"a\":\"FLA\",\"h\":\"TBL\"},{\"id\":2019020006,\"est\":\"20191003 19:00:00\",\"a\":\"WPG\",\"h\":\"NYR\"},{\"id\":2019020007,\"est\":\"20191003 19:00:00\",\"a\":\"BUF\",\"h\":\"PIT\"},{\"id\":2019020008,\"est\":\"20191003 19:00:00\",\"a\":\"MTL\",\"h\":\"CAR\"},{\"id\":2019020009,\"est\":\"20191003 20:00:00\",\"a\":\"MIN\",\"h\":\"NSH\"},{\"id\":2019020010,\"est\":\"20191003 20:30:00\",\"a\":\"BOS\",\"h\":\"DAL\"},{\"id\":2019020011,\"est\":\"20191003 21:00:00\",\"a\":\"CGY\",\"h\":\"COL\"},{\"id\":2019020012,\"est\":\"20191003 22:00:00\",\"a\":\"ARI\",\"h\":\"ANA\"},{\"id\":2019020013,\"est\":\"20191004 19:00:00\",\"a\":\"WPG\",\"h\":\"NJD\"},{\"id\":2019020014,\"est\":\"20191004 19:00:00\",\"a\":\"WSH\",\"h\":\"NYI\"},{\"id\":2019020015,\"est\":\"20191004 19:00:00\",\"a\":\"TOR\",\"h\":\"CBJ\"},{\"id\":2019020016,\"est\":\"20191004 14:00:00\",\"a\":\"CHI\",\"h\":\"PHI\"},{\"id\":2019020017,\"est\":\"20191004 22:30:00\",\"a\":\"VGK\",\"h\":\"SJS\"},{\"id\":2019020018,\"est\":\"20191005 19:00:00\",\"a\":\"NJD\",\"h\":\"BUF\"},{\"id\":2019020019,\"est\":\"20191005 19:00:00\",\"a\":\"MTL\",\"h\":\"TOR\"},{\"id\":2019020020,\"est\":\"20191005 19:00:00\",\"a\":\"NYR\",\"h\":\"OTT\"},{\"id\":2019020021,\"est\":\"20191005 19:00:00\",\"a\":\"TBL\",\"h\":\"FLA\"},{\"id\":2019020022,\"est\":\"20191005 19:00:00\",\"a\":\"CBJ\",\"h\":\"PIT\"},{\"id\":2019020023,\"est\":\"20191005 19:00:00\",\"a\":\"CAR\",\"h\":\"WSH\"},{\"id\":2019020024,\"est\":\"20191005 20:00:00\",\"a\":\"DAL\",\"h\":\"STL\"},{\"id\":2019020025,\"est\":\"20191005 20:00:00\",\"a\":\"DET\",\"h\":\"NSH\"},{\"id\":2019020026,\"est\":\"20191005 21:00:00\",\"a\":\"MIN\",\"h\":\"COL\"},{\"id\":2019020027,\"est\":\"20191005 21:00:00\",\"a\":\"BOS\",\"h\":\"ARI\"},{\"id\":2019020028,\"est\":\"20191005 22:00:00\",\"a\":\"VAN\",\"h\":\"CGY\"},{\"id\":2019020029,\"est\":\"20191005 22:00:00\",\"a\":\"LAK\",\"h\":\"EDM\"},{\"id\":2019020030,\"est\":\"20191005 22:00:00\",\"a\":\"SJS\",\"h\":\"ANA\"},{\"id\":2019020031,\"est\":\"20191006 17:00:00\",\"a\":\"TBL\",\"h\":\"CAR\"},{\"id\":2019020032,\"est\":\"20191006 19:00:00\",\"a\":\"DAL\",\"h\":\"DET\"},{\"id\":2019020033,\"est\":\"20191006 19:00:00\",\"a\":\"WPG\",\"h\":\"NYI\"},{\"id\":2019020034,\"est\":\"20191007 19:00:00\",\"a\":\"STL\",\"h\":\"TOR\"},{\"id\":2019020035,\"est\":\"20191007 19:00:00\",\"a\":\"BUF\",\"h\":\"CBJ\"},{\"id\":2019020036,\"est\":\"20191008 19:00:00\",\"a\":\"CAR\",\"h\":\"FLA\"},{\"id\":2019020037,\"est\":\"20191008 19:00:00\",\"a\":\"EDM\",\"h\":\"NYI\"},{\"id\":2019020038,\"est\":\"20191008 19:00:00\",\"a\":\"WPG\",\"h\":\"PIT\"},{\"id\":2019020039,\"est\":\"20191008 19:00:00\",\"a\":\"DAL\",\"h\":\"WSH\"},{\"id\":2019020040,\"est\":\"20191008 19:30:00\",\"a\":\"ANA\",\"h\":\"DET\"},{\"id\":2019020041,\"est\":\"20191008 20:00:00\",\"a\":\"SJS\",\"h\":\"NSH\"},{\"id\":2019020042,\"est\":\"20191008 21:00:00\",\"a\":\"LAK\",\"h\":\"CGY\"},{\"id\":2019020043,\"est\":\"20191008 22:00:00\",\"a\":\"BOS\",\"h\":\"VGK\"},{\"id\":2019020044,\"est\":\"20191009 19:00:00\",\"a\":\"MTL\",\"h\":\"BUF\"},{\"id\":2019020045,\"est\":\"20191009 19:30:00\",\"a\":\"NJD\",\"h\":\"PHI\"},{\"id\":2019020046,\"est\":\"20191009 22:00:00\",\"a\":\"LAK\",\"h\":\"VAN\"},{\"id\":2019020047,\"est\":\"20191010 19:00:00\",\"a\":\"TBL\",\"h\":\"TOR\"},{\"id\":2019020048,\"est\":\"20191010 19:00:00\",\"a\":\"DET\",\"h\":\"MTL\"},{\"id\":2019020049,\"est\":\"20191010 19:00:00\",\"a\":\"EDM\",\"h\":\"NJD\"},{\"id\":2019020050,\"est\":\"20191010 19:00:00\",\"a\":\"ANA\",\"h\":\"PIT\"},{\"id\":2019020051,\"est\":\"20191010 19:30:00\",\"a\":\"STL\",\"h\":\"OTT\"},{\"id\":2019020052,\"est\":\"20191010 20:00:00\",\"a\":\"WSH\",\"h\":\"NSH\"},{\"id\":2019020053,\"est\":\"20191010 20:00:00\",\"a\":\"MIN\",\"h\":\"WPG\"},{\"id\":2019020054,\"est\":\"20191010 20:30:00\",\"a\":\"SJS\",\"h\":\"CHI\"},{\"id\":2019020055,\"est\":\"20191010 20:30:00\",\"a\":\"CGY\",\"h\":\"DAL\"},{\"id\":2019020056,\"est\":\"20191010 21:00:00\",\"a\":\"BOS\",\"h\":\"COL\"},{\"id\":2019020057,\"est\":\"20191010 22:00:00\",\"a\":\"VGK\",\"h\":\"ARI\"},{\"id\":2019020058,\"est\":\"20191011 19:00:00\",\"a\":\"FLA\",\"h\":\"BUF\"},{\"id\":2019020059,\"est\":\"20191011 19:00:00\",\"a\":\"ANA\",\"h\":\"CBJ\"},{\"id\":2019020060,\"est\":\"20191011 19:30:00\",\"a\":\"NYI\",\"h\":\"CAR\"},{\"id\":2019020061,\"est\":\"20191012 13:00:00\",\"a\":\"EDM\",\"h\":\"NYR\"},{\"id\":2019020062,\"est\":\"20191012 16:00:00\",\"a\":\"TBL\",\"h\":\"OTT\"},{\"id\":2019020063,\"est\":\"20191012 18:00:00\",\"a\":\"NSH\",\"h\":\"LAK\"},{\"id\":2019020064,\"est\":\"20191012 19:00:00\",\"a\":\"NJD\",\"h\":\"BOS\"},{\"id\":2019020065,\"est\":\"20191012 19:00:00\",\"a\":\"STL\",\"h\":\"MTL\"},{\"id\":2019020066,\"est\":\"20191012 19:00:00\",\"a\":\"TOR\",\"h\":\"DET\"},{\"id\":2019020067,\"est\":\"20191012 19:00:00\",\"a\":\"FLA\",\"h\":\"NYI\"},{\"id\":2019020068,\"est\":\"20191012 19:00:00\",\"a\":\"CBJ\",\"h\":\"CAR\"},{\"id\":2019020069,\"est\":\"20191012 19:00:00\",\"a\":\"WPG\",\"h\":\"CHI\"},{\"id\":2019020070,\"est\":\"20191012 20:00:00\",\"a\":\"WSH\",\"h\":\"DAL\"},{\"id\":2019020071,\"est\":\"20191012 20:30:00\",\"a\":\"PIT\",\"h\":\"MIN\"},{\"id\":2019020072,\"est\":\"20191012 21:00:00\",\"a\":\"ARI\",\"h\":\"COL\"},{\"id\":2019020073,\"est\":\"20191012 22:00:00\",\"a\":\"PHI\",\"h\":\"VAN\"},{\"id\":2019020074,\"est\":\"20191012 22:00:00\",\"a\":\"CGY\",\"h\":\"VGK\"},{\"id\":2019020075,\"est\":\"20191013 19:00:00\",\"a\":\"PIT\",\"h\":\"WPG\"},{\"id\":2019020076,\"est\":\"20191013 22:00:00\",\"a\":\"VGK\",\"h\":\"LAK\"},{\"id\":2019020077,\"est\":\"20191013 22:00:00\",\"a\":\"CGY\",\"h\":\"SJS\"},{\"id\":2019020078,\"est\":\"20191014 13:00:00\",\"a\":\"ANA\",\"h\":\"BOS\"},{\"id\":2019020079,\"est\":\"20191014 13:00:00\",\"a\":\"MIN\",\"h\":\"OTT\"},{\"id\":2019020080,\"est\":\"20191014 13:00:00\",\"a\":\"FLA\",\"h\":\"NJD\"},{\"id\":2019020081,\"est\":\"20191014 13:00:00\",\"a\":\"STL\",\"h\":\"NYI\"},{\"id\":2019020082,\"est\":\"20191014 15:00:00\",\"a\":\"DAL\",\"h\":\"BUF\"},{\"id\":2019020083,\"est\":\"20191014 17:00:00\",\"a\":\"COL\",\"h\":\"WSH\"},{\"id\":2019020084,\"est\":\"20191014 20:30:00\",\"a\":\"EDM\",\"h\":\"CHI\"},{\"id\":2019020085,\"est\":\"20191015 19:00:00\",\"a\":\"MIN\",\"h\":\"TOR\"},{\"id\":2019020086,\"est\":\"20191015 19:00:00\",\"a\":\"TBL\",\"h\":\"MTL\"},{\"id\":2019020087,\"est\":\"20191015 20:00:00\",\"a\":\"ARI\",\"h\":\"WPG\"},{\"id\":2019020088,\"est\":\"20191015 21:00:00\",\"a\":\"PHI\",\"h\":\"CGY\"},{\"id\":2019020089,\"est\":\"20191015 22:00:00\",\"a\":\"DET\",\"h\":\"VAN\"},{\"id\":2019020090,\"est\":\"20191015 22:00:00\",\"a\":\"NSH\",\"h\":\"VGK\"},{\"id\":2019020091,\"est\":\"20191015 22:30:00\",\"a\":\"CAR\",\"h\":\"LAK\"},{\"id\":2019020092,\"est\":\"20191016 19:00:00\",\"a\":\"COL\",\"h\":\"PIT\"},{\"id\":2019020093,\"est\":\"20191016 19:00:00\",\"a\":\"TOR\",\"h\":\"WSH\"},{\"id\":2019020094,\"est\":\"20191016 19:00:00\",\"a\":\"DAL\",\"h\":\"CBJ\"},{\"id\":2019020095,\"est\":\"20191016 21:30:00\",\"a\":\"PHI\",\"h\":\"EDM\"},{\"id\":2019020096,\"est\":\"20191016 22:00:00\",\"a\":\"BUF\",\"h\":\"ANA\"},{\"id\":2019020097,\"est\":\"20191016 22:30:00\",\"a\":\"CAR\",\"h\":\"SJS\"},{\"id\":2019020098,\"est\":\"20191017 19:00:00\",\"a\":\"TBL\",\"h\":\"BOS\"},{\"id\":2019020099,\"est\":\"20191017 19:00:00\",\"a\":\"MIN\",\"h\":\"MTL\"},{\"id\":2019020100,\"est\":\"20191017 19:00:00\",\"a\":\"NYR\",\"h\":\"NJD\"},{\"id\":2019020101,\"est\":\"20191017 20:00:00\",\"a\":\"VAN\",\"h\":\"STL\"},{\"id\":2019020102,\"est\":\"20191017 20:00:00\",\"a\":\"NYI\",\"h\":\"WPG\"},{\"id\":2019020103,\"est\":\"20191017 21:00:00\",\"a\":\"DET\",\"h\":\"CGY\"},{\"id\":2019020104,\"est\":\"20191017 22:00:00\",\"a\":\"NSH\",\"h\":\"ARI\"},{\"id\":2019020105,\"est\":\"20191017 22:00:00\",\"a\":\"OTT\",\"h\":\"VGK\"},{\"id\":2019020106,\"est\":\"20191017 22:30:00\",\"a\":\"BUF\",\"h\":\"LAK\"},{\"id\":2019020107,\"est\":\"20191018 19:00:00\",\"a\":\"COL\",\"h\":\"FLA\"},{\"id\":2019020108,\"est\":\"20191018 19:00:00\",\"a\":\"DAL\",\"h\":\"PIT\"},{\"id\":2019020109,\"est\":\"20191018 19:00:00\",\"a\":\"NYR\",\"h\":\"WSH\"},{\"id\":2019020110,\"est\":\"20191018 20:30:00\",\"a\":\"CBJ\",\"h\":\"CHI\"},{\"id\":2019020111,\"est\":\"20191018 21:00:00\",\"a\":\"DET\",\"h\":\"EDM\"},{\"id\":2019020112,\"est\":\"20191018 22:00:00\",\"a\":\"CAR\",\"h\":\"ANA\"},{\"id\":2019020113,\"est\":\"20191019 13:00:00\",\"a\":\"VAN\",\"h\":\"NJD\"},{\"id\":2019020114,\"est\":\"20191019 15:00:00\",\"a\":\"MTL\",\"h\":\"STL\"},{\"id\":2019020115,\"est\":\"20191019 19:00:00\",\"a\":\"BOS\",\"h\":\"TOR\"},{\"id\":2019020116,\"est\":\"20191019 19:00:00\",\"a\":\"COL\",\"h\":\"TBL\"},{\"id\":2019020117,\"est\":\"20191019 19:00:00\",\"a\":\"DAL\",\"h\":\"PHI\"},{\"id\":2019020118,\"est\":\"20191019 19:00:00\",\"a\":\"VGK\",\"h\":\"PIT\"},{\"id\":2019020119,\"est\":\"20191019 19:00:00\",\"a\":\"NYI\",\"h\":\"CBJ\"},{\"id\":2019020120,\"est\":\"20191019 19:00:00\",\"a\":\"OTT\",\"h\":\"ARI\"},{\"id\":2019020121,\"est\":\"20191019 20:00:00\",\"a\":\"FLA\",\"h\":\"NSH\"},{\"id\":2019020122,\"est\":\"20191019 22:00:00\",\"a\":\"CGY\",\"h\":\"LAK\"},{\"id\":2019020123,\"est\":\"20191019 22:30:00\",\"a\":\"BUF\",\"h\":\"SJS\"},{\"id\":2019020124,\"est\":\"20191020 13:00:00\",\"a\":\"VAN\",\"h\":\"NYR\"},{\"id\":2019020125,\"est\":\"20191020 17:00:00\",\"a\":\"MTL\",\"h\":\"MIN\"},{\"id\":2019020126,\"est\":\"20191020 19:00:00\",\"a\":\"WSH\",\"h\":\"CHI\"},{\"id\":2019020127,\"est\":\"20191020 19:00:00\",\"a\":\"EDM\",\"h\":\"WPG\"},{\"id\":2019020128,\"est\":\"20191020 21:00:00\",\"a\":\"CGY\",\"h\":\"ANA\"},{\"id\":2019020129,\"est\":\"20191021 19:00:00\",\"a\":\"CBJ\",\"h\":\"TOR\"},{\"id\":2019020130,\"est\":\"20191021 19:00:00\",\"a\":\"VGK\",\"h\":\"PHI\"},{\"id\":2019020131,\"est\":\"20191021 20:00:00\",\"a\":\"COL\",\"h\":\"STL\"},{\"id\":2019020132,\"est\":\"20191021 20:30:00\",\"a\":\"OTT\",\"h\":\"DAL\"},{\"id\":2019020133,\"est\":\"20191022 19:00:00\",\"a\":\"TOR\",\"h\":\"BOS\"},{\"id\":2019020134,\"est\":\"20191022 19:00:00\",\"a\":\"SJS\",\"h\":\"BUF\"},{\"id\":2019020135,\"est\":\"20191022 19:00:00\",\"a\":\"PIT\",\"h\":\"FLA\"},{\"id\":2019020136,\"est\":\"20191022 19:00:00\",\"a\":\"ARI\",\"h\":\"NYR\"},{\"id\":2019020137,\"est\":\"20191022 19:30:00\",\"a\":\"VAN\",\"h\":\"DET\"},{\"id\":2019020138,\"est\":\"20191022 20:00:00\",\"a\":\"ANA\",\"h\":\"NSH\"},{\"id\":2019020139,\"est\":\"20191022 20:00:00\",\"a\":\"EDM\",\"h\":\"MIN\"},{\"id\":2019020140,\"est\":\"20191022 20:00:00\",\"a\":\"LAK\",\"h\":\"WPG\"},{\"id\":2019020141,\"est\":\"20191022 20:30:00\",\"a\":\"VGK\",\"h\":\"CHI\"},{\"id\":2019020142,\"est\":\"20191022 21:00:00\",\"a\":\"WSH\",\"h\":\"CGY\"},{\"id\":2019020143,\"est\":\"20191023 19:30:00\",\"a\":\"DET\",\"h\":\"OTT\"},{\"id\":2019020144,\"est\":\"20191023 20:00:00\",\"a\":\"PIT\",\"h\":\"TBL\"},{\"id\":2019020145,\"est\":\"20191024 19:00:00\",\"a\":\"SJS\",\"h\":\"MTL\"},{\"id\":2019020146,\"est\":\"20191024 19:00:00\",\"a\":\"ARI\",\"h\":\"NYI\"},{\"id\":2019020147,\"est\":\"20191024 19:00:00\",\"a\":\"BUF\",\"h\":\"NYR\"},{\"id\":2019020148,\"est\":\"20191024 19:00:00\",\"a\":\"CAR\",\"h\":\"CBJ\"},{\"id\":2019020149,\"est\":\"20191024 20:00:00\",\"a\":\"LAK\",\"h\":\"STL\"},{\"id\":2019020150,\"est\":\"20191024 20:00:00\",\"a\":\"MIN\",\"h\":\"NSH\"},{\"id\":2019020151,\"est\":\"20191024 20:30:00\",\"a\":\"PHI\",\"h\":\"CHI\"},{\"id\":2019020152,\"est\":\"20191024 20:30:00\",\"a\":\"ANA\",\"h\":\"DAL\"},{\"id\":2019020153,\"est\":\"20191024 21:00:00\",\"a\":\"FLA\",\"h\":\"CGY\"},{\"id\":2019020154,\"est\":\"20191024 21:00:00\",\"a\":\"WSH\",\"h\":\"EDM\"},{\"id\":2019020155,\"est\":\"20191025 18:00:00\",\"a\":\"COL\",\"h\":\"VGK\"},{\"id\":2019020156,\"est\":\"20191025 19:00:00\",\"a\":\"SJS\",\"h\":\"TOR\"},{\"id\":2019020157,\"est\":\"20191025 19:00:00\",\"a\":\"ARI\",\"h\":\"NJD\"},{\"id\":2019020158,\"est\":\"20191025 19:30:00\",\"a\":\"NYI\",\"h\":\"OTT\"},{\"id\":2019020159,\"est\":\"20191025 19:30:00\",\"a\":\"BUF\",\"h\":\"DET\"},{\"id\":2019020160,\"est\":\"20191025 22:00:00\",\"a\":\"WSH\",\"h\":\"VAN\"},{\"id\":2019020161,\"est\":\"20191026 13:00:00\",\"a\":\"CHI\",\"h\":\"CAR\"},{\"id\":2019020162,\"est\":\"20191026 19:00:00\",\"a\":\"STL\",\"h\":\"BOS\"},{\"id\":2019020163,\"est\":\"20191026 19:00:00\",\"a\":\"TOR\",\"h\":\"MTL\"},{\"id\":2019020164,\"est\":\"20191026 19:00:00\",\"a\":\"NSH\",\"h\":\"TBL\"},{\"id\":2019020165,\"est\":\"20191026 19:00:00\",\"a\":\"CBJ\",\"h\":\"PHI\"},{\"id\":2019020166,\"est\":\"20191026 20:00:00\",\"a\":\"PIT\",\"h\":\"DAL\"},{\"id\":2019020167,\"est\":\"20191026 20:00:00\",\"a\":\"LAK\",\"h\":\"MIN\"},{\"id\":2019020168,\"est\":\"20191026 22:00:00\",\"a\":\"CGY\",\"h\":\"WPG\"},{\"id\":2019020169,\"est\":\"20191026 21:00:00\",\"a\":\"ANA\",\"h\":\"COL\"},{\"id\":2019020170,\"est\":\"20191027 16:00:00\",\"a\":\"FLA\",\"h\":\"EDM\"},{\"id\":2019020171,\"est\":\"20191027 17:00:00\",\"a\":\"STL\",\"h\":\"DET\"},{\"id\":2019020172,\"est\":\"20191027 19:00:00\",\"a\":\"SJS\",\"h\":\"OTT\"},{\"id\":2019020173,\"est\":\"20191027 19:00:00\",\"a\":\"PHI\",\"h\":\"NYI\"},{\"id\":2019020174,\"est\":\"20191027 19:00:00\",\"a\":\"BOS\",\"h\":\"NYR\"},{\"id\":2019020175,\"est\":\"20191027 19:00:00\",\"a\":\"LAK\",\"h\":\"CHI\"},{\"id\":2019020176,\"est\":\"20191027 20:00:00\",\"a\":\"ANA\",\"h\":\"VGK\"},{\"id\":2019020177,\"est\":\"20191028 19:00:00\",\"a\":\"ARI\",\"h\":\"BUF\"},{\"id\":2019020178,\"est\":\"20191028 22:00:00\",\"a\":\"FLA\",\"h\":\"VAN\"},{\"id\":2019020179,\"est\":\"20191029 19:00:00\",\"a\":\"SJS\",\"h\":\"BOS\"},{\"id\":2019020180,\"est\":\"20191029 19:00:00\",\"a\":\"WSH\",\"h\":\"TOR\"},{\"id\":2019020181,\"est\":\"20191029 19:30:00\",\"a\":\"TBL\",\"h\":\"NYR\"},{\"id\":2019020182,\"est\":\"20191029 19:00:00\",\"a\":\"PHI\",\"h\":\"PIT\"},{\"id\":2019020183,\"est\":\"20191029 19:00:00\",\"a\":\"CGY\",\"h\":\"CAR\"},{\"id\":2019020184,\"est\":\"20191029 19:30:00\",\"a\":\"EDM\",\"h\":\"DET\"},{\"id\":2019020185,\"est\":\"20191029 20:00:00\",\"a\":\"CHI\",\"h\":\"NSH\"},{\"id\":2019020186,\"est\":\"20191029 20:30:00\",\"a\":\"MIN\",\"h\":\"DAL\"},{\"id\":2019020187,\"est\":\"20191029 22:00:00\",\"a\":\"WPG\",\"h\":\"ANA\"},{\"id\":2019020188,\"est\":\"20191030 19:00:00\",\"a\":\"TBL\",\"h\":\"NJD\"},{\"id\":2019020189,\"est\":\"20191030 19:30:00\",\"a\":\"EDM\",\"h\":\"CBJ\"},{\"id\":2019020190,\"est\":\"20191030 20:00:00\",\"a\":\"MIN\",\"h\":\"STL\"},{\"id\":2019020191,\"est\":\"20191030 22:00:00\",\"a\":\"FLA\",\"h\":\"COL\"},{\"id\":2019020192,\"est\":\"20191030 22:00:00\",\"a\":\"MTL\",\"h\":\"ARI\"},{\"id\":2019020193,\"est\":\"20191030 22:30:00\",\"a\":\"VAN\",\"h\":\"LAK\"},{\"id\":2019020194,\"est\":\"20191031 20:00:00\",\"a\":\"CGY\",\"h\":\"NSH\"},{\"id\":2019020195,\"est\":\"20191031 22:00:00\",\"a\":\"MTL\",\"h\":\"VGK\"},{\"id\":2019020196,\"est\":\"20191101 19:00:00\",\"a\":\"PHI\",\"h\":\"NJD\"},{\"id\":2019020197,\"est\":\"20191101 19:00:00\",\"a\":\"TBL\",\"h\":\"NYI\"},{\"id\":2019020198,\"est\":\"20191101 19:00:00\",\"a\":\"BUF\",\"h\":\"WSH\"},{\"id\":2019020199,\"est\":\"20191101 19:30:00\",\"a\":\"DET\",\"h\":\"CAR\"},{\"id\":2019020200,\"est\":\"20191101 20:00:00\",\"a\":\"CBJ\",\"h\":\"STL\"},{\"id\":2019020201,\"est\":\"20191101 21:00:00\",\"a\":\"DAL\",\"h\":\"COL\"},{\"id\":2019020202,\"est\":\"20191101 22:00:00\",\"a\":\"VAN\",\"h\":\"ANA\"},{\"id\":2019020203,\"est\":\"20191101 22:30:00\",\"a\":\"WPG\",\"h\":\"SJS\"},{\"id\":2019020204,\"est\":\"20191102 13:00:00\",\"a\":\"EDM\",\"h\":\"PIT\"},{\"id\":2019020205,\"est\":\"20191102 14:00:00\",\"a\":\"NYR\",\"h\":\"NSH\"},{\"id\":2019020206,\"est\":\"20191102 19:00:00\",\"a\":\"OTT\",\"h\":\"BOS\"},{\"id\":2019020207,\"est\":\"20191102 19:00:00\",\"a\":\"NYI\",\"h\":\"BUF\"},{\"id\":2019020208,\"est\":\"20191102 19:00:00\",\"a\":\"DET\",\"h\":\"FLA\"},{\"id\":2019020209,\"est\":\"20191102 19:00:00\",\"a\":\"TOR\",\"h\":\"PHI\"},{\"id\":2019020210,\"est\":\"20191102 19:00:00\",\"a\":\"NJD\",\"h\":\"CAR\"},{\"id\":2019020211,\"est\":\"20191102 19:00:00\",\"a\":\"CGY\",\"h\":\"CBJ\"},{\"id\":2019020212,\"est\":\"20191102 19:00:00\",\"a\":\"MTL\",\"h\":\"DAL\"},{\"id\":2019020213,\"est\":\"20191102 20:00:00\",\"a\":\"STL\",\"h\":\"MIN\"},{\"id\":2019020214,\"est\":\"20191102 21:00:00\",\"a\":\"COL\",\"h\":\"ARI\"},{\"id\":2019020215,\"est\":\"20191102 22:00:00\",\"a\":\"WPG\",\"h\":\"VGK\"},{\"id\":2019020216,\"est\":\"20191102 22:00:00\",\"a\":\"VAN\",\"h\":\"SJS\"},{\"id\":2019020217,\"est\":\"20191102 22:30:00\",\"a\":\"CHI\",\"h\":\"LAK\"},{\"id\":2019020218,\"est\":\"20191103 19:00:00\",\"a\":\"CGY\",\"h\":\"WSH\"},{\"id\":2019020219,\"est\":\"20191103 20:00:00\",\"a\":\"CHI\",\"h\":\"ANA\"},{\"id\":2019020220,\"est\":\"20191104 19:00:00\",\"a\":\"PIT\",\"h\":\"BOS\"},{\"id\":2019020221,\"est\":\"20191104 19:00:00\",\"a\":\"OTT\",\"h\":\"NYR\"},{\"id\":2019020222,\"est\":\"20191104 19:30:00\",\"a\":\"NSH\",\"h\":\"DET\"},{\"id\":2019020223,\"est\":\"20191104 21:00:00\",\"a\":\"ARI\",\"h\":\"EDM\"},{\"id\":2019020224,\"est\":\"20191105 19:30:00\",\"a\":\"BOS\",\"h\":\"MTL\"},{\"id\":2019020225,\"est\":\"20191105 19:00:00\",\"a\":\"OTT\",\"h\":\"NYI\"},{\"id\":2019020226,\"est\":\"20191105 19:00:00\",\"a\":\"CAR\",\"h\":\"PHI\"},{\"id\":2019020227,\"est\":\"20191105 19:00:00\",\"a\":\"VGK\",\"h\":\"CBJ\"},{\"id\":2019020228,\"est\":\"20191105 19:30:00\",\"a\":\"LAK\",\"h\":\"TOR\"},{\"id\":2019020229,\"est\":\"20191105 20:00:00\",\"a\":\"NJD\",\"h\":\"WPG\"},{\"id\":2019020230,\"est\":\"20191105 20:30:00\",\"a\":\"COL\",\"h\":\"DAL\"},{\"id\":2019020231,\"est\":\"20191105 21:00:00\",\"a\":\"ARI\",\"h\":\"CGY\"},{\"id\":2019020232,\"est\":\"20191105 22:00:00\",\"a\":\"STL\",\"h\":\"VAN\"},{\"id\":2019020233,\"est\":\"20191105 22:00:00\",\"a\":\"MIN\",\"h\":\"ANA\"},{\"id\":2019020234,\"est\":\"20191105 22:00:00\",\"a\":\"CHI\",\"h\":\"SJS\"},{\"id\":2019020235,\"est\":\"20191106 20:00:00\",\"a\":\"DET\",\"h\":\"NYR\"},{\"id\":2019020236,\"est\":\"20191106 20:30:00\",\"a\":\"STL\",\"h\":\"EDM\"},{\"id\":2019020237,\"est\":\"20191107 19:00:00\",\"a\":\"VGK\",\"h\":\"TOR\"},{\"id\":2019020238,\"est\":\"20191107 19:00:00\",\"a\":\"WSH\",\"h\":\"FLA\"},{\"id\":2019020239,\"est\":\"20191107 19:00:00\",\"a\":\"PIT\",\"h\":\"NYI\"},{\"id\":2019020240,\"est\":\"20191107 19:00:00\",\"a\":\"MTL\",\"h\":\"PHI\"},{\"id\":2019020241,\"est\":\"20191107 19:00:00\",\"a\":\"NYR\",\"h\":\"CAR\"},{\"id\":2019020242,\"est\":\"20191107 19:30:00\",\"a\":\"LAK\",\"h\":\"OTT\"},{\"id\":2019020243,\"est\":\"20191107 20:30:00\",\"a\":\"VAN\",\"h\":\"CHI\"},{\"id\":2019020244,\"est\":\"20191107 21:00:00\",\"a\":\"NSH\",\"h\":\"COL\"},{\"id\":2019020245,\"est\":\"20191107 21:00:00\",\"a\":\"NJD\",\"h\":\"CGY\"},{\"id\":2019020246,\"est\":\"20191107 21:00:00\",\"a\":\"CBJ\",\"h\":\"ARI\"},{\"id\":2019020247,\"est\":\"20191107 22:30:00\",\"a\":\"MIN\",\"h\":\"SJS\"},{\"id\":2019020248,\"est\":\"20191108 19:30:00\",\"a\":\"BOS\",\"h\":\"DET\"},{\"id\":2019020249,\"est\":\"20191108 14:00:00\",\"a\":\"TBL\",\"h\":\"BUF\"},{\"id\":2019020250,\"est\":\"20191108 20:00:00\",\"a\":\"VAN\",\"h\":\"WPG\"},{\"id\":2019020251,\"est\":\"20191108 21:00:00\",\"a\":\"NJD\",\"h\":\"EDM\"},{\"id\":2019020252,\"est\":\"20191109 13:00:00\",\"a\":\"FLA\",\"h\":\"NYI\"},{\"id\":2019020253,\"est\":\"20191109 19:00:00\",\"a\":\"PHI\",\"h\":\"TOR\"},{\"id\":2019020254,\"est\":\"20191109 19:00:00\",\"a\":\"LAK\",\"h\":\"MTL\"},{\"id\":2019020255,\"est\":\"20191109 19:00:00\",\"a\":\"CAR\",\"h\":\"OTT\"},{\"id\":2019020256,\"est\":\"20191109 13:00:00\",\"a\":\"BUF\",\"h\":\"TBL\"},{\"id\":2019020257,\"est\":\"20191109 19:00:00\",\"a\":\"CHI\",\"h\":\"PIT\"},{\"id\":2019020258,\"est\":\"20191109 19:00:00\",\"a\":\"VGK\",\"h\":\"WSH\"},{\"id\":2019020259,\"est\":\"20191109 20:00:00\",\"a\":\"MIN\",\"h\":\"ARI\"},{\"id\":2019020260,\"est\":\"20191109 21:00:00\",\"a\":\"CBJ\",\"h\":\"COL\"},{\"id\":2019020261,\"est\":\"20191109 22:00:00\",\"a\":\"STL\",\"h\":\"CGY\"},{\"id\":2019020262,\"est\":\"20191109 22:30:00\",\"a\":\"NSH\",\"h\":\"SJS\"},{\"id\":2019020263,\"est\":\"20191110 13:00:00\",\"a\":\"FLA\",\"h\":\"NYR\"},{\"id\":2019020264,\"est\":\"20191110 14:00:00\",\"a\":\"DAL\",\"h\":\"WPG\"},{\"id\":2019020265,\"est\":\"20191110 16:00:00\",\"a\":\"NJD\",\"h\":\"VAN\"},{\"id\":2019020266,\"est\":\"20191110 17:00:00\",\"a\":\"VGK\",\"h\":\"DET\"},{\"id\":2019020267,\"est\":\"20191110 19:00:00\",\"a\":\"PHI\",\"h\":\"BOS\"},{\"id\":2019020268,\"est\":\"20191110 19:00:00\",\"a\":\"TOR\",\"h\":\"CHI\"},{\"id\":2019020269,\"est\":\"20191110 21:00:00\",\"a\":\"EDM\",\"h\":\"ANA\"},{\"id\":2019020270,\"est\":\"20191111 19:00:00\",\"a\":\"ARI\",\"h\":\"WSH\"},{\"id\":2019020271,\"est\":\"20191111 19:00:00\",\"a\":\"OTT\",\"h\":\"CAR\"},{\"id\":2019020272,\"est\":\"20191112 19:00:00\",\"a\":\"FLA\",\"h\":\"BOS\"},{\"id\":2019020273,\"est\":\"20191112 19:00:00\",\"a\":\"CBJ\",\"h\":\"MTL\"},{\"id\":2019020274,\"est\":\"20191112 19:30:00\",\"a\":\"PIT\",\"h\":\"NYR\"},{\"id\":2019020275,\"est\":\"20191112 20:00:00\",\"a\":\"ARI\",\"h\":\"STL\"},{\"id\":2019020276,\"est\":\"20191112 20:00:00\",\"a\":\"COL\",\"h\":\"WPG\"},{\"id\":2019020277,\"est\":\"20191112 22:00:00\",\"a\":\"NSH\",\"h\":\"VAN\"},{\"id\":2019020278,\"est\":\"20191112 22:00:00\",\"a\":\"DET\",\"h\":\"ANA\"},{\"id\":2019020279,\"est\":\"20191112 22:30:00\",\"a\":\"MIN\",\"h\":\"LAK\"},{\"id\":2019020280,\"est\":\"20191112 22:30:00\",\"a\":\"EDM\",\"h\":\"SJS\"},{\"id\":2019020281,\"est\":\"20191113 19:00:00\",\"a\":\"OTT\",\"h\":\"NJD\"},{\"id\":2019020282,\"est\":\"20191113 19:00:00\",\"a\":\"TOR\",\"h\":\"NYI\"},{\"id\":2019020283,\"est\":\"20191113 19:30:00\",\"a\":\"WSH\",\"h\":\"PHI\"},{\"id\":2019020284,\"est\":\"20191113 21:30:00\",\"a\":\"DAL\",\"h\":\"CGY\"},{\"id\":2019020285,\"est\":\"20191113 22:00:00\",\"a\":\"CHI\",\"h\":\"VGK\"},{\"id\":2019020286,\"est\":\"20191114 19:00:00\",\"a\":\"CAR\",\"h\":\"BUF\"},{\"id\":2019020287,\"est\":\"20191114 19:00:00\",\"a\":\"NYR\",\"h\":\"TBL\"},{\"id\":2019020288,\"est\":\"20191114 19:00:00\",\"a\":\"WPG\",\"h\":\"FLA\"},{\"id\":2019020289,\"est\":\"20191114 20:00:00\",\"a\":\"ARI\",\"h\":\"MIN\"},{\"id\":2019020290,\"est\":\"20191114 21:00:00\",\"a\":\"COL\",\"h\":\"EDM\"},{\"id\":2019020291,\"est\":\"20191114 22:00:00\",\"a\":\"DAL\",\"h\":\"VAN\"},{\"id\":2019020292,\"est\":\"20191114 22:00:00\",\"a\":\"SJS\",\"h\":\"ANA\"},{\"id\":2019020293,\"est\":\"20191114 22:30:00\",\"a\":\"DET\",\"h\":\"LAK\"},{\"id\":2019020294,\"est\":\"20191115 19:00:00\",\"a\":\"BOS\",\"h\":\"TOR\"},{\"id\":2019020295,\"est\":\"20191115 19:00:00\",\"a\":\"PIT\",\"h\":\"NJD\"},{\"id\":2019020296,\"est\":\"20191115 19:00:00\",\"a\":\"MTL\",\"h\":\"WSH\"},{\"id\":2019020297,\"est\":\"20191115 19:00:00\",\"a\":\"STL\",\"h\":\"CBJ\"},{\"id\":2019020298,\"est\":\"20191115 19:30:00\",\"a\":\"PHI\",\"h\":\"OTT\"},{\"id\":2019020299,\"est\":\"20191116 14:00:00\",\"a\":\"CAR\",\"h\":\"MIN\"},{\"id\":2019020300,\"est\":\"20191116 16:00:00\",\"a\":\"WPG\",\"h\":\"TBL\"},{\"id\":2019020301,\"est\":\"20191116 16:00:00\",\"a\":\"DAL\",\"h\":\"EDM\"},{\"id\":2019020302,\"est\":\"20191116 16:00:00\",\"a\":\"CGY\",\"h\":\"ARI\"},{\"id\":2019020303,\"est\":\"20191116 19:00:00\",\"a\":\"WSH\",\"h\":\"BOS\"},{\"id\":2019020304,\"est\":\"20191116 19:00:00\",\"a\":\"OTT\",\"h\":\"BUF\"},{\"id\":2019020305,\"est\":\"20191116 19:00:00\",\"a\":\"NJD\",\"h\":\"MTL\"},{\"id\":2019020306,\"est\":\"20191116 19:00:00\",\"a\":\"NYR\",\"h\":\"FLA\"},{\"id\":2019020307,\"est\":\"20191116 19:00:00\",\"a\":\"NYI\",\"h\":\"PHI\"},{\"id\":2019020308,\"est\":\"20191116 19:00:00\",\"a\":\"TOR\",\"h\":\"PIT\"},{\"id\":2019020309,\"est\":\"20191116 20:00:00\",\"a\":\"ANA\",\"h\":\"STL\"},{\"id\":2019020310,\"est\":\"20191116 20:00:00\",\"a\":\"CHI\",\"h\":\"NSH\"},{\"id\":2019020311,\"est\":\"20191116 22:00:00\",\"a\":\"COL\",\"h\":\"VAN\"},{\"id\":2019020312,\"est\":\"20191116 16:00:00\",\"a\":\"VGK\",\"h\":\"LAK\"},{\"id\":2019020313,\"est\":\"20191116 22:30:00\",\"a\":\"DET\",\"h\":\"SJS\"},{\"id\":2019020314,\"est\":\"20191117 19:00:00\",\"a\":\"BUF\",\"h\":\"CHI\"},{\"id\":2019020315,\"est\":\"20191117 19:00:00\",\"a\":\"CGY\",\"h\":\"VGK\"},{\"id\":2019020316,\"est\":\"20191118 19:00:00\",\"a\":\"ANA\",\"h\":\"WSH\"},{\"id\":2019020317,\"est\":\"20191118 21:00:00\",\"a\":\"LAK\",\"h\":\"ARI\"},{\"id\":2019020318,\"est\":\"20191119 19:00:00\",\"a\":\"MIN\",\"h\":\"BUF\"},{\"id\":2019020319,\"est\":\"20191119 19:00:00\",\"a\":\"PHI\",\"h\":\"FLA\"},{\"id\":2019020320,\"est\":\"20191119 19:00:00\",\"a\":\"BOS\",\"h\":\"NJD\"},{\"id\":2019020321,\"est\":\"20191119 19:00:00\",\"a\":\"NYI\",\"h\":\"PIT\"},{\"id\":2019020322,\"est\":\"20191119 19:00:00\",\"a\":\"MTL\",\"h\":\"CBJ\"},{\"id\":2019020323,\"est\":\"20191119 19:30:00\",\"a\":\"OTT\",\"h\":\"DET\"},{\"id\":2019020324,\"est\":\"20191119 20:00:00\",\"a\":\"TBL\",\"h\":\"STL\"},{\"id\":2019020325,\"est\":\"20191119 20:00:00\",\"a\":\"WPG\",\"h\":\"NSH\"},{\"id\":2019020326,\"est\":\"20191119 20:30:00\",\"a\":\"CAR\",\"h\":\"CHI\"},{\"id\":2019020327,\"est\":\"20191119 20:30:00\",\"a\":\"VAN\",\"h\":\"DAL\"},{\"id\":2019020328,\"est\":\"20191119 21:00:00\",\"a\":\"COL\",\"h\":\"CGY\"},{\"id\":2019020329,\"est\":\"20191119 22:00:00\",\"a\":\"TOR\",\"h\":\"VGK\"},{\"id\":2019020330,\"est\":\"20191119 22:30:00\",\"a\":\"EDM\",\"h\":\"SJS\"},{\"id\":2019020331,\"est\":\"20191120 19:30:00\",\"a\":\"OTT\",\"h\":\"MTL\"},{\"id\":2019020332,\"est\":\"20191120 20:00:00\",\"a\":\"WSH\",\"h\":\"NYR\"},{\"id\":2019020333,\"est\":\"20191121 19:00:00\",\"a\":\"BUF\",\"h\":\"BOS\"},{\"id\":2019020334,\"est\":\"20191121 19:00:00\",\"a\":\"ANA\",\"h\":\"FLA\"},{\"id\":2019020335,\"est\":\"20191121 19:00:00\",\"a\":\"PIT\",\"h\":\"NYI\"},{\"id\":2019020336,\"est\":\"20191121 19:00:00\",\"a\":\"PHI\",\"h\":\"CAR\"},{\"id\":2019020337,\"est\":\"20191121 19:00:00\",\"a\":\"DET\",\"h\":\"CBJ\"},{\"id\":2019020338,\"est\":\"20191121 20:00:00\",\"a\":\"CGY\",\"h\":\"STL\"},{\"id\":2019020339,\"est\":\"20191121 20:00:00\",\"a\":\"VAN\",\"h\":\"NSH\"},{\"id\":2019020340,\"est\":\"20191121 20:00:00\",\"a\":\"COL\",\"h\":\"MIN\"},{\"id\":2019020341,\"est\":\"20191121 20:30:00\",\"a\":\"TBL\",\"h\":\"CHI\"},{\"id\":2019020342,\"est\":\"20191121 20:30:00\",\"a\":\"WPG\",\"h\":\"DAL\"},{\"id\":2019020343,\"est\":\"20191121 21:00:00\",\"a\":\"TOR\",\"h\":\"ARI\"},{\"id\":2019020344,\"est\":\"20191121 22:00:00\",\"a\":\"SJS\",\"h\":\"VGK\"},{\"id\":2019020345,\"est\":\"20191121 22:30:00\",\"a\":\"EDM\",\"h\":\"LAK\"},{\"id\":2019020346,\"est\":\"20191122 19:00:00\",\"a\":\"NJD\",\"h\":\"PIT\"},{\"id\":2019020347,\"est\":\"20191122 19:30:00\",\"a\":\"NYR\",\"h\":\"OTT\"},{\"id\":2019020348,\"est\":\"20191123 12:30:00\",\"a\":\"VAN\",\"h\":\"WSH\"},{\"id\":2019020349,\"est\":\"20191123 13:00:00\",\"a\":\"CGY\",\"h\":\"PHI\"},{\"id\":2019020350,\"est\":\"20191123 16:00:00\",\"a\":\"ARI\",\"h\":\"LAK\"},{\"id\":2019020351,\"est\":\"20191123 19:00:00\",\"a\":\"MIN\",\"h\":\"BOS\"},{\"id\":2019020352,\"est\":\"20191123 19:00:00\",\"a\":\"NYR\",\"h\":\"MTL\"},{\"id\":2019020353,\"est\":\"20191123 19:00:00\",\"a\":\"ANA\",\"h\":\"TBL\"},{\"id\":2019020354,\"est\":\"20191123 19:00:00\",\"a\":\"DET\",\"h\":\"NJD\"},{\"id\":2019020355,\"est\":\"20191123 19:00:00\",\"a\":\"FLA\",\"h\":\"CAR\"},{\"id\":2019020356,\"est\":\"20191123 19:00:00\",\"a\":\"CBJ\",\"h\":\"WPG\"},{\"id\":2019020357,\"est\":\"20191123 19:00:00\",\"a\":\"TOR\",\"h\":\"COL\"},{\"id\":2019020358,\"est\":\"20191123 20:00:00\",\"a\":\"NSH\",\"h\":\"STL\"},{\"id\":2019020359,\"est\":\"20191123 20:00:00\",\"a\":\"CHI\",\"h\":\"DAL\"},{\"id\":2019020360,\"est\":\"20191123 22:00:00\",\"a\":\"EDM\",\"h\":\"VGK\"},{\"id\":2019020361,\"est\":\"20191123 22:30:00\",\"a\":\"NYI\",\"h\":\"SJS\"},{\"id\":2019020362,\"est\":\"20191124 17:00:00\",\"a\":\"BUF\",\"h\":\"FLA\"},{\"id\":2019020363,\"est\":\"20191124 19:00:00\",\"a\":\"CAR\",\"h\":\"DET\"},{\"id\":2019020364,\"est\":\"20191124 20:00:00\",\"a\":\"EDM\",\"h\":\"ARI\"},{\"id\":2019020365,\"est\":\"20191125 19:00:00\",\"a\":\"BUF\",\"h\":\"TBL\"},{\"id\":2019020366,\"est\":\"20191125 19:00:00\",\"a\":\"MIN\",\"h\":\"NYR\"},{\"id\":2019020367,\"est\":\"20191125 19:00:00\",\"a\":\"VAN\",\"h\":\"PHI\"},{\"id\":2019020368,\"est\":\"20191125 19:00:00\",\"a\":\"CGY\",\"h\":\"PIT\"},{\"id\":2019020369,\"est\":\"20191125 19:00:00\",\"a\":\"OTT\",\"h\":\"CBJ\"},{\"id\":2019020370,\"est\":\"20191125 20:00:00\",\"a\":\"STL\",\"h\":\"NSH\"},{\"id\":2019020371,\"est\":\"20191125 20:30:00\",\"a\":\"VGK\",\"h\":\"DAL\"},{\"id\":2019020372,\"est\":\"20191125 22:00:00\",\"a\":\"NYI\",\"h\":\"ANA\"},{\"id\":2019020373,\"est\":\"20191125 22:30:00\",\"a\":\"SJS\",\"h\":\"LAK\"},{\"id\":2019020374,\"est\":\"20191126 19:00:00\",\"a\":\"BOS\",\"h\":\"MTL\"},{\"id\":2019020375,\"est\":\"20191126 19:00:00\",\"a\":\"MIN\",\"h\":\"NJD\"},{\"id\":2019020376,\"est\":\"20191126 20:00:00\",\"a\":\"DAL\",\"h\":\"CHI\"},{\"id\":2019020377,\"est\":\"20191127 19:00:00\",\"a\":\"CGY\",\"h\":\"BUF\"},{\"id\":2019020378,\"est\":\"20191127 19:00:00\",\"a\":\"BOS\",\"h\":\"OTT\"},{\"id\":2019020379,\"est\":\"20191127 19:00:00\",\"a\":\"TOR\",\"h\":\"DET\"},{\"id\":2019020380,\"est\":\"20191127 19:00:00\",\"a\":\"STL\",\"h\":\"TBL\"},{\"id\":2019020381,\"est\":\"20191127 19:00:00\",\"a\":\"CAR\",\"h\":\"NYR\"},{\"id\":2019020382,\"est\":\"20191127 19:00:00\",\"a\":\"VAN\",\"h\":\"PIT\"},{\"id\":2019020383,\"est\":\"20191127 19:00:00\",\"a\":\"FLA\",\"h\":\"WSH\"},{\"id\":2019020384,\"est\":\"20191127 19:00:00\",\"a\":\"PHI\",\"h\":\"CBJ\"},{\"id\":2019020385,\"est\":\"20191127 20:00:00\",\"a\":\"VGK\",\"h\":\"NSH\"},{\"id\":2019020386,\"est\":\"20191127 21:30:00\",\"a\":\"ANA\",\"h\":\"ARI\"},{\"id\":2019020387,\"est\":\"20191127 22:00:00\",\"a\":\"EDM\",\"h\":\"COL\"},{\"id\":2019020388,\"est\":\"20191127 22:30:00\",\"a\":\"NYI\",\"h\":\"LAK\"},{\"id\":2019020389,\"est\":\"20191127 22:30:00\",\"a\":\"WPG\",\"h\":\"SJS\"},{\"id\":2019020390,\"est\":\"20191128 19:30:00\",\"a\":\"NJD\",\"h\":\"MTL\"},{\"id\":2019020391,\"est\":\"20191129 13:00:00\",\"a\":\"NYR\",\"h\":\"BOS\"},{\"id\":2019020392,\"est\":\"20191129 16:00:00\",\"a\":\"TOR\",\"h\":\"BUF\"},{\"id\":2019020393,\"est\":\"20191129 16:00:00\",\"a\":\"DET\",\"h\":\"PHI\"},{\"id\":2019020394,\"est\":\"20191129 16:00:00\",\"a\":\"COL\",\"h\":\"CHI\"},{\"id\":2019020395,\"est\":\"20191129 16:00:00\",\"a\":\"OTT\",\"h\":\"MIN\"},{\"id\":2019020396,\"est\":\"20191129 16:00:00\",\"a\":\"WPG\",\"h\":\"ANA\"},{\"id\":2019020397,\"est\":\"20191129 16:00:00\",\"a\":\"LAK\",\"h\":\"SJS\"},{\"id\":2019020398,\"est\":\"20191129 17:00:00\",\"a\":\"TBL\",\"h\":\"WSH\"},{\"id\":2019020399,\"est\":\"20191129 18:00:00\",\"a\":\"ARI\",\"h\":\"VGK\"},{\"id\":2019020400,\"est\":\"20191129 19:00:00\",\"a\":\"PIT\",\"h\":\"CBJ\"},{\"id\":2019020401,\"est\":\"20191129 19:30:00\",\"a\":\"NSH\",\"h\":\"CAR\"},{\"id\":2019020402,\"est\":\"20191129 20:30:00\",\"a\":\"STL\",\"h\":\"DAL\"},{\"id\":2019020403,\"est\":\"20191130 13:00:00\",\"a\":\"NYR\",\"h\":\"NJD\"},{\"id\":2019020404,\"est\":\"20191130 15:00:00\",\"a\":\"PHI\",\"h\":\"MTL\"},{\"id\":2019020405,\"est\":\"20191130 19:00:00\",\"a\":\"BUF\",\"h\":\"TOR\"},{\"id\":2019020406,\"est\":\"20191130 19:00:00\",\"a\":\"WSH\",\"h\":\"DET\"},{\"id\":2019020407,\"est\":\"20191130 19:00:00\",\"a\":\"CAR\",\"h\":\"TBL\"},{\"id\":2019020408,\"est\":\"20191130 19:00:00\",\"a\":\"NSH\",\"h\":\"FLA\"},{\"id\":2019020409,\"est\":\"20191130 19:00:00\",\"a\":\"CBJ\",\"h\":\"NYI\"},{\"id\":2019020410,\"est\":\"20191130 19:00:00\",\"a\":\"OTT\",\"h\":\"CGY\"},{\"id\":2019020411,\"est\":\"20191130 20:00:00\",\"a\":\"PIT\",\"h\":\"STL\"},{\"id\":2019020412,\"est\":\"20191130 20:00:00\",\"a\":\"SJS\",\"h\":\"ARI\"},{\"id\":2019020413,\"est\":\"20191130 21:00:00\",\"a\":\"CHI\",\"h\":\"COL\"},{\"id\":2019020414,\"est\":\"20191130 22:00:00\",\"a\":\"VAN\",\"h\":\"EDM\"},{\"id\":2019020415,\"est\":\"20191130 22:00:00\",\"a\":\"WPG\",\"h\":\"LAK\"},{\"id\":2019020416,\"est\":\"20191201 15:00:00\",\"a\":\"DAL\",\"h\":\"MIN\"},{\"id\":2019020417,\"est\":\"20191201 19:00:00\",\"a\":\"MTL\",\"h\":\"BOS\"},{\"id\":2019020418,\"est\":\"20191201 22:00:00\",\"a\":\"EDM\",\"h\":\"VAN\"},{\"id\":2019020419,\"est\":\"20191202 19:00:00\",\"a\":\"NJD\",\"h\":\"BUF\"},{\"id\":2019020420,\"est\":\"20191202 19:00:00\",\"a\":\"VGK\",\"h\":\"NYR\"},{\"id\":2019020421,\"est\":\"20191202 19:30:00\",\"a\":\"NYI\",\"h\":\"DET\"},{\"id\":2019020422,\"est\":\"20191202 20:30:00\",\"a\":\"STL\",\"h\":\"CHI\"},{\"id\":2019020423,\"est\":\"20191202 22:00:00\",\"a\":\"LAK\",\"h\":\"ANA\"},{\"id\":2019020424,\"est\":\"20191203 19:00:00\",\"a\":\"CAR\",\"h\":\"BOS\"},{\"id\":2019020425,\"est\":\"20191203 19:00:00\",\"a\":\"NYI\",\"h\":\"MTL\"},{\"id\":2019020426,\"est\":\"20191203 19:00:00\",\"a\":\"MIN\",\"h\":\"FLA\"},{\"id\":2019020427,\"est\":\"20191203 19:00:00\",\"a\":\"VGK\",\"h\":\"NJD\"},{\"id\":2019020428,\"est\":\"20191203 19:00:00\",\"a\":\"TOR\",\"h\":\"PHI\"},{\"id\":2019020429,\"est\":\"20191203 19:00:00\",\"a\":\"ARI\",\"h\":\"CBJ\"},{\"id\":2019020430,\"est\":\"20191203 20:00:00\",\"a\":\"TBL\",\"h\":\"NSH\"},{\"id\":2019020431,\"est\":\"20191203 20:00:00\",\"a\":\"DAL\",\"h\":\"WPG\"},{\"id\":2019020432,\"est\":\"20191203 22:00:00\",\"a\":\"OTT\",\"h\":\"VAN\"},{\"id\":2019020433,\"est\":\"20191203 22:30:00\",\"a\":\"WSH\",\"h\":\"SJS\"},{\"id\":2019020434,\"est\":\"20191204 19:00:00\",\"a\":\"COL\",\"h\":\"TOR\"},{\"id\":2019020435,\"est\":\"20191204 20:00:00\",\"a\":\"STL\",\"h\":\"PIT\"},{\"id\":2019020436,\"est\":\"20191204 21:30:00\",\"a\":\"OTT\",\"h\":\"EDM\"},{\"id\":2019020437,\"est\":\"20191204 22:00:00\",\"a\":\"WSH\",\"h\":\"LAK\"},{\"id\":2019020438,\"est\":\"20191205 19:00:00\",\"a\":\"CHI\",\"h\":\"BOS\"},{\"id\":2019020439,\"est\":\"20191205 19:00:00\",\"a\":\"COL\",\"h\":\"MTL\"},{\"id\":2019020440,\"est\":\"20191205 19:00:00\",\"a\":\"MIN\",\"h\":\"TBL\"},{\"id\":2019020441,\"est\":\"20191205 19:00:00\",\"a\":\"VGK\",\"h\":\"NYI\"},{\"id\":2019020442,\"est\":\"20191205 19:00:00\",\"a\":\"ARI\",\"h\":\"PHI\"},{\"id\":2019020443,\"est\":\"20191205 19:00:00\",\"a\":\"SJS\",\"h\":\"CAR\"},{\"id\":2019020444,\"est\":\"20191205 19:00:00\",\"a\":\"NYR\",\"h\":\"CBJ\"},{\"id\":2019020445,\"est\":\"20191205 20:30:00\",\"a\":\"WPG\",\"h\":\"DAL\"},{\"id\":2019020446,\"est\":\"20191205 21:00:00\",\"a\":\"BUF\",\"h\":\"CGY\"},{\"id\":2019020447,\"est\":\"20191206 19:00:00\",\"a\":\"CHI\",\"h\":\"NJD\"},{\"id\":2019020448,\"est\":\"20191206 19:00:00\",\"a\":\"MTL\",\"h\":\"NYR\"},{\"id\":2019020449,\"est\":\"20191206 19:00:00\",\"a\":\"ARI\",\"h\":\"PIT\"},{\"id\":2019020450,\"est\":\"20191206 21:00:00\",\"a\":\"LAK\",\"h\":\"EDM\"},{\"id\":2019020451,\"est\":\"20191206 22:00:00\",\"a\":\"WSH\",\"h\":\"ANA\"},{\"id\":2019020452,\"est\":\"20191207 13:00:00\",\"a\":\"OTT\",\"h\":\"PHI\"},{\"id\":2019020453,\"est\":\"20191207 16:00:00\",\"a\":\"BUF\",\"h\":\"VAN\"},{\"id\":2019020454,\"est\":\"20191207 19:00:00\",\"a\":\"COL\",\"h\":\"BOS\"},{\"id\":2019020455,\"est\":\"20191207 19:00:00\",\"a\":\"PIT\",\"h\":\"DET\"},{\"id\":2019020456,\"est\":\"20191207 19:00:00\",\"a\":\"SJS\",\"h\":\"TBL\"},{\"id\":2019020457,\"est\":\"20191207 19:00:00\",\"a\":\"CBJ\",\"h\":\"FLA\"},{\"id\":2019020458,\"est\":\"20191207 19:00:00\",\"a\":\"MIN\",\"h\":\"CAR\"},{\"id\":2019020459,\"est\":\"20191207 19:00:00\",\"a\":\"TOR\",\"h\":\"STL\"},{\"id\":2019020460,\"est\":\"20191207 20:00:00\",\"a\":\"NJD\",\"h\":\"NSH\"},{\"id\":2019020461,\"est\":\"20191207 21:00:00\",\"a\":\"NYI\",\"h\":\"DAL\"},{\"id\":2019020462,\"est\":\"20191207 22:00:00\",\"a\":\"LAK\",\"h\":\"CGY\"},{\"id\":2019020463,\"est\":\"20191208 15:00:00\",\"a\":\"ANA\",\"h\":\"WPG\"},{\"id\":2019020464,\"est\":\"20191208 17:00:00\",\"a\":\"SJS\",\"h\":\"FLA\"},{\"id\":2019020465,\"est\":\"20191208 19:00:00\",\"a\":\"ARI\",\"h\":\"CHI\"},{\"id\":2019020466,\"est\":\"20191208 19:00:00\",\"a\":\"NYR\",\"h\":\"VGK\"},{\"id\":2019020467,\"est\":\"20191208 20:00:00\",\"a\":\"BUF\",\"h\":\"EDM\"},{\"id\":2019020468,\"est\":\"20191209 19:00:00\",\"a\":\"NYI\",\"h\":\"TBL\"},{\"id\":2019020469,\"est\":\"20191209 19:00:00\",\"a\":\"CBJ\",\"h\":\"WSH\"},{\"id\":2019020470,\"est\":\"20191209 19:30:00\",\"a\":\"BOS\",\"h\":\"OTT\"},{\"id\":2019020471,\"est\":\"20191209 21:00:00\",\"a\":\"CGY\",\"h\":\"COL\"},{\"id\":2019020472,\"est\":\"20191210 19:30:00\",\"a\":\"STL\",\"h\":\"BUF\"},{\"id\":2019020473,\"est\":\"20191210 19:00:00\",\"a\":\"TBL\",\"h\":\"FLA\"},{\"id\":2019020474,\"est\":\"20191210 19:00:00\",\"a\":\"MTL\",\"h\":\"PIT\"},{\"id\":2019020475,\"est\":\"20191210 20:00:00\",\"a\":\"SJS\",\"h\":\"NSH\"},{\"id\":2019020476,\"est\":\"20191210 20:00:00\",\"a\":\"ANA\",\"h\":\"MIN\"},{\"id\":2019020477,\"est\":\"20191210 20:00:00\",\"a\":\"DET\",\"h\":\"WPG\"},{\"id\":2019020478,\"est\":\"20191210 20:30:00\",\"a\":\"NJD\",\"h\":\"DAL\"},{\"id\":2019020479,\"est\":\"20191210 21:00:00\",\"a\":\"CAR\",\"h\":\"EDM\"},{\"id\":2019020480,\"est\":\"20191210 21:00:00\",\"a\":\"CGY\",\"h\":\"ARI\"},{\"id\":2019020481,\"est\":\"20191210 22:00:00\",\"a\":\"TOR\",\"h\":\"VAN\"},{\"id\":2019020482,\"est\":\"20191210 22:00:00\",\"a\":\"CHI\",\"h\":\"VGK\"},{\"id\":2019020483,\"est\":\"20191210 22:30:00\",\"a\":\"NYR\",\"h\":\"LAK\"},{\"id\":2019020484,\"est\":\"20191211 19:00:00\",\"a\":\"BOS\",\"h\":\"WSH\"},{\"id\":2019020485,\"est\":\"20191211 19:30:00\",\"a\":\"OTT\",\"h\":\"MTL\"},{\"id\":2019020486,\"est\":\"20191211 21:30:00\",\"a\":\"PHI\",\"h\":\"COL\"},{\"id\":2019020487,\"est\":\"20191212 19:00:00\",\"a\":\"NSH\",\"h\":\"BUF\"},{\"id\":2019020488,\"est\":\"20191212 19:00:00\",\"a\":\"BOS\",\"h\":\"TBL\"},{\"id\":2019020489,\"est\":\"20191212 19:00:00\",\"a\":\"NYI\",\"h\":\"FLA\"},{\"id\":2019020490,\"est\":\"20191212 19:00:00\",\"a\":\"CBJ\",\"h\":\"PIT\"},{\"id\":2019020491,\"est\":\"20191212 19:30:00\",\"a\":\"WPG\",\"h\":\"DET\"},{\"id\":2019020492,\"est\":\"20191212 20:00:00\",\"a\":\"VGK\",\"h\":\"STL\"},{\"id\":2019020493,\"est\":\"20191212 20:00:00\",\"a\":\"EDM\",\"h\":\"MIN\"},{\"id\":2019020494,\"est\":\"20191212 21:00:00\",\"a\":\"TOR\",\"h\":\"CGY\"},{\"id\":2019020495,\"est\":\"20191212 21:00:00\",\"a\":\"CHI\",\"h\":\"ARI\"},{\"id\":2019020496,\"est\":\"20191212 22:00:00\",\"a\":\"CAR\",\"h\":\"VAN\"},{\"id\":2019020497,\"est\":\"20191212 22:00:00\",\"a\":\"LAK\",\"h\":\"ANA\"},{\"id\":2019020498,\"est\":\"20191212 22:30:00\",\"a\":\"NYR\",\"h\":\"SJS\"},{\"id\":2019020499,\"est\":\"20191213 20:00:00\",\"a\":\"VGK\",\"h\":\"DAL\"},{\"id\":2019020500,\"est\":\"20191213 21:00:00\",\"a\":\"NJD\",\"h\":\"COL\"},{\"id\":2019020501,\"est\":\"20191214 13:00:00\",\"a\":\"CBJ\",\"h\":\"OTT\"},{\"id\":2019020502,\"est\":\"20191214 13:00:00\",\"a\":\"BUF\",\"h\":\"NYI\"},{\"id\":2019020503,\"est\":\"20191214 16:00:00\",\"a\":\"CAR\",\"h\":\"CGY\"},{\"id\":2019020504,\"est\":\"20191214 16:00:00\",\"a\":\"NYR\",\"h\":\"ANA\"},{\"id\":2019020505,\"est\":\"20191214 18:30:00\",\"a\":\"DAL\",\"h\":\"NSH\"},{\"id\":2019020506,\"est\":\"20191214 19:00:00\",\"a\":\"DET\",\"h\":\"MTL\"},{\"id\":2019020507,\"est\":\"20191214 19:00:00\",\"a\":\"WSH\",\"h\":\"TBL\"},{\"id\":2019020508,\"est\":\"20191214 19:00:00\",\"a\":\"BOS\",\"h\":\"FLA\"},{\"id\":2019020509,\"est\":\"20191214 19:00:00\",\"a\":\"LAK\",\"h\":\"PIT\"},{\"id\":2019020510,\"est\":\"20191214 19:00:00\",\"a\":\"PHI\",\"h\":\"MIN\"},{\"id\":2019020511,\"est\":\"20191214 19:00:00\",\"a\":\"TOR\",\"h\":\"EDM\"},{\"id\":2019020512,\"est\":\"20191214 20:00:00\",\"a\":\"CHI\",\"h\":\"STL\"},{\"id\":2019020513,\"est\":\"20191214 20:00:00\",\"a\":\"NJD\",\"h\":\"ARI\"},{\"id\":2019020514,\"est\":\"20191214 22:00:00\",\"a\":\"VAN\",\"h\":\"SJS\"},{\"id\":2019020515,\"est\":\"20191215 17:00:00\",\"a\":\"PHI\",\"h\":\"WPG\"},{\"id\":2019020516,\"est\":\"20191215 19:00:00\",\"a\":\"LAK\",\"h\":\"DET\"},{\"id\":2019020517,\"est\":\"20191215 19:00:00\",\"a\":\"MIN\",\"h\":\"CHI\"},{\"id\":2019020518,\"est\":\"20191215 20:00:00\",\"a\":\"VAN\",\"h\":\"VGK\"},{\"id\":2019020519,\"est\":\"20191216 19:00:00\",\"a\":\"OTT\",\"h\":\"FLA\"},{\"id\":2019020520,\"est\":\"20191216 19:00:00\",\"a\":\"NSH\",\"h\":\"NYR\"},{\"id\":2019020521,\"est\":\"20191216 19:00:00\",\"a\":\"WSH\",\"h\":\"CBJ\"},{\"id\":2019020522,\"est\":\"20191216 20:00:00\",\"a\":\"COL\",\"h\":\"STL\"},{\"id\":2019020523,\"est\":\"20191216 20:30:00\",\"a\":\"EDM\",\"h\":\"DAL\"},{\"id\":2019020524,\"est\":\"20191217 19:00:00\",\"a\":\"LAK\",\"h\":\"BOS\"},{\"id\":2019020525,\"est\":\"20191217 19:00:00\",\"a\":\"BUF\",\"h\":\"TOR\"},{\"id\":2019020526,\"est\":\"20191217 19:00:00\",\"a\":\"OTT\",\"h\":\"TBL\"},{\"id\":2019020527,\"est\":\"20191217 19:00:00\",\"a\":\"NSH\",\"h\":\"NYI\"},{\"id\":2019020528,\"est\":\"20191217 19:00:00\",\"a\":\"ANA\",\"h\":\"PHI\"},{\"id\":2019020529,\"est\":\"20191217 19:30:00\",\"a\":\"CBJ\",\"h\":\"DET\"},{\"id\":2019020530,\"est\":\"20191217 20:00:00\",\"a\":\"CAR\",\"h\":\"WPG\"},{\"id\":2019020531,\"est\":\"20191217 21:00:00\",\"a\":\"PIT\",\"h\":\"CGY\"},{\"id\":2019020532,\"est\":\"20191217 22:00:00\",\"a\":\"MTL\",\"h\":\"VAN\"},{\"id\":2019020533,\"est\":\"20191217 22:00:00\",\"a\":\"MIN\",\"h\":\"VGK\"},{\"id\":2019020534,\"est\":\"20191217 22:30:00\",\"a\":\"ARI\",\"h\":\"SJS\"},{\"id\":2019020535,\"est\":\"20191218 19:00:00\",\"a\":\"ANA\",\"h\":\"NJD\"},{\"id\":2019020536,\"est\":\"20191218 20:00:00\",\"a\":\"COL\",\"h\":\"CHI\"},{\"id\":2019020537,\"est\":\"20191218 20:30:00\",\"a\":\"EDM\",\"h\":\"STL\"},{\"id\":2019020538,\"est\":\"20191219 19:00:00\",\"a\":\"NYI\",\"h\":\"BOS\"},{\"id\":2019020539,\"est\":\"20191219 19:00:00\",\"a\":\"DAL\",\"h\":\"TBL\"},{\"id\":2019020540,\"est\":\"20191219 19:00:00\",\"a\":\"BUF\",\"h\":\"PHI\"},{\"id\":2019020541,\"est\":\"20191219 19:00:00\",\"a\":\"LAK\",\"h\":\"CBJ\"},{\"id\":2019020542,\"est\":\"20191219 19:30:00\",\"a\":\"NSH\",\"h\":\"OTT\"},{\"id\":2019020543,\"est\":\"20191219 20:00:00\",\"a\":\"CHI\",\"h\":\"WPG\"},{\"id\":2019020544,\"est\":\"20191219 21:00:00\",\"a\":\"CAR\",\"h\":\"COL\"},{\"id\":2019020545,\"est\":\"20191219 21:00:00\",\"a\":\"MTL\",\"h\":\"CGY\"},{\"id\":2019020546,\"est\":\"20191219 21:30:00\",\"a\":\"MIN\",\"h\":\"ARI\"},{\"id\":2019020547,\"est\":\"20191219 22:00:00\",\"a\":\"VGK\",\"h\":\"VAN\"},{\"id\":2019020548,\"est\":\"20191220 19:00:00\",\"a\":\"DAL\",\"h\":\"FLA\"},{\"id\":2019020549,\"est\":\"20191220 19:00:00\",\"a\":\"WSH\",\"h\":\"NJD\"},{\"id\":2019020550,\"est\":\"20191220 19:00:00\",\"a\":\"TOR\",\"h\":\"NYR\"},{\"id\":2019020551,\"est\":\"20191220 21:00:00\",\"a\":\"PIT\",\"h\":\"EDM\"},{\"id\":2019020552,\"est\":\"20191221 13:00:00\",\"a\":\"LAK\",\"h\":\"BUF\"},{\"id\":2019020553,\"est\":\"20191221 13:00:00\",\"a\":\"ANA\",\"h\":\"NYI\"},{\"id\":2019020554,\"est\":\"20191221 14:00:00\",\"a\":\"WPG\",\"h\":\"MIN\"},{\"id\":2019020555,\"est\":\"20191221 19:00:00\",\"a\":\"NSH\",\"h\":\"BOS\"},{\"id\":2019020556,\"est\":\"20191221 19:00:00\",\"a\":\"DET\",\"h\":\"TOR\"},{\"id\":2019020557,\"est\":\"20191221 19:00:00\",\"a\":\"PHI\",\"h\":\"OTT\"},{\"id\":2019020558,\"est\":\"20191221 19:00:00\",\"a\":\"TBL\",\"h\":\"WSH\"},{\"id\":2019020559,\"est\":\"20191221 19:00:00\",\"a\":\"FLA\",\"h\":\"CAR\"},{\"id\":2019020560,\"est\":\"20191221 19:00:00\",\"a\":\"NJD\",\"h\":\"CBJ\"},{\"id\":2019020561,\"est\":\"20191221 19:00:00\",\"a\":\"MTL\",\"h\":\"EDM\"},{\"id\":2019020562,\"est\":\"20191221 21:00:00\",\"a\":\"CHI\",\"h\":\"COL\"},{\"id\":2019020563,\"est\":\"20191221 22:00:00\",\"a\":\"PIT\",\"h\":\"VAN\"},{\"id\":2019020564,\"est\":\"20191221 22:30:00\",\"a\":\"STL\",\"h\":\"SJS\"},{\"id\":2019020565,\"est\":\"20191222 12:30:00\",\"a\":\"ANA\",\"h\":\"NYR\"},{\"id\":2019020566,\"est\":\"20191222 19:00:00\",\"a\":\"ARI\",\"h\":\"DET\"},{\"id\":2019020567,\"est\":\"20191222 19:00:00\",\"a\":\"CGY\",\"h\":\"DAL\"},{\"id\":2019020568,\"est\":\"20191222 22:00:00\",\"a\":\"VGK\",\"h\":\"SJS\"},{\"id\":2019020569,\"est\":\"20191223 14:00:00\",\"a\":\"CAR\",\"h\":\"TOR\"},{\"id\":2019020570,\"est\":\"20191223 17:00:00\",\"a\":\"CGY\",\"h\":\"MIN\"},{\"id\":2019020571,\"est\":\"20191223 19:00:00\",\"a\":\"WSH\",\"h\":\"BOS\"},{\"id\":2019020572,\"est\":\"20191223 19:00:00\",\"a\":\"FLA\",\"h\":\"TBL\"},{\"id\":2019020573,\"est\":\"20191223 19:00:00\",\"a\":\"CBJ\",\"h\":\"NYI\"},{\"id\":2019020574,\"est\":\"20191223 19:00:00\",\"a\":\"NYR\",\"h\":\"PHI\"},{\"id\":2019020575,\"est\":\"20191223 19:30:00\",\"a\":\"BUF\",\"h\":\"OTT\"},{\"id\":2019020576,\"est\":\"20191223 20:00:00\",\"a\":\"ARI\",\"h\":\"NSH\"},{\"id\":2019020577,\"est\":\"20191223 20:00:00\",\"a\":\"MTL\",\"h\":\"WPG\"},{\"id\":2019020578,\"est\":\"20191223 20:30:00\",\"a\":\"NJD\",\"h\":\"CHI\"},{\"id\":2019020579,\"est\":\"20191223 22:00:00\",\"a\":\"EDM\",\"h\":\"VAN\"},{\"id\":2019020580,\"est\":\"20191223 22:00:00\",\"a\":\"COL\",\"h\":\"VGK\"},{\"id\":2019020581,\"est\":\"20191223 22:00:00\",\"a\":\"STL\",\"h\":\"LAK\"},{\"id\":2019020582,\"est\":\"20191227 19:00:00\",\"a\":\"BOS\",\"h\":\"BUF\"},{\"id\":2019020583,\"est\":\"20191227 19:00:00\",\"a\":\"TOR\",\"h\":\"NJD\"},{\"id\":2019020584,\"est\":\"20191227 19:00:00\",\"a\":\"CAR\",\"h\":\"NYR\"},{\"id\":2019020585,\"est\":\"20191227 19:00:00\",\"a\":\"CBJ\",\"h\":\"WSH\"},{\"id\":2019020586,\"est\":\"20191227 20:00:00\",\"a\":\"PIT\",\"h\":\"NSH\"},{\"id\":2019020587,\"est\":\"20191227 20:00:00\",\"a\":\"STL\",\"h\":\"WPG\"},{\"id\":2019020588,\"est\":\"20191227 20:00:00\",\"a\":\"MIN\",\"h\":\"COL\"},{\"id\":2019020589,\"est\":\"20191227 20:30:00\",\"a\":\"NYI\",\"h\":\"CHI\"},{\"id\":2019020590,\"est\":\"20191227 21:00:00\",\"a\":\"CGY\",\"h\":\"EDM\"},{\"id\":2019020591,\"est\":\"20191227 22:00:00\",\"a\":\"VGK\",\"h\":\"ANA\"},{\"id\":2019020592,\"est\":\"20191227 22:00:00\",\"a\":\"LAK\",\"h\":\"SJS\"},{\"id\":2019020593,\"est\":\"20191228 19:00:00\",\"a\":\"NYR\",\"h\":\"TOR\"},{\"id\":2019020594,\"est\":\"20191228 19:00:00\",\"a\":\"MTL\",\"h\":\"TBL\"},{\"id\":2019020595,\"est\":\"20191228 19:00:00\",\"a\":\"DET\",\"h\":\"FLA\"},{\"id\":2019020596,\"est\":\"20191228 19:00:00\",\"a\":\"NSH\",\"h\":\"PIT\"},{\"id\":2019020597,\"est\":\"20191228 19:00:00\",\"a\":\"WSH\",\"h\":\"CAR\"},{\"id\":2019020598,\"est\":\"20191228 19:00:00\",\"a\":\"COL\",\"h\":\"DAL\"},{\"id\":2019020599,\"est\":\"20191228 22:00:00\",\"a\":\"LAK\",\"h\":\"VAN\"},{\"id\":2019020600,\"est\":\"20191228 22:00:00\",\"a\":\"ARI\",\"h\":\"VGK\"},{\"id\":2019020601,\"est\":\"20191228 22:30:00\",\"a\":\"PHI\",\"h\":\"SJS\"},{\"id\":2019020602,\"est\":\"20191229 15:00:00\",\"a\":\"WPG\",\"h\":\"STL\"},{\"id\":2019020603,\"est\":\"20191229 17:00:00\",\"a\":\"NJD\",\"h\":\"OTT\"},{\"id\":2019020604,\"est\":\"20191229 17:00:00\",\"a\":\"CHI\",\"h\":\"CBJ\"},{\"id\":2019020605,\"est\":\"20191229 18:00:00\",\"a\":\"NYI\",\"h\":\"MIN\"},{\"id\":2019020606,\"est\":\"20191229 19:00:00\",\"a\":\"BUF\",\"h\":\"BOS\"},{\"id\":2019020607,\"est\":\"20191229 19:00:00\",\"a\":\"DET\",\"h\":\"TBL\"},{\"id\":2019020608,\"est\":\"20191229 19:00:00\",\"a\":\"MTL\",\"h\":\"FLA\"},{\"id\":2019020609,\"est\":\"20191229 20:00:00\",\"a\":\"DAL\",\"h\":\"ARI\"},{\"id\":2019020610,\"est\":\"20191229 20:30:00\",\"a\":\"PHI\",\"h\":\"ANA\"},{\"id\":2019020611,\"est\":\"20191229 21:30:00\",\"a\":\"VAN\",\"h\":\"CGY\"},{\"id\":2019020612,\"est\":\"20191230 19:00:00\",\"a\":\"OTT\",\"h\":\"PIT\"},{\"id\":2019020613,\"est\":\"20191231 13:00:00\",\"a\":\"BOS\",\"h\":\"NJD\"},{\"id\":2019020614,\"est\":\"20191231 13:00:00\",\"a\":\"NYI\",\"h\":\"WSH\"},{\"id\":2019020615,\"est\":\"20191231 15:00:00\",\"a\":\"ANA\",\"h\":\"VGK\"},{\"id\":2019020616,\"est\":\"20191231 18:00:00\",\"a\":\"TOR\",\"h\":\"MIN\"},{\"id\":2019020617,\"est\":\"20191231 19:00:00\",\"a\":\"TBL\",\"h\":\"BUF\"},{\"id\":2019020618,\"est\":\"20191231 19:00:00\",\"a\":\"MTL\",\"h\":\"CAR\"},{\"id\":2019020619,\"est\":\"20191231 19:00:00\",\"a\":\"FLA\",\"h\":\"CBJ\"},{\"id\":2019020620,\"est\":\"20191231 19:30:00\",\"a\":\"SJS\",\"h\":\"DET\"},{\"id\":2019020621,\"est\":\"20191231 20:00:00\",\"a\":\"WPG\",\"h\":\"COL\"},{\"id\":2019020622,\"est\":\"20191231 21:00:00\",\"a\":\"CHI\",\"h\":\"CGY\"},{\"id\":2019020623,\"est\":\"20191231 21:00:00\",\"a\":\"NYR\",\"h\":\"EDM\"},{\"id\":2019020624,\"est\":\"20191231 21:00:00\",\"a\":\"STL\",\"h\":\"ARI\"},{\"id\":2019020625,\"est\":\"20191231 21:00:00\",\"a\":\"PHI\",\"h\":\"LAK\"},{\"id\":2019020626,\"est\":\"20200101 14:00:00\",\"a\":\"NSH\",\"h\":\"DAL\"},{\"id\":2019020627,\"est\":\"20200102 19:00:00\",\"a\":\"CBJ\",\"h\":\"BOS\"},{\"id\":2019020628,\"est\":\"20200102 19:00:00\",\"a\":\"EDM\",\"h\":\"BUF\"},{\"id\":2019020629,\"est\":\"20200102 19:00:00\",\"a\":\"TBL\",\"h\":\"MTL\"},{\"id\":2019020630,\"est\":\"20200102 19:00:00\",\"a\":\"NJD\",\"h\":\"NYI\"},{\"id\":2019020631,\"est\":\"20200102 19:00:00\",\"a\":\"SJS\",\"h\":\"PIT\"},{\"id\":2019020632,\"est\":\"20200102 19:30:00\",\"a\":\"FLA\",\"h\":\"OTT\"},{\"id\":2019020633,\"est\":\"20200102 20:00:00\",\"a\":\"TOR\",\"h\":\"WPG\"},{\"id\":2019020634,\"est\":\"20200102 21:30:00\",\"a\":\"STL\",\"h\":\"COL\"},{\"id\":2019020635,\"est\":\"20200102 21:00:00\",\"a\":\"NYR\",\"h\":\"CGY\"},{\"id\":2019020636,\"est\":\"20200102 21:00:00\",\"a\":\"ANA\",\"h\":\"ARI\"},{\"id\":2019020637,\"est\":\"20200102 22:00:00\",\"a\":\"CHI\",\"h\":\"VAN\"},{\"id\":2019020638,\"est\":\"20200102 22:00:00\",\"a\":\"PHI\",\"h\":\"VGK\"},{\"id\":2019020639,\"est\":\"20200103 19:30:00\",\"a\":\"WSH\",\"h\":\"CAR\"},{\"id\":2019020640,\"est\":\"20200103 20:30:00\",\"a\":\"DET\",\"h\":\"DAL\"},{\"id\":2019020641,\"est\":\"20200104 13:00:00\",\"a\":\"EDM\",\"h\":\"BOS\"},{\"id\":2019020642,\"est\":\"20200104 13:00:00\",\"a\":\"SJS\",\"h\":\"CBJ\"},{\"id\":2019020643,\"est\":\"20200104 14:00:00\",\"a\":\"WPG\",\"h\":\"MIN\"},{\"id\":2019020644,\"est\":\"20200104 16:00:00\",\"a\":\"STL\",\"h\":\"VGK\"},{\"id\":2019020645,\"est\":\"20200104 13:00:00\",\"a\":\"FLA\",\"h\":\"BUF\"},{\"id\":2019020646,\"est\":\"20200104 19:00:00\",\"a\":\"NYI\",\"h\":\"TOR\"},{\"id\":2019020647,\"est\":\"20200104 19:00:00\",\"a\":\"PIT\",\"h\":\"MTL\"},{\"id\":2019020648,\"est\":\"20200104 19:00:00\",\"a\":\"TBL\",\"h\":\"OTT\"},{\"id\":2019020649,\"est\":\"20200104 19:00:00\",\"a\":\"COL\",\"h\":\"NJD\"},{\"id\":2019020650,\"est\":\"20200104 20:00:00\",\"a\":\"PHI\",\"h\":\"ARI\"},{\"id\":2019020651,\"est\":\"20200104 22:00:00\",\"a\":\"NYR\",\"h\":\"VAN\"},{\"id\":2019020652,\"est\":\"20200104 22:30:00\",\"a\":\"NSH\",\"h\":\"LAK\"},{\"id\":2019020653,\"est\":\"20200105 12:30:00\",\"a\":\"SJS\",\"h\":\"WSH\"},{\"id\":2019020654,\"est\":\"20200105 17:00:00\",\"a\":\"FLA\",\"h\":\"PIT\"},{\"id\":2019020655,\"est\":\"20200105 17:00:00\",\"a\":\"TBL\",\"h\":\"CAR\"},{\"id\":2019020656,\"est\":\"20200105 19:00:00\",\"a\":\"CGY\",\"h\":\"MIN\"},{\"id\":2019020657,\"est\":\"20200105 19:30:00\",\"a\":\"DET\",\"h\":\"CHI\"},{\"id\":2019020658,\"est\":\"20200105 22:00:00\",\"a\":\"NSH\",\"h\":\"ANA\"},{\"id\":2019020659,\"est\":\"20200106 19:00:00\",\"a\":\"EDM\",\"h\":\"TOR\"},{\"id\":2019020660,\"est\":\"20200106 19:00:00\",\"a\":\"WPG\",\"h\":\"MTL\"},{\"id\":2019020661,\"est\":\"20200106 19:00:00\",\"a\":\"COL\",\"h\":\"NYI\"},{\"id\":2019020662,\"est\":\"20200106 22:30:00\",\"a\":\"CBJ\",\"h\":\"LAK\"},{\"id\":2019020663,\"est\":\"20200107 19:00:00\",\"a\":\"VAN\",\"h\":\"TBL\"},{\"id\":2019020664,\"est\":\"20200107 19:00:00\",\"a\":\"ARI\",\"h\":\"FLA\"},{\"id\":2019020665,\"est\":\"20200107 19:00:00\",\"a\":\"NYI\",\"h\":\"NJD\"},{\"id\":2019020666,\"est\":\"20200107 19:30:00\",\"a\":\"COL\",\"h\":\"NYR\"},{\"id\":2019020667,\"est\":\"20200107 19:00:00\",\"a\":\"OTT\",\"h\":\"WSH\"},{\"id\":2019020668,\"est\":\"20200107 19:00:00\",\"a\":\"PHI\",\"h\":\"CAR\"},{\"id\":2019020669,\"est\":\"20200107 19:30:00\",\"a\":\"MTL\",\"h\":\"DET\"},{\"id\":2019020670,\"est\":\"20200107 20:00:00\",\"a\":\"SJS\",\"h\":\"STL\"},{\"id\":2019020671,\"est\":\"20200107 20:00:00\",\"a\":\"BOS\",\"h\":\"NSH\"},{\"id\":2019020672,\"est\":\"20200107 20:30:00\",\"a\":\"CGY\",\"h\":\"CHI\"},{\"id\":2019020673,\"est\":\"20200107 22:00:00\",\"a\":\"PIT\",\"h\":\"VGK\"},{\"id\":2019020674,\"est\":\"20200107 22:00:00\",\"a\":\"CBJ\",\"h\":\"ANA\"},{\"id\":2019020675,\"est\":\"20200108 19:30:00\",\"a\":\"WPG\",\"h\":\"TOR\"},{\"id\":2019020676,\"est\":\"20200108 19:30:00\",\"a\":\"WSH\",\"h\":\"PHI\"},{\"id\":2019020677,\"est\":\"20200108 22:00:00\",\"a\":\"DAL\",\"h\":\"LAK\"},{\"id\":2019020678,\"est\":\"20200109 19:00:00\",\"a\":\"WPG\",\"h\":\"BOS\"},{\"id\":2019020679,\"est\":\"20200109 19:00:00\",\"a\":\"EDM\",\"h\":\"MTL\"},{\"id\":2019020680,\"est\":\"20200109 19:00:00\",\"a\":\"ARI\",\"h\":\"TBL\"},{\"id\":2019020681,\"est\":\"20200109 19:00:00\",\"a\":\"VAN\",\"h\":\"FLA\"},{\"id\":2019020682,\"est\":\"20200109 19:00:00\",\"a\":\"NJD\",\"h\":\"NYR\"},{\"id\":2019020683,\"est\":\"20200109 20:00:00\",\"a\":\"BUF\",\"h\":\"STL\"},{\"id\":2019020684,\"est\":\"20200109 20:30:00\",\"a\":\"NSH\",\"h\":\"CHI\"},{\"id\":2019020685,\"est\":\"20200109 21:00:00\",\"a\":\"MIN\",\"h\":\"CGY\"},{\"id\":2019020686,\"est\":\"20200109 22:00:00\",\"a\":\"LAK\",\"h\":\"VGK\"},{\"id\":2019020687,\"est\":\"20200109 22:00:00\",\"a\":\"DAL\",\"h\":\"ANA\"},{\"id\":2019020688,\"est\":\"20200109 22:30:00\",\"a\":\"CBJ\",\"h\":\"SJS\"},{\"id\":2019020689,\"est\":\"20200110 19:30:00\",\"a\":\"OTT\",\"h\":\"DET\"},{\"id\":2019020690,\"est\":\"20200110 19:30:00\",\"a\":\"ARI\",\"h\":\"CAR\"},{\"id\":2019020691,\"est\":\"20200110 21:00:00\",\"a\":\"PIT\",\"h\":\"COL\"},{\"id\":2019020692,\"est\":\"20200111 13:00:00\",\"a\":\"VAN\",\"h\":\"BUF\"},{\"id\":2019020693,\"est\":\"20200111 19:00:00\",\"a\":\"MTL\",\"h\":\"OTT\"},{\"id\":2019020694,\"est\":\"20200111 19:00:00\",\"a\":\"BOS\",\"h\":\"NYI\"},{\"id\":2019020695,\"est\":\"20200111 19:00:00\",\"a\":\"TBL\",\"h\":\"PHI\"},{\"id\":2019020696,\"est\":\"20200111 19:00:00\",\"a\":\"NJD\",\"h\":\"WSH\"},{\"id\":2019020697,\"est\":\"20200111 19:00:00\",\"a\":\"LAK\",\"h\":\"CAR\"},{\"id\":2019020698,\"est\":\"20200111 20:00:00\",\"a\":\"NYR\",\"h\":\"STL\"},{\"id\":2019020699,\"est\":\"20200111 20:30:00\",\"a\":\"ANA\",\"h\":\"CHI\"},{\"id\":2019020700,\"est\":\"20200111 22:00:00\",\"a\":\"EDM\",\"h\":\"CGY\"},{\"id\":2019020701,\"est\":\"20200111 22:00:00\",\"a\":\"CBJ\",\"h\":\"VGK\"},{\"id\":2019020702,\"est\":\"20200111 22:30:00\",\"a\":\"DAL\",\"h\":\"SJS\"},{\"id\":2019020703,\"est\":\"20200112 14:00:00\",\"a\":\"NSH\",\"h\":\"WPG\"},{\"id\":2019020704,\"est\":\"20200112 16:00:00\",\"a\":\"VAN\",\"h\":\"MIN\"},{\"id\":2019020705,\"est\":\"20200112 17:00:00\",\"a\":\"BUF\",\"h\":\"DET\"},{\"id\":2019020706,\"est\":\"20200112 18:00:00\",\"a\":\"PIT\",\"h\":\"ARI\"},{\"id\":2019020707,\"est\":\"20200112 19:00:00\",\"a\":\"TOR\",\"h\":\"FLA\"},{\"id\":2019020708,\"est\":\"20200112 19:00:00\",\"a\":\"TBL\",\"h\":\"NJD\"},{\"id\":2019020709,\"est\":\"20200113 19:00:00\",\"a\":\"CGY\",\"h\":\"MTL\"},{\"id\":2019020710,\"est\":\"20200113 19:00:00\",\"a\":\"NYI\",\"h\":\"NYR\"},{\"id\":2019020711,\"est\":\"20200113 19:00:00\",\"a\":\"BOS\",\"h\":\"PHI\"},{\"id\":2019020712,\"est\":\"20200113 19:00:00\",\"a\":\"CAR\",\"h\":\"WSH\"},{\"id\":2019020713,\"est\":\"20200113 20:00:00\",\"a\":\"ANA\",\"h\":\"STL\"},{\"id\":2019020714,\"est\":\"20200114 19:00:00\",\"a\":\"VGK\",\"h\":\"BUF\"},{\"id\":2019020715,\"est\":\"20200114 19:00:00\",\"a\":\"NJD\",\"h\":\"TOR\"},{\"id\":2019020716,\"est\":\"20200114 19:00:00\",\"a\":\"LAK\",\"h\":\"TBL\"},{\"id\":2019020717,\"est\":\"20200114 19:00:00\",\"a\":\"DET\",\"h\":\"NYI\"},{\"id\":2019020718,\"est\":\"20200114 19:00:00\",\"a\":\"MIN\",\"h\":\"PIT\"},{\"id\":2019020719,\"est\":\"20200114 19:00:00\",\"a\":\"BOS\",\"h\":\"CBJ\"},{\"id\":2019020720,\"est\":\"20200114 19:30:00\",\"a\":\"CHI\",\"h\":\"OTT\"},{\"id\":2019020721,\"est\":\"20200114 20:00:00\",\"a\":\"VAN\",\"h\":\"WPG\"},{\"id\":2019020722,\"est\":\"20200114 21:00:00\",\"a\":\"DAL\",\"h\":\"COL\"},{\"id\":2019020723,\"est\":\"20200114 21:00:00\",\"a\":\"NSH\",\"h\":\"EDM\"},{\"id\":2019020724,\"est\":\"20200114 21:00:00\",\"a\":\"SJS\",\"h\":\"ARI\"},{\"id\":2019020725,\"est\":\"20200115 19:30:00\",\"a\":\"CHI\",\"h\":\"MTL\"},{\"id\":2019020726,\"est\":\"20200115 20:00:00\",\"a\":\"PHI\",\"h\":\"STL\"},{\"id\":2019020727,\"est\":\"20200116 19:00:00\",\"a\":\"PIT\",\"h\":\"BOS\"},{\"id\":2019020728,\"est\":\"20200116 19:00:00\",\"a\":\"CGY\",\"h\":\"TOR\"},{\"id\":2019020729,\"est\":\"20200116 19:00:00\",\"a\":\"LAK\",\"h\":\"FLA\"},{\"id\":2019020730,\"est\":\"20200116 19:00:00\",\"a\":\"NYR\",\"h\":\"NYI\"},{\"id\":2019020731,\"est\":\"20200116 19:00:00\",\"a\":\"MTL\",\"h\":\"PHI\"},{\"id\":2019020732,\"est\":\"20200116 19:00:00\",\"a\":\"NJD\",\"h\":\"WSH\"},{\"id\":2019020733,\"est\":\"20200116 19:00:00\",\"a\":\"CAR\",\"h\":\"CBJ\"},{\"id\":2019020734,\"est\":\"20200116 19:30:00\",\"a\":\"VGK\",\"h\":\"OTT\"},{\"id\":2019020735,\"est\":\"20200116 20:00:00\",\"a\":\"ANA\",\"h\":\"NSH\"},{\"id\":2019020736,\"est\":\"20200116 20:00:00\",\"a\":\"TBL\",\"h\":\"MIN\"},{\"id\":2019020737,\"est\":\"20200116 20:30:00\",\"a\":\"BUF\",\"h\":\"DAL\"},{\"id\":2019020738,\"est\":\"20200116 21:00:00\",\"a\":\"SJS\",\"h\":\"COL\"},{\"id\":2019020739,\"est\":\"20200116 22:00:00\",\"a\":\"ARI\",\"h\":\"VAN\"},{\"id\":2019020740,\"est\":\"20200117 19:30:00\",\"a\":\"PIT\",\"h\":\"DET\"},{\"id\":2019020741,\"est\":\"20200117 19:30:00\",\"a\":\"ANA\",\"h\":\"CAR\"},{\"id\":2019020742,\"est\":\"20200117 20:00:00\",\"a\":\"TBL\",\"h\":\"WPG\"},{\"id\":2019020743,\"est\":\"20200118 13:00:00\",\"a\":\"WSH\",\"h\":\"NYI\"},{\"id\":2019020744,\"est\":\"20200118 15:00:00\",\"a\":\"STL\",\"h\":\"COL\"},{\"id\":2019020745,\"est\":\"20200118 15:00:00\",\"a\":\"ARI\",\"h\":\"EDM\"},{\"id\":2019020746,\"est\":\"20200118 16:00:00\",\"a\":\"CGY\",\"h\":\"OTT\"},{\"id\":2019020747,\"est\":\"20200118 19:00:00\",\"a\":\"CHI\",\"h\":\"TOR\"},{\"id\":2019020748,\"est\":\"20200118 19:00:00\",\"a\":\"VGK\",\"h\":\"MTL\"},{\"id\":2019020749,\"est\":\"20200118 19:00:00\",\"a\":\"FLA\",\"h\":\"DET\"},{\"id\":2019020750,\"est\":\"20200118 19:00:00\",\"a\":\"LAK\",\"h\":\"PHI\"},{\"id\":2019020751,\"est\":\"20200118 19:00:00\",\"a\":\"NJD\",\"h\":\"CBJ\"},{\"id\":2019020752,\"est\":\"20200118 20:00:00\",\"a\":\"BUF\",\"h\":\"NSH\"},{\"id\":2019020753,\"est\":\"20200118 21:00:00\",\"a\":\"DAL\",\"h\":\"MIN\"},{\"id\":2019020754,\"est\":\"20200118 22:00:00\",\"a\":\"SJS\",\"h\":\"VAN\"},{\"id\":2019020755,\"est\":\"20200119 12:30:00\",\"a\":\"BOS\",\"h\":\"PIT\"},{\"id\":2019020756,\"est\":\"20200119 17:00:00\",\"a\":\"NYI\",\"h\":\"CAR\"},{\"id\":2019020757,\"est\":\"20200119 19:00:00\",\"a\":\"CBJ\",\"h\":\"NYR\"},{\"id\":2019020758,\"est\":\"20200119 19:00:00\",\"a\":\"WPG\",\"h\":\"CHI\"},{\"id\":2019020759,\"est\":\"20200120 15:00:00\",\"a\":\"DET\",\"h\":\"COL\"},{\"id\":2019020760,\"est\":\"20200120 20:00:00\",\"a\":\"FLA\",\"h\":\"MIN\"},{\"id\":2019020761,\"est\":\"20200121 19:00:00\",\"a\":\"VGK\",\"h\":\"BOS\"},{\"id\":2019020762,\"est\":\"20200121 19:00:00\",\"a\":\"NYI\",\"h\":\"NYR\"},{\"id\":2019020763,\"est\":\"20200121 19:30:00\",\"a\":\"PIT\",\"h\":\"PHI\"},{\"id\":2019020764,\"est\":\"20200121 19:00:00\",\"a\":\"WPG\",\"h\":\"CAR\"},{\"id\":2019020765,\"est\":\"20200121 20:30:00\",\"a\":\"FLA\",\"h\":\"CHI\"},{\"id\":2019020766,\"est\":\"20200122 19:30:00\",\"a\":\"WPG\",\"h\":\"CBJ\"},{\"id\":2019020767,\"est\":\"20200122 20:00:00\",\"a\":\"DET\",\"h\":\"MIN\"},{\"id\":2019020768,\"est\":\"20200127 19:00:00\",\"a\":\"WSH\",\"h\":\"MTL\"},{\"id\":2019020769,\"est\":\"20200127 19:30:00\",\"a\":\"NJD\",\"h\":\"OTT\"},{\"id\":2019020770,\"est\":\"20200127 20:00:00\",\"a\":\"TOR\",\"h\":\"NSH\"},{\"id\":2019020771,\"est\":\"20200127 20:00:00\",\"a\":\"TBL\",\"h\":\"DAL\"},{\"id\":2019020772,\"est\":\"20200127 22:00:00\",\"a\":\"STL\",\"h\":\"VAN\"},{\"id\":2019020773,\"est\":\"20200127 22:30:00\",\"a\":\"ANA\",\"h\":\"SJS\"},{\"id\":2019020774,\"est\":\"20200128 19:00:00\",\"a\":\"OTT\",\"h\":\"BUF\"},{\"id\":2019020775,\"est\":\"20200128 21:00:00\",\"a\":\"STL\",\"h\":\"CGY\"},{\"id\":2019020776,\"est\":\"20200129 19:30:00\",\"a\":\"NSH\",\"h\":\"WSH\"},{\"id\":2019020777,\"est\":\"20200129 19:30:00\",\"a\":\"TOR\",\"h\":\"DAL\"},{\"id\":2019020778,\"est\":\"20200129 22:00:00\",\"a\":\"CGY\",\"h\":\"EDM\"},{\"id\":2019020779,\"est\":\"20200129 22:00:00\",\"a\":\"ARI\",\"h\":\"ANA\"},{\"id\":2019020780,\"est\":\"20200129 22:00:00\",\"a\":\"TBL\",\"h\":\"LAK\"},{\"id\":2019020781,\"est\":\"20200129 22:30:00\",\"a\":\"VAN\",\"h\":\"SJS\"},{\"id\":2019020782,\"est\":\"20200130 19:00:00\",\"a\":\"MTL\",\"h\":\"BUF\"},{\"id\":2019020783,\"est\":\"20200130 19:30:00\",\"a\":\"NSH\",\"h\":\"NJD\"},{\"id\":2019020784,\"est\":\"20200130 21:30:00\",\"a\":\"LAK\",\"h\":\"ARI\"},{\"id\":2019020785,\"est\":\"20200131 19:00:00\",\"a\":\"DET\",\"h\":\"NYR\"},{\"id\":2019020786,\"est\":\"20200131 19:00:00\",\"a\":\"PHI\",\"h\":\"PIT\"},{\"id\":2019020787,\"est\":\"20200131 19:30:00\",\"a\":\"WSH\",\"h\":\"OTT\"},{\"id\":2019020788,\"est\":\"20200131 19:30:00\",\"a\":\"VGK\",\"h\":\"CAR\"},{\"id\":2019020789,\"est\":\"20200131 20:00:00\",\"a\":\"BOS\",\"h\":\"WPG\"},{\"id\":2019020790,\"est\":\"20200131 21:00:00\",\"a\":\"STL\",\"h\":\"EDM\"},{\"id\":2019020791,\"est\":\"20200131 22:00:00\",\"a\":\"TBL\",\"h\":\"ANA\"},{\"id\":2019020792,\"est\":\"20200201 13:00:00\",\"a\":\"CBJ\",\"h\":\"BUF\"},{\"id\":2019020793,\"est\":\"20200201 13:00:00\",\"a\":\"VAN\",\"h\":\"NYI\"},{\"id\":2019020794,\"est\":\"20200201 14:00:00\",\"a\":\"FLA\",\"h\":\"MTL\"},{\"id\":2019020795,\"est\":\"20200201 19:00:00\",\"a\":\"OTT\",\"h\":\"TOR\"},{\"id\":2019020796,\"est\":\"20200201 19:00:00\",\"a\":\"NYR\",\"h\":\"DET\"},{\"id\":2019020797,\"est\":\"20200201 19:00:00\",\"a\":\"DAL\",\"h\":\"NJD\"},{\"id\":2019020798,\"est\":\"20200201 19:00:00\",\"a\":\"COL\",\"h\":\"PHI\"},{\"id\":2019020799,\"est\":\"20200201 19:00:00\",\"a\":\"STL\",\"h\":\"WPG\"},{\"id\":2019020800,\"est\":\"20200201 20:00:00\",\"a\":\"VGK\",\"h\":\"NSH\"},{\"id\":2019020801,\"est\":\"20200201 20:00:00\",\"a\":\"BOS\",\"h\":\"MIN\"},{\"id\":2019020802,\"est\":\"20200201 20:00:00\",\"a\":\"CHI\",\"h\":\"ARI\"},{\"id\":2019020803,\"est\":\"20200201 22:00:00\",\"a\":\"EDM\",\"h\":\"CGY\"},{\"id\":2019020804,\"est\":\"20200201 22:30:00\",\"a\":\"ANA\",\"h\":\"LAK\"},{\"id\":2019020805,\"est\":\"20200201 22:30:00\",\"a\":\"TBL\",\"h\":\"SJS\"},{\"id\":2019020806,\"est\":\"20200202 12:30:00\",\"a\":\"PIT\",\"h\":\"WSH\"},{\"id\":2019020807,\"est\":\"20200202 14:00:00\",\"a\":\"CBJ\",\"h\":\"MTL\"},{\"id\":2019020808,\"est\":\"20200202 14:00:00\",\"a\":\"VAN\",\"h\":\"CAR\"},{\"id\":2019020809,\"est\":\"20200203 19:00:00\",\"a\":\"FLA\",\"h\":\"TOR\"},{\"id\":2019020810,\"est\":\"20200203 19:00:00\",\"a\":\"DAL\",\"h\":\"NYR\"},{\"id\":2019020811,\"est\":\"20200203 19:30:00\",\"a\":\"PHI\",\"h\":\"DET\"},{\"id\":2019020812,\"est\":\"20200204 19:00:00\",\"a\":\"VAN\",\"h\":\"BOS\"},{\"id\":2019020813,\"est\":\"20200204 19:00:00\",\"a\":\"COL\",\"h\":\"BUF\"},{\"id\":2019020814,\"est\":\"20200204 19:00:00\",\"a\":\"VGK\",\"h\":\"TBL\"},{\"id\":2019020815,\"est\":\"20200204 19:00:00\",\"a\":\"MTL\",\"h\":\"NJD\"},{\"id\":2019020816,\"est\":\"20200204 19:00:00\",\"a\":\"DAL\",\"h\":\"NYI\"},{\"id\":2019020817,\"est\":\"20200204 19:00:00\",\"a\":\"LAK\",\"h\":\"WSH\"},{\"id\":2019020818,\"est\":\"20200204 19:00:00\",\"a\":\"FLA\",\"h\":\"CBJ\"},{\"id\":2019020819,\"est\":\"20200204 19:30:00\",\"a\":\"ANA\",\"h\":\"OTT\"},{\"id\":2019020820,\"est\":\"20200204 20:00:00\",\"a\":\"CAR\",\"h\":\"STL\"},{\"id\":2019020821,\"est\":\"20200204 20:00:00\",\"a\":\"CHI\",\"h\":\"MIN\"},{\"id\":2019020822,\"est\":\"20200204 20:00:00\",\"a\":\"NSH\",\"h\":\"WPG\"},{\"id\":2019020823,\"est\":\"20200204 21:00:00\",\"a\":\"SJS\",\"h\":\"CGY\"},{\"id\":2019020824,\"est\":\"20200204 21:00:00\",\"a\":\"EDM\",\"h\":\"ARI\"},{\"id\":2019020825,\"est\":\"20200205 19:30:00\",\"a\":\"TOR\",\"h\":\"NYR\"},{\"id\":2019020826,\"est\":\"20200205 20:00:00\",\"a\":\"BOS\",\"h\":\"CHI\"},{\"id\":2019020827,\"est\":\"20200206 19:00:00\",\"a\":\"DET\",\"h\":\"BUF\"},{\"id\":2019020828,\"est\":\"20200206 19:00:00\",\"a\":\"ANA\",\"h\":\"MTL\"},{\"id\":2019020829,\"est\":\"20200206 19:00:00\",\"a\":\"PIT\",\"h\":\"TBL\"},{\"id\":2019020830,\"est\":\"20200206 19:00:00\",\"a\":\"VGK\",\"h\":\"FLA\"},{\"id\":2019020831,\"est\":\"20200206 19:00:00\",\"a\":\"LAK\",\"h\":\"NYI\"},{\"id\":2019020832,\"est\":\"20200206 19:00:00\",\"a\":\"NJD\",\"h\":\"PHI\"},{\"id\":2019020833,\"est\":\"20200206 19:30:00\",\"a\":\"COL\",\"h\":\"OTT\"},{\"id\":2019020834,\"est\":\"20200206 20:00:00\",\"a\":\"WPG\",\"h\":\"STL\"},{\"id\":2019020835,\"est\":\"20200206 20:00:00\",\"a\":\"VAN\",\"h\":\"MIN\"},{\"id\":2019020836,\"est\":\"20200206 21:00:00\",\"a\":\"NSH\",\"h\":\"CGY\"},{\"id\":2019020837,\"est\":\"20200206 21:30:00\",\"a\":\"SJS\",\"h\":\"EDM\"},{\"id\":2019020838,\"est\":\"20200206 21:00:00\",\"a\":\"CAR\",\"h\":\"ARI\"},{\"id\":2019020839,\"est\":\"20200207 19:00:00\",\"a\":\"ANA\",\"h\":\"TOR\"},{\"id\":2019020840,\"est\":\"20200207 19:00:00\",\"a\":\"BUF\",\"h\":\"NYR\"},{\"id\":2019020841,\"est\":\"20200207 19:00:00\",\"a\":\"DET\",\"h\":\"CBJ\"},{\"id\":2019020842,\"est\":\"20200207 20:30:00\",\"a\":\"MIN\",\"h\":\"DAL\"},{\"id\":2019020843,\"est\":\"20200208 14:00:00\",\"a\":\"OTT\",\"h\":\"WPG\"},{\"id\":2019020844,\"est\":\"20200208 15:00:00\",\"a\":\"ARI\",\"h\":\"BOS\"},{\"id\":2019020845,\"est\":\"20200208 19:00:00\",\"a\":\"TOR\",\"h\":\"MTL\"},{\"id\":2019020846,\"est\":\"20200208 19:00:00\",\"a\":\"NYI\",\"h\":\"TBL\"},{\"id\":2019020847,\"est\":\"20200208 19:00:00\",\"a\":\"PIT\",\"h\":\"FLA\"},{\"id\":2019020848,\"est\":\"20200208 19:00:00\",\"a\":\"LAK\",\"h\":\"NJD\"},{\"id\":2019020849,\"est\":\"20200208 19:00:00\",\"a\":\"PHI\",\"h\":\"WSH\"},{\"id\":2019020850,\"est\":\"20200208 19:00:00\",\"a\":\"COL\",\"h\":\"CBJ\"},{\"id\":2019020851,\"est\":\"20200208 19:00:00\",\"a\":\"NSH\",\"h\":\"EDM\"},{\"id\":2019020852,\"est\":\"20200208 20:00:00\",\"a\":\"DAL\",\"h\":\"STL\"},{\"id\":2019020853,\"est\":\"20200208 22:00:00\",\"a\":\"CGY\",\"h\":\"VAN\"},{\"id\":2019020854,\"est\":\"20200208 22:00:00\",\"a\":\"CAR\",\"h\":\"VGK\"},{\"id\":2019020855,\"est\":\"20200209 12:30:00\",\"a\":\"BOS\",\"h\":\"DET\"},{\"id\":2019020856,\"est\":\"20200209 15:00:00\",\"a\":\"ANA\",\"h\":\"BUF\"},{\"id\":2019020857,\"est\":\"20200209 18:00:00\",\"a\":\"LAK\",\"h\":\"NYR\"},{\"id\":2019020858,\"est\":\"20200209 19:00:00\",\"a\":\"CHI\",\"h\":\"WPG\"},{\"id\":2019020859,\"est\":\"20200209 19:30:00\",\"a\":\"COL\",\"h\":\"MIN\"},{\"id\":2019020860,\"est\":\"20200210 19:00:00\",\"a\":\"ARI\",\"h\":\"MTL\"},{\"id\":2019020861,\"est\":\"20200210 19:00:00\",\"a\":\"FLA\",\"h\":\"PHI\"},{\"id\":2019020862,\"est\":\"20200210 19:00:00\",\"a\":\"NYI\",\"h\":\"WSH\"},{\"id\":2019020863,\"est\":\"20200210 19:30:00\",\"a\":\"TBL\",\"h\":\"CBJ\"},{\"id\":2019020864,\"est\":\"20200210 22:00:00\",\"a\":\"NSH\",\"h\":\"VAN\"},{\"id\":2019020865,\"est\":\"20200210 22:30:00\",\"a\":\"CGY\",\"h\":\"SJS\"},{\"id\":2019020866,\"est\":\"20200211 19:00:00\",\"a\":\"DET\",\"h\":\"BUF\"},{\"id\":2019020867,\"est\":\"20200211 19:00:00\",\"a\":\"ARI\",\"h\":\"TOR\"},{\"id\":2019020868,\"est\":\"20200211 19:00:00\",\"a\":\"FLA\",\"h\":\"NJD\"},{\"id\":2019020869,\"est\":\"20200211 19:00:00\",\"a\":\"PHI\",\"h\":\"NYI\"},{\"id\":2019020870,\"est\":\"20200211 19:00:00\",\"a\":\"TBL\",\"h\":\"PIT\"},{\"id\":2019020871,\"est\":\"20200211 20:00:00\",\"a\":\"VGK\",\"h\":\"MIN\"},{\"id\":2019020872,\"est\":\"20200211 20:00:00\",\"a\":\"NYR\",\"h\":\"WPG\"},{\"id\":2019020873,\"est\":\"20200211 20:30:00\",\"a\":\"CAR\",\"h\":\"DAL\"},{\"id\":2019020874,\"est\":\"20200211 21:00:00\",\"a\":\"OTT\",\"h\":\"COL\"},{\"id\":2019020875,\"est\":\"20200211 21:00:00\",\"a\":\"CHI\",\"h\":\"EDM\"},{\"id\":2019020876,\"est\":\"20200211 22:00:00\",\"a\":\"STL\",\"h\":\"ANA\"},{\"id\":2019020877,\"est\":\"20200212 19:30:00\",\"a\":\"MTL\",\"h\":\"BOS\"},{\"id\":2019020878,\"est\":\"20200212 22:00:00\",\"a\":\"CGY\",\"h\":\"LAK\"},{\"id\":2019020879,\"est\":\"20200212 22:30:00\",\"a\":\"CHI\",\"h\":\"VAN\"},{\"id\":2019020880,\"est\":\"20200213 19:00:00\",\"a\":\"CBJ\",\"h\":\"BUF\"},{\"id\":2019020881,\"est\":\"20200213 19:00:00\",\"a\":\"DAL\",\"h\":\"TOR\"},{\"id\":2019020882,\"est\":\"20200213 19:00:00\",\"a\":\"EDM\",\"h\":\"TBL\"},{\"id\":2019020883,\"est\":\"20200213 19:00:00\",\"a\":\"PHI\",\"h\":\"FLA\"},{\"id\":2019020884,\"est\":\"20200213 19:00:00\",\"a\":\"DET\",\"h\":\"NJD\"},{\"id\":2019020885,\"est\":\"20200213 19:30:00\",\"a\":\"ARI\",\"h\":\"OTT\"},{\"id\":2019020886,\"est\":\"20200213 20:00:00\",\"a\":\"NYI\",\"h\":\"NSH\"},{\"id\":2019020887,\"est\":\"20200213 20:00:00\",\"a\":\"NYR\",\"h\":\"MIN\"},{\"id\":2019020888,\"est\":\"20200213 21:30:00\",\"a\":\"WSH\",\"h\":\"COL\"},{\"id\":2019020889,\"est\":\"20200213 22:00:00\",\"a\":\"STL\",\"h\":\"VGK\"},{\"id\":2019020890,\"est\":\"20200213 22:00:00\",\"a\":\"CGY\",\"h\":\"ANA\"},{\"id\":2019020891,\"est\":\"20200214 19:00:00\",\"a\":\"MTL\",\"h\":\"PIT\"},{\"id\":2019020892,\"est\":\"20200214 19:00:00\",\"a\":\"NYR\",\"h\":\"CBJ\"},{\"id\":2019020893,\"est\":\"20200214 19:00:00\",\"a\":\"SJS\",\"h\":\"WPG\"},{\"id\":2019020894,\"est\":\"20200214 19:00:00\",\"a\":\"NJD\",\"h\":\"CAR\"},{\"id\":2019020895,\"est\":\"20200215 13:00:00\",\"a\":\"DET\",\"h\":\"BOS\"},{\"id\":2019020896,\"est\":\"20200215 15:00:00\",\"a\":\"NSH\",\"h\":\"STL\"},{\"id\":2019020897,\"est\":\"20200215 16:00:00\",\"a\":\"PHI\",\"h\":\"TBL\"},{\"id\":2019020898,\"est\":\"20200215 16:00:00\",\"a\":\"EDM\",\"h\":\"FLA\"},{\"id\":2019020899,\"est\":\"20200215 17:00:00\",\"a\":\"SJS\",\"h\":\"MIN\"},{\"id\":2019020900,\"est\":\"20200215 19:00:00\",\"a\":\"DAL\",\"h\":\"MTL\"},{\"id\":2019020901,\"est\":\"20200215 19:00:00\",\"a\":\"TOR\",\"h\":\"OTT\"},{\"id\":2019020902,\"est\":\"20200215 20:00:00\",\"a\":\"LAK\",\"h\":\"COL\"},{\"id\":2019020903,\"est\":\"20200215 22:00:00\",\"a\":\"CHI\",\"h\":\"CGY\"},{\"id\":2019020904,\"est\":\"20200215 22:00:00\",\"a\":\"WSH\",\"h\":\"ARI\"},{\"id\":2019020905,\"est\":\"20200215 22:30:00\",\"a\":\"NYI\",\"h\":\"VGK\"},{\"id\":2019020906,\"est\":\"20200216 12:30:00\",\"a\":\"DET\",\"h\":\"PIT\"},{\"id\":2019020907,\"est\":\"20200216 15:30:00\",\"a\":\"BOS\",\"h\":\"NYR\"},{\"id\":2019020908,\"est\":\"20200216 16:00:00\",\"a\":\"EDM\",\"h\":\"CAR\"},{\"id\":2019020909,\"est\":\"20200216 17:00:00\",\"a\":\"ANA\",\"h\":\"VAN\"},{\"id\":2019020910,\"est\":\"20200216 18:00:00\",\"a\":\"DAL\",\"h\":\"OTT\"},{\"id\":2019020911,\"est\":\"20200216 18:00:00\",\"a\":\"CBJ\",\"h\":\"NJD\"},{\"id\":2019020912,\"est\":\"20200216 18:00:00\",\"a\":\"STL\",\"h\":\"NSH\"},{\"id\":2019020913,\"est\":\"20200216 19:00:00\",\"a\":\"TOR\",\"h\":\"BUF\"},{\"id\":2019020914,\"est\":\"20200216 20:30:00\",\"a\":\"CHI\",\"h\":\"WPG\"},{\"id\":2019020915,\"est\":\"20200217 16:00:00\",\"a\":\"ANA\",\"h\":\"CGY\"},{\"id\":2019020916,\"est\":\"20200217 16:00:00\",\"a\":\"NYI\",\"h\":\"ARI\"},{\"id\":2019020917,\"est\":\"20200217 16:00:00\",\"a\":\"FLA\",\"h\":\"SJS\"},{\"id\":2019020918,\"est\":\"20200217 18:00:00\",\"a\":\"WSH\",\"h\":\"VGK\"},{\"id\":2019020919,\"est\":\"20200217 21:00:00\",\"a\":\"TBL\",\"h\":\"COL\"},{\"id\":2019020920,\"est\":\"20200218 19:00:00\",\"a\":\"CBJ\",\"h\":\"PHI\"},{\"id\":2019020921,\"est\":\"20200218 19:00:00\",\"a\":\"TOR\",\"h\":\"PIT\"},{\"id\":2019020922,\"est\":\"20200218 19:30:00\",\"a\":\"BUF\",\"h\":\"OTT\"},{\"id\":2019020923,\"est\":\"20200218 19:30:00\",\"a\":\"MTL\",\"h\":\"DET\"},{\"id\":2019020924,\"est\":\"20200218 20:00:00\",\"a\":\"NJD\",\"h\":\"STL\"},{\"id\":2019020925,\"est\":\"20200218 20:00:00\",\"a\":\"CAR\",\"h\":\"NSH\"},{\"id\":2019020926,\"est\":\"20200218 20:00:00\",\"a\":\"LAK\",\"h\":\"WPG\"},{\"id\":2019020927,\"est\":\"20200219 20:00:00\",\"a\":\"NYR\",\"h\":\"CHI\"},{\"id\":2019020928,\"est\":\"20200219 20:30:00\",\"a\":\"ARI\",\"h\":\"DAL\"},{\"id\":2019020929,\"est\":\"20200219 20:30:00\",\"a\":\"BOS\",\"h\":\"EDM\"},{\"id\":2019020930,\"est\":\"20200219 22:00:00\",\"a\":\"NYI\",\"h\":\"COL\"},{\"id\":2019020931,\"est\":\"20200219 22:00:00\",\"a\":\"FLA\",\"h\":\"ANA\"},{\"id\":2019020932,\"est\":\"20200219 22:30:00\",\"a\":\"MIN\",\"h\":\"VAN\"},{\"id\":2019020933,\"est\":\"20200220 19:00:00\",\"a\":\"PIT\",\"h\":\"TOR\"},{\"id\":2019020934,\"est\":\"20200220 19:00:00\",\"a\":\"SJS\",\"h\":\"NJD\"},{\"id\":2019020935,\"est\":\"20200220 19:00:00\",\"a\":\"MTL\",\"h\":\"WSH\"},{\"id\":2019020936,\"est\":\"20200220 19:00:00\",\"a\":\"PHI\",\"h\":\"CBJ\"},{\"id\":2019020937,\"est\":\"20200220 19:30:00\",\"a\":\"WPG\",\"h\":\"OTT\"},{\"id\":2019020938,\"est\":\"20200220 20:00:00\",\"a\":\"ARI\",\"h\":\"STL\"},{\"id\":2019020939,\"est\":\"20200220 22:00:00\",\"a\":\"TBL\",\"h\":\"VGK\"},{\"id\":2019020940,\"est\":\"20200220 22:30:00\",\"a\":\"FLA\",\"h\":\"LAK\"},{\"id\":2019020941,\"est\":\"20200221 20:00:00\",\"a\":\"DET\",\"h\":\"NYI\"},{\"id\":2019020942,\"est\":\"20200221 19:00:00\",\"a\":\"NYR\",\"h\":\"CAR\"},{\"id\":2019020943,\"est\":\"20200221 20:30:00\",\"a\":\"NSH\",\"h\":\"CHI\"},{\"id\":2019020944,\"est\":\"20200221 20:30:00\",\"a\":\"STL\",\"h\":\"DAL\"},{\"id\":2019020945,\"est\":\"20200221 21:00:00\",\"a\":\"BOS\",\"h\":\"CGY\"},{\"id\":2019020946,\"est\":\"20200221 21:00:00\",\"a\":\"MIN\",\"h\":\"EDM\"},{\"id\":2019020947,\"est\":\"20200221 22:00:00\",\"a\":\"COL\",\"h\":\"ANA\"},{\"id\":2019020948,\"est\":\"20200222 13:00:00\",\"a\":\"WSH\",\"h\":\"NJD\"},{\"id\":2019020949,\"est\":\"20200222 13:00:00\",\"a\":\"WPG\",\"h\":\"PHI\"},{\"id\":2019020950,\"est\":\"20200222 13:00:00\",\"a\":\"BUF\",\"h\":\"PIT\"},{\"id\":2019020951,\"est\":\"20200222 19:00:00\",\"a\":\"CAR\",\"h\":\"TOR\"},{\"id\":2019020952,\"est\":\"20200222 19:00:00\",\"a\":\"MTL\",\"h\":\"OTT\"},{\"id\":2019020953,\"est\":\"20200222 19:00:00\",\"a\":\"SJS\",\"h\":\"NYR\"},{\"id\":2019020954,\"est\":\"20200222 20:00:00\",\"a\":\"CBJ\",\"h\":\"NSH\"},{\"id\":2019020955,\"est\":\"20200222 20:00:00\",\"a\":\"TBL\",\"h\":\"ARI\"},{\"id\":2019020956,\"est\":\"20200222 22:00:00\",\"a\":\"BOS\",\"h\":\"VAN\"},{\"id\":2019020957,\"est\":\"20200222 22:00:00\",\"a\":\"FLA\",\"h\":\"VGK\"},{\"id\":2019020958,\"est\":\"20200222 22:30:00\",\"a\":\"COL\",\"h\":\"LAK\"},{\"id\":2019020959,\"est\":\"20200223 12:00:00\",\"a\":\"PIT\",\"h\":\"WSH\"},{\"id\":2019020960,\"est\":\"20200223 15:00:00\",\"a\":\"WPG\",\"h\":\"BUF\"},{\"id\":2019020961,\"est\":\"20200223 15:00:00\",\"a\":\"CHI\",\"h\":\"DAL\"},{\"id\":2019020962,\"est\":\"20200223 17:00:00\",\"a\":\"SJS\",\"h\":\"NYI\"},{\"id\":2019020963,\"est\":\"20200223 19:00:00\",\"a\":\"CGY\",\"h\":\"DET\"},{\"id\":2019020964,\"est\":\"20200223 19:30:00\",\"a\":\"STL\",\"h\":\"MIN\"},{\"id\":2019020965,\"est\":\"20200223 22:00:00\",\"a\":\"VGK\",\"h\":\"ANA\"},{\"id\":2019020966,\"est\":\"20200223 22:00:00\",\"a\":\"EDM\",\"h\":\"LAK\"},{\"id\":2019020967,\"est\":\"20200224 19:00:00\",\"a\":\"OTT\",\"h\":\"CBJ\"},{\"id\":2019020968,\"est\":\"20200225 19:00:00\",\"a\":\"CGY\",\"h\":\"BOS\"},{\"id\":2019020969,\"est\":\"20200225 19:00:00\",\"a\":\"VAN\",\"h\":\"MTL\"},{\"id\":2019020970,\"est\":\"20200225 19:00:00\",\"a\":\"TOR\",\"h\":\"TBL\"},{\"id\":2019020971,\"est\":\"20200225 19:00:00\",\"a\":\"NYR\",\"h\":\"NYI\"},{\"id\":2019020972,\"est\":\"20200225 19:00:00\",\"a\":\"SJS\",\"h\":\"PHI\"},{\"id\":2019020973,\"est\":\"20200225 19:00:00\",\"a\":\"WPG\",\"h\":\"WSH\"},{\"id\":2019020974,\"est\":\"20200225 19:00:00\",\"a\":\"DAL\",\"h\":\"CAR\"},{\"id\":2019020975,\"est\":\"20200225 19:30:00\",\"a\":\"NJD\",\"h\":\"DET\"},{\"id\":2019020976,\"est\":\"20200225 20:00:00\",\"a\":\"CHI\",\"h\":\"STL\"},{\"id\":2019020977,\"est\":\"20200225 20:00:00\",\"a\":\"OTT\",\"h\":\"NSH\"},{\"id\":2019020978,\"est\":\"20200225 20:00:00\",\"a\":\"CBJ\",\"h\":\"MIN\"},{\"id\":2019020979,\"est\":\"20200225 21:00:00\",\"a\":\"FLA\",\"h\":\"ARI\"},{\"id\":2019020980,\"est\":\"20200225 22:00:00\",\"a\":\"EDM\",\"h\":\"ANA\"},{\"id\":2019020981,\"est\":\"20200226 20:00:00\",\"a\":\"BUF\",\"h\":\"COL\"},{\"id\":2019020982,\"est\":\"20200226 22:30:00\",\"a\":\"EDM\",\"h\":\"VGK\"},{\"id\":2019020983,\"est\":\"20200226 22:30:00\",\"a\":\"PIT\",\"h\":\"LAK\"},{\"id\":2019020984,\"est\":\"20200227 19:30:00\",\"a\":\"DAL\",\"h\":\"BOS\"},{\"id\":2019020985,\"est\":\"20200227 19:00:00\",\"a\":\"NYR\",\"h\":\"MTL\"},{\"id\":2019020986,\"est\":\"20200227 19:00:00\",\"a\":\"CHI\",\"h\":\"TBL\"},{\"id\":2019020987,\"est\":\"20200227 19:00:00\",\"a\":\"TOR\",\"h\":\"FLA\"},{\"id\":2019020988,\"est\":\"20200227 19:30:00\",\"a\":\"VAN\",\"h\":\"OTT\"},{\"id\":2019020989,\"est\":\"20200227 19:30:00\",\"a\":\"MIN\",\"h\":\"DET\"},{\"id\":2019020990,\"est\":\"20200227 20:00:00\",\"a\":\"NYI\",\"h\":\"STL\"},{\"id\":2019020991,\"est\":\"20200227 20:00:00\",\"a\":\"CGY\",\"h\":\"NSH\"},{\"id\":2019020992,\"est\":\"20200227 20:00:00\",\"a\":\"WSH\",\"h\":\"WPG\"},{\"id\":2019020993,\"est\":\"20200227 22:30:00\",\"a\":\"NJD\",\"h\":\"SJS\"},{\"id\":2019020994,\"est\":\"20200228 19:00:00\",\"a\":\"NYR\",\"h\":\"PHI\"},{\"id\":2019020995,\"est\":\"20200228 19:00:00\",\"a\":\"MIN\",\"h\":\"CBJ\"},{\"id\":2019020996,\"est\":\"20200228 19:00:00\",\"a\":\"COL\",\"h\":\"CAR\"},{\"id\":2019020997,\"est\":\"20200228 22:00:00\",\"a\":\"BUF\",\"h\":\"VGK\"},{\"id\":2019020998,\"est\":\"20200228 22:00:00\",\"a\":\"PIT\",\"h\":\"ANA\"},{\"id\":2019020999,\"est\":\"20200229 13:00:00\",\"a\":\"BOS\",\"h\":\"NYI\"},{\"id\":2019021000,\"est\":\"20200229 16:00:00\",\"a\":\"CGY\",\"h\":\"TBL\"},{\"id\":2019021001,\"est\":\"20200229 16:00:00\",\"a\":\"NJD\",\"h\":\"LAK\"},{\"id\":2019021002,\"est\":\"20200229 18:00:00\",\"a\":\"CHI\",\"h\":\"FLA\"},{\"id\":2019021003,\"est\":\"20200229 19:00:00\",\"a\":\"VAN\",\"h\":\"TOR\"},{\"id\":2019021004,\"est\":\"20200229 19:00:00\",\"a\":\"CAR\",\"h\":\"MTL\"},{\"id\":2019021005,\"est\":\"20200229 19:00:00\",\"a\":\"DET\",\"h\":\"OTT\"},{\"id\":2019021006,\"est\":\"20200229 20:00:00\",\"a\":\"DAL\",\"h\":\"STL\"},{\"id\":2019021007,\"est\":\"20200229 19:00:00\",\"a\":\"COL\",\"h\":\"NSH\"},{\"id\":2019021008,\"est\":\"20200229 20:00:00\",\"a\":\"BUF\",\"h\":\"ARI\"},{\"id\":2019021009,\"est\":\"20200229 22:00:00\",\"a\":\"WPG\",\"h\":\"EDM\"},{\"id\":2019021010,\"est\":\"20200229 22:30:00\",\"a\":\"PIT\",\"h\":\"SJS\"},{\"id\":2019021011,\"est\":\"20200301 12:00:00\",\"a\":\"PHI\",\"h\":\"NYR\"},{\"id\":2019021012,\"est\":\"20200301 16:00:00\",\"a\":\"CGY\",\"h\":\"FLA\"},{\"id\":2019021013,\"est\":\"20200301 19:00:00\",\"a\":\"VAN\",\"h\":\"CBJ\"},{\"id\":2019021014,\"est\":\"20200301 20:00:00\",\"a\":\"WSH\",\"h\":\"MIN\"},{\"id\":2019021015,\"est\":\"20200301 20:00:00\",\"a\":\"NJD\",\"h\":\"ANA\"},{\"id\":2019021016,\"est\":\"20200301 22:30:00\",\"a\":\"LAK\",\"h\":\"VGK\"},{\"id\":2019021017,\"est\":\"20200302 19:30:00\",\"a\":\"COL\",\"h\":\"DET\"},{\"id\":2019021018,\"est\":\"20200302 20:00:00\",\"a\":\"EDM\",\"h\":\"NSH\"},{\"id\":2019021019,\"est\":\"20200303 19:30:00\",\"a\":\"BOS\",\"h\":\"TBL\"},{\"id\":2019021020,\"est\":\"20200303 19:00:00\",\"a\":\"MTL\",\"h\":\"NYI\"},{\"id\":2019021021,\"est\":\"20200303 19:00:00\",\"a\":\"STL\",\"h\":\"NYR\"},{\"id\":2019021022,\"est\":\"20200303 19:00:00\",\"a\":\"OTT\",\"h\":\"PIT\"},{\"id\":2019021023,\"est\":\"20200303 20:00:00\",\"a\":\"NSH\",\"h\":\"MIN\"},{\"id\":2019021024,\"est\":\"20200303 20:00:00\",\"a\":\"BUF\",\"h\":\"WPG\"},{\"id\":2019021025,\"est\":\"20200303 20:30:00\",\"a\":\"ANA\",\"h\":\"CHI\"},{\"id\":2019021026,\"est\":\"20200303 20:30:00\",\"a\":\"EDM\",\"h\":\"DAL\"},{\"id\":2019021027,\"est\":\"20200303 22:00:00\",\"a\":\"NJD\",\"h\":\"VGK\"},{\"id\":2019021028,\"est\":\"20200303 22:30:00\",\"a\":\"TOR\",\"h\":\"SJS\"},{\"id\":2019021029,\"est\":\"20200304 19:00:00\",\"a\":\"PHI\",\"h\":\"WSH\"},{\"id\":2019021030,\"est\":\"20200304 20:30:00\",\"a\":\"CBJ\",\"h\":\"CGY\"},{\"id\":2019021031,\"est\":\"20200304 21:30:00\",\"a\":\"ANA\",\"h\":\"COL\"},{\"id\":2019021032,\"est\":\"20200304 22:30:00\",\"a\":\"ARI\",\"h\":\"VAN\"},{\"id\":2019021033,\"est\":\"20200305 19:00:00\",\"a\":\"PIT\",\"h\":\"BUF\"},{\"id\":2019021034,\"est\":\"20200305 19:00:00\",\"a\":\"MTL\",\"h\":\"TBL\"},{\"id\":2019021035,\"est\":\"20200305 19:00:00\",\"a\":\"BOS\",\"h\":\"FLA\"},{\"id\":2019021036,\"est\":\"20200305 19:00:00\",\"a\":\"WSH\",\"h\":\"NYR\"},{\"id\":2019021037,\"est\":\"20200305 19:00:00\",\"a\":\"CAR\",\"h\":\"PHI\"},{\"id\":2019021038,\"est\":\"20200305 19:30:00\",\"a\":\"NYI\",\"h\":\"OTT\"},{\"id\":2019021039,\"est\":\"20200305 20:00:00\",\"a\":\"DAL\",\"h\":\"NSH\"},{\"id\":2019021040,\"est\":\"20200305 20:30:00\",\"a\":\"EDM\",\"h\":\"CHI\"},{\"id\":2019021041,\"est\":\"20200305 22:30:00\",\"a\":\"TOR\",\"h\":\"LAK\"},{\"id\":2019021042,\"est\":\"20200305 22:30:00\",\"a\":\"MIN\",\"h\":\"SJS\"},{\"id\":2019021043,\"est\":\"20200306 19:00:00\",\"a\":\"STL\",\"h\":\"NJD\"},{\"id\":2019021044,\"est\":\"20200306 19:30:00\",\"a\":\"CHI\",\"h\":\"DET\"},{\"id\":2019021045,\"est\":\"20200306 20:00:00\",\"a\":\"VGK\",\"h\":\"WPG\"},{\"id\":2019021046,\"est\":\"20200306 21:00:00\",\"a\":\"ARI\",\"h\":\"CGY\"},{\"id\":2019021047,\"est\":\"20200306 22:00:00\",\"a\":\"COL\",\"h\":\"VAN\"},{\"id\":2019021048,\"est\":\"20200306 22:00:00\",\"a\":\"TOR\",\"h\":\"ANA\"},{\"id\":2019021049,\"est\":\"20200307 13:00:00\",\"a\":\"CAR\",\"h\":\"NYI\"},{\"id\":2019021050,\"est\":\"20200307 13:00:00\",\"a\":\"WSH\",\"h\":\"PIT\"},{\"id\":2019021051,\"est\":\"20200307 14:00:00\",\"a\":\"NSH\",\"h\":\"DAL\"},{\"id\":2019021052,\"est\":\"20200307 16:00:00\",\"a\":\"MIN\",\"h\":\"LAK\"},{\"id\":2019021053,\"est\":\"20200307 19:00:00\",\"a\":\"TBL\",\"h\":\"BOS\"},{\"id\":2019021054,\"est\":\"20200307 19:00:00\",\"a\":\"MTL\",\"h\":\"FLA\"},{\"id\":2019021055,\"est\":\"20200307 19:00:00\",\"a\":\"NJD\",\"h\":\"NYR\"},{\"id\":2019021056,\"est\":\"20200307 19:00:00\",\"a\":\"BUF\",\"h\":\"PHI\"},{\"id\":2019021057,\"est\":\"20200307 19:00:00\",\"a\":\"OTT\",\"h\":\"SJS\"},{\"id\":2019021058,\"est\":\"20200307 22:00:00\",\"a\":\"CBJ\",\"h\":\"EDM\"},{\"id\":2019021059,\"est\":\"20200308 13:30:00\",\"a\":\"CAR\",\"h\":\"PIT\"},{\"id\":2019021060,\"est\":\"20200308 17:00:00\",\"a\":\"TBL\",\"h\":\"DET\"},{\"id\":2019021061,\"est\":\"20200308 19:30:00\",\"a\":\"STL\",\"h\":\"CHI\"},{\"id\":2019021062,\"est\":\"20200308 19:00:00\",\"a\":\"VGK\",\"h\":\"CGY\"},{\"id\":2019021063,\"est\":\"20200308 21:00:00\",\"a\":\"MIN\",\"h\":\"ANA\"},{\"id\":2019021064,\"est\":\"20200308 22:00:00\",\"a\":\"CBJ\",\"h\":\"VAN\"},{\"id\":2019021065,\"est\":\"20200308 22:00:00\",\"a\":\"COL\",\"h\":\"SJS\"},{\"id\":2019021066,\"est\":\"20200309 19:00:00\",\"a\":\"WSH\",\"h\":\"BUF\"},{\"id\":2019021067,\"est\":\"20200309 20:00:00\",\"a\":\"ARI\",\"h\":\"WPG\"},{\"id\":2019021068,\"est\":\"20200309 21:00:00\",\"a\":\"VGK\",\"h\":\"EDM\"},{\"id\":2019021069,\"est\":\"20200309 22:30:00\",\"a\":\"COL\",\"h\":\"LAK\"},{\"id\":2019021070,\"est\":\"20200310 19:00:00\",\"a\":\"TBL\",\"h\":\"TOR\"},{\"id\":2019021071,\"est\":\"20200310 19:00:00\",\"a\":\"NSH\",\"h\":\"MTL\"},{\"id\":2019021072,\"est\":\"20200310 19:00:00\",\"a\":\"PIT\",\"h\":\"NJD\"},{\"id\":2019021073,\"est\":\"20200310 19:00:00\",\"a\":\"BOS\",\"h\":\"PHI\"},{\"id\":2019021074,\"est\":\"20200310 19:30:00\",\"a\":\"CAR\",\"h\":\"DET\"},{\"id\":2019021075,\"est\":\"20200310 20:00:00\",\"a\":\"FLA\",\"h\":\"STL\"},{\"id\":2019021076,\"est\":\"20200310 20:30:00\",\"a\":\"NYR\",\"h\":\"DAL\"},{\"id\":2019021077,\"est\":\"20200310 22:00:00\",\"a\":\"NYI\",\"h\":\"VAN\"},{\"id\":2019021078,\"est\":\"20200310 22:00:00\",\"a\":\"OTT\",\"h\":\"ANA\"},{\"id\":2019021079,\"est\":\"20200311 20:00:00\",\"a\":\"SJS\",\"h\":\"CHI\"},{\"id\":2019021080,\"est\":\"20200311 21:00:00\",\"a\":\"WPG\",\"h\":\"EDM\"},{\"id\":2019021081,\"est\":\"20200311 22:00:00\",\"a\":\"NYR\",\"h\":\"COL\"},{\"id\":2019021082,\"est\":\"20200311 22:30:00\",\"a\":\"OTT\",\"h\":\"LAK\"},{\"id\":2019021083,\"est\":\"20200312 19:00:00\",\"a\":\"NSH\",\"h\":\"TOR\"},{\"id\":2019021084,\"est\":\"20200312 19:00:00\",\"a\":\"BUF\",\"h\":\"MTL\"},{\"id\":2019021085,\"est\":\"20200312 19:00:00\",\"a\":\"PHI\",\"h\":\"TBL\"},{\"id\":2019021086,\"est\":\"20200312 19:00:00\",\"a\":\"CAR\",\"h\":\"NJD\"},{\"id\":2019021087,\"est\":\"20200312 19:00:00\",\"a\":\"DET\",\"h\":\"WSH\"},{\"id\":2019021088,\"est\":\"20200312 19:00:00\",\"a\":\"PIT\",\"h\":\"CBJ\"},{\"id\":2019021089,\"est\":\"20200312 20:00:00\",\"a\":\"VGK\",\"h\":\"MIN\"},{\"id\":2019021090,\"est\":\"20200312 20:30:00\",\"a\":\"FLA\",\"h\":\"DAL\"},{\"id\":2019021091,\"est\":\"20200312 21:00:00\",\"a\":\"NYI\",\"h\":\"CGY\"},{\"id\":2019021092,\"est\":\"20200312 22:00:00\",\"a\":\"VAN\",\"h\":\"ARI\"},{\"id\":2019021093,\"est\":\"20200313 19:00:00\",\"a\":\"BOS\",\"h\":\"BUF\"},{\"id\":2019021094,\"est\":\"20200313 20:00:00\",\"a\":\"SJS\",\"h\":\"STL\"},{\"id\":2019021095,\"est\":\"20200313 20:30:00\",\"a\":\"OTT\",\"h\":\"CHI\"},{\"id\":2019021096,\"est\":\"20200313 21:00:00\",\"a\":\"VAN\",\"h\":\"COL\"},{\"id\":2019021097,\"est\":\"20200313 21:00:00\",\"a\":\"NYI\",\"h\":\"EDM\"},{\"id\":2019021098,\"est\":\"20200314 13:00:00\",\"a\":\"MIN\",\"h\":\"PHI\"},{\"id\":2019021099,\"est\":\"20200314 16:00:00\",\"a\":\"DET\",\"h\":\"TBL\"},{\"id\":2019021100,\"est\":\"20200314 16:00:00\",\"a\":\"ANA\",\"h\":\"LAK\"},{\"id\":2019021101,\"est\":\"20200314 19:00:00\",\"a\":\"TOR\",\"h\":\"BOS\"},{\"id\":2019021102,\"est\":\"20200314 19:00:00\",\"a\":\"NJD\",\"h\":\"FLA\"},{\"id\":2019021103,\"est\":\"20200314 19:00:00\",\"a\":\"CHI\",\"h\":\"WSH\"},{\"id\":2019021104,\"est\":\"20200314 19:00:00\",\"a\":\"PIT\",\"h\":\"CAR\"},{\"id\":2019021105,\"est\":\"20200314 19:00:00\",\"a\":\"NSH\",\"h\":\"CBJ\"},{\"id\":2019021106,\"est\":\"20200314 21:00:00\",\"a\":\"SJS\",\"h\":\"DAL\"},{\"id\":2019021107,\"est\":\"20200314 21:00:00\",\"a\":\"NYR\",\"h\":\"ARI\"},{\"id\":2019021108,\"est\":\"20200314 22:00:00\",\"a\":\"WPG\",\"h\":\"CGY\"},{\"id\":2019021109,\"est\":\"20200315 13:30:00\",\"a\":\"EDM\",\"h\":\"PHI\"},{\"id\":2019021110,\"est\":\"20200315 15:00:00\",\"a\":\"OTT\",\"h\":\"STL\"},{\"id\":2019021111,\"est\":\"20200315 15:00:00\",\"a\":\"VGK\",\"h\":\"COL\"},{\"id\":2019021112,\"est\":\"20200315 16:00:00\",\"a\":\"MTL\",\"h\":\"ANA\"},{\"id\":2019021113,\"est\":\"20200315 17:00:00\",\"a\":\"CAR\",\"h\":\"BUF\"},{\"id\":2019021114,\"est\":\"20200315 17:00:00\",\"a\":\"NJD\",\"h\":\"TBL\"},{\"id\":2019021115,\"est\":\"20200315 18:00:00\",\"a\":\"NYI\",\"h\":\"PIT\"},{\"id\":2019021116,\"est\":\"20200315 19:30:00\",\"a\":\"NSH\",\"h\":\"MIN\"},{\"id\":2019021117,\"est\":\"20200315 20:00:00\",\"a\":\"WPG\",\"h\":\"VAN\"},{\"id\":2019021118,\"est\":\"20200316 19:00:00\",\"a\":\"CBJ\",\"h\":\"BOS\"},{\"id\":2019021119,\"est\":\"20200316 19:00:00\",\"a\":\"CGY\",\"h\":\"NYR\"},{\"id\":2019021120,\"est\":\"20200316 19:00:00\",\"a\":\"EDM\",\"h\":\"WSH\"},{\"id\":2019021121,\"est\":\"20200316 19:30:00\",\"a\":\"FLA\",\"h\":\"DET\"},{\"id\":2019021122,\"est\":\"20200316 22:00:00\",\"a\":\"DAL\",\"h\":\"ARI\"},{\"id\":2019021123,\"est\":\"20200317 19:00:00\",\"a\":\"NJD\",\"h\":\"TOR\"},{\"id\":2019021124,\"est\":\"20200317 19:00:00\",\"a\":\"CGY\",\"h\":\"NYI\"},{\"id\":2019021125,\"est\":\"20200317 19:00:00\",\"a\":\"STL\",\"h\":\"PHI\"},{\"id\":2019021126,\"est\":\"20200317 19:00:00\",\"a\":\"BUF\",\"h\":\"CAR\"},{\"id\":2019021127,\"est\":\"20200317 20:00:00\",\"a\":\"CHI\",\"h\":\"MIN\"},{\"id\":2019021128,\"est\":\"20200317 20:00:00\",\"a\":\"FLA\",\"h\":\"WPG\"},{\"id\":2019021129,\"est\":\"20200317 21:00:00\",\"a\":\"SJS\",\"h\":\"COL\"},{\"id\":2019021130,\"est\":\"20200317 22:00:00\",\"a\":\"DAL\",\"h\":\"VGK\"},{\"id\":2019021131,\"est\":\"20200317 22:30:00\",\"a\":\"MTL\",\"h\":\"LAK\"},{\"id\":2019021132,\"est\":\"20200318 19:30:00\",\"a\":\"EDM\",\"h\":\"OTT\"},{\"id\":2019021133,\"est\":\"20200318 19:30:00\",\"a\":\"PIT\",\"h\":\"NYR\"},{\"id\":2019021134,\"est\":\"20200318 22:00:00\",\"a\":\"TBL\",\"h\":\"VAN\"},{\"id\":2019021135,\"est\":\"20200318 22:00:00\",\"a\":\"VGK\",\"h\":\"ARI\"},{\"id\":2019021136,\"est\":\"20200318 22:00:00\",\"a\":\"BOS\",\"h\":\"ANA\"},{\"id\":2019021137,\"est\":\"20200319 19:00:00\",\"a\":\"NYI\",\"h\":\"TOR\"},{\"id\":2019021138,\"est\":\"20200319 19:00:00\",\"a\":\"BUF\",\"h\":\"FLA\"},{\"id\":2019021139,\"est\":\"20200319 19:00:00\",\"a\":\"CGY\",\"h\":\"NJD\"},{\"id\":2019021140,\"est\":\"20200319 19:00:00\",\"a\":\"STL\",\"h\":\"CAR\"},{\"id\":2019021141,\"est\":\"20200319 19:00:00\",\"a\":\"WSH\",\"h\":\"CBJ\"},{\"id\":2019021142,\"est\":\"20200319 20:00:00\",\"a\":\"COL\",\"h\":\"NSH\"},{\"id\":2019021143,\"est\":\"20200319 20:30:00\",\"a\":\"MIN\",\"h\":\"CHI\"},{\"id\":2019021144,\"est\":\"20200319 22:30:00\",\"a\":\"BOS\",\"h\":\"LAK\"},{\"id\":2019021145,\"est\":\"20200319 22:30:00\",\"a\":\"MTL\",\"h\":\"SJS\"},{\"id\":2019021146,\"est\":\"20200320 19:00:00\",\"a\":\"NYR\",\"h\":\"PIT\"},{\"id\":2019021147,\"est\":\"20200320 19:00:00\",\"a\":\"OTT\",\"h\":\"WSH\"},{\"id\":2019021148,\"est\":\"20200320 20:00:00\",\"a\":\"MIN\",\"h\":\"WPG\"},{\"id\":2019021149,\"est\":\"20200320 20:30:00\",\"a\":\"PHI\",\"h\":\"DAL\"},{\"id\":2019021150,\"est\":\"20200320 21:00:00\",\"a\":\"TBL\",\"h\":\"EDM\"},{\"id\":2019021151,\"est\":\"20200320 22:00:00\",\"a\":\"VAN\",\"h\":\"ANA\"},{\"id\":2019021152,\"est\":\"20200320 22:30:00\",\"a\":\"DET\",\"h\":\"ARI\"},{\"id\":2019021153,\"est\":\"20200321 14:00:00\",\"a\":\"CHI\",\"h\":\"BUF\"},{\"id\":2019021154,\"est\":\"20200321 19:00:00\",\"a\":\"CBJ\",\"h\":\"TOR\"},{\"id\":2019021155,\"est\":\"20200321 19:00:00\",\"a\":\"STL\",\"h\":\"FLA\"},{\"id\":2019021156,\"est\":\"20200321 19:00:00\",\"a\":\"NYI\",\"h\":\"NJD\"},{\"id\":2019021157,\"est\":\"20200321 19:00:00\",\"a\":\"OTT\",\"h\":\"CAR\"},{\"id\":2019021158,\"est\":\"20200321 19:00:00\",\"a\":\"MTL\",\"h\":\"COL\"},{\"id\":2019021159,\"est\":\"20200321 20:00:00\",\"a\":\"PHI\",\"h\":\"NSH\"},{\"id\":2019021160,\"est\":\"20200321 22:00:00\",\"a\":\"TBL\",\"h\":\"CGY\"},{\"id\":2019021161,\"est\":\"20200321 22:00:00\",\"a\":\"DET\",\"h\":\"VGK\"},{\"id\":2019021162,\"est\":\"20200321 22:00:00\",\"a\":\"VAN\",\"h\":\"LAK\"},{\"id\":2019021163,\"est\":\"20200321 22:30:00\",\"a\":\"BOS\",\"h\":\"SJS\"},{\"id\":2019021164,\"est\":\"20200322 12:00:00\",\"a\":\"WSH\",\"h\":\"PIT\"},{\"id\":2019021165,\"est\":\"20200322 15:00:00\",\"a\":\"NYR\",\"h\":\"BUF\"},{\"id\":2019021166,\"est\":\"20200322 17:00:00\",\"a\":\"CAR\",\"h\":\"NYI\"},{\"id\":2019021167,\"est\":\"20200322 19:00:00\",\"a\":\"NSH\",\"h\":\"CHI\"},{\"id\":2019021168,\"est\":\"20200322 19:00:00\",\"a\":\"WPG\",\"h\":\"DAL\"},{\"id\":2019021169,\"est\":\"20200322 22:00:00\",\"a\":\"ARI\",\"h\":\"LAK\"},{\"id\":2019021170,\"est\":\"20200323 19:00:00\",\"a\":\"FLA\",\"h\":\"TOR\"},{\"id\":2019021171,\"est\":\"20200323 19:00:00\",\"a\":\"CBJ\",\"h\":\"NJD\"},{\"id\":2019021172,\"est\":\"20200323 20:00:00\",\"a\":\"COL\",\"h\":\"MIN\"},{\"id\":2019021173,\"est\":\"20200323 21:00:00\",\"a\":\"SJS\",\"h\":\"CGY\"},{\"id\":2019021174,\"est\":\"20200323 21:00:00\",\"a\":\"ANA\",\"h\":\"EDM\"},{\"id\":2019021175,\"est\":\"20200323 22:00:00\",\"a\":\"VAN\",\"h\":\"VGK\"},{\"id\":2019021176,\"est\":\"20200324 19:00:00\",\"a\":\"DET\",\"h\":\"BOS\"},{\"id\":2019021177,\"est\":\"20200324 19:00:00\",\"a\":\"BUF\",\"h\":\"MTL\"},{\"id\":2019021178,\"est\":\"20200324 19:00:00\",\"a\":\"CBJ\",\"h\":\"NYR\"},{\"id\":2019021179,\"est\":\"20200324 19:00:00\",\"a\":\"NYI\",\"h\":\"PHI\"},{\"id\":2019021180,\"est\":\"20200324 19:00:00\",\"a\":\"CAR\",\"h\":\"PIT\"},{\"id\":2019021181,\"est\":\"20200324 19:00:00\",\"a\":\"STL\",\"h\":\"WSH\"},{\"id\":2019021182,\"est\":\"20200324 19:30:00\",\"a\":\"FLA\",\"h\":\"OTT\"},{\"id\":2019021183,\"est\":\"20200324 20:00:00\",\"a\":\"WPG\",\"h\":\"NSH\"},{\"id\":2019021184,\"est\":\"20200324 20:30:00\",\"a\":\"LAK\",\"h\":\"DAL\"},{\"id\":2019021185,\"est\":\"20200325 19:00:00\",\"a\":\"TOR\",\"h\":\"TBL\"},{\"id\":2019021186,\"est\":\"20200325 20:00:00\",\"a\":\"PIT\",\"h\":\"CHI\"},{\"id\":2019021187,\"est\":\"20200325 21:30:00\",\"a\":\"ANA\",\"h\":\"CGY\"},{\"id\":2019021188,\"est\":\"20200325 21:30:00\",\"a\":\"COL\",\"h\":\"EDM\"},{\"id\":2019021189,\"est\":\"20200325 22:00:00\",\"a\":\"SJS\",\"h\":\"VAN\"},{\"id\":2019021190,\"est\":\"20200325 22:30:00\",\"a\":\"ARI\",\"h\":\"VGK\"},{\"id\":2019021191,\"est\":\"20200326 19:00:00\",\"a\":\"OTT\",\"h\":\"BOS\"},{\"id\":2019021192,\"est\":\"20200326 19:00:00\",\"a\":\"FLA\",\"h\":\"MTL\"},{\"id\":2019021193,\"est\":\"20200326 19:00:00\",\"a\":\"BUF\",\"h\":\"NYI\"},{\"id\":2019021194,\"est\":\"20200326 19:00:00\",\"a\":\"NYR\",\"h\":\"WSH\"},{\"id\":2019021195,\"est\":\"20200326 19:00:00\",\"a\":\"TOR\",\"h\":\"CAR\"},{\"id\":2019021196,\"est\":\"20200326 19:30:00\",\"a\":\"PHI\",\"h\":\"DET\"},{\"id\":2019021197,\"est\":\"20200326 20:00:00\",\"a\":\"LAK\",\"h\":\"NSH\"},{\"id\":2019021198,\"est\":\"20200326 20:00:00\",\"a\":\"NJD\",\"h\":\"MIN\"},{\"id\":2019021199,\"est\":\"20200327 19:00:00\",\"a\":\"CBJ\",\"h\":\"TBL\"},{\"id\":2019021200,\"est\":\"20200327 20:00:00\",\"a\":\"LAK\",\"h\":\"STL\"},{\"id\":2019021201,\"est\":\"20200327 20:00:00\",\"a\":\"COL\",\"h\":\"WPG\"},{\"id\":2019021202,\"est\":\"20200327 20:30:00\",\"a\":\"DAL\",\"h\":\"CHI\"},{\"id\":2019021203,\"est\":\"20200327 21:00:00\",\"a\":\"SJS\",\"h\":\"EDM\"},{\"id\":2019021204,\"est\":\"20200327 22:00:00\",\"a\":\"CGY\",\"h\":\"VAN\"},{\"id\":2019021205,\"est\":\"20200328 14:00:00\",\"a\":\"PHI\",\"h\":\"NJD\"},{\"id\":2019021206,\"est\":\"20200328 13:00:00\",\"a\":\"PIT\",\"h\":\"CAR\"},{\"id\":2019021207,\"est\":\"20200328 19:00:00\",\"a\":\"FLA\",\"h\":\"BOS\"},{\"id\":2019021208,\"est\":\"20200328 19:00:00\",\"a\":\"NYI\",\"h\":\"MTL\"},{\"id\":2019021209,\"est\":\"20200328 19:00:00\",\"a\":\"TOR\",\"h\":\"OTT\"},{\"id\":2019021210,\"est\":\"20200328 19:00:00\",\"a\":\"WSH\",\"h\":\"DET\"},{\"id\":2019021211,\"est\":\"20200328 19:00:00\",\"a\":\"NYR\",\"h\":\"TBL\"},{\"id\":2019021212,\"est\":\"20200328 20:00:00\",\"a\":\"CBJ\",\"h\":\"DAL\"},{\"id\":2019021213,\"est\":\"20200328 20:00:00\",\"a\":\"BUF\",\"h\":\"MIN\"},{\"id\":2019021214,\"est\":\"20200328 21:00:00\",\"a\":\"NSH\",\"h\":\"ARI\"},{\"id\":2019021215,\"est\":\"20200328 22:00:00\",\"a\":\"ANA\",\"h\":\"VAN\"},{\"id\":2019021216,\"est\":\"20200329 12:00:00\",\"a\":\"PIT\",\"h\":\"PHI\"},{\"id\":2019021217,\"est\":\"20200329 15:00:00\",\"a\":\"CAR\",\"h\":\"NJD\"},{\"id\":2019021218,\"est\":\"20200329 15:00:00\",\"a\":\"LAK\",\"h\":\"CHI\"},{\"id\":2019021219,\"est\":\"20200329 15:00:00\",\"a\":\"VGK\",\"h\":\"WPG\"},{\"id\":2019021220,\"est\":\"20200329 19:00:00\",\"a\":\"MIN\",\"h\":\"STL\"},{\"id\":2019021221,\"est\":\"20200329 20:00:00\",\"a\":\"ANA\",\"h\":\"EDM\"},{\"id\":2019021222,\"est\":\"20200329 21:30:00\",\"a\":\"NSH\",\"h\":\"COL\"},{\"id\":2019021223,\"est\":\"20200329 22:00:00\",\"a\":\"ARI\",\"h\":\"SJS\"},{\"id\":2019021224,\"est\":\"20200330 19:00:00\",\"a\":\"WSH\",\"h\":\"BUF\"},{\"id\":2019021225,\"est\":\"20200330 19:00:00\",\"a\":\"NYR\",\"h\":\"FLA\"},{\"id\":2019021226,\"est\":\"20200330 19:00:00\",\"a\":\"NYI\",\"h\":\"CBJ\"},{\"id\":2019021227,\"est\":\"20200330 20:30:00\",\"a\":\"VAN\",\"h\":\"DAL\"},{\"id\":2019021228,\"est\":\"20200331 19:00:00\",\"a\":\"OTT\",\"h\":\"TBL\"},{\"id\":2019021229,\"est\":\"20200331 19:00:00\",\"a\":\"MIN\",\"h\":\"NYI\"},{\"id\":2019021230,\"est\":\"20200331 19:00:00\",\"a\":\"NJD\",\"h\":\"PIT\"},{\"id\":2019021231,\"est\":\"20200331 19:00:00\",\"a\":\"TOR\",\"h\":\"WSH\"},{\"id\":2019021232,\"est\":\"20200331 19:00:00\",\"a\":\"BOS\",\"h\":\"CAR\"},{\"id\":2019021233,\"est\":\"20200331 20:00:00\",\"a\":\"DET\",\"h\":\"STL\"},{\"id\":2019021234,\"est\":\"20200331 20:30:00\",\"a\":\"MTL\",\"h\":\"CHI\"},{\"id\":2019021235,\"est\":\"20200331 21:00:00\",\"a\":\"ARI\",\"h\":\"COL\"},{\"id\":2019021236,\"est\":\"20200331 21:00:00\",\"a\":\"WPG\",\"h\":\"CGY\"},{\"id\":2019021237,\"est\":\"20200331 21:00:00\",\"a\":\"VGK\",\"h\":\"EDM\"},{\"id\":2019021238,\"est\":\"20200331 22:30:00\",\"a\":\"SJS\",\"h\":\"LAK\"},{\"id\":2019021239,\"est\":\"20200401 19:30:00\",\"a\":\"PHI\",\"h\":\"NYR\"},{\"id\":2019021240,\"est\":\"20200401 20:00:00\",\"a\":\"MTL\",\"h\":\"NSH\"},{\"id\":2019021241,\"est\":\"20200401 22:00:00\",\"a\":\"DAL\",\"h\":\"ANA\"},{\"id\":2019021242,\"est\":\"20200402 19:00:00\",\"a\":\"DET\",\"h\":\"TOR\"},{\"id\":2019021243,\"est\":\"20200402 19:00:00\",\"a\":\"OTT\",\"h\":\"FLA\"},{\"id\":2019021244,\"est\":\"20200402 19:00:00\",\"a\":\"BUF\",\"h\":\"NJD\"},{\"id\":2019021245,\"est\":\"20200402 19:00:00\",\"a\":\"CHI\",\"h\":\"NYI\"},{\"id\":2019021246,\"est\":\"20200402 19:00:00\",\"a\":\"NSH\",\"h\":\"PHI\"},{\"id\":2019021247,\"est\":\"20200402 19:00:00\",\"a\":\"NYR\",\"h\":\"PIT\"},{\"id\":2019021248,\"est\":\"20200402 19:00:00\",\"a\":\"MIN\",\"h\":\"WSH\"},{\"id\":2019021249,\"est\":\"20200402 19:00:00\",\"a\":\"TBL\",\"h\":\"CBJ\"},{\"id\":2019021250,\"est\":\"20200402 20:00:00\",\"a\":\"BOS\",\"h\":\"STL\"},{\"id\":2019021251,\"est\":\"20200402 21:00:00\",\"a\":\"WPG\",\"h\":\"COL\"},{\"id\":2019021252,\"est\":\"20200402 21:00:00\",\"a\":\"VGK\",\"h\":\"CGY\"},{\"id\":2019021253,\"est\":\"20200402 22:30:00\",\"a\":\"VAN\",\"h\":\"ARI\"},{\"id\":2019021254,\"est\":\"20200402 22:30:00\",\"a\":\"DAL\",\"h\":\"SJS\"},{\"id\":2019021255,\"est\":\"20200403 19:00:00\",\"a\":\"CBJ\",\"h\":\"CAR\"},{\"id\":2019021256,\"est\":\"20200403 22:00:00\",\"a\":\"LAK\",\"h\":\"ANA\"},{\"id\":2019021257,\"est\":\"20200404 13:00:00\",\"a\":\"CHI\",\"h\":\"NYR\"},{\"id\":2019021258,\"est\":\"20200404 15:00:00\",\"a\":\"STL\",\"h\":\"COL\"},{\"id\":2019021259,\"est\":\"20200404 16:00:00\",\"a\":\"WPG\",\"h\":\"ARI\"},{\"id\":2019021260,\"est\":\"20200404 19:00:00\",\"a\":\"CAR\",\"h\":\"BOS\"},{\"id\":2019021261,\"est\":\"20200404 19:00:00\",\"a\":\"PHI\",\"h\":\"BUF\"},{\"id\":2019021262,\"est\":\"20200404 19:00:00\",\"a\":\"MTL\",\"h\":\"TOR\"},{\"id\":2019021263,\"est\":\"20200404 19:00:00\",\"a\":\"PIT\",\"h\":\"OTT\"},{\"id\":2019021264,\"est\":\"20200404 19:00:00\",\"a\":\"TBL\",\"h\":\"DET\"},{\"id\":2019021265,\"est\":\"20200404 19:00:00\",\"a\":\"WSH\",\"h\":\"FLA\"},{\"id\":2019021266,\"est\":\"20200404 19:00:00\",\"a\":\"NJD\",\"h\":\"NYI\"},{\"id\":2019021267,\"est\":\"20200404 20:00:00\",\"a\":\"MIN\",\"h\":\"NSH\"},{\"id\":2019021268,\"est\":\"20200404 22:00:00\",\"a\":\"EDM\",\"h\":\"CGY\"},{\"id\":2019021269,\"est\":\"20200404 22:00:00\",\"a\":\"VGK\",\"h\":\"VAN\"},{\"id\":2019021270,\"est\":\"20200404 22:30:00\",\"a\":\"DAL\",\"h\":\"LAK\"},{\"id\":2019021271,\"est\":\"20200404 22:30:00\",\"a\":\"ANA\",\"h\":\"SJS\"},{\"id\":2019040651,\"est\":\"20200125 20:15:00\",\"a\":\"MET\",\"h\":\"ATL\"},{\"id\":2019040652,\"est\":\"20200125 21:15:00\",\"a\":\"PAC\",\"h\":\"CEN\"},{\"id\":2019040653,\"est\":\"20200125 22:15:00\",\"a\":\"ATL\",\"h\":\"PAC\"},{\"id\":2019120001,\"est\":\"20200124 21:30:00\",\"a\":\"CWA\",\"h\":\"AWA\"}]");

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

/***/ "./pages/schedules.js":
/*!****************************!*\
  !*** ./pages/schedules.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/SeasonSchedule-20192020 */ "./data/SeasonSchedule-20192020.json");
var _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/SeasonSchedule-20192020 */ "./data/SeasonSchedule-20192020.json", 1);
/* harmony import */ var _data_franchise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/franchise */ "./data/franchise.json");
var _data_franchise__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/franchise */ "./data/franchise.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/stefka1210/theLab/nextOne/pages/schedules.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MatchList = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "schedules__MatchList",
  componentId: "sc-1f0vohs-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;"]);
const FranLogo = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img.withConfig({
  displayName: "schedules__FranLogo",
  componentId: "sc-1f0vohs-1"
})(["position:absolute;:first-child{left:0px;}:last-child{right:0px;}width:25%;height:25%;transform:scale(1);transition:transform 300ms ease-in-out;z-index:11;svg{height:100%;width:100%;}"]);
const Match = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "schedules__Match",
  componentId: "sc-1f0vohs-2"
})(["background:#ccc;height:240px;display:flex;align-items:center;justify-content:center;cursor:pointer;&:hover{background:#9a9a9a;color:white;", "{transform:scale(1.2);transition:transform 300ms ease-in-out;}}"], FranLogo);
const ATag = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "schedules__ATag",
  componentId: "sc-1f0vohs-3"
})(["position:relative;display:flex;align-items:center;justify-content:center;text-transform:none;color:inherit;text-decoration:none;width:100%;height:100%;"]);
const TeamName = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "schedules__TeamName",
  componentId: "sc-1f0vohs-4"
})(["font-size:2rem;font-weight:700;"]);
const Meta = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "schedules__Meta",
  componentId: "sc-1f0vohs-5"
})(["display:flex;font-size:1rem;padding:0px 30px;align-items:center;"]);

const getTeamLogo = short => {
  const teamId = _data_franchise__WEBPACK_IMPORTED_MODULE_3__.teams.find(x => x.abbreviation === `${short}`).id;
  const shortUpped = short.toUpperCase();
  const logoFileName = `${teamId}_${shortUpped}.svg`;
  return logoFileName;
};

const Schedules = props => {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "NHL Schedules"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, props.searchDate), __jsx(MatchList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, props.matches.map(match => __jsx(Match, {
    key: match.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/match/[id]",
    as: `/match/${match.id}`,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(ATag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(FranLogo, {
    src: `/logos/${getTeamLogo(match.a)}`,
    alt: "img-franlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(TeamName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, match.a), __jsx(Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "@"), __jsx(TeamName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, match.h), __jsx(FranLogo, {
    src: `/logos/${getTeamLogo(match.h)}`,
    alt: "img-franlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  })))))));
};

Schedules.getInitialProps = async function () {
  const data = _data_SeasonSchedule_20192020__WEBPACK_IMPORTED_MODULE_2__; // search matches in eastern-time "Today"

  const date = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };
  options.timeZone = 'America/New_York';
  const easterndate = new Intl.DateTimeFormat('de-DE', options).format(date); // console.log('easternSearchdate:::', easterndate);

  const year = easterndate.slice(6, 10);
  const month = easterndate.slice(0, 2);
  const day = easterndate.slice(3, 5);
  const searchDate = year + month + day;
  console.log('easternDate:::', searchDate);
  const matchesOnDate = Object.values(data).filter(entry => {
    return entry.est.indexOf(searchDate) > -1;
  });
  return {
    matches: matchesOnDate,
    searchDate: searchDate
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Schedules);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/schedules.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stefka1210/theLab/nextOne/pages/schedules.js */"./pages/schedules.js");


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
//# sourceMappingURL=schedules.js.map