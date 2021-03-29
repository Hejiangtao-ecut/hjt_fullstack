import React, { Component } from 'react';

// list页
class List extends Component {
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
                List- {this.state.id}
            </>
         );
    }

    // 接收route传递的值
    componentDidMount() {
        console.log(this.props);
        let tempId = this.props.match.params.id;
        this.setState({id:tempId})
    }
}

export default List;