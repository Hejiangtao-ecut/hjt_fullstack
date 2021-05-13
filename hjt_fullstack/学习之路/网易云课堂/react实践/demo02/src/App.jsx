// import Demo01 from './pages/demo01'
// import Demo02 from './pages/demo02'
// import Demo03 from './pages/demo03'
import Demo04 from './pages/demo04'

export default function App() {
  // function getChildValue(val) {
  // demo03
  //   console.log(val);
  // }
  function del() {
    alert('-------');
  }
  return (
    <>
      {/* <Demo01 /> */}
      {/* <Demo02 /> */}
      {/* <Demo03 isShow={true} sendValue={getChildValue} /> */}
      {/* 按钮等一切事件需要用到插槽，子组件需要将对应的事件用props传递出来 */}
      <Demo04 onClick={del}>增加</Demo04>
      <Demo04>删除</Demo04>
    </>
  )
}