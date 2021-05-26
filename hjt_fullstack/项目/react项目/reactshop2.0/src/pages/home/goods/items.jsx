// 子路由页面
import React, { useEffect, useState } from 'react';
import '../../../assets/css/goods/items.css';
import config from '../../../assets/js/conf/config';
import Ajax from '../../../assets/js/axios/axios';

export default function GoodsItem(props) {
    // 右侧商品信息
    const [goodsInfo, setGoodsInfo] = useState([]);

    


    useEffect(() => {
        let cid = props.history.location.search;
        cid = cid.split("=")[1];
        // console.log(cid);
        
        // 获取右侧商品信息
        Ajax(config.baseUrl + '/api/home/category/show?cid='+cid+'&token=' + config.token)
            .then(res => {
                // console.log(res.data);
                if (res.code === 200) {
                    setGoodsInfo([...res.data]);
                } else {
                    setGoodsInfo([]);
                }
            })
        // console.log(props.history.location.search);
        
    }, [props])

    if (setGoodsInfo.length > 1) {
        
    }
    return (
        <React.Fragment>
            <div className="goods-content">
                <div className="goods-warp">
                    {
                        (goodsInfo.length>1)?goodsInfo.map((item, index)=>{
                            return (
                                <div key={index}>
                                    <div className="classify-name" key={index}>{item.title}</div>
                                    <div className="goods-items-wrap">
                                        {
                                            item.goods.map((item, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li className="li1">
                                                            <img src={item.image} alt={item.title} />
                                                        </li>
                                                        <li className="li2">{item.title}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                    
                            )
                        }):<div>没有数据</div>
                    }
                </div>
            </div>

        </React.Fragment>
    )
}