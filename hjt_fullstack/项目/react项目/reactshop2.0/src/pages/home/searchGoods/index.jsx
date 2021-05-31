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
            <div>
                {keyWords}
            </div>
        </React.Fragment>
    )
}