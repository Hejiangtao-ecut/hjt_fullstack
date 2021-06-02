// 搜索的页面

import React, { useEffect, useState } from 'react';
import '../../../assets/css/home/search.css';

export default function SearchGoods(props) {
    // 关键字
    const [keyWords, setKeyWords] = useState('');

    // 初始化获取数据
    useEffect(() => {
        setKeyWords(props.location.search.split('=')[1]);
    },[])

    return (
        <React.Fragment>
            <div className="searchGoods">
                {/* 头部 */}
                <div className="header">
                    {/* 返回图标 */}
                    <div className="backIcon"></div>
                    {/* 搜索框样式 */}
                    <div className="searchInput"> 商品</div>
                    {/* 筛选 */}
                    <div className="classifyIcon">筛选</div>
                </div>
            </div>
        </React.Fragment>
    )
}