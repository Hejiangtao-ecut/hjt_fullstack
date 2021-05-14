// 组件开发
import React, { Component } from 'react';

const Swiper = React.lazy(() => import('../components/swiper'));

class Demo06 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [
                { herf: '#', src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4015235454,569502415&fm=26&gp=0.jpg" },
                { herf: '#', src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=993093081,3581344450&fm=26&gp=0.jpg" },
                { herf: '#', src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1103469406,4116622582&fm=26&gp=0.jpg" },
                { herf: '#', src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961974070,137066290&fm=26&gp=0.jpg" },
                { herf: '#', src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1824151452,3654743938&fm=26&gp=0.jpg" },

            ]
        }
    }
   getOnClick() {
        
    }
    render() {
        return (
            <>
                <div className="banner">
                    <React.Suspense fallback={<div>Loading</div>}>
                        <Swiper imgs={this.state.imgs} getOnClick={this.getOnClick}>

                        </Swiper>
                    </React.Suspense>
                </div>

            </>
        );
    }
}

export default Demo06;