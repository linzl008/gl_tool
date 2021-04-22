/*
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-20 15:40:09
 * @return: 
 */
const path = require('path')
import { dateFmt } from "../src/index.js" 
test("测试dateFmt函数", () => { 
    expect(dateFmt("2012/11/11")).toBe('2012-11-11 00:00:00')
})