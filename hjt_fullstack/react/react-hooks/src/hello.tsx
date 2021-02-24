/* .tsx -> main.ts 加载的路径 */
import * as React from 'react';

interface Props {
    username: string;
}
// ts 加类型约束  支持静态编译 改变弱类型

export const HelloComponent = (props:Props) => { //使用Props的约束
    // props react 函数组件有的形参
    // react 组件函数 state是自己的 props 是外界给的
    // ts 类型约束 react props 检查

    console.log(props)
    return <h2>hello { props.username }</h2>
}