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
/* harmony export */   "dateFmt": () => (/* binding */ dateFmt)
/* harmony export */ });
/*
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-20 15:34:58
 * @return: 
 */


/**
 * 格式化日期显示
 * @param {*} time 时间
 * @param {string} fmt 传入格式化标签：YYYY-MM-DD HH:mm:ss 
 * @returns {string} fmt 返回的时间字符串： YYYY-MM-DD HH:mm:ss 
 */
function dateFmt(time, fmt = 'YYYY-MM-DD HH:mm:ss') {
    if (time == null) {
        return '--'
    }
    //获取日期时区设置, 以时区 8 为标准
    let areaHourList = time.toString().match(/000\+0([0-9])00/)
    let areaHour = 0
    if (areaHourList) {
        areaHour = 8 - areaHourList[1]
    }
    //处理IOS下可能存在的时间bug
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