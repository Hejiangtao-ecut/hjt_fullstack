import React,{ Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this)
    }

    // 子组件如果想和父组件通信，就必须使用由父组件以属性方式传递过来的方法
    deleteItem() {
        this.props.itemClick(this.props.index);
    }

    render() {
        const item = this.props.item;
        return (
            <li onClick={ this.deleteItem }>{ item }</li>
        )
    }
}

export default TodoItem;