// 模块化

// 在ts中引入文件不要写明文件后缀，因为会进行编译，编译后ts会转成js或者其他语言，如果声明后缀名会在编译之后报错
import { demo } from './1';

console.log(demo);

// 在ts中，模块化并没有很好的支持
// ts不支持commonjs，甚至还有amd，cmd等等，可以使用一个System进行模块化