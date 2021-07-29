import React from 'react';
import './Posts.css';

function Posts(props) {
    if (props.loading) {
        return (
            <h3>loading</h3>
        )
    }

    return (
        <ul className="list-posts">
            {
                props.posts.map(item => {
                    return (    
                        <li key={item.id} className="list-posts-item">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <p className="post-panel">
                                <span className="posts-time">发表时间：{item.time}</span>
                                <span className="posts-author">作者：{item.author}</span>
                                <span className="post-like">喜欢：{ item.like }</span>
                            </p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Posts;