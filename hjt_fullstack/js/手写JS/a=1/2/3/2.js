const a = {
    value: 1,
    valueOf() {
        return this.value
    }
}

console.log(a == 1)