const demo = {
    name:'demo1'
}

// console.log(Object.getOwnPropertyDescriptor(demo, 'name')); // 对象，操作的属性
// {
//   value: 'demo1',   // 值 
//   writable: true,   // 可写
//   enumerable: true, // 可枚举
//   configurable: true // 是否可删除
// }
Object.defineProperty(demo, 'name', {
    value: 'demo2',
    writable:false
})
console.log(demo); // name demo2
demo.name = 'demo3';
console.log(demo.name) //还是demo2 上面设置了不可写

Object.preventExtensions()
Object.isExtensible()
Object.seal()
Object.freeze()