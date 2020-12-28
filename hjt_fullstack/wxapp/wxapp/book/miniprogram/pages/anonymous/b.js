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

let js = new Book('111','aaa','bbb');
const attrs = [...Object.getOwnPropertyNames(js)];
console.log(attrs);

// 作业 返回所有对象上可以调用的方法或者属性 atts