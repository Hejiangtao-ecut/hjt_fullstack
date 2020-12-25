//使用字面量模板`string`+${}完成插值
let name1 = "he";
let name3 = "tao";

let addName = name1 + "jiang" + name3;//传统插值
console.log(addName);
let addName2 = `${name1}jiang${name3}`;//模板字面量  插值，会保留空格
console.log(addName2);

//使用模板字面量获取原始的模板字面量内容
// \u00A9 是版权符号
console.log(`\u00a9`);//©
// \n 为换行符号
console.log(`first line\nsecond line`);//字符串换行