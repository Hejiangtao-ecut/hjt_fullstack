import { createStore } from 'vuex'

export default createStore({

  state: {  // 数据源
    count:0
  },
  mutations: {  // 方法,更改数据源的函数,但是不可以直接暴露出去调用
    addCount(state) {
      state.count++
    }
  },
  actions: {  // 调用mutations里面的方法，解决没办法直接暴露mutations的方法
    actionAddCount(ctx) {
      ctx.commit('addCount') // 提交mutations里面的方法
    }
  },
  modules: {
  }
})
