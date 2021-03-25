// 负责文章模块的路由
import express from 'express';

const router = express.Router();

// 创建内容
router.post('/posts')
// 获取内容
// router.get('/posts')

export default router;