// 引入http
const http = require('http');
// 设置主机名
const hostName = '127.0.0.1';
// 端口
const port = 8080;
var server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello nodejs");
});
server.listen(port, hostName, function () {
    console.log(`服务器运行在http://${hostName}:${port}`);
});