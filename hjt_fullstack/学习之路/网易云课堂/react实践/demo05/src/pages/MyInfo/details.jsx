import React from 'react';

export default function Details(props) {
    console.log(props)
    return (
        <React.Fragment>
            {/* <div>这是{props.match.params.id}的{props.match.params.title }</div> */}
            {/* <div>id:{props.location.query.id }</div> */}
            <button onClick={props.history.go.bind(this,-1)}>返回</button>
        </React.Fragment>
    )
}