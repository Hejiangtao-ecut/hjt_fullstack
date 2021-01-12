# js 常考考点
es6/ 红宝书 你不知道的js leetcode
单线程语言，数据通信相关
1. npm init -y 初始化项目
2. npm i json-server
    - 怎么启动json-server 使db.json成为数据源
        - "scripts": {"server:json":"json-server --watch db.json"},
        - npm run server:json
    - json-server  提供HTTP服务
3. db.json 数据文件
    - json 是js前端和后端通信的数据文件
4. postman 可以用来做HTTP访问代理
5. ajax 的表达
    - JS 最重要的考点 XMLHttpRequest 对象
    - 历史性突破，带来前端主动请求数据的能力， 微博Ajax应用
    - ajax + DOM  页面变得丰富，动态
    - http://localhost:3000/user 一切皆资源 restfull 
    - 数据请求 GET PATH/USERS []
    - POST 数据新增
6. 前端加后端
    - 前端 live-server 前端服务
    - 后端 json-server 后端数据
    - 实现前端和后端数据通信

7. XMLHttpRequest ActiveXObjece("Microsoft.XMLHTTP")
    - 浏览器嗅探 if else
    - 创建对象  request  response
    - .open('GET',url,true) 打开一个请求通道
    - .send() 请求发送出去
    - . onreadystatechange 监听请求是否完成
    - XMLHttpReque.DONE  完成了
    - JSON.parse(httpRequest.responseText)  返回的数据进行格式处理
    - json 数组 -> html 数组 map `<li>信息</li>`  innerHTML.join()
