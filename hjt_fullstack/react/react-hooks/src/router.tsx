import * as React from 'react';
import {Route,Switch,HashRouter} from 'react-router-dom';
import { App } from './app2';
export const AppRouter: React.FC = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route path="/" component={App} />
                {/* js switch 有且匹配一个 */}
                {/* <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/members" component={MemberPages} />
                </Switch> */}
            </div>
        </HashRouter>
    )
}
