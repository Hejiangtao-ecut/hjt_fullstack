import React from 'react';
import { connect } from 'react-redux';// 连接器

const TodoList = (props) => {
  // 解构函数
  let { inputValue, inputChange, btnClick, list, deleteItem } = props;
  return (
    <>
      <div>
        <input
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={btnClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li key={index} onClick={deleteItem.bind(this, index)}>{item}</li>
        })}
      </ul>
    </>
  )
}

// 映射
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list:state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {type: 'changeInput',inputValue:e.target.value}
      dispatch(action);
    },
    btnClick() {
      let action = {type:'addList'}
      dispatch(action);
    },
    deleteItem(index) {
      let action = { type: 'deleteItem', index: index }
      // console.log(action);
      dispatch(action)
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);
