import { PostModel } from "./post.model";
/**
 * 新增数据
 * post {}
 * return message
 */
export const createPost = (post:PostModel) => {
    const statement = `
    INSERT INTO post
    SET ?
    `;
}