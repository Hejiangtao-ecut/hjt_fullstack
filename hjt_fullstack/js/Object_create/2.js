// 手动实现create方法
// 返回新的对象
const person = {
    isHuman: false,
    demo: function () {
        console.log("hello")
    }
}

function create(L) {
    function F() { };
    F.prototype = L;
    return new F();
}

const me = create(person);
console.log(me.__proto__);

