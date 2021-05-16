// 高阶组件
// 属性代理
import React from 'react';

// 接收一个组件作为参数
export default function Hoc(WithComponent,name) {
    // 属性代理
    // 继承谁就代理谁的属性
    return class HocComponent extends React.Component {
        render() {

            // 里面不写UI，使用外面接收传递的Ui
            return (
                // 通过属性向前面传值
                <>
                    <WithComponent title="高阶组件属性代理"></WithComponent>
                    <br />
                    {name}
                </>
               
            )
        }
    }
}