// 多重命名空间以及引入

namespace MyMath{
    // 第二层空间
    // 需要外部可以访问就需要export修饰
    export namespace MyBody{
        // 计算体积
        export function getBody(length: number, weith: number): number{
            return length * weith;
        }
    }

    // 两数相加
    export function addValue(num1: number, num2: number): number{
        return num1 + num2;
    }
}

// 第一层空间 计算加法
console.log(MyMath.addValue(1, 2));
// 第二层空间 计算体积
console.log(MyMath.MyBody.getBody(10,10))