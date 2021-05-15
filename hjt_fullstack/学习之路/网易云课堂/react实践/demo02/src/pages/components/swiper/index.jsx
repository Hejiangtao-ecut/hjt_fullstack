// swiper 组件
import React, { Component } from 'react';
import './style.css'

class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <main className="my-swiper-main">
                    {
                        this.props.imgs.length > 0 && this.props.imgs.map((item, index) => {
                            return (
                                <div className="my-swiper-slider" key={index}>
                                    <a href={item.src} target="_blank">
                                        <img src={item.src} alt="" />
                                    </a>
                                </div>
                            )
                        })
                    }
                    <div className="pagination">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                    </div>
                </main>
            </>
        );
    }
}

export default Swiper;