// app 的创建以及基本配置
import express from 'express';
import postRouter from '../post/post.router'
import * as postController from '../post/post.controller';


const app = express();
// app 处于侍服状态
// 中间件打理 函数
// body处理要加中间件 bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
// 所有的路由都在这汇集
app.use(
    // 文章模块的路由
    // 增删改查
    postRouter,
    postController.store
)

export default app;