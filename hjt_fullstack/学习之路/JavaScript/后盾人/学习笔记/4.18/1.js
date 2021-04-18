// 字符串替换
const str = 'qwe';

// 重复函数
console.log(str.repeat(3));

// 实现号码隐藏
function phone(mobile, length = 3) {
    return String(mobile).slice(0, length * -1) + "*".repeat(length);
}
console.log(phone(12345678911, 5)); // 123456***** 实现隐藏5位

// Math方法
const arr = [1, 2, 3, 4, 5];
console.log(Math.max(arr)) // NaN 不允许直接传键
console.log(Math.max(...arr)) // 5
console.log(Math.max.apply(null, arr)) // 5  引用apply方法传递

// 取某个区间的数
// min - max
// len = 3
// math.floor(math.random()*(max-min + 1) + min)
// 2 - 5
console.log(Math.floor(Math.random() * (5 - 2 + 1) + 2));

// 实现随机点名
const friends = ['小黑', '小明', '小红', '小青'];
let randomNum = Math.floor(Math.random() * 4);
console.log(friends[randomNum], randomNum);

// 时间运算

// 获取当前时间
const date = new Date(); // 类型为对象
console.log(date); // 获取时间
console.log(date * 1); // 获取时间戳
 
const date1 = Date();  // 类型为string
console.log(date1 * 1); // NaN

console.time('demo');
// setTimeout(()=>{console.log('-----')}, 100);
console.timeEnd('demo');

// 获取时间戳的四种当方式
const data = new Date();
let data1 = data * 1;
console.log(data * 1);
console.log(Number(data));
console.log(data.valueOf());
console.log(data.getTime());
// 时间戳转成时间1
const newDate = new Date(data1);
console.log(newDate);