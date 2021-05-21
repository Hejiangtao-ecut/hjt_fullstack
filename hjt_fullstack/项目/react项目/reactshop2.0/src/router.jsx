// 最外层交给路由管理，负责整个页面的导向

import React,{lazy,Suspense} from 'react';
import { HashRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
// 引入路由认证模块
import PrivateRouter from './pages/routes/private';
import config from './assets/js/conf/config';


// 页面导入
// 使用懒加载
const Index = lazy(() => import('./pages/home/index'));

export default function AppRouter() {
  return (
    <React.Fragment>
      {/* 引入路由 */}
      <Router>
        <React.Fragment>
          <Switch>
            {/* 启用路由的懒加载 */}
            <Suspense fallback={<div>loading...</div>}>
              <Route path={config.path + 'home/'} component={Index} />
              
              <Redirect to={config.path + 'home/index'} />
            </Suspense>
          </Switch>
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}
