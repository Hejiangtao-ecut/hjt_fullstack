import './App.css';
import axios from 'axios';

function App() {
  const data = axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1');
  // 
  const demo = {};
  data.then(res => {
    demo = res.data;
  })
  console.log(demo);
  return (
    <div>

    </div>
  );
}

export default App;
