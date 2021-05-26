// 商品分类页面
import React, { useEffect, useState } from 'react';
import {Redirect, Route,Switch} from 'react-router-dom'
import '../../../assets/css/goods/goods.css';
import config from '../../../assets/js/conf/config';
import Ajax from '../../../assets/js/axios/axios';

// 懒加载组件
const Items = React.lazy(() => import('./items'));

export default function GoodsClassify(props) {
    // 左侧分类列表
    const [list, setList] = useState([]);
    // 设置列表的样式管理，默认第一个为true，进来就是默认跳转到第一个
    const [listStyle, setListStyle] = useState([true]);
    // 右侧商品信息
    const [goodsInfo, setGoodsInfo] = useState([]);

    useEffect(() => {
        // 获取分类列表
        Ajax(config.baseUrl + '/api/home/category/menu?token=' + config.token)
            .then(res => {
                // console.log(res);
                if (res.code === 200) {
                    setList([...res.data]);
                    let list = [...res.data].map((item, index) => {
                        if (index === 0) {
                            return true;
                        }
                        return false;
                    })
                    setListStyle(list);
                }
            });
    }, [])

    // 点击改变左侧分类栏目
    function changeInfo(Url, index) {
        let list = listStyle.map((item, index1) => {
            if (index === index1) {
                return true;
            }
            return false;
        })
        setListStyle(list);
        getGoodsInfo(Url);
        props.history.push(config.path + Url);
    }
    // 获取右侧商品信息
    function getGoodsInfo(Url) {
        Ajax(config.baseUrl +'/api/home/category/show?cid=&token='+ config.token)
            .then(res => {
                // console.log(res.data);
                if (res.code === 200) {
                    setGoodsInfo([...res.data]);
                }
        })
    }

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

                    {/* <div className="classify-item bg-red">食品生鲜</div> */}
                    {
                        list===null?"":
                        list.map((item,index) => {
                            return (
                                <div className={listStyle[index] ? "classify-item bg-red" :"classify-item" }
                                    onClick={() => {changeInfo("goods/classify/items?cid="+item.cid,index)}}
                                    key={item.cid}>{item.title}</div>
                            )
                        })
                    }
                </div>
                <div className="classify-left">
                    <Switch>
                        <React.Suspense fallback={<div>loading</div>}>
                            <Route path={config.path + "goods/classify/items"} component={Items} />
                            <Redirect to={config.path + "goods/classify/items?cid=492"} />
                        </React.Suspense>
                    </Switch>
                </div>
            </div>
        </div>
    )
}