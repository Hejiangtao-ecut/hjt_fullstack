// React.lazy
// 16.6以后的版本才有

import React, { Component, lazy, Suspense } from 'react';
// 旧方法引入，打包加载慢
// import Input from '../components/input'
// React懒加载组件
const Input = lazy(() => import('../components/input'))

class Demo05 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    isShowInput() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <>
                {this.state.isShow &&
                    <Suspense fallback={<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3206689113,2237998950&fm=26&gp=0.jpg" />}>
                        <Input />
                    </Suspense>
                }
                <button onClick={this.isShowInput.bind(this)}>显式按钮</button>
            </>
        );
    }
}

export default Demo05;