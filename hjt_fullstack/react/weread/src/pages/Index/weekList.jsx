import React from 'react';
import { Route, Link } from 'react-router-dom';
import WeekCard from './components/weekCard';

const store = {
    img: "https://weread-1258476243.file.myqcloud.com/assets/ranklist.rising.chart_title.d0fV1Wskta.png",
    title: "最近一周热度上涨最快的书",
    book: [
        { 'name': "晚熟的人", author: '莫言', img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/242/37045242/t6_37045242.jpg" },
        { 'name': "晚熟的人", author: '莫言', img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/242/37045242/t6_37045242.jpg" },
        { 'name': "晚熟的人", author: '莫言', img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/242/37045242/t6_37045242.jpg" },
        { 'name': "晚熟的人", author: '莫言', img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/242/37045242/t6_37045242.jpg" },
        { 'name': "晚熟的人", author: '莫言', img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/242/37045242/t6_37045242.jpg" },
        { 'name': "晚熟的人", author: '莫言', img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/242/37045242/t6_37045242.jpg" }
    ]
}

// 周榜
function weekList() {
    return (
        <div className="weeklist">
            <div className="weeklist_header">
                {/* 头部内容 */}
                <div className="weeklist_header_banner">
                    <img src={store.img} alt="" />
                </div>
                <div className="weeklist_header_title">
                    <span>{ store.title }</span>
                </div>

            </div>
            <div className="weeklist_body">
                {store.book.map(item => {
                    return <WeekCard item={item} />
                })}
            </div>
            <div className="weeklist_footer">
                <span>查看更多＞</span>
            </div>
        </div>
    )
}
export default weekList