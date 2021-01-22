# 进阶的开发方式
1. parcel
2. webpack
    - 面试的重灾区
    - 工作流程
        1. build dev
            - 打包编译 
            - dist 上线目录
            - dev src/ 开发阶段
        2. 入口文件 index.html  通过入口文件不断引入别的文件
3. main.js -> bundle.js
    - js 有很多版本，部分老的浏览器不支持新版本，就需要编译一下
    - 就像stylus 好多浏览器不支持，编译成 CSS
    - 现在都可以用 webpack 来执行代码工艺
        - webpack --mode=development
        - 进入 webpack.config.js 配置文件进行编译