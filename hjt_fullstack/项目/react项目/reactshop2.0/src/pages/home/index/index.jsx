import React,{lazy,useState} from 'react';
import {Route,Switch} from 'react-router-dom'
import '../../../assets/css/home/index.css';
import config from '../../../assets/js/conf/config';

// 懒加载页面
// 主页
const HomeIndex = lazy(() => import('../home/index'));
// 购物车
const CartIndex = lazy(() => import('../../cart'));
// 我的
const MyIndex = lazy(() => import('../../user/index/index'));


export default function Index(props) {
    const [homeStyle, setHomeStyle] = useState(true);
    const [cartStyle, setCartStyle] = useState(false);
    const [myStyle, setMyStyle] = useState(false);

    function goPage(url, num) {
        [setHomeStyle, setCartStyle, setMyStyle].forEach((item, index)=> {
            if (num === index) {
                item(true);
            } else {
                item(false);
            }
        })
        props.history.replace(config.path+url);
    }
    return (
        <React.Fragment>
            <div>
                {/* 编写子路由 */}
                <React.Fragment>
                    <Switch>
                        <React.Suspense fallback={<div>loading</div>}>
                            <Route path={config.path + 'home/index'} component={HomeIndex} />
                            <Route path={config.path + 'home/cart'} component={CartIndex} />
                            <Route path={config.path + 'home/my'} component={MyIndex} />
                        </React.Suspense>
                    </Switch>
                </React.Fragment>
                {/* 底部导航 */}

                <div className="home-bottom-nav">
                    <ul onClick={()=>{goPage('home/index',0)}}>
                        <li className={homeStyle ? "homeIcon active" : "homeIcon" }></li>
                        <li className={homeStyle ? "text active" : "text"}>首页</li>
                    </ul>
                    <ul onClick={() => { goPage('home/cart',1) }}>
                        <li className={cartStyle ? "cartIcon active" : "cartIcon"}></li>
                        <li className={cartStyle ? "text active" : "text"}>购物车</li>
                    </ul>
                    <ul onClick={() => { goPage('home/my',2) }}>
                        <li className={myStyle ? "myIcon active" : "myIcon"}></li>
                        <li className={myStyle ? "text active" : "text"}>我</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}