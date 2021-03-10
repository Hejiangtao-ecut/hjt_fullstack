// 手写深拷贝
const isType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null);

const deepClone = function (obj, hash = new WeakMap()) {
    if(obj.constructor === Date) return new Date(obj);  // 日期对象直接返回一个新的日期对象
    if (obj.constructor === RegExp) return new RegExp(obj);  // 正则对象直接返回一个新的正则对象
    if (hash.has(obj)) return hash.get(obj);
    // 遍历传入参数所有键的特性
    let allDesc = Object.getOwnPropertyDescriptor(obj);
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
    // 继承原型链
    hash.set(obj, cloneObj);
    for (const key of Reflect.ownKeys(obj)) {
        cloneObj[key] = (isType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]
    }
    return cloneObj;
}