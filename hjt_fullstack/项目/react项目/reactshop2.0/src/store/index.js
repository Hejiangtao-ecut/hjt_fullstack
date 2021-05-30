// 仓库文件
import { createStore, combineReducers } from 'redux';
import { hkReducer } from './reducer';

let reducer = combineReducers({ hk: hkReducer })

export const store = createStore(reducer);