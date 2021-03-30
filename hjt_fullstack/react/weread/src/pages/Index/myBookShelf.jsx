// 首页我的书架模块
import React from 'react';
import { } from 'react-router-dom';
import MyBookCard from './components/myBookCard'

function myBookShelf() {
    return (
        <div className="bookShelf">
            {/* 文本区域 */}
            <div className="bookShelf_text">
                <div><h2>我的书架</h2></div>
                <div><span>查看我的书架＞</span></div>
            </div>
            <div className="bookShelf_Shelf">
                <MyBookCard />
            </div>
        </div>
    )
}

export default myBookShelf;