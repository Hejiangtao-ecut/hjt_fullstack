let arr = [1, 1, 1, 1, 1, 1];
console.log(arr); // [ 1, 1, 1, 1, 1, 1 ]

let set = new Set();
set.add(1);
set.add(1);
set.add(2);
console.log(set); // Set(2) { 1, 2 }  // (2)表示两个元素

// values 查看里面的值
console.log(set.values());

// delete 删除某个元素，成功为true，否则为false
console.log(set.delete(1));
console.log(set.delete(1));