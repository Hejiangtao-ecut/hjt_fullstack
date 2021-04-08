import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App } from './app';
// 让路由接管最外层， 路由模块化成一个组件;
import {AppRouter} from './router';

// router jspang
// import { HelloComponent } from './hello';

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);