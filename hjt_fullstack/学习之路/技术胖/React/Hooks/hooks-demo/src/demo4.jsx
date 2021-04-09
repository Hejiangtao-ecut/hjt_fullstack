import React, { Children, useState } from 'react';

function Demo4() {
    const [demo1, setDemo1] = useState('等待1');
    const [demo2, , setDemo2] = useState('等待2');
    return (
        <div>
            <button onClick={() => { setDemo1(new Date().getTime()) }}>demo1</button>
            <button onClick={() => { setDemo2(new Date().getTime()) }}>demo2</button>
            <Child name={demo1}>{ demo2 }</Child>
        </div>
    )
}

function Child({ name, Children }) {
    function changeDemo1() {
        console.log('------------')
    }

    return (
        <>
            <div>
                {demo1}
            </div>
        </>
    )
}
     