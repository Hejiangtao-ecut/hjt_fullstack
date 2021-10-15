const express = require('express');
const app = express();
app.listen(8001, _ => {
    console.log("端口：8001");
});

app.get('/list', (req, res) => {
    const { callback = Function.prototype } = req.query;  // 当不存在时赋空函数Function.prototype，不引发报错
    const data = {  // 返回的数据
        code: 1,
        msg: '返回的数据'
    }
    res.send(`${callback}(${JSON.stringify(data)})`);
    console.log('数据已返回');
})