// 返回一个app
// require commonjs
// ts es5模块化没有问题
import express from 'express';  //  es6
// 引用路由模块
import postRouter from '../post/post.router';
const app = express();

// 启用中间件 资源在哪里
app.use(
    postRouter  /*文章路由*/
)
export default app;