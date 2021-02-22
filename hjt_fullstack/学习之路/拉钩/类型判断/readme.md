1. instanceof 可以准确判断复杂引用类型，但是不能判断基础数据类型
2. typeof 可以判断基础数据类型，但是不能判断复杂数据类型，对null判断也认为是object
3. Object.prototype.toString 方法，可以快速判断typeof不能判断的数据类型
4. 整合使用，可以实现底层手写判断数据类型