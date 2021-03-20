import React from 'react';
import { connect } from 'react-redux';
function Recommend(props) {
    console.log(props.BannerList, '--------')
    return (
        <div>Recommend</div>
    )
}
const mapStateToProps = (state) => {
    return {
        BannerList: state.recommed.BannerList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList())
        }
    }
}
// 读取store 状态 dispatch action
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);