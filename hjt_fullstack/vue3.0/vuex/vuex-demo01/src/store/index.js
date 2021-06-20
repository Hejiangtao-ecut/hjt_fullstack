import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getDbNums (state) {
      return '翻倍后为' + state.count * 2
    }
  },
  actions: {
    // 异步操作都放这里
    asyncAdd ({ commit }) {
      // 解构赋值commit
      setTimeout(() => {
        // 再actions里面不能直接修改state，必须commit到mutation
        commit('add')
      }, 500)
    },
    asyncAddN ({ commit }, val) {
      // 解构赋值commit
      setTimeout(() => {
        // 再actions里面不能直接修改state，必须commit到mutation
        commit('addN', val)
      }, 500)
    },
    asyncSub ({ commit }) {
      // 解构赋值commit
      setTimeout(() => {
        // 再actions里面不能直接修改state，必须commit到mutation
        commit('sub')
      }, 500)
    },
    asyncSubN ({ commit }, val) {
      // 解构赋值commit
      setTimeout(() => {
        // 再actions里面不能直接修改state，必须commit到mutation
        commit('subN', val)
      }, 500)
    }
  },
  mutations: {
    // 第一个参数都是自身需要捕获的state，第二个是外界传递进来的参数
    add (state) {
      // count+1
      state.count++
    },
    addN (state, step) {
      // state 捕获的分支
      // step 外部传递的参数
      state.count += step
    },
    sub (state) {
      // count+1
      state.count--
    },
    subN (state, step) {
      // count+1
      state.count -= step
    }
  },
  modules: {}
})
