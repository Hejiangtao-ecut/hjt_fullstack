const a = {
    value: 1,
    // valueOf() {
    //     return new String();
    // },
    toString() {
        return new String();
    }
    // [Symbol.toPrimitive]() {
        
    // }
}

console.log(a == 1)