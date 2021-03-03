import React, { Component, Fragment } from 'react'; 
import TodoItem from './TodoItem';

class TodoList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue:''
    }

    // this指向优化，在construct里面完成指向指定，使得下面的代码更加简洁，同时提升代码的性能
    this.inputChange = this.inputChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.itemClick = this.itemClick.bind(this);

  }

  btnClick() {
    if(this.state.inputValue !== ''){
      this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:''
      })
    }
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    // console.log(e.target.value);
  }

  itemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list:list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem itemClick={this.itemClick}
            key={index}
            item={item}
            index={index}
          />
        )
        // return <li key={ index } onClick={ this.itemClick.bind(this, index) }>{ item }</li>
      })
    )
  }

  render() {
    return (
      // React.Fragment 解决外层div的占位问题，方便CSS渲染
      <Fragment>
        <div className="textarea"><span>TODOLIST</span></div>
        <div className="inputarea">
          <input className="inputbox" value={this.state.inputValue} onChange={this.inputChange} autoFocus={true} />
          <button className="btn" onClick={ this.btnClick} >add</button>
        </div>
        <ul className="todoarea">{this.getTodoItems()}</ul>
      </Fragment>
    )
  }

}

export default TodoList;