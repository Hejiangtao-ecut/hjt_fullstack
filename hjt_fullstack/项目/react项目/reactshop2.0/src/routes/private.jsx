// 登录认证功能
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRouter({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={
            props => Boolean(localStorage['isLogin']) ?
                (<Component {...rest} />) :
                (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        }
        />
    )
}