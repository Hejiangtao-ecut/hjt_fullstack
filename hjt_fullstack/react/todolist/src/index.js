import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);