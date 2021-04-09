const arr = [1, [2, [3, [4, [5]]]]];

function Flatten(array) {
    return array.reduce((pre, cur) => {
        // 判断是否存在数组，存在就递归，不存在直接push
        return pre.concat(Array.isArray(cur)?Flatten(cur):cur)
    },[]) //传递空数组作为接收对象
}

console.log(Flatten(arr));[1, 2, 3, 4, 5]

