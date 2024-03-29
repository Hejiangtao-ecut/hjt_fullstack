import React, { Component } from 'react';
// import axios from 'axios';
import XjjItem from './XjjItem';
import './style.css';
import Boss from './Boss';

class Xjj extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['demo3','demo4']
        }
    }
    // 生命周期函数
    // 挂载前
    // componentWillMount() {
    //     console.log("componentWillUnmount,即将挂载");
    // }
    // 挂载后
    // componentDidMount() {
    //     console.log("componentDidMount,挂载完成");
    // }
    componentDidMount() {
        // axios   .post('https://baidu.com')
        //     .then((res) => {
        //     console.log('axios success!')
        //     })
        //     .catch((error) => {
        //         console.log(error);
        // })
    }

    render() {
        // 挂载中
        // console.log("render,正在挂载")
        return (
            <>
                <div>
                    <input className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} ref={(input)=>{this.input=input}} />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul className="show">

                    {
                        this.state.list.map((item, index) => {
                            return <XjjItem content={item} key={index} index={index} deleteItem={this.deleteItem.bind(this)} />
                            // return <li key={index} onClick={this.deleteItem.bind(this,index)}>{ item }</li>
                        })
                    }
                </ul>
                <Boss/>
            </>
        )
    }

    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Xjj;