//  reducer
import React,{useReducer} from 'react';
import counterReducer from '../Reducer/count';

export default function Demo02() {
    
    return (
        <React.Fragment>
            <div>
                <button type="button">-</button>
                计数器：0
                <button type="button">+</button>
            </div>
        </React.Fragment>
    )
}