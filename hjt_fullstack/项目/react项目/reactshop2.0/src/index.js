import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import 'whatwg-fetch';
import reportWebVitals from './reportWebVitals';
// 引入antd样式
import 'antd/dist/antd.css';
// 引入全局样式
import './assets/css/common/public.css';


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
