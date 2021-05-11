# webpack配置
1. 进入项目生成package.json
    - npm init -y
2. 安装脚手架
    - npm i --save webpack webpack-cli
3. 执行命令
    - npx webpack
4. 配置package.json
    - "scripts":{
        "build":"webpack --config webpack.config.js"
    }
5. 执行webpack
    - npm run build

# 配置内容
1. entey 入口文件
2. output 出口路径
3. mode: 模式，生产环境配置
    - development 生产环境，代码不压缩
    - production 线上环境，代码都进行压缩

# webpack 自带服务器webpack-dev-server
1. 安装
    - npm i --save webpack-dev-server
2. 配置dev
    - "scripts":{
        "dev":"webpack-dev-server"
    }
3. 配置webpak
4. 配置proxy实现跨域
    - //跨域
        proxy: {
            '/api': {
                target: 'http://vueshop.glbuys.com/api', // 域名
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要rewrite的,
                }
            }
        }

# HTML模班插件
1. html-webpack-plugin