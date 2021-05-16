import React, { Component } from 'react';
import Hoc from './proxy';

class Demo02 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                {/* 通过props取值 */}
                {this.props.title}
            </React.Fragment>
        );
    }
}
 
export default Hoc(Demo02,'高阶组件');