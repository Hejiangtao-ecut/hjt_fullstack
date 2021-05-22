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
                
            </div>
        </div>

    )
};