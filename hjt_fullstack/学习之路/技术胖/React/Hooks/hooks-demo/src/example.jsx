import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// function Index() {
//     useEffect(() => {
//         console.log('index enter')
//         // return 离开时的操作
//         return () => {
//             console.log('index leave')
//         }
//     },[])
//     return (
//         <h2>index</h2>
//     )
// }
// function List() {
//     useEffect(() => {
//         console.log('list enter')
//         return () => {
//             console.log('list leave')
//         }
//     },[])
//     return (
//         <h2>List page</h2>
//     )
// }

function Example() {
    const [count, setCount] = useState(0);  // 数组解构
    useEffect(() => {
        console.log('-----------')
        // [] 为空的时候默认离开页面实现解绑，传入参数时候参数状态改变才发生解绑
    },[count])
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me!</button>
            {/* <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                    <Route exact path='/' component={Index} />
                    <Route path='/list/' component={List} />
                </ul>
            </Router> */}
        </div>
    )
}
 
export default Example;