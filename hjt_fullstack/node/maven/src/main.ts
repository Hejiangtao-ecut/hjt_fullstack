// 项目的启动
import app from './app'; // 模块化
import { connection } from './app/database/mysql';
import { APP_PORT } from './app/app.config';
// app 路由，上传文件，json化... 交给app去做

// 数据库连接

// 启动web服务
app.listen(APP_PORT, () => {
    console.log("服务启动！")
})
 
connection.connect(error => {
    if (error) {
        console.log('链接数据库失败', error.message);
        return;
    }
    console.log('链接数据库成功')
})