function Animal(){
    // this.species = '动物';
}

Animal.prototype.species = '动物'

function Cat(name,color){
    this.name = name;
    this.color = color;
}
// Cat.prototype = Animal.prototype  放弃此方法

var F = function(){}
F.prototype = Animal.prototype;

Cat.prototype = new F();  //没有2的效率问题，没有3的修改问题

Cat.prototype.constructor = Cat;

var cat1 = new Cat('ao','white');
console.log(Animal.prototype.constructor);
console.log(cat1.species);