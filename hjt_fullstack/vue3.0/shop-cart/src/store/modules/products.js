import shop from './api/shop';

const state = () => ({
    all: []
});

const getters = {};

const actions = {
    getAllProducts({commit}) {
        shop.getProducts(products => {
            // console.log(products());
            commit('setProducts',products)
        })
    }
};

const mutations = {
    setProducts(state,products) {
        
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}