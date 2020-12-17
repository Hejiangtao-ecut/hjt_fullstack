# var 和 let 声明的区别
1. 作用域
    - var声明的作用域为函数的局部变量
    - let为块级变量（适用循环体条件控制等）
    - 不带声明条件为全局变量
    ```
        function foo(){
            var age;//局部变量
            age;//全局变量
            for(let i =0;){//块级变量
                ...
            }
        }
    ```
2. 声明提升
    - var会进行声明提升
    ```
        console.log(age);
        var(age);//不报错
    ```
    - let不会进行声明提升
     ```
        console.log(age);//underfunded，暂时性死区
        let(age);
        console.log(age);//不报错
    ```
3. 覆盖
    - var 允许重复声明一个变量并复制覆盖
    - let 不允许重复声明

