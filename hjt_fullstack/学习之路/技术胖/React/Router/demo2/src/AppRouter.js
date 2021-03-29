import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import Demo from './pages/video/index';
import List from './pages/list/index';
import './AppRouter.css';

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="demo">Demo</Link></li>
                        <li><Link to="list">列表</Link></li>
                    </ul>
                </div>
                <div className="rightNav">
                    <Route path="/" exact component={Index} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/list" component={List} />
                </div>
            </div>
        </Router>
    )
}

export default AppRouter