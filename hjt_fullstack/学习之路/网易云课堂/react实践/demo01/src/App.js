import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import './assets/css/app.css'
import Header from './components/header';

class App extends Component {
  // 相当于window.onload
  // componentDidMount() {
  //   // 过去使用dom操作，消耗性能
  //   console.time("dom")
  //   console.log(document.getElementById('header').innerHTML);
  //   console.timeEnd("dom")
  //   // 使用虚拟Dom操作
  //   console.time("virDom");
  //   console.log(ReactDom.findDOMNode(document.getElementById('header')).innerHTML);
  //   console.timeEnd("virDom");
  // }

  constructor() {
    super();
    this.state = {
      isShow: true,
      goods: [
        { id: 1, title: 'demo1' },
        { id: 2, title: 'demo2' },
        { id: 3, title:'demo3'}
      ]
    }
    this.changeIsShow = this.changeIsShow.bind(this);
  }

  changeIsShow() {
    const isShow = !this.state.isShow;
    this.setState({
      isShow: isShow
    }, () => {
        // console.log(this.state.isShow)
    })
  }
  shouldComponentUpdate(newProps, newState) {
    if (this.state.isShow !== newState.isShow) {
      console.log("true--------");
      return true
    }
    console.log("false--------");
    return false
  }
  componentDidUpdate() {
    
  }

  render() { 
    return ( 
      <div>
        <Header title="首页" />
        {this.state.isShow && <div className="box"></div>}
        <button onClick={this.changeIsShow}>显式/隐藏</button>
        <ul>
          {
            this.state.goods.map((item, index) => {
              return (
                <li key={item.id}>编号：{item.id},名称：{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  componentWillUnmount() {
    
  }
}
 
export default App;
