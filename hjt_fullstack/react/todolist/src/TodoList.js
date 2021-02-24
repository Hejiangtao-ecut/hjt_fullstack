import React from 'react'; 

class TodoList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  btnClick() {
    this.setState({
      list: [...this.state.list, "demo"],
      inputValue:''
    })
  }

  inputChange() {
    
  }

  render() {
    return (
      <div>
        <div>
          <input onChange={ this.inputChange.bind(this) } />
          <button onClick={ this.btnClick.bind(this) }>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key = { index }>{ item }</li>
            })
          }
        </ul>
      </div>
    )
  }

}

export default TodoList;
