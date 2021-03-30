/**
 * 路由配置页面
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index';
import Content from './pages/Content';
import Load from './pages/Loading';
import Search from './pages/Search';
import Show from './pages/Show';

/**
 * 路由配置
 */
function AppRouter() {
    return (
        <Router>
            {/* 首页 */}
            <Route path='/' exact component={Index} />  
            {/* 书籍内容页面 */}
            <Route path='/content/:id' component={Content} />
            {/* 登录页面  */}
            <Route path='/load/' component={Load} />
            {/* 搜索页面 */}
            <Route path='/search/:bookName' component={Search} />
            {/* 副首页 书籍分类展示页 */}
            <Route path='/show/' component={Show} />
        </Router>
    )
}

export default AppRouter;
