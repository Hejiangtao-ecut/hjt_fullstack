const koa = require('koa');
const mount = require('koa-mount');
// 静态  static -> cdn
const static = require('koa-static');
const fs = require('fs');
const serve = require('koa-static');

const app = new koa();

app.use(serve(__dirname + '/static'));
app.use(
    mount('/', ctx => {
        ctx.body = fs.readFileSync(__dirname+'/max_count.html','utf-8');
    })
)

app.listen(1234);