import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {

    // 退出登录
    function logOut() {
        // 清空localStorage，使得登录信息不存在
        localStorage.clear();
        // 回退页面 
        props.history.goBack();
    }

    return (
        <React.Fragment>
            欢迎{localStorage['username']}回来！<br />
            <button onClick={() =>{logOut()}}>退出</button>
        </React.Fragment>
    )
    
}