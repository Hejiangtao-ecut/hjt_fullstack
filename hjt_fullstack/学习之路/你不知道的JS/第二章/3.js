function demo1() {
    // 当前调用栈是：demo1
    // 因此，当前调用位置是全局作用域 
    console.log("demo1");
    dmeo2(); // <-- demo2 的调用位置 
}
function dmeo2() { 
    // 当前调用栈是 demo1 -> demo2 
    // 因此，当前调用位置在 demo1 中 
    console.log("demo2");
    demo3(); // <-- demo3 的调用位置 
}
function demo3() {
    // 当前调用栈是 dmeo1 -> demo2 -> demo3 
    // 因此，当前调用位置在 demo2 中 
    console.log("demo3");
}
demo1(); // <-- demo1 的调用位置
