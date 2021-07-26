// 引入express服务
const express = require('express');
// 引入mockjs，实现数据来自后端(也可以直接monodb，但是不想起太多服务，带不动)
const Mock = require('mockjs');

// 实例化,并交给app掌控
const app = express();
// 利用mockjs进行random数据，解放自己mock数据的时间
const Random = Mock.Random

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
    const data = [];
    for (let i = 0; i < nums; i++){
        data.push(Mock.mock({
            id: '',
            title: Random.cparagraph(1),
            content: Random.cparagraph(2, 5),
        }))
    }

    // 请求data
    res.json(data);
    
})

// 启动后台服务
app.listen(1234, () => {
    console.log('Server start！ port：1234');
})