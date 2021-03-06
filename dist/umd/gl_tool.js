(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gl_tool"] = factory();
	else
		root["gl_tool"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateFmt": () => (/* binding */ dateFmt),
/* harmony export */   "toStringURLParams": () => (/* binding */ toStringURLParams),
/* harmony export */   "getUrlParam": () => (/* binding */ getUrlParam),
/* harmony export */   "numFix": () => (/* binding */ numFix),
/* harmony export */   "showPerNum": () => (/* binding */ showPerNum),
/* harmony export */   "checkPhone": () => (/* binding */ checkPhone),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty)
/* harmony export */ });
/*
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-20 15:34:58
 * @return: 
 */


/**
 * ?????????????????????
 * @param {*} time ??????
 * @param {string} fmt ????????????????????????YYYY-MM-DD HH:mm:ss 
 * @returns {string} fmt ??????????????????????????? YYYY-MM-DD HH:mm:ss 
 */
function dateFmt(time, fmt = 'YYYY-MM-DD HH:mm:ss') {
    if (time == null) {
        return '--'
    }
    //????????????????????????, ????????? 8 ?????????
    let areaHourList = time.toString().match(/000\+0([0-9])00/)
    let areaHour = 0
    if (areaHourList) {
        areaHour = 8 - areaHourList[1]
    }
    //??????IOS????????????????????????bug
    if (time.toString().includes('-')) {
        time = time.replace(/-/g, '/').replace('T', ' ').replace(/\.000\+0[0-9]00/, '')
    }
    time = new Date(time).getTime() + areaHour * 60 * 60 * 1000
    time = new Date(time)
    let year = time.getFullYear();
    let month = (time.getMonth() + 1).toString().padStart(2, 0);
    let day = (time.getDate()).toString().padStart(2, 0);
    let hours = (time.getHours()).toString().padStart(2, 0);
    let min = (time.getMinutes()).toString().padStart(2, 0);
    let sec = (time.getSeconds()).toString().padStart(2, 0);
    fmt = fmt.replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', min)
        .replace('ss', sec)
    return fmt;
}
/**
 * ???obj {key: val} ????????? ?key=val
 * @param {*} params 
 * @returns {string}
 */
function toStringURLParams(params) {
    let str = "?"
    for (let key in params) {
        if (params[key] !== null && params[key] !== undefined) {
            str += `${key}=${(params[key])}&`
        }
    }
    str = str.substring(0, str.length - 1)
    return str;
}

/**
 * ??????url?????????key???val
 * @param {*} key key
 * @returns {string|null} str ?????????????????????null
 */
function getUrlParam(key) {//????????????
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return "";
}
/**
 * ???????????????
 * @param {string|number} input ????????????
 * @param {*} fixed ????????????
 * @returns number
 */
function numFix(input, fixed = 4) {
    if (input === null || input === undefined || isNaN(Number(input))) {
        return '--'
    }
    if (input === 0 || input === '0') {
        return input
    }

    return Math.round(Number(input) * Math.pow(10, fixed)) / Math.pow(10, fixed);
}
/**
 * ?????????????????????
 * @param num ????????????
 * @returns {number}
 */
function showPerNum(num) {
    if (num === null || num === undefined || isNaN(Number(input))) {
        return '--';
    } else {
        return (num * 100).toFixed(2)
    }
}

/**
 * ???????????????
 * @param {*} value ???????????????
 * @returns {boolean} ????????????????????????
 */
function checkPhone(value) {
    if (isEmpty(value)) return false;
    if (!/^1\d{10}$/.test(value)) return false;
    return true;
}
/**
 * ????????????????????????null, undefined,""
 * @param {*} val ????????????
 * @returns {Boolean} ?????????
 */
function isEmpty(val) {
    return val === undefined || val === null || val === "";
}
// module.exports = {
//     dateFmt
// }
// export default {
//     dateFmt
// }
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});