class Book{
    constructor(isbn,title,author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    };
    display(){
        return `
            ISBN号：${this.isbn}
            Title:${this.title}
            Author:${this.author}
        `
    }
}

const js = new Book('111','aa','bb')
console.log(js.hasOwnProperty('display'))
// 找原型对象
console.log(js.__proto__ == Book.prototype)

// prototype 可以添加属性
Book.prototype.sell = () =>{}
Book.prototype.buy = () =>{}
// 可以写成如下
Book.prototype = {
    sell: () => {},
    buy:() =>{}
}
// 火车头和车身之间
console.log(js.constructor == Book == Book.prototype.constructor);
// 基于原型的面向对象
// 封装，继承，多态
console.log(js.__proto__ == Book.prototype)
console.log(js.hasOwnProperty('title'));
console.log(js.hasOwnProperty('display'))
console.log("display" in js);