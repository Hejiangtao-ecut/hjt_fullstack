// 仓库管理文件
import { createStore } from 'redux';
import reducer from './reducer'

// reducer注入
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store