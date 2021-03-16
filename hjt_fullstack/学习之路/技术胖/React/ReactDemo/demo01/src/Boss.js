import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
          }
    }
    render() { 
        return ( 
            <div>
                <CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-test" unmountOnExit> 
                    <div>Boss----牛魔王</div>
                </CSSTransition>
                
                <div><button onClick={this.toGo.bind(this)}>召唤BOSS</button></div>
            </div>
         );
    }

    toGo() {
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Boss;