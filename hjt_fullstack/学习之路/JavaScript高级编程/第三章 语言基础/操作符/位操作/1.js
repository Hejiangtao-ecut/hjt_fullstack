//~位操作符，运算结果为取反-1
let num = 25;
let num1 = ~num;// -25 - 1 = -26
console.log(num1);//-26
console.log(~num1+1);//26   

let e = {
    'name':'hejiangtao',
    'age':'21',
    'city':'shicheng'
}
let ee = [2,3,4,5,6]

for(let i in e){
    console.log(i)
}
for(let i of ee){
    console.log(i)
}

