// app创建以及基本配置  中间件
// es6 module typescript=> => js  
import express from 'express';
const bodyParser = require('body-parser');
import postRouter from '../post/post.router'
import { defaultErrorHandler } from './app.middleware';
const app = express();
app.use(bodyParser.urlencoded());
//app 处于伺服状态 eventEmitter 
//body 加中间件 bodyParser
//中间件来处理 函数
//所有的路由都在这里汇总
app.use(
    //文章模块的路由
    postRouter,
    //用户路由
)
//处理各种错误
// app.use(defaultErrorHandler);
export default app;