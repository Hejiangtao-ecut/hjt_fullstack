function Animal(){
    // this.species = '动物';
}

Animal.prototype.species = '动物'

function Cat(name,color){
    this.name = name;
    this.color = color;
}

function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

extend(Cat,Animal);
var cat1 = new Cat("huihui",'hui')
console.log(cat1.species)