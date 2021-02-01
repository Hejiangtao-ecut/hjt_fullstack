import logo from './logo.svg';
import './App.css';
// 引入antd 
// import { Button } from 'antd'; // 组件库
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
