/*
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-20 15:40:09
 * @return: 
 */
const path = require('path')
const pathurl = path.resolve(__dirname, "../src/index.js")
const tool = require( "../dist/index.js")
console.log({tool});
test("测试dateFmt函数", ()=>{
    console.log({tool});
    expect(tool.dateFmt("2012/11/11")).toBe('2012-11-11 00:00:00')
})