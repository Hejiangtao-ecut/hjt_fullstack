// 商品分类页面
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import '../../../assets/css/goods/goods.css';
import config from '../../../assets/js/conf/config';

// 懒加载组件
const Items = React.lazy(() => import('./items'));

export default function GoodsClassify(props) {
    let arr = new Array(30).fill(1);

    return (
        <div className="classify1">
            {/* 头部导航 */}
            <div className="goods-header">
                <div className="back" onClick={() => { props.history.goBack()}}></div>
                <div className="search">请输入商品</div>
            </div>
            {/* 商品分类盒子 */}
            <div className="classifybox">
                <div className="classify-right">
                    <div className="classify-item bg-red">食品生鲜</div>
                    {
                        arr.map((item, index) => {
                            return (
                                <div className="classify-item" key={index}>食品生鲜</div>
                            )
                        })
                    }
                </div>
                <div className="classify-left">
                    <Switch>
                        <React.Suspense fallback={<div>loading</div>}>
                            <Route path={config.path+"goods/classify/items"} component={Items} />
                        </React.Suspense>
                    </Switch>
                </div>
            </div>
        </div>
    )
}