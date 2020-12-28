// constructor 构造函数
function Book(isbn,title,author){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
}

let theHe = new Book("0-395-4","the he","J.R");
console.log(theHe.isbn);