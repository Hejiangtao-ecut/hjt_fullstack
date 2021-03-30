import React from 'react';
import { Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            {/* 顶部功能列表 */}
            <div className="navArea">
                <div className="navbar">
                    <button><Link to={'/'} >传书到手机</Link></button>
                    <span className="divder"></span>
                    <button><Link to={'/'} >水墨屏版</Link></button>
                    <span className="divder"></span>
                    <button><Link to={'/'} >手机版</Link></button>
                    <span className="divder"></span>
                    {/* 登录和头像根据用户登陆状态来选择显式 */}
                    <button><Link to={'/load/'}>登录</Link></button>
                    {/* <div className="userAvator">头像</div> */}
                </div>
            </div>
            
            {/* 微阅读标识 */}
            <div className="iconBar">
                <div className="icon">
                    <h2>微阅读</h2>
                </div>
            </div>
            {/* 搜索框 */}
            <div className="searchBar">
                <div className="search">
                    <input className="searchInput" placeholder="总有一本书会打动你的心" />
                </div>
            </div>

        </div>
    )
}

export default Header