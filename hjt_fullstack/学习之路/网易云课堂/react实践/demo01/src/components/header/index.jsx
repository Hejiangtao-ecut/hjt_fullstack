import React, { Component } from 'react';
// 检测数据类型
import propTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount')
    // }
    render() { 
        return ( 
            <div>
                {this.props.title}
            </div>
         );
    }
}
// 类型约束
Header.propTypes = {
    title: propTypes.string.isRequired
}
// 默认属性值
Header.defaultProps = {
    title:"首页1"
}
export default Header;