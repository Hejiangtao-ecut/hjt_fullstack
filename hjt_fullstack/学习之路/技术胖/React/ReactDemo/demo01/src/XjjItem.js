import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XjjItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        
    }

    render() { 
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
          );
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}

XjjItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem:PropTypes.func
}
 
export default XjjItem;