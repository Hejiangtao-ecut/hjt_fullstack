class Cat<T> {
    private type: T;
    constructor(type: T) {
        this.type = type
    }
}

// 类型不确定动态给定的时候
const cat: Cat<number> = new Cat<number>(1);