import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './head';
import MyBookShelf from './myBookShelf';
import Recommend from './recommend';
import WeekList from './weekList';
import ClassifyList from './classifyList';

function Index() {
    return (
        <>
            {/* 头部 */}
            <Header />
            {/* 主体部分 */}
            <div className="container">
                {/* <CSSTransition > */}
                    {/* 设置登陆后浮现 */}
                    {/* 我的书架 */}
                    <MyBookShelf />
                    {/* 推荐书单 */}
                    <Recommend />
                {/* </CSSTransition> */}
                {/* 周榜 */}
                <div className="rankContainer">
                    <WeekList />
                    <WeekList />
                    <WeekList />
                    <WeekList />
                </div>
                <div className="listBody">
                    <ClassifyList />
                </div>
                <div className="index-footer">
                    <span>开发人员：何江涛、黄志乾</span>
                </div>
            </div>  
        </>
    )
}
export default Index
