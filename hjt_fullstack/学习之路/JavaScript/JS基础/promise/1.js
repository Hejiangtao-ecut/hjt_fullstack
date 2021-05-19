let promise1 = new Promise((resolve, reject) => { });
let promise2 = new Promise((resolve, reject) => { resolve(1) });
let promise3 = new Promise((resolve, reject) => { reject(2) });

console.log(promise1);
console.log(promise2);
console.log(promise3);