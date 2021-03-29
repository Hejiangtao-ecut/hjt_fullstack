import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

// 首页
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, title: 'demo1' },
                { cid: 456, title: 'demo2' },
                { cid: 789, title: 'demo3' }
            ]
        }
    }
    render() { 
        return ( 
            <>
                <Redirect to="/home/" />
                Index
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}><Link to={'/list/'+item.cid}>{ item.title }</Link></li>
                            )
                        })
                    }
                </ul>
            </>
         );
    }
}
 
export default Index;