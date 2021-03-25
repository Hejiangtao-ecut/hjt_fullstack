//越大的项目,越要模块化 
import app from './app'; //封装过的   
import {APP_PORT} from './app/app.config';
//超强的模块化(企业级)
import {connection} from './app/database/mysql';

connection.connect(error => {
    if(error) {
        console.log('连接数据库服务失败', error.message);
        return ;
    }
    console.log('成功连接到数据库服务');
})

app.listen(APP_PORT,()=>{
    console.log('服务已启动');
})   