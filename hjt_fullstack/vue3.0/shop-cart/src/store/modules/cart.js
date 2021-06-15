// 状态分支
const state = () => ({
    items:[]
});

// 基于state，返回里面的属性
// 丰富状态的读操作
const getters = {

}

// 修改的方法
// 不同之处
// 修改之后需要commit到mutations，只有mutations才可以进行state的写操作
const actions = {
    addProductToCart({commit,state},product) {
        commit('push',{id:product.id})
    }
}

// 只有mutations才可以进行state的写操作
const mutations = {
    push(state, { id }) {
        state.items.push({
            id,
            quantity:1
        })
    }
}

// 最后把四个模块输出一下就好
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}