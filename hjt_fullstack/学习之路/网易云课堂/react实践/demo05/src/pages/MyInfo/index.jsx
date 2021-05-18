import React from 'react';

export default function MyInfo(props) {
    return (
        <React.Fragment>
            <ul>
                {/* 写死了，不实用 */}
                {/* <li><Link to="/My/details/1/demo1">demo1</Link></li> */}
                <li onClick={() => {
                    props.history.push({
                        // 路由路径
                        pathname: '/My/details',
                        query: {
                            id: 1,
                            title:'新闻详情2'
                        }
                    })
                }}>demo2</li>
                <li>demo3</li>
            </ul>
        </React.Fragment>
    )
}