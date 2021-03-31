import { createStore, combineReducers, applyMiddleware } from 'redux'; // 没有使用immutable 
import reducers from './reducer';
import thunk from 'redux-thunk';
export default createStore(
    combineReducers(reducers),
    {
        from: '南昌',
        to: '北京'
    },
    applyMiddleware(thunk)
)