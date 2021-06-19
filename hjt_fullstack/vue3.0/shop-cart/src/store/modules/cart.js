// 状态分支
const state = () => ({
    items: []
});
// 基于状态 ，返回对状态的新需求的getter属性
// 丰富了状态 的读操作
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(
                product=> product.id == id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}
// commit 到mutation
const actions = {
    addProductToCart({ commit, state }, product) {
        // commit('pushProductToCart', { id: product.id })
        // 如果 有库存
        if (product.inventory > 0) {
            // items 
            // 之前买 过吗？
            const cartItem = state.items.find(
                item => item.id == product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            // product.products.all  inventory
        }
    }
}
// 只有mutation对状态进行写操作
const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }) {
       const cartItem = state.items.find(item => item.id == id)
       cartItem.quantity++
    }
}
export default {
    namespaced: true,
    state, 
    getters,
    actions,
    mutations
}
