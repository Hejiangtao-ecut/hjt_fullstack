// 子路由页面
import React from 'react';
import '../../../assets/css/goods/items.css';

export default function GoodsItem() {
    let arr = new Array(4).fill(1);
    return (
        <React.Fragment>
            <div className="goods-content">
                <div className="goods-warp">
                    <div className="classify-name">羽绒服</div>
                    <div className="goods-items-wrap">
                        <ul>
                            <li className="li1">
                                <img src="//vueshop.glbuys.com/uploadfiles/1524561560.jpg" alt=""/>
                            </li>
                            <li className="li2">2017重工加厚羽绒服男士户外中长款大毛领韩版保暖衣修身防水外套</li>
                        </ul>
                        {
                            arr.map((item, index) => {
                                return (
                                    <ul>
                                        <li className="li1" key={index}>
                                            <img src="//vueshop.glbuys.com/uploadfiles/1524561560.jpg" alt="" />
                                        </li>
                                        <li className="li2">2017重工加厚羽绒服男士户外中长款大毛领韩版保暖衣修身防水外套</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="goods-warp">
                    <div className="classify-name">羽绒服</div>
                    <div className="goods-items-wrap">
                        <ul>
                            <li className="li1">
                                <img src="//vueshop.glbuys.com/uploadfiles/1524561560.jpg" alt="" />
                            </li>
                            <li className="li2">2017重工加厚羽绒服男士户外中长款大毛领韩版保暖衣修身防水外套</li>
                        </ul>
                        {
                            arr.map((item, index) => {
                                return (
                                    <ul>
                                        <li className="li1" key={index}>
                                            <img src="//vueshop.glbuys.com/uploadfiles/1524561560.jpg" alt="" />
                                        </li>
                                        <li className="li2">2017重工加厚羽绒服男士户外中长款大毛领韩版保暖衣修身防水外套</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="goods-warp">
                    <div className="classify-name">羽绒服</div>
                    <div className="goods-items-wrap">
                        <ul>
                            <li className="li1">
                                <img src="//vueshop.glbuys.com/uploadfiles/1524561560.jpg" alt="" />
                            </li>
                            <li className="li2">2017重工加厚羽绒服男士户外中长款大毛领韩版保暖衣修身防水外套</li>
                        </ul>
                        {
                            arr.map((item, index) => {
                                return (
                                    <ul>
                                        <li className="li1" key={index}>
                                            <img src="//vueshop.glbuys.com/uploadfiles/1524561560.jpg" alt="" />
                                        </li>
                                        <li className="li2">2017重工加厚羽绒服男士户外中长款大毛领韩版保暖衣修身防水外套</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}