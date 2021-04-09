import React,{useContext} from 'react';
import { ColorContext,UPDATE_COLOR } from './color';

function Buttons() {

    const { dispatch } = useContext(ColorContext);


    return (
        <div>
            <input type="text" id="123"  />
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'red'})}}>红色</button>
        </div>
    )
}
export default Buttons