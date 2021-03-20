import React, { useState,useEffect, Component } from 'react';
//import {getBannerRequest} from './api/request';
import {Provider} from 'react-redux';
import store from './store';
import Recomment from './pages/Recommend'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Provider store={store}>
      <Recomment />
    </Provider>
  )
}

export default App
