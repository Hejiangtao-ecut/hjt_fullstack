# js
1. 
    - let a = [1, 2, 3];
    - a.join = a.shift;
    - console.log( a == 1 && a == 2 && a == 3) //true

# "1".toString()
String ->object
object是所有对象的原型对象 array function ....
- 简单数据类型不会有方法
    1. 创建包装类型 new String("1")
    2. 调用该实例的方法 "1".toString
    3. 执行结束进行 s=null 销毁这个实例