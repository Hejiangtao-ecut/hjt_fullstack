import shop from '../../api/shop';
const state=()=>({
    all:[]
})

const getters={};
const actions={
    getAllProducts({commit}){
        shop.getProducts(products=>{
            //console.log(products);
            commit('setProducts',products)
        })
    },
};
const mutations={
    setProducts(state,products){
        state.all=products;
    }
};

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}