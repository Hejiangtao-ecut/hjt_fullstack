// var a = {
//     value: 1,
//     valueOf() {
//         return 1;
//     },
//     toString() {
//         return 'a';
//     }
// }
// console.log(a); // 

// Number 和 parseInt 
// let num1 = Number('1234qwe'); // NaN
// let num2 = parseInt('1234qwe'); // 1234
// console.log(num1, '--', num2);

// // 标签语句
// let num = 0;
// demo:
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if (j == 2) {
//             break demo;
//         }
//         num++;
//     }
// }
// console.log(num);

// with 
// with (document) {
//     let hostName = hostName;
//     // 等价于没有with时的
//     let hostName = document.hostName;
// }