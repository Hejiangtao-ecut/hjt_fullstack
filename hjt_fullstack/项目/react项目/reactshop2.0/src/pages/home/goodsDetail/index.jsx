// 商品详情页
import React, { Component } from 'react';
import '../../../assets/css/home/details.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import config from '../../../assets/js/conf/config';
// 懒加载组件
const Item = React.lazy(() => import('./item'));
const Content = React.lazy(() => import('./content'));
const Review = React.lazy(() => import('./review'));

export default function GoodsDetail(props) {
    return (
        <React.Fragment>
            {/* 头部 */}
            <div className='details-header'>
                {/* 返回按钮 */}
                <div className="backIcon"></div>
                {/* 顶部分类 */}
                <div className="tab-wrap">
                    <div className="tab-name action">商品</div>
                    <div className="tab-name">详情</div>
                    <div className="tab-name">评价</div>
                </div>
                {/* 购物车图标 */}
                <div className="cartIcon"></div>
            </div>

            {/* 子路由页面 */}
            <div className="sub-page">
                <Switch>
                    <React.Suspense fallback={<div>loading</div>}>
                        <Route path={config.path + "goods/details/item"} component={Item} />
                        <Route path={config.path + "goods/details/content"} component={Item} />
                        <Route path={config.path + "goods/details/review"} component={Item} />
                        <Redirect to={config.path + "goods/details/item"} />
                    </React.Suspense>
                    
                </Switch>
            </div>
        </React.Fragment>
    )
}