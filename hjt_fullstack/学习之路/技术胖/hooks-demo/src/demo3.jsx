import React, { useReducer } from 'react';

function Demo3() {
    // 接受两个值，一个是redux函数，一个是默认值
    const [count,dispatch] = useReducer((state,action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    }, 0)  // 设置默认为0
    
    return (
        <div className="">
            <p>现在的分数是{count}</p>
            <button onClick={()=>{dispatch('add')}}>add</button>
            <button onClick={() => { dispatch('sub') }}>sub</button>
        </div>
    )
}

export default Demo3