const arr = [3,4,5]
console.log(arr)
// 给出在数组的尾部/头部 加、删的方法
arr.push(6); //在尾部加数据
console.log(arr)
arr.pop();  //在尾部删除一个数据
console.log(arr)
arr.unshift(2); //在队头插入一个数据
console.log(arr)
arr.shift();  //在队头删除一个数据
// 把数组打印出来
console.log(arr)
console.info(arr)
for (const num in arr) {
    console.log(num);
}
arr.forEach(item =>{
    console.log(item);
})
console.log(arr.join(""));
console.log(arr.splice(0,arr.length));
console.log(arr.map(item => item));