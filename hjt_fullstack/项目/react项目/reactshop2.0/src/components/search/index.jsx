// 将搜索封装成一个组件
import React, { useEffect, useState } from 'react';
import './search.css';
import Axios from '../../assets/js/axios/axios';
import config from '../../assets/js/conf/config';
// 导入连接器
import { connect } from 'react-redux';
import { ADDHISTORYWORDS } from '../../store/actionTypes';
// redux的子组件没有封装路由，需要手动引入
import { withRouter } from 'react-router';

function Search(props) {
    // 搜索框关键字
    const [keyWords, setKeyWords] = useState('');
    // 热门搜素
    const [hotSearch, setHotSearch] = useState([]);
    // 历史记录
    const [historyKey, setHistoryKey] = useState([]);

    useEffect(() => {
        // 获取热搜关键字
        Axios(config.baseUrl + '/api/home/public/hotwords?token=' + config.token)
            .then(res =>{
                if (res.code === 200) {
                    // console.log(res.data);
                    setHotSearch([...res.data]);
            }
            })
        
        // 初始化历史数据
        setHistoryKey([...props.state.hk.historyKey]);

    }, [])
    
    // 添加历史记录
    function addHistoryKey() {
        let s = historyKey;
        if (s.length === 9) {
            s.pop();
        }
        if (keyWords !== '') {
            s.unshift(keyWords);
            // 利用set实现数组去重并且实现搜索后位置调换
            setHistoryKey([...new Set(s)]);
        }
        localStorage['historyKey'] = JSON.stringify(historyKey);
        props.dispatch({
            type: ADDHISTORYWORDS,
            value: [...new Set(s)]
        })
        setKeyWords('');
    }
    // 改变输入框的值
    function changeKeyWords(e) {
        if (e !== '') {
            setKeyWords(e);
        }
    }
    // 删除历史记录
    function deleteHistory() {
        let s = [];
        // 清除historyKey
        setHistoryKey(s);
        // 清除store里面的值
        props.dispatch({
            type: ADDHISTORYWORDS,
            value: [...new Set(s)]
        });
        // 清除localStorage里面的history
        localStorage.removeItem('historyKey');
    }
    // 搜索和点击历史记录跳转
    function goSearch(Url) {
        // 添加历史记录
        addHistoryKey();
        // 页面跳转
        props.history.push(config.path+Url);
        // console.log(props)
    }

    return (
        <div className="page">
            {/* 头部 */}
            <div className="search-header">
                <div className="close" onClick={() => { props.changeStyle()}}></div>
                <div className="search-input">
                    <div className="input" >
                        <input autoFocus type="text"
                            placeholder="请输入商品"
                            value={keyWords}
                            onChange={(e) => { changeKeyWords(e.target.value)}}
                        />
                    </div>
                    <button className="btn-icon" onClick={() => { goSearch('goods/search?keywords='+keyWords)}}></button>
                </div>
            </div>
            {/* 历史记录 */}
            <div className="search-main" style={props.state.hk.historyKey.length===0?{display:'none'}:{display:'block'}}>
                <div className="search-title-warp">
                    <div className="search-title">
                        最近搜索
                    </div>
                    <div className="delete-icon" onClick={()=>{deleteHistory()}}></div>
                </div>
                <div className="search-keywords-wrap">
                    {
                        props.state.hk.historyKey.length > 0 && props.state.hk.historyKey.map((item, index) => {
                            return (
                                // 每个按钮都要实现页面跳转
                                <div className="search-keywords" key={index} onClick={() => { goSearch("goods/search?keywords="+item)}}> {item} </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 热门搜索 */}
            {
                hotSearch.length === 0 ? '' : (
                    <div className="search-main">
                        <div className="search-title-warp">
                            <div className="search-title">
                                热门搜索
                            </div>
                        </div>
                        <div className="search-keywords-wrap">
                            {
                                hotSearch.map((item, index) => {
                                    return (
                                        <div className="search-keywords" key={index} onClick={() => { props.history.push(config.path+'goods/search?keywords='+item.title)}} >{item.title}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default connect((state) => {
    return {
        state:state
    }
})(withRouter(Search))