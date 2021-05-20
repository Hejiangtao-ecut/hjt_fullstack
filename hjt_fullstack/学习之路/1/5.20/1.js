function addFactory() {
    var s = [...arguments];
    var fn = function () {
        s.push([...arguments]);
        return fn;
    }
    fn.toString = function () {
        return s.reduce((pre, cur) => pre + cur);
    }
    return fn;
}

const add = addFactory();
add(1)(2)(3);
console.log(add); // 6
add(4);
console.log(add()); //10