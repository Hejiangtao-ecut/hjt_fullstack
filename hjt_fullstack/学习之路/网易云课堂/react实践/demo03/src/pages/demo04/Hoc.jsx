// 登录的高阶组件
import React from 'react';
export default function Hoc(WithComponent) {
    return class HocComponent extends React.Component{
        getUsername(e) {
            console.log(e);
        }
        render() {
            return (
                <React.Fragment>
                    <WithComponent {...this.props} setUsername={this.getUsername.bind(this)}>

                    </WithComponent>
                </React.Fragment>
            )
        }
    }
}