
// es5

// function getName(name) {
//     var relName = name || '张三';
//     console.log(relName);
// }

// 张三，涉及隐式转换
// 解决办法：三元运算符 ！= undefined
// getName(0);

// es6

function getName(name = '张三') {
    console.log(name);
}

getName(0); // 0, es6 无需处理