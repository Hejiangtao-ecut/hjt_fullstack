interface User { // 接口
    type: "user";
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string
}

export type Person = User | Admin;

export const persons: Person[] = [
    {type: "user",name: "Max Mustermann",age: 25,occupation: "Chimney sweep"},
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" }
]

// 对参数和返回值都做类型的声明
export function isAdmin(person: Person):person is Admin {
    return person.type === "admin";
}
export function isUser(person: Person):person is User {
    return person.type === "user";
}

export function logPerson(person: Person) {
    let addinfo: string = '';
    if (isAdmin(person)) {
        addinfo = person.role;
    }
    if (isUser(person)) {
        addinfo = person.occupation;
    }

    console.log(`${person.name},${person.age},${addinfo}`)
}