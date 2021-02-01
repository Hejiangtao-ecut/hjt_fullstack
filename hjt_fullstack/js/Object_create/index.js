const person = {
    isHuman: false,
    demo: function () {
        console.log("hello")
    }
}

// 底层实现 me.__proto__ = person
const me = Object.create(person);   //{}