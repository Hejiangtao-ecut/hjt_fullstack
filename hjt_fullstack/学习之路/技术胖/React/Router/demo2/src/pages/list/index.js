import { Route, Link } from 'react-router-dom';
import list1 from './list1';
import list2 from './list2';
import list3 from './list3';

function List() {
    return (
        <>
            <div className="list">
                <ul>
                    <li><Link to="/list/list1">list1</Link></li>
                    <li><Link to="/list/list2">list2</Link></li>
                    <li><Link to="/list/list3">list3</Link></li>
                </ul>
            </div>
            <div>
                <Route path="/list/list1" component={list1} />
                <Route path="/list/list2" component={list2} />
                <Route path="/list/list3" component={list3} />
            </div>
        </>
    )
}

export default List