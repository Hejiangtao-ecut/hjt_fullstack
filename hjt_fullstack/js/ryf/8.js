// prototype
function Animal(){
    this.species = '动物';
}



function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype = new Animal();

var cat1 = new Cat("demo","ye")
// cat1 -> Cat -> new Animal()

console.log(cat1.species);
console.log(cat1.prototype.constructor);