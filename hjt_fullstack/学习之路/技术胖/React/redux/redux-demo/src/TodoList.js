import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        store.subscribe(this.storeChange);
    }

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div >
                    <Input placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px ' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.clickBtn}>
                        增加
                    </Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List bordered dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }

    changeInputValue(e) {
        // console.log(e.target.value)
        const action = {
            type: 'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }   
    storeChange() {
        this.setState(store.getState());
    }
    clickBtn() {
        // console.log("----------")
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }

}
 
export default TodoList;