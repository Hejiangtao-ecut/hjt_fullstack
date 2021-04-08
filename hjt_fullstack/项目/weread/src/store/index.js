// 仓库
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
// 使用增强函数
const composes = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const applyThunk = composes(applyMiddleware(thunk));

// reducer注入
const store = createStore(reducer, applyThunk)

export default store