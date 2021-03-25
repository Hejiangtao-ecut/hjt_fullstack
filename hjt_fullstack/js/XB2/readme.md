- express @types/express
- yarn add typescript tsc-watch  实时监听改变  编译ts->js
- tsconfig.json
- tsc-watch 会帮助编译dist目录

- 引入express
- 引入ts写node，模块化更优异
1. 使用express创建web后端服务，借助ts，全面化es6
2. 创建路由中间件，使用express自带的路由
3. 用户通过路由来到服务器，控制器接管
4. 控制器拿到用户请求和用户响应对象，将查询参数返回给用户
5. 以上都模块化，一个文件一个模块，post 目录模块

- .env 放着配置 -> docenv自动读取 -> 模块化config目录 -> app