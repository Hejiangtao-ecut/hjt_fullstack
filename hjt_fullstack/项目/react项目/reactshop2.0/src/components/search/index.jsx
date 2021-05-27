// 将搜索封装成一个组件
import React from 'react';
import './search.css';

export default function Search(props) {
    return (
        <div className="page">
            {/* 头部 */}
            <div className="search-header">
                <div className="close" onClick={() => { props.changeStyle()}}></div>
                <div className="search-input">
                    <div className="input" >
                        <input type="text" placeholder="请输入商品" />
                    </div>
                    <button className="btn-icon"></button>
                </div>
            </div>
            {/* 历史记录 */}
            <div className="search-main">
                <div className="search-title-warp">
                    <div className="search-title">
                        最近搜索
                    </div>
                    <div className="delete-icon"></div>
                </div>
                <div className="search-keywords-wrap">
                    <div className="search-keywords">历史记录</div>
                    <div className="search-keywords">历史记录</div>
                    <div className="search-keywords">历史记录</div>
                    <div className="search-keywords">历史记录</div>
                    <div className="search-keywords">历史记录</div>
                    <div className="search-keywords">历史记录</div>
                    <div className="search-keywords">历史记录</div>
                </div>
            </div>
        </div>
    )
}