import React, { useState, createContext,useContext } from 'react';

// 创建共享的组件,子组件可以共享此组件传递出去的属性
const CountContext = createContext();

// 创建子组件来接受属性
function Counter() {
    let count = useContext(CountContext) // 父组件是说明这里就放什么
    return (
        <h2>{ count }</h2>
    )
}

function Demo2() {
    const [count, setCount] = useState(0);  // 数组解构
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me!</button>
            {/* 父组件提供共享环境，把想传递的值放进value */}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Demo2;