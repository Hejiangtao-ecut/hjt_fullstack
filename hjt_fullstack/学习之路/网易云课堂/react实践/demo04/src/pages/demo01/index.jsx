import React, { useState, useEffect } from 'react';

export default function Demo01() {
    // useState相当于一个state，里面的参数是title的默认值

    const [title, setTitle] = useState('首页');
    const [name, setName] = useState('江河');

    useEffect(() => {
        console.log("title发生了变化");
        console.log(title);
    }, [title])
    useEffect(() => {
        console.log("name发生了变化");
        
    }, [name])

    function changeTitle() {
        setTitle('1')
    }
    function changeName() {
        setName('jianghe');
    }
    return (
        <React.Fragment>
            <div>
                {title}
            </div>
            <button onClick={changeTitle}>修改</button>
            <div onClick={changeName}>
                {name}
            </div>
        </React.Fragment>
    )
}