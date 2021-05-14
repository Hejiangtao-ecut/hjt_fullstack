// import Demo01 from './pages/demo01'
// import Demo02 from './pages/demo02'
// import Demo03 from './pages/demo03'
// import Demo04 from './pages/demo04';
// import Demo05 from './pages/demo05';
import Demo06 from './pages/demo06'

export default function App() {
  // function getChildValue(val) {
  // demo03
  //   console.log(val);
  // }
  // function del() {
  //   alert('-------');
  // }
  return (
    <>
      {/* button事件 */}
      {/* <Demo01 /> */}
      {/* 事件监听 */}
      {/* <Demo02 /> */}
      {/* 子组件给父组件传值 */}
      {/* <Demo03 isShow={true} sendValue={getChildValue} /> */}
      {/* 按钮等一切事件需要用到插槽，子组件需要将对应的事件用props传递出来 */}
      {/* <Demo04 onClick={del}>增加</Demo04>
      <Demo04>删除</Demo04> */}
      {/* lazy加载 */}
      {/* <Demo05 /> */}
      <Demo06/>
    </>
  )
}