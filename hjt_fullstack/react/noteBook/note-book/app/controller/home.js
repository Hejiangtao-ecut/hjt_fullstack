'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: '标题栏'
    })
  }
  async test() {
    const { ctx } = this
    ctx.body = '测试接口'
  }
  async list() {
    const { ctx } = this;
    // 往数据库取数据返回给客户端
    const result = await ctx.service.diary.list();
    if (result) {
      ctx.body = {
        status: 200,
        data:result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg:'获取失败'
      }
    }

  }
}

module.exports = HomeController;