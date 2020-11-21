/** 
 * @author hjt
 * @date 2020/11/20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//箭头函数
// hashmap
 const twoSum = (nums, target) => {
    //  console.log('两数相加')
    let res = [];
    let map = {};//键值对
    // 编写功能，一个函数完成一个功能 
    nums.forEach((e,i) => map[e] = i)
    // console.log(map)
    for(let i = 0; i < nums.length; i++){
        let j =map[target-nums[i]]; //如果没找到j为undefinde
        if(j && j !== i){
            res = [i,j];
            break;
        }

    }
    return res;
 }

//  twoSum([2,7,11,15],9);
 console.log(twoSum([2,7,11,15],9));