function simpleClone(object) {
    var obj = {};
    for (const key in object) {
        obj[key] = object[key]; 
    }
    return obj;
}

var obj = {
    a:"hello"
}
var cloneObj = simpleClone(obj);
cloneObj.a = "demo";
console.log(obj);
console.log(cloneObj);