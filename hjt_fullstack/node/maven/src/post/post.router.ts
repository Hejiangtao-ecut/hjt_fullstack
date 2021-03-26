// 负责文章模块的路由
import express from 'express';
import * as postController from './post.controller';
import { authGard} from '../auth/auth.middleware'

const router = express.Router();

// 检查有没有登录
// 创建内容
router.post('/posts', authGard, postController.store);
// router.post('/posts', postController.store);
// 获取内容
// router.get('/posts')

export default router;