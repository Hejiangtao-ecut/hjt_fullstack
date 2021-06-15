// 状态分支
const state = () => ({
    items:[]
});

// 基于state，返回里面的属性
// 丰富状态的读操作
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product=>product.id == id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity;
        },0)
    }
}

// 修改的方法
// 不同之处
// 修改之后需要commit到mutations，只有mutations才可以进行state的写操作
const actions = {
    addProductToCart({commit,state},product) {
        // 有库存
        if (product.inventory > 0) {
            // items
            // 是否添加过，
            const cartItem = state.items.find(item => item.id == product.id);
            if (!cartItem) {
                // 没添加过就添加新的信息
                commit('push',{id:product.id})
            } else {
                // 添加过只要修改数据
                commit('increaseNum',cartItem)
            }
            // product.all
        }
    }
}

// 只有mutations才可以进行state的写操作
const mutations = {
    push(state, { id }) {
        state.items.push({
            id,
            quantity:1
        })
    },
    increaseNum(state,{id}) {
        const cartItem = state.items.find(item => item.id == id);
        cartItem.quantity++;
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