const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const ctx = this.ctx;    // 拿到上下文
        const query = { limit: 10, offset: 0 }   // 第一页的0~10条数据
        ctx.body = await ctx.model.User.findAll(query); // 创建数据的查询语句
    }
    async create() {
        const ctx = this.ctx;
        const { name, age } = ctx.request.body
        const user = await ctx.model.User.create({ name, age})
        ctx.status = 201;
        ctx.body = user;
    }
}
module.exports = UserController;