// 子组件给父组件传值
import React, { Component } from 'react';

class Demo03 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <button type="button" onClick={this.props.sendValue.bind(this,'给父组件传值')}>给父组件传值</button>
            </div>
         );
    }
}
 
export default Demo03;