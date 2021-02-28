// ts基础 interface 接口 ts 
export type User = {
    name: string;
    age: number;
    occupation: string;
}; // unknow自定义一个类型 类型不明确

export const users: User[] = [ // ts类型约束 每个元素
    {
        name: 'demo',
        age: 18,
        occupation: "Chimney sweep"
    },
    {
        name: 'demo1',
        age: 18,
        occupation: "aowu~"
    }
];

export function logPerson(user:unknown) {
    console.log(`- $(user.name),$(user.age)`);
}

console.log("users:");
users.forEach(logPerson);