/** 
 * @author hjt
 * @date 2020/11/20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const numbers = [3, 62, 234, 7, 23, 76, 92];
 const arr = [];
//  const largestnum = numbers.forEach((e,i) => {
//     if(e>70){
//         arr.push(e);
//     }
//  })

//在forEach基础上，接受一个回调至值
//fillter内置函数
 const cb = numbers => numbers > 70
 const largestnum = numbers.filter(cb);

 console.log(largestnum);