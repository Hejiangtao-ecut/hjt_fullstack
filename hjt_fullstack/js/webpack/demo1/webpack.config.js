// 与parcel的不同，配置繁琐
// 当运行npm run build
// 去根目录下找到webpack.config.js 配置文件
// module node 模块化 common.js
module.exports = {
    entry:'./main.js', //入口
    output:{    // 出口
        filename:'bundle.js'
    }
}