// 搜索的页面
import React, { useEffect, useState } from 'react';
import '../../../assets/css/home/search.css';
import Search from '../../../components/search/index';
import Ajax from '../../../assets/js/axios/axios';
import config from '../../../assets/js/conf/config';


export default function SearchGoods(props) {
    // 关键字
    const [keyWords, setKeyWords] = useState('');
    // 控制搜索框的出现和消失
    const [isSearch, setIsSearch] = useState(false);
    // 控制排序的选项出现
    const [isShow, setIsShow] = useState(false);
    // 控制排序选项的样式
    const [listStyle, setListStyle] = useState(new Array(3).fill(false));
    // 销量的样式
    const [salesStyle, setSalesStyle] = useState(false);
    // 商品信息
    const [goodsInfo, setGoodsInfo] = useState([]);
    // 排序方式
    const [otype, setOtype] = useState();

    // 点击返回
    function goBack() {
        // console.log('------')
        props.history.goBack();
    }
    // 控制搜索组件的出现
    function changeIsSearch() {
        let b = isSearch;
        setIsSearch(!b);
    }

    // 控制是否展示排序分类
    function isShowOrderMenu() {
        let show = isShow;
        setIsShow(!show);
    }
    // 切换分类排序样式
    function changeListStyle(index) {
        let list = new Array(3).fill(false);
        list[index] = true;
        setListStyle(list);
        if (index <= 2) {
            setSalesStyle(false);
        }
        if (index === 0) {
            setOtype('all');
        } else if (index === 1) {
            setOtype('up');
        } else if (index === 2) {
            setOtype('down');
        } else if (index === 3) {
            setOtype('sales');
        }
    }
    // 销量被点击的方法
    function changeSales() {
        changeListStyle(3);
        setSalesStyle(true);
        // 关闭排序列表面板
        setIsShow(false);
    }
    // 在此页面进行搜索
    function SearchGoods(e) {
        // 改变keywords
        setKeyWords(e);
        // setState是异步的，我们后面用e替代keywords
        Ajax(config.baseUrl + '/api/home/goods/search?kwords=' + e + '&param=&page=1&price1=&price2=&otype=' + otype + '&cid=&token=' + config.token)
            .then(res => {
                if (res.code === 200) {
                    setGoodsInfo([...res.data]);
                }
            })
        // 关闭搜索组件面板
        setIsSearch(false);
    }
    
    // 进行分类获取
    useEffect(() => {
        // 根据分类方式进行获取
        let key = props.location.search.split('=')[1];
        setKeyWords(decodeURIComponent(key));
        // console.log(config.baseUrl + '/api/home/goods/search?kwords=' + keyWords + '&param=&page=1&price1=&price2=&otype=' + otype + '&cid=&token=' + config.token)
        Ajax(config.baseUrl + '/api/home/goods/search?kwords=' + keyWords + '&param=&page=1&price1=&price2=&otype=' + otype + '&cid=&token=' + config.token)
            .then(res => {
                if (res.code === 200) {
                    setGoodsInfo([...res.data]);
                }
            })
    }, [otype])

    // 初始化获取数据
    useEffect(() => {
        let key = props.location.search.split('=')[1];
        setKeyWords(decodeURIComponent(key));
        // console.log('----' + config.baseUrl + '/api/home/goods/search?kwords=' + key + '&param=&page=1&price1=&price2=&otype=' + otype + '&cid=&token=' + config.token)
        Ajax(config.baseUrl + '/api/home/goods/search?kwords=' + key + '&param=&page=1&price1=&price2=&otype=' + otype + '&cid=&token=' + config.token)
            .then(res => {
                // console.log(res);
                if (res.code === 200) {
                    setGoodsInfo([...res.data]);
                }
            })
    }, [])

    return (
        <React.Fragment>
            <div className="searchGoods" >
                {/* 头部 */}
                <div className="search-top">
                    <div className="header">
                        {/* 返回图标 */}
                        <div className="backIcon" onClick={()=>{goBack()}}></div>
                        {/* 搜索框样式 */}
                        <div className="search-wrap" onClick={() => { changeIsSearch() }}>
                            <div className="search-icon"></div>
                            <div className="search-text">{ keyWords}</div>
                        </div>
                        {/* 筛选 */}
                        <div className="classifyIcon">筛选</div>
                    </div>
                    {/* 排序 */}
                    <div className="order-main">
                        <div className="order-item" onClick={()=>{isShowOrderMenu()}}>
                            <div className={isShow ? "order-text active" :"order-text"}>综合</div>
                            <div className={isShow ? "order-icon up" : "order-icon"}></div>
                            {/* 用绝对定位和相对定位来实现点击出现选项 */}
                            {/* 选项 */}
                            <ul className="order-menu" style={isShow?{display:'block'}:{display:'none'}}>
                                <li className={listStyle[0]?'active':''} onClick={() => { changeListStyle(0) }}>综合</li>
                                <li className={listStyle[1]?'active':''} onClick={() => { changeListStyle(1) }}>价格从低到高</li>
                                <li className={listStyle[2]?'active':''} onClick={() => { changeListStyle(2) }}>价格从高到低</li>
                            </ul>
                        </div>
                        <div className="order-item">
                            <div className={salesStyle ? "order-text active" :"order-text" } onClick={() => { changeSales()}}>销量</div>
                        </div>
                    </div>
                </div>

                {/* 商品列表 */}
                <div className="goods-main">
                    {
                        goodsInfo.length < 1 ? (<div>没有相关商品！</div>) : goodsInfo.map((item, index) => {
                            return (
                                <div className="goods-list" key={index}>
                                    <div className="image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="goods-content">
                                        <div className="goods-title">{ item.title }</div>
                                        <div className="price">¥{ item.price }</div>
                                        <div className="sales">销量<span>{ item.sales }</span>件</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Search组件 */}
                <div style={isSearch ? { display: "block" } : { display: "none" }}>
                    <Search changeStyle={setIsSearch} isLocal={true} childKey={(e)=>{ SearchGoods(e)}}></Search>
                </div>
            </div>
        </React.Fragment>
    )
}