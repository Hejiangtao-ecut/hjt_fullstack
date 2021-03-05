const Koa = require('koa');
const app = new Koa();
// 启用中间件
// node server 基本思路

app.use(async (ctx) => {
    // ctx 是require response 合集
    // ctx.body = 'hello world';
    if (ctx.url == '/index') {
        // 设置cookies
        // 服务器端设置，种在服务端
        // 之后每次客户端会带着cookies发送请求
        ctx.cookies.set('uid', '123123', {
            // 域名设定 更安全
            domain: '127.0.0.1',
            path: '/index',
            httpOnly:false,  // web 安全
            maxAge: 1000 * 60 * 60 * 24  // cookies 最大的生命值，一天
            // expires:new Date('2020-1-1')  //过期时间，相当于删除这个cookies
        });
        ctx.body = '/index';
    } else if (ctx.url == '/') {
        if (ctx.cookies.get(uid)) {
            ctx.body = ctx.cookies.get('uid');
        } else {
            ctx.type = 'text/html;charset=utf-8';
            ctx.body = 'Cookie is none';
        }
    }
})

app.listen(3000, () => {
    console.log('server is starting at port 3000')
})