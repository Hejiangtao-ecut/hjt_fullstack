// JSON。stringfy 乞丐版深拷贝
let obj1 = { a: 1, b: [1, 2, 3] };
let str = JSON.stringify(obj1);
console.log(str);
let obj2 = JSON.parse(str);
console.log(obj2);