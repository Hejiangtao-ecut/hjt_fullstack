function Animal(){
    // this.species = '动物';
}

Animal.prototype.species = '动物'

function Cat(name,color){
    this.name = name;
    this.color = color;
}

Cat.prototype = Animal.prototype //会污染父类

console.log(Cat.prototype.constructor === Animal)

Cat.prototype.constructor = Cat

