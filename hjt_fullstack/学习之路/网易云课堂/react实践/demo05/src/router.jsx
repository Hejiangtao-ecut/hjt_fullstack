import './App.css';
import React,{lazy,Suspense} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// 组件导入的时候进行懒加载，配合路由实现路由的懒加载
const Index = lazy(()=>import('./pages/Index'));
const MyInfo = lazy(() => import('./pages/MyInfo'));
const Details = lazy(() => import('./pages/MyInfo/details'));

function Router() {
  return (
    <React.Fragment>
      {/* 引入router */}
      <BrowserRouter>
        {/* 因为里面要启动多个route，所有要再包裹一层 */}
        <React.Fragment>
          {/* 实现路由懒加载 */}
          <Suspense fallback={<div></div>}>
            <Route path='/' exact component={Index}></Route>
            <Route path='/My' exact component={MyInfo}></Route>
            {/* 路由写死了，不实用 */}
            {/* <Route path='/My/details/:id/:title' component={Details}></Route> */}
            <Route path='/My/details' component={Details}></Route>
          </Suspense>
          
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Router;
