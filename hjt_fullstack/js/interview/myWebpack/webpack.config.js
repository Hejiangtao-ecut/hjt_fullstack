// 引入路径模块，方便文件操作
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'demo',
            template: path.resolve(__dirname, 'public/index.html'),
            filename:'index.html'
        })
    ]

}