// 商品页
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import '../../../assets/css/home/details-item.css';
import config from '../../../assets/js/conf/config';
import Ajax from '../../../assets/js/axios/axios';

export default function Item(props) {
    // swiper数据
    const [swiper, setSwiper] = useState([]);


    // 初始化获取数据
    useEffect(() => {
        // 获取商品数据
        Ajax(config.baseUrl + '/api/home/goods/info?gid=704407997&type=details&token=' + config.token)
            .then(res => {
                if (res.code === 200) {
                    // 设置swiper数据
                    setSwiper([...res.data.images]);
            }
        })
    },[])
    return (
        <React.Fragment>
            <div className='swiper-wrapper'>
                <Carousel
                    autoplay={true}
                    autoplaySpeed={1000}
                >
                    {
                        swiper.map((item, index) => {
                            return (
                                <div className="swiper-item">
                                    <img src={item} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </React.Fragment>
    )
}