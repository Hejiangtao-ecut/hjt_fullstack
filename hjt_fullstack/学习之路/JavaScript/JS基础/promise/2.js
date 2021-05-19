let promise1 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        console.log("A");
        resolve("A");
    }, 300);
});
let promise2 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        console.log("B");
        resolve("B");
    }, 100);
});
let promise3 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        console.log("C");
        reject("C");
    }, 400);
 });


Promise.all([promise1, promise2, promise3])
    .then(res => {
        console.log(res);
    }).catch(e => {
    console.log(e,'-----');
})