"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyClass = annotation(_class = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class; // 复用装饰函数 新的构建类的方式 


function annotation(target) {
  target.annotated = true;
}
