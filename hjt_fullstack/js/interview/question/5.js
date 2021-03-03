// 隐式类型转换
// 当一侧操作数为string时，会优先把另一侧转换成字符串类型，进行字符串拼接
console.log(1 + '2');  //12
// 当一侧操作数为number类型时候，另一侧非字符串时，会优先转化成number类型
console.log(1 + true);
// 为number类型时，另一侧为引用类型
console.log(1 + {});  // 1[object Object] 没有返回值
// 对象在表达式if == 数字或字符串 toString
console.log(3 * { valueOf: function () { return 5 } })  // 15
// 对象提供了value类型转化，如果返回的为字符串，计算结果为NaN