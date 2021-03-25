import express from 'express';  // es6
import * as postController from './post.controller';
const router = express.Router(); // expressAPI  得到路由实例
// restful   某一篇文章
// 模块化  只负责定义路由, 
router.get('/posts/:postId', postController.show); // MVC  数据库与视图层直接相连

export default router;