import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './head';
import MyBookShelf from './myBookShelf'

function Index() {
    return (
        <>
            {/* 头部 */}
            <Header />
            {/* 主体部分 */}
            <div className="container">
                <MyBookShelf />
                <div className="guessLike">

                </div>
                <div className="showBody">

                </div>
                <div className="listBody">

                </div>
                <div className="footer">

                </div>
            </div>  
        </>
    )
}
export default Index
