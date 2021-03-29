import { Provider } from 'react-redux';
import axios from 'axios';

axios.get('https://weread.qq.com/')
  .then((res) => {
    console.log(res);
})

const App = () => {
  return (
    <>
    </>
  )
}

export default App;
