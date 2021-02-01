import React, { Component } from 'react';
import './Post.css'
import { Tabs } from 'antd'
const { TabPane } = Tabs
const EnumPostStatus = { // 文章有不同的状态 
    UNPUBLISH: 1, // 私有
    PUBLISHED: 2, // 公开的
}
// Post 列表 后台就是做这样的事情 
export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            status: 1
        }
    }
    handleTabClick(key) {
        this.setState({
            status: key
        })
    }
    render() {
        const { status } = this.state
        return (
            <div>
                <Tabs
                    activeKey={
                        status == String(EnumPostStatus.UNPUBLISH)
                            ? String(EnumPostStatus.UNPUBLISH)
                            : String(EnumPostStatus.PUBLISHED)
                    }
                    onTabClick={this.handleTabClick.bind(this)}
                >
                    <TabPane tab="Published"
                        key={String(EnumPostStatus.PUBLISHED)}>
                    </TabPane>
                    <TabPane tab="UnPublished"
                        key={String(EnumPostStatus.UNPUBLISH)}
                    >
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}