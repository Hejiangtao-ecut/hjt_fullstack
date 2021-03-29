import React from 'react';
import { Route, Link } from 'react-router-dom';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

function Demo() {
    return (
        <div>
            <div classNam="topNav">
                <ul>
                    <li><Link to="/demo/demo1/">demo1</Link></li>
                    <li><Link to="/demo/demo2/">demo2</Link></li>
                    <li><Link to="/demo/demo3/">demo3</Link></li>
                </ul>
            </div>
            <div className="demoContent">
                <div> <h3>demo区域</h3> </div>
                <Route path="/demo/demo1/" component={Demo1} />
                <Route path="/demo/demo2/" component={Demo2} />
                <Route path="/demo/demo3/" component={Demo3} />
            </div>
        </div>
    )
}
export default Demo
