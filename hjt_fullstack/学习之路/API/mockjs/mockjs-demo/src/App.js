import axios from 'axios';
import './mock/mockjs'
// import mockjs from 'mockjs';

// mockjs.mock('data','get',{
//   'data|10': [{
//     'name': '@cname',
//     'age|20-30':0
//   }]
// })

axios.get('infos').then(res => {
  console.log(res);
})

function App() {

  function btnClick() {
    axios.get('/infos')
      .then(res => {
        console.log(res);
    })
  }
  return (
    <div>
      <button onClick={btnClick}>数据</button>
    </div>
  )
}

export default App;
