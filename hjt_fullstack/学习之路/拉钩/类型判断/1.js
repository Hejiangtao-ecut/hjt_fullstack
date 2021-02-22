function getType(val) {
    let type = typeof val;
    if (type != "object") { //先进行基础数据类型判断
        return type;
    };
    // 进行复杂类型判断
    return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/,'$1');
};

console.log(getType([]));
console.log(getType(123));
console.log(getType('123'));
console.log(getType(function(){}));