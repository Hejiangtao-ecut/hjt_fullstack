import React, { useState } from 'react';

export default function Index() {
    const [totol, setTotol] = useState(0);
    function add() {
        let n = totol;
        setTotol(++n);
    }
    function sub() {
        let n = totol;
        setTotol(--n);
    }
    return (
        <React.Fragment>
            <button onClick={()=>{sub()}}>-</button>
            计数器：{totol}
            <button onClick={()=>{add()}}>+</button>
        </React.Fragment>
    )
    
}