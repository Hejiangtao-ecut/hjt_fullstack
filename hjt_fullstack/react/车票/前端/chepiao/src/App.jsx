import * as  React from 'react';
import { connect } from "react-redux"
import { setFrom, setTo } from './store/actionCreator';
import Header from './components/header/Header';
import Journey from './components/journey/journey';
import './App.css'

const App = (props) => {
  console.log(props);
  const onBack = React.useCallback(() => {
    // 性能优化，点击时间不会引起react的更新
    // usecallback不会更新
    window.history.back();
  })
  const { from, to } = props;
  return (
    <div>
      <div className="header-wrapper">
        {/* title Header 通用  */}
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="" className="form">
        <Journey />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    from: state.from,
    to: state.to
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 对调， 城市选择
    setFrom(from) {
      dispatch(setFrom(from))
    },
    setTo(to) {
      dispatch(setFrom(to))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);