import './App.css';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, List } from 'antd';

const data = ['demo1','demo2','demo3']
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <div>
          <Input placeholder='just to do' style={{width:'250px'}} />
          <Button type="primary" >增加</Button>
        </div>
        <div>
          <List
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)} />
        </div>
      </div>
     );
  }
}
 
export default App;
