import React, { Component } from 'react';
import './App.css';

class Demo01 extends Component {
    constructor() {
        super();
        this.state = {
            isShow: true,
            left: 0,
            top: 0
        }
    }
    clicked(value) {
        console.log(value, 'clicked---------')
    }
    clickedES6 = (value) => {
        console.log(value, 'ES6--------')
    }
    enter() {
        this.setState({
            isShow: true
        })
    }
    leave() {
        this.setState({
            isShow: false
        })
    }

    touchMove(e) {
        // console.log(e.touches[0].pageX, e.touches[0].pageY)
        if (e.touches[0].pageX < 400 && e.touches[0].pageY < 400) {
            this.setState({
                top: e.touches[0].pageY,
                left: e.touches[0].pageX
            })
        }

    }
    render() {
        return (
            <div>
                {/* <button type="button" onClick={this.clicked.bind(this,'事件一')}>点击事件</button>
        <button type="button" onClick={this.clickedES6}>es6方法</button>
        <button type="button" onClick={() => {
          this.clicked()
        }}>es6方法传参</button> */}
                {/* <div className={this.state.isShow?'box active':'box'} onMouseOver={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)}></div> */}
                <div className="box2">
                    <div className="box" onTouchMove={(e) => { this.touchMove(e) }} style={{ top: this.state.top + 'px', left: this.state.left + 'px' }} ></div>
                </div>

            </div>
        );
    }
}

export default Demo01;