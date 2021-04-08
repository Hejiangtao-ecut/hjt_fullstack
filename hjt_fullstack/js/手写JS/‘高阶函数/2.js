const arr = [1, 2, 3, 4, 5];

let num = arr.reduce((count, item) => {//item为数组的每一项遍历，count为后面传的第二个参数
    // 使用count进行累加
    count += item;
    // 返回count，在数组遍历过程中count是不会被再次清零的
    return count;
}, 0)//这里设置count为0

console.log(num); //15