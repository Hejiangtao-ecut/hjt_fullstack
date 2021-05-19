import React,{useState,useEffect} from 'react';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // 动态监听用户输入
    useEffect(() => {
        console.log(username,'------');
    },[username])

    function doLogin() {
        if (!username.trim()) {
            alert('请输入用户名！');
            return
        }
        if (!password.trim()) {
            alert('请输入密码！')
            return
        }
        console.log('用户名：', username, '密码:', password);
        localStorage['username'] = username;
        localStorage['isLogin'] = true;
        props.history.goBack();
    }

    return (
        <React.Fragment>
            <div>
                用户名：<input type="text" onChange={ (e)=>{setUsername(e.target.value) }} placeholder="请输入用户名！" />
            </div>
            <div>
                密码：<input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="请输入密码" />
            </div>
            <button type="button" onClick={doLogin}>登录</button>
        </React.Fragment>
    )
}