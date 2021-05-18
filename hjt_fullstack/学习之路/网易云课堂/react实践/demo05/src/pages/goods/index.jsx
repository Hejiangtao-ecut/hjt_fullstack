import React, {lazy,Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import IndexNav from './indexNav';

const Item = lazy(() => import('./item'));
const Detail = lazy(() => import('./detail'));
const Review = lazy(() => import('./review'));

export default function Goods(props) {
    
    return (
        <div>
            <button onClick={() => { props.history.goBack() }}>返回</button>
            <IndexNav />
            <React.Fragment>
                {/* 路由嵌套配置 */}
                {/* 嵌套路由必须以主路由开始 */}
                <Switch>
                    <Suspense fallback={<div>Loading</div>}>
                        <Route path="/goods/item" component={Item} />
                        <Route path="/goods/detail" component={Detail} />
                        <Route path="/goods/review" component={Review} />
                        <Redirect to="/goods/item" />
                    </Suspense>
                    
                </Switch>
            </React.Fragment>
        </div>
    )
}