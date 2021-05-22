import React from 'react';
import '../../../assets/css/home/home.css';
import { Carousel as Swiper} from 'antd';

export default function HomeIndex() {

    return (
        <div>
            {/* 搜索栏导航 */}
            <div className="home-header">
                {/* 分类图标 */}
                <div className="classify-icon"></div>
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
                    <div className="swiper-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484285302.jpg" alt=""/>
                    </div>
                    <div className="swiper-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt=""/>
                    </div>
                    <div className="swiper-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1524206455.jpg" alt="" />
                    </div>
                </Swiper>
            </div>
            
            {/* 分类导航 */}
            <div className="quickNav">
                <ul className="item">
                    <li className="item-img">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt=""/>
                    </li>
                    <li className="item-text">潮流女装</li>
                </ul>
                <ul className="item">
                    <li className="item-img">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484287842.png" alt="" />
                    </li>
                    <li className="item-text">潮流男装</li>
                </ul>
                <ul className="item">
                    <li className="item-img">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484287985.png" alt="" />
                    </li>
                    <li className="item-text">电脑办公</li>
                </ul>
                <ul className="item" >
                    <li className="item-img">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484288118.png" alt="" />
                    </li>
                    <li className="item-text">手机数码</li>
                </ul>
            </div>

            {/* 潮流女装 */}
            <div className="goods-classify-warp">
                <div className="classify-title color1">
                    ——
                    潮流女装
                    ——
                </div>
                {/* 第一行商品 */}
                <div className="goods-lever1">
                    {/* 左侧 */}
                    <div className="goods-lever1-item1">
                        <div className="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                        <div className="goods-tip">精品打折</div>
                        <div className="goods-price">12.8元</div>
                        <div className="goods-img">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""/>
                        </div>
                    </div>
                    {/* 右侧 */}
                    <div className="goods-lever1-item2">
                        {/* 右侧分层 */}
                        <div className="goods-row"></div>
                        <div className="goods-row"></div>
                    </div>
                </div>
                {/* 第二行商品 */}
                {/* <div className="goods-lever2"></div> */}
            </div>

        </div>

    )
};