import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import 'whatwg-fetch';
import reportWebVitals from './reportWebVitals';
// 引入antd样式
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
// 引入全局样式
import './assets/css/common/public.css';
import { Provider } from 'react-redux';
import { store } from './store/index';

function Index() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
