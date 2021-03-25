// 项目的启动
import app from './app'; // 模块化
// app 路由，上传文件，json化... 交给app去做

// 数据库连接

// 启动web服务
app.listen(1234, () => {
    console.log("服务启动！")
})