// 传递参数

function addTen(num) { 
    num += 10; 
    return num; 
} 
let count = 20;
let result = addTen(count); 
console.log(count); // 20，没有变化
console.log(result); // 30

function setName(obj) { 
    obj.name = "Nicholas"; 
   } 
let person = new Object(); 
setName(person); 
console.log(person.name); // "Nicholas"