var obj = {}; // 空对象
Object.defineProperties(obj, {
    'pro1': {
        value: '123',
        writable:true
    },
    'pro2': {
        value: 'hello',
        writable:false
    }
});
obj.pro1 = 'demo'
console.log(obj.pro1)
console.log(Object.keys(obj))