function demo() {
    let n = 1;
    // 返回引用类型，保持一直存在
    return function sum(){
        console.log(++n)
    }
};

// 接收引用类型，让其一直存在
let a = demo();
// 第一次执行 2
a();
// 第二次执行 3 形成了闭包
a();


// 修改一下
function demo2() {
    let n = 1;
    // 返回引用类型，保持一直存在
    return function sum() {
        // console.log(++n)
        let m = 1;
        function show() {
            console.log(++m);
        }
        show()
    }
};

let b = demo2();
b();
b();
b();
// 多次调用结果为2，因为每次show都被创建了，但是执行后销毁了，所以每次调用了都是新的show

// 将其改成闭包
function demo3() {
    let n = 1;
    // 返回引用类型，保持一直存在
    return function sum() {
        // console.log(++n)
        let m = 1;
        return function show() {
            console.log(++m);
        }
    }
};

// 每次返回的是show方法，所以需要加一个()让其执行起来，否则每次调用的结果和demo2无异
let c = demo3()();
c(); // 2
c(); // 3
c(); // 4