/**
 * 功能 获得唯一id
 * @date 2020/11/21
 * @anthor hjt
 * @return {string}
 */
// const uniqueID = () => {
//     let t = + new Date(); //类型转换
//     let randNum = Math.ceil(Math.random()*1000);
//     return t + "" + randNum;
// }
const uniqueID = () => new Date() + '' + Math.ceil(Math.random()*1000);

console.log(uniqueID());