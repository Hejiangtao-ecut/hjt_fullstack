const arr = [1, [2, [3, [4, [5]]]]];


function fn(array) {  
    let a = [];
    for (let i = 0; i < array.length; i++){
        // 存在数组就进行递归调用
        if (Array.isArray(array[i])) {
            a = a.concat(fn(array[i]));
        } else { // 不存在直接push
            a.push(array[i]);
        }
    }
    return a;
}

console.log(fn(arr));