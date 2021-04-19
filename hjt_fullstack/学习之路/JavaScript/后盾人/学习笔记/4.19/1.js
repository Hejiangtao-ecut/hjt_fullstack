const arr = [1, 2, 3, 4, 5];
let x = arr.find(item => {
    return item==2
})
console.log(x); // 2

let y = arr.findIndex(item => {
    return item == 2
})
console.log(y) // 1,2的下标