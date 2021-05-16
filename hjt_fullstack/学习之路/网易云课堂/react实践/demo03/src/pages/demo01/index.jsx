// 无状态组件

import React from 'react';

export default function Demo01(props) {
    return (
        <div>
            {props.title}
            <button type="button" onClick={props.sendValue.bind(this,'子组件传值')}>点击给父组件传值</button>
        </div>
    )
}
