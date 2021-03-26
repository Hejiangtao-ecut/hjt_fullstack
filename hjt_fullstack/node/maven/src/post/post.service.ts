import { PostModel } from "./post.model";
import { connection } from '../app/database/mysql';
/**
 * 新增数据
 * post {}
 * return message
 */
export const createPost =async (post:PostModel) => {
    const statement = `
    INSERT INTO post
    SET ?
    `;

    // 读操作应该多走缓存
    // 写操作走数据库
    // list select 走 redis
    const [data] = await connection.promise().query(statement,post)
}