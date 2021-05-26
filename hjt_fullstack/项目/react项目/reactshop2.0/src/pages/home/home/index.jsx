import React, { lazy, useEffect, useState } from 'react';
import '../../../assets/css/home/home.css';
import { Carousel as Swiper } from 'antd';
// 引入封装的ajax
import Ajax from '../../../assets/js/axios/axios';
import config from '../../../assets/js/conf/config';
// 引入图片懒加载
import { lazyImage } from '../../../assets/js/utils/util';
// 引入搜索
const Search = lazy(import('../../../components/search/index'));

export default function HomeIndex(props) {
    // swiper数据
    const [swiperData, setSwiperData] = useState([]);
    // 首页导航栏数据
    const [indexNav, setIndexNav] = useState([]);
    // 商品数据
    const [goods, setGoods] = useState([]);
    // 推荐商品
    const [recommend, setRecommend] = useState([]);
    // 滚动变色
    const [isScroll, setIsScroll] = useState(false);

    // 数据对接
    // 第二个参数为空，这个函数用来请求静态资源
    useEffect(() => {
        // 请求swiper数据
        Ajax(config.baseUrl + "/api/home/index/slide?token=" + config.token)
            .then(res => {
                if (res.code === 200) {
                    setSwiperData([...res.data]);
                }
            })
        // 请求首页导航数据
        Ajax(config.baseUrl + "/api/home/index/nav?token=" + config.token)
            .then(res => {
                if (res.code === 200) {
                    // console.log(res.data);
                    setIndexNav([...res.data]);
                }
            })
        // 获取商品数据
        Ajax(config.baseUrl + "/api/home/index/goodsLevel?token=" + config.token)
            .then(res => {
                if (res.code === 200) {
                    // console.log(res.data);
                    setGoods([...res.data]);
                    lazyImage();
                }
            })
        Ajax(config.baseUrl + "/api/home/index/recom?token=" + config.token)
            .then(res => {
                if (res.code === 200) {
                    // console.log(res.data);
                    setRecommend([...res.data]);
                    lazyImage();
                }
            })
        lazyImage();
    }, [])

    // 实现监听滚动事件实现滚动变色
    // 防抖
    function debounce(fn, delay) {
        let timer = true;
        return () => {
            if (!timer) {
                return false;
            }
            timer = false;
            setTimeout(() => {
                fn();
                timer = true;
            }, delay);
        }
    }
    const showTop = debounce(() => {
        let x = window.document.body.scrollTop;
        x > 100 ? setIsScroll(true) : setIsScroll(false);
    }, 80);
    useEffect(() => {
        window.document.addEventListener("scroll", showTop, true);
        // 移除监听事件，解决内存溢出的问题
        return () => window.document.removeEventListener("scroll", showTop,true);
    },[isScroll])
    
    // 分类页面跳转
    function pushPage(Url) {
        props.history.push(config.path + Url);
    }

    return (
        <div className="Indexpage">
            {/* 搜索栏 */}
            <div className={isScroll ? "home-header red-bg" : "home-header" }>
                {/* 分类图标 */}
                <div className="classify-icon" onClick={()=>{pushPage('goods/classify')}} ></div>
                {/* 搜索框 */}
                <div className="searchInput">
                    {/* 搜索图标 */}
                    <div className="searchIcon"></div>
                    {/* 输入框 */}
                    <div className="inputArea">请输入商品</div>
                </div>
                {/* 登录按钮 */}
                <div className="login-warp">
                    <div className="login-text">登录</div>
                </div>
            </div>

            {/* siwper */}
            <div className="swiperwarp">
                <Swiper autoplay="true" effect="fade" autoplaySpeed={1000}>
                    {
                        swiperData.map((item, key) => {
                            return (
                                <div className="swiper-item" key={key}>
                                    <img src='../../../assets/images/common/lazyImage.jpg' alt={item.title} data-echo={item.image} />
                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>

            {/* 分类导航 */}
            <div className="quickNav">
                {
                    indexNav.map((item) => {
                        return (
                            <ul className="item" key={item.cid}>
                                <li className="item-img">
                                    <img src={item.image} alt={item.title} />
                                </li>
                                <li className="item-text">{item.title}</li>
                            </ul>
                        )
                    })
                }
            </div>

            {/* 潮流女装等一系列商品 */}
            {
                goods.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div className="goods-classify-warp" key={index}>
                                <div className={"classify-title color-" + index}>
                                    ——
                                {item.title}
                                ——
                            </div>
                                {/* 第一行商品 */}
                                <div className="goods-lever1">
                                    {/* 左侧 */}
                                    <div className="goods-lever1-item1">
                                        <div className="goods-title">{item.items[0].title}</div>
                                        <div className="goods-tip">精品打折</div>
                                        <div className={"goods-price" + index}>12.8元</div>
                                        <div className="goods-img">
                                            <img src={item.items[0].image} alt="" />
                                        </div>
                                    </div>
                                    {/* 右侧 */}
                                    <div className="goods-lever1-item2">
                                        {/* 右侧分层 */}
                                        {
                                            item.items.slice(1, 3).map((item, index) => {
                                                return (
                                                    <div className="goods-row" key={index}>
                                                        <div className="goods-title">{item.title}</div>
                                                        <div className="goods-list-tip">品质精挑</div>
                                                        <div className="goods-list-image">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {/* 第二行商品 */}
                                <div className="goods-lever2">
                                    {
                                        item.items.slice(3).map((item, index) => {
                                            return (
                                                <div className="goods-list" key={index}>
                                                    <div className="goods-title">{ item.title }</div>
                                                    <div className="goods-image">
                                                        <img src={ item.image } alt="" />
                                                    </div>
                                                    <div className="price">￥{ item.price }</div>
                                                    <div className="price line">¥{ item.price *2 }</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                        
                    } else {
                        // 男装
                        return (
                            <div className="goods-classify-warp" key={index}>
                                <div className={"classify-title color-" + index}>
                                    ——
                                    潮流男装
                                    ——
                            </div>
                                {/* 第一行商品 */}
                                <div className="goods-lever1">
                                    {
                                        item.items.slice(0, 2).map((item, index) => {
                                            return (
                                                <div className="goods-lever1-item1" key={index}>
                                                    <div className="goods-title">{ item.title }</div>
                                                    <div className="goods-tip-1">火爆开售</div>
                                                    <div className="goods-img-1">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {/* 第二行商品 */}
                                <div className="goods-lever2">
                                    {
                                        item.items.slice(2).map((item, index) => {
                                            return (
                                                <div className="goods-list" key={index}>
                                                    <div className="goods-title">{item.title}</div>
                                                    <div className="goods-image">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="price">￥{item.price}</div>
                                                    <div className="price line">¥{item.price * 2}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                })
            }
            {/* 为您推荐 */}
            <div className="goods-recom-nav">
                <div className="line"></div>
                <div className="recom-wrap">
                    <div className="icon"></div>
                    <div className="text">为您推荐</div>
                </div>
                <div className="line"></div>
            </div>
            {/* 推荐商品 */}
            <div className="goods-recom">
                {/* 单个商品 */}
                {
                    recommend.map((item) => {
                        return (
                            <div className="list" key={item.gid}>
                                <div className="list-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="goods-title">{ item.title }</div>
                                <div className="goods-price">{'¥' + item.price}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
};