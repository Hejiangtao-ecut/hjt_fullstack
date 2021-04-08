// 路由配置页面
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Index';
import BookShelf from './pages/BookShelf';
import List from './pages/List';
import Load from './pages/Load';

function AppRouter(props) {
    return (
        <Router>
            {/* 首页 */}
            <Route path='/' exact component={Index} />
            {/* 书架 */}
            <Route path='/bookshelf/' component={BookShelf} />
            {/* 书籍清单 */}
            <Route path='/list/:id' component={List} />
            {/* 登录页 */}
            <Route path='/load/' component= {Load} />
        </Router>
    )
}

export default AppRouter