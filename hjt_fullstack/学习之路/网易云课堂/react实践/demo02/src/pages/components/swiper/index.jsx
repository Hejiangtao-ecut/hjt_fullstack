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
                    <div className="my-swiper-slider">
                        {
                            this.props.imgs.map((item,index) => {
                                return (
                                    <a href={item.href} target="_blank" key={index} onClick={this.props.getOnClick.bind(this)}>
                                        <img src={item.src} alt="" />
                                    </a>
                                )
                            })
                        }
                        
                    </div>
                </main>
            </>
        );
    }
}
 
export default Swiper;