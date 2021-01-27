import React, { Component } from 'react'; //es6 解构
import './CommentList.css';  //wxss

export default class CommentList extends Component {
    render() {
        return (
            <div>
                <div className="text-show">
                    <div className="text-item">
                        <span className="name">壹叶</span>：
                        <span className="text">我想，在这个世界上，虽然没有最美好的相遇，但却应该有为了相遇或者重逢，所做的最美好的努力。</span>
                    </div>
                    <div className="text-item">
                        <span className="name">搞起捏赛</span>：
                        <span className="text">时间以同样的方式流经每个人，而每个人却以不同的方式度过时间。</span>
                    </div>
                    <div className="text-item">
                        <span className="name">今天是一只小羊🐑</span>：
                        <span className="text">平凡生活，英雄梦想</span>
                    </div>
                    <div className="text-item">
                        <span className="name">ya嘞个牙</span>：
                        <span className="text">做努力爬的蜗牛或坚持飞的笨鸟</span>
                    </div>
                    <div className="text-item">
                        <span className="name">Yang先森</span>：
                        <span className="text">自由意味着责任，这就是为什么大多数人都畏惧它的缘故。</span>
                    </div>
                </div>
            </div>
        )
    }
}