import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div>
                {/* Comment */}
                {this.props.comment.username}:{this.props.comment.content}
            </div>

        )
    }
}