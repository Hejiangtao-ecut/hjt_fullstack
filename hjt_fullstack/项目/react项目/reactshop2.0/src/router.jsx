// 最外层交给路由管理，负责整个页面的导向

import React,{lazy,Suspense} from 'react';
import { HashRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
// 引入路由认证模块
// import PrivateRouter from './routes/private';
import config from './assets/js/conf/config';


// 页面导入
// 使用懒加载
const Index = lazy(() => import('./pages/home/index'));
const GoodsClassify = lazy(() => import('./pages/home/goods/index'));
const SearchGoods = lazy(() => import('./pages/home/searchGoods/index'));
const GoodsDetail = lazy(() => import('./pages/home/goodsDetail/index'));

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
              <Route path={config.path + 'goods/classify'} component={GoodsClassify} />
              <Route path={config.path + 'goods/search'} component={SearchGoods} />
              <Route path={config.path + 'goods/details'} component={GoodsDetail} />
              
              <Redirect to={config.path + 'home/index'} />
              {/* <Redirect to={config.path + 'goods/details'} /> */}
            </Suspense>
          </Switch>
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}
