//webpack是node写出来的使用node语言
//路径
let path=require('path');
// console.log(path.resolve('dist'));
module.exports={
    //模式 默认两种production(生产环境:代码压缩) development(开发环境:代码不压缩)
    mode: "production",
    entry:'./src/index.js',//入口
    output: {
        filename: "bundle.js",//打包后的文件名
        path: path.resolve('dist')//路径必须是一个绝对路径
    },
    devServer: {//开启服务器配置
        port:8080,//端口，
        host:"localhost",//ip地址:localhost本地，0.0.0.0可以访问网络地址
        progress:true,//开启进度条
        contentBase:"./dist",//默认打开目录
        open:true, //自动打开浏览器,
        compress:true,//启动gzip压缩
        //跨域
        proxy: {
            '/api': {
                target: 'http://vueshop.glbuys.com/api',
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要rewrite的,
                }
            }
        }
    }
}
