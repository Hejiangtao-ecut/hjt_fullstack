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
            ],
            allSelected:false
        }
    }

    // 选择用户
    selectUser(index) {
        // 根据index来进行选择状态的改变
        const user = this.state.user;
        user[index].checked = !user[index].checked;
        let selectAll = user.every(item => {
            return item.checked;
        })
        this.setState({
            user: user,
            allSelected:selectAll
        })
    }
    // 全选
    selectAllUser() {
        // 在state设置变量，然后通过状态覆盖来实现全选
        const selectAll = !this.state.allSelected;
        const user = this.state.user;
        user.forEach(item => {
            item.checked = selectAll;
        })
        this.setState({
            allSelected: selectAll,
            user:user
        })
    }
    // 删除事件
    deleteItem(index) {
        const user = this.state.user;
        user.splice(index, 1);
        this.setState({
            user:user
        }, () => {
                if (this.state.user.length <= 0) {
                    this.setState({
                        allSelected: false
                    })
                }
        })
    }

    render() {
        return (
            <>
                <table width="100%" border="1" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td height='40' align="center" bgcolor="#0099cc"><input type="checkbox" checked={this.state.allSelected} onChange={this.selectAllUser.bind(this)} />全选</td>
                            <td align="center" bgcolor="#0099cc">姓名</td>
                            <td align="center" bgcolor="#0099cc">管理</td>
                        </tr>
                        {
                            this.state.user.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td align="center" height="40"><input type="checkbox" checked={item.checked} onChange={this.selectUser.bind(this,index)} /></td>
                                        <td align="center">{item.name}</td>
                                        <td align="center" onClick={this.deleteItem.bind(this,index)}>删除</td>
                                    </tr>

                                )
                            })
                        }
                        <tr bgcolor='red'>
                            <td  align='center'>批量删除</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default Demo02;