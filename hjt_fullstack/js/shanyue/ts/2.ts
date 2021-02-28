// 数据是需要类型化的
// 数据进行大量操作，为了减少出错，ts进行约束
interface User { // 接口
    name: string;
    age: number;
    occupation: string;
}
interface Admin{
    name: string;
    age: number;
    role:string
}
export type Person = User | Admin; // 两种约束的一种
// export type User = {
//     name: string;
//     age: number;
//     occupation?: string;  // 加个？表示非必要字段，有无均可
//     role?:string
// };

export const users: Person[] = [ // ts类型约束 每个元素
    {
        name: 'demo',
        age: 18,
        occupation: "Chimney sweep"
    },
    {
        name: 'demo1',
        age: 18,
        occupation: "aowu~"
    },
    {
        name: 'demo2',
        age: 18,
        role:'Admins'
    }
];

export function logPerson(user: Person) {
    // console.log(`- ${user.name},${user.age}`);

    let addinfo: string;
    if ("role" in user){ //((<Admin>user).role) {   泛型 指定数据是何种类型,进行数据类型推导
        addinfo = (<Admin>user).role;
    } else {
        addinfo = (<User>user).occupation;
    }

    console.log(`${user.name},${user.age},${addinfo}`)
}

users.forEach(logPerson);