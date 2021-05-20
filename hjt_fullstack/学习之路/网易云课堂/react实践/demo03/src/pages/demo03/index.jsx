import React, { Component } from 'react';
import Hoc from './extends';

class Demo03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'江河'
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.props.title}
                <br/>
            </React.Fragment>
        );
    }
}

export default Hoc(Demo03);