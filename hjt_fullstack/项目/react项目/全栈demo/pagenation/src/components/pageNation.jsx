import React from 'react';
import './pageNation.css';

function PageNations(props) {
    let arr = [];
    let all = [];
    for (let i = 0; i < props.totalPage; i++){
        all.push(i + 1);
    }

    // 判断总页数,根据页数展现不同形态
    if (all.length <= 10) {
        // 完整展示各个页码的形态
        arr = all;
    } else {
        // 带有省略形态
        // 总页数大于10 当前页小于5 
        if (props.currentPage < 5) {
            arr = [...all.slice(0, 5), '...', props.totalPage];
        } else {
            if (props.currentPage <= props.totalPage - 4) {
                arr = [1, '...', ...all.slice(props.currentPage - 3, props.currentPage + 2), '...', props.totalPage];
            } else {
                arr = [1, '...', ...all.slice(props.totalPage - 5, props.totalPage)];
            }
        }
    }

    return (
        <nav>
            <ul className="list-pages">
                {
                    arr.map((item, index) => {
                        return (
                            <li
                                className={item === props.currentPage ? "list-pages-item-active" : "list-pages-item"}
                                key={index}
                                onClick={() => props.requestPosts(item)}
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default PageNations;