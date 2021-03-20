import React, { useState } from 'react'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [count, setCount] = useState(0)


  return (
    <Provider store={store}>
      
    </Provider>
  )
}

export default App
