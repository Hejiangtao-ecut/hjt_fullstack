var a = {
    // 设置默认值为0
    value: 0,
    // 复写valueOf方法
    valueOf() {
        // 每次自增，让value慢慢增加
        this.value++;
        return this.value;
    }
}

console.log(a == 1 && a == 2 && a == 3);//true

