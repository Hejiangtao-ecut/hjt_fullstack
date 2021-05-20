// 反向继承
import React from 'react';

export default function Hoc(WithComponent) {
    // 返回的高阶组件不再继承react，继承传过来的组件
    return class HocComponent extends WithComponent{
        render() {
            return (
                <div>
                    {/* 这里还可以直接拿到传递过来的组件的state，访问权限足够大 */}
                    <div>name:{ this.state.name }</div>
                    <WithComponent title="反向继承"></WithComponent>
                    {name}
                </div>
            )
        }
    }
}