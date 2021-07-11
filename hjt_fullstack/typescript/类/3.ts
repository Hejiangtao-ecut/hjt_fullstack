// get和set
// 用于隔离私有属性和共有属性

class Person{
    // 私有属性会使用下划线
    private _name: string = 'jimao';

    // 私有属性赋值
    set SetName(val:string) {
        this._name = val;
    }
    // 私有属性取值
    get getName():string {
        return this._name;
    }
    
}

const p1 = new Person();
// 获取私有属性
console.log(p1.getName);
// 改变私有属性
p1.SetName = 'janghe'
console.log(p1.getName);