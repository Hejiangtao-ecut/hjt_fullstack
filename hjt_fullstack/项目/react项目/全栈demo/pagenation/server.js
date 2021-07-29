// 引入express服务
const express = require('express');
// 引入mockjs，实现数据来自后端(也可以直接monodb，但是不想起太多服务，带不动)
const Mock = require('mockjs');

// 实例化,并交给app掌控
const app = express();
// 利用mockjs进行random数据，解放自己mock数据的时间
const Random = Mock.Random

// 做一个中间件拦截
app.all('*', (req,res,next) => {
    // 所有的请求都会进入这个all拦截，进行一次处理

    // 因为前后端不在一起，需要设置允许跨域
    // Access-Control-Allow-Origin，标识允许哪个域的请求
    // 星号表示全部通过跨域请求
    res.header('Access-Control-Allow-Origin', '*');
    // 允许的请求头字段
    res.header('Access-Control-Request-Headers', 'Content-Type');
    // 允许的请求头字段
    res.header('Access-Control-Request-Method', '*');
    // 设置跨域的方式和编码方式
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();  
})

// 功能部分
// 获取文章列表
app.get('/posts', (req, res) => { // req 接收页数和页码，res进行生产数据

    // 定义数据
    // let data = Mock.mock({
    //     id: '',
    //     /**
    //      * 标题,随机生成一个段落
    //      * string
    //      */
    //     title: Random.cparagraph(1),
    //     /**
    //      * 内容
    //      * string
    //      */
    //     content: Random.cparagraph(2, 5),
    //     /**
    //      * 发布时间
    //      * data
    //      */
    //     time: Random.datetime('yyyy-mm-dd hh:mm:ss'),
    //     /**
    //      * 作者
    //      * string
    //      */
    //     author: Random.cname(),
    //     /**
    //      * 喜欢数，1-1000
    //      * number
    //      */
    //     "like|1-10000":1
    // })

    // 数据量
    let nums = 100;
    let data = [];
    for (let i = 0; i < nums; i++){
        data.push(Mock.mock({
            id: i,
            title: Random.cparagraph(1),
            content: Random.cparagraph(2, 5),
            time: Random.datetime('yyyy-mm-dd hh:mm:ss'),
            author: Random.cname(),
            "like|1-10000":1
        }))
    }

    // 因为没有数据库查询，所以需要手动设置分页
    // 获取当前页码，每一页数据量，总页数
    // 前端传过来可能会是一个字符串，所以需要转成数字，同时有可能不传，就要设置默认值
    let prePageNumber = Number.parseInt(req.query.prePageNumber ? req.query.prePageNumber : 3);
    let currentPage = Number.parseInt(req.query.currentPage ? req.query.currentPage : 1);
    let totalPage = Math.ceil(data.length / prePageNumber);

    // 分页截取
    let start = (currentPage - 1) * prePageNumber;
    data = data.splice(start, prePageNumber);

    // 请求data的时候将data输出出去
    res.json({content:data, currentPage, totalPage});
    
})

// 启动后台服务
app.listen(1236, () => {
    console.log('Server start！ port：1234');
})