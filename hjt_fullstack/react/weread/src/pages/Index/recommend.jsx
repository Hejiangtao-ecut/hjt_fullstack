import React from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './components/tuiCard';

// 推荐书单
function recommend() {
    return (
        <div className="recommend" >
            {/* 文本区域 */}
            <div className="bookShelf_text">
                <div><h2>猜你喜欢</h2></div>
                <div><span>换一批</span></div>
            </div>
            <div className="bookShelf_Shelf">
                <Card />
            </div>
        </div>
    )
}
export default recommend