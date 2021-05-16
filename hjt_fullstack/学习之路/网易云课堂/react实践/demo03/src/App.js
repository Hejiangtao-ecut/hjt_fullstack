import './App.css';
// import Demo01 from './pages/demo01';
// import Demo02 from './pages/demo02';
import Demo03 from './pages/demo03';

function App() {
  // demo01
  // function getSonValue(e) {
  //   console.log(e);
  // }
  return (
    <div className="App">
      {/* 无状态组件 */}
      {/* <Demo01 title="无状态" sendValue={getSonValue} /> */}
      {/* 高阶组件 代理模式 */}
      {/* <Demo02 /> */}
      {/* 高阶组件 反向继承 */}
      <Demo03 />
    </div>
  );
}

// 高阶组件
export default App;
