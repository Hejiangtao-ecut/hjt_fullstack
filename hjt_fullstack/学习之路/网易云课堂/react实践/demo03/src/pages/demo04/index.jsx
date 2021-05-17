import React, { Component } from 'react';
import Hoc from './Hoc';

const Login = Hoc((props) => {
    return (
        <React.Fragment>
            <div>{props.title}</div>
            {/* 实现数据双向绑定 */}
            <div>用户名：<input type="text" onChange={(e) => { props.setUsername(e.target.value) }} /></div>
            <div>密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" /></div>
            <button type="button">登录</button>
        </React.Fragment>
        
    )
})

class Demo04 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Login title="会员登录" id='1'></Login>
        );
    }
}
 
export default Demo04;