function demo(num) {
    console.log(num);
    //记录demo的调用次数，待会赋值为0
    demo.count++;
};

demo.count = 0;
demo(1); //1
demo(2); //2
demo(3); //3
//来看看demo.count为多少
console.log(demo.count);//0