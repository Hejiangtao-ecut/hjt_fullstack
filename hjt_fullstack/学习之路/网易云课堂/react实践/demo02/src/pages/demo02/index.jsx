import React, { Component } from 'react';

class Demo02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [
                { name: 'demo01', checked: false },
                { name: 'demo02', checked: false },
                { name: 'demo03', checked: false },
                { name: 'demo04', checked: false }
            ]
        }
    }

    // 选择用户
    selectUser(index) {
        const user = this.state.user;
        user[index].checked = !user[index].checked;
        this.setState({
            user:user
        })
    }
    selectAllUser() {
        
    }
    render() {
        return (
            <>
                <table width="100%" border="1" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td height='40' align="center" bgcolor="#0099cc"><input type="checkbox" onChange={} />全选</td>
                            <td align="center" bgcolor="#0099cc">姓名</td>
                            <td align="center" bgcolor="#0099cc">管理</td>
                        </tr>
                        {
                            this.state.user.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td align="center" height="40"><input type="checkbox" checked={item.checked} onChange={this.selectUser.bind(this,index)} /></td>
                                        <td align="center">{item.name}</td>
                                        <td align="center">删除</td>
                                    </tr>

                                )
                            })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Demo02;