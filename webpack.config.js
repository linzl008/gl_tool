/*
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-20 18:00:38
 * @return: 
 */
const path = require("path")
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    entry: {
        "gl_tool":'./src/index.js',
        "gl_tool.min":'./src/index.js',
    },
    output: {
        libraryTarget: "umd",  //一般都会选择umd
        filename: "[name].js",
        path: path.resolve(__dirname, './dist/umd'),
        library: "gl_tool",
        libraryExport: "default" 
    },
    mode: "none",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.min.js$/
            })
        ]
    }
};