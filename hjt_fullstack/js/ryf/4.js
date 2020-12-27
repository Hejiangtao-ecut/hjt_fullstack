// 函数是可以复用的
// var Cat = {
//     name:' ',
//     color:' '
// }
function Cat(name, color){
    this.name = name; //this指向实例
    this.color = color; 
    console.log(name,color)
    return{
        name,
        color
    }
}

var cat1 = Cat("huihui","red")