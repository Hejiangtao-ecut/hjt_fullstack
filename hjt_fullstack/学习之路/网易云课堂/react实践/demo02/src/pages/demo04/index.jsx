// 插槽
import React, { Component } from 'react';

class Demo04 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/* props里面有一个children,里面存放了父组件的值 */}
                {/* 传递自己的按钮需要用props传递出去 */}
                <button onClick={this.props.onClick}>{ this.props.children }</button>
            </div>
        );
    }
}
 
// 设置属性的默认值
Demo04.defaultProps = {
    // 给type属性设置默认button属性
    type:"button"
}
export default Demo04;