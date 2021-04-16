# Symbol类型
- Symbol（符号）是ES6新增的数据类型，符号是原始值，且符号实例是唯一、不可变的。
1. 符号的基本使用
 - 基本用法，同时可以在函数内传入字符串作为符号描述
	```
	    //基本用法
	    let sym = Symbol();
	    console.log(typeof sym);//symbol
	    //传入字符串作为符号描述
	    let fooSymbol = Symbol('foo');
	    let otherFooSymblo = Symbol('foo');
	    console.log(fooSymbol == otherFooSymblo);//false 符号是唯一的
	```
 - Symbol()函数为了避免创建包装对象，是不可以和new关键字一起用的，如果想使用符号包装对象，可以借用object（）函数
   	```
    	let obsym = Object(sym);
		 console.log(typeof obsym);//object
    ```
2. 使用全局符号注册表
 - 如果不同部分需要共享和重用符号实例，那么可以使用一个字符串为键，并使用symbol.for()函数
			```
				//重用符号
				let fooGlobalSymbol = Symbol.for('foo');//创建新符号
				let reFooGolbalSymbol = Symbol.for('foo');
				console.log(fooGlobalSymbol == reFooGolbalSymbol) //ture
				console.log(fooGlobalSymbol == fooSymbol) //false 未使用Symbol.for函数
			```
 - 可以使用Symbol.keyFor()来查询全局的注册表，用这个方法接受符号，返回该全局符号对应的字符串键
 	```
		//Symbol.keyFor()
		let s = Symbol.for('foo');
		console.log(Symbol.keyFor(s));//foo  返回对应的字符串键
		console.log(Symbol.keyFor(sym));//undefined  普通符号
		//如果传送非符号则返回TypeError
		// console.log(Symbol.keyFor(123));//TypeError: 123 is not a symbol
	```
 