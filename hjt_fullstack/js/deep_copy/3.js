var obj = { a: { a: 'hello', b: 20 } };
var deepClone = Object.assign({}, obj);
console.log(deepClone);
deepClone.a.a = 'changed';
console.log(obj);