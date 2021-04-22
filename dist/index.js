/*
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-20 18:12:22
 * @return: 
 */
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/gl_tool.min.js');
} else {
  module.exports = require('./umd/gl_tool.js');
}