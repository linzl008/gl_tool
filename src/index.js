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
export function dateFmt(time, fmt = 'YYYY-MM-DD HH:mm:ss') {
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
/**
 * 将obj {key: val} 转换成 ?key=val
 * @param {*} params 
 * @returns {string}
 */
export function toStringURLParams(params) {
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
 * 获取url上对应key的val
 * @param {*} key key
 * @returns {string|null} str 返回字符串或者null
 */
export function getUrlParam(key) {//封装方法
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
 * 数字格式化
 * @param {string|number} input 输入数据
 * @param {*} fixed 保留位数
 * @returns number
 */
export function numFix(input, fixed = 4) {
    if (input === null || input === undefined || isNaN(Number(input))) {
        return '--'
    }
    if (input === 0 || input === '0') {
        return input
    }

    return Math.round(Number(input) * Math.pow(10, fixed)) / Math.pow(10, fixed);
}
/**
 * 显示百分比数据
 * @param num 输入数据
 * @returns {number}
 */
export function showPerNum(num) {
    if (num === null || num === undefined || isNaN(Number(input))) {
        return '--';
    } else {
        return (num * 100).toFixed(2)
    }
}

/**
 * 校验手机号
 * @param {*} value 输入字符串
 * @returns {boolean} 返回是否是手机号
 */
export function checkPhone(value) {
    if (isEmpty(value)) return false;
    if (!/^1\d{10}$/.test(value)) return false;
    return true;
}
/**
 * 检验时候是空值，null, undefined,""
 * @param {*} val 输入变量
 * @returns {Boolean} 是否空
 */
export function isEmpty(val) {
    return val === undefined || val === null || val === "";
}
// module.exports = {
//     dateFmt
// }
// export default {
//     dateFmt
// }