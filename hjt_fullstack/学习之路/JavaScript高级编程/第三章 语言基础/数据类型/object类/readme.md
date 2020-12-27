# object类型
 - ECMAScript 中的对象其实就是一组数据和功能的集合。对象通过 new 操作符后跟对象类型的名称来创建。开发者可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法：
 	```	
		let o = new Object();
 		let o = new Object; // 合法，但不推荐
	```
 - 每个 Object 实例都有如下属性和方法。
 	- constructor：用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object() 函数。
	- hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号。
	- isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型。
	- propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用for-in 语句枚举。与 hasOwnProperty()一样，属性名必须是字符串。
	- toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
	- toString()：返回对象的字符串表示。
	- valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。