// 首页
import React from 'react';
import { connect } from 'react-redux';

function Index(props){
    console.log(props);
    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        info: state.info
    }
}
const dispatchToProps = (dispatch) => {
    return {
        loadClick() {
            
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Index)