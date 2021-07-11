// namespace 命名空间
// 类似于module，设置后在别的文件引用可以使用别名
// 可以避免多个文件存在相同名称产生冲突

// 使用namespace包裹
namespace MyMath {
    // 外部需要访问的一些都需要export，，否则就会访问不到
    const num1: number = 1;

    // 导出的函数必须加export,否则1就会访问不到
    // 两数相加函数
    export function sunValue(num1: number, num2: number): number {
        return num1 + num2;
    }
}

// 进行访问
// num1 没有进行export，访问会报错
// console.log(MyMath.num1);
console.log(MyMath.sunValue(1,2))

