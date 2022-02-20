/**
 * @doc 注入到 context 里面
 * @param context 服务端上下文对象，里面包含了我们需要使用的所有方法
 * @param inject 可以同时将方法注入到 context、vue实例 和 store 中
 */
export default ({app}, inject) => {
    // context 里面包含很多属性，我们只需要使用实例对象 app，直接解构
    app.contextFunc = string => console.log("在 context 中注入方法", string);
}