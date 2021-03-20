nvm 一台电脑node 多版本 作业

- vite 正在干掉webpack
 快 vue3

 ：3001 前端项目 react
 - ：3000  music sdk API
    跨域访问 端口不一样也叫跨域
 - 前后端分离
    ：3000/banner展示到页面上
    [{
        imageUrl:
    }]
    1. axios 从后端到前端src/api :3000/banner
        - 
    2. store action getBannerList
        - 调用axios 
    3. 组件
        - 将单一状态树引入组件开发流程
        - 安装
            - redux-thunk 是支持异步action操作的中间件
        - 目录 store
            - export default store
            - createStore(reducer)
            - reducer 比较复杂的，可以是模块化的
            - applyMiddlewares 中间件服务 redux-thunk redux-log...
    4. reducer 业务
        - 形式
            - 纯函数  返回状态
        - 放哪里
            - /store
    
    store 提供给 Provider  -> App 组件  connect({state,dispatch})(Component) HOC
    c