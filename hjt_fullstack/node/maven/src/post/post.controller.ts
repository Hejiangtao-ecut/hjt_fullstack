import { Request, Response } from 'express';  // 来自@types/express
import { createPost } from './post.service';

export const store = async (req: Request, res: Response) => {
    // console.log(req.body, '---------------------'); 
    // 解构
    const { name, nickname } = req.body;
    // console.log(name);
    const data = await createPost({ name, nickname })
    res.status(201).send('保存成功');
}