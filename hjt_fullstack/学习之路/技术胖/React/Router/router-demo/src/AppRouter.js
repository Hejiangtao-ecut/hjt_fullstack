import React from 'react';
// Router 路由器  Route 线路  link 组件跳转
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Index';
import List from './pages/List';
import Home from './pages/Home'

// 出现列表页面方法
// 1.设置规则
// 2.传递值
// 3.接受值
// 4.显示值

function AppRouter() {
    return (
        // 路由配置
        <Router>
            <ul>
                {/* <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li> */}
                {/* 路线配置 */}
                {/* exact 精确匹配，否则后面跳转只要有/就会进入首页，无法访问别的页面 */}
                <Route path="/" exact component={Index} />
                <Route path="/list/:id" component={List} />
                <Route path="/home/" component={Home} />
            </ul>
        </Router>
    )
}

export default AppRouter