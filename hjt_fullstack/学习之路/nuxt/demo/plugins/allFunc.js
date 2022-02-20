/**
 * @doc 在 vue、context、vuex 中注入
 */

export default ({ app }, inject) => {
    // 第一个参数：注入名称
    inject('allFunc', string => {
        console.log('在 vue、context、vuex 中注入', string);
    })
}