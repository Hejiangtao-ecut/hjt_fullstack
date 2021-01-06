// es6提供的新的数据结构
// 1.为了数组的优化而来
// Set Map 两种数据结构 存放特定的数据集合的
const people = new Set(); // []
people.add('黄伦');
people.add('廖辉');
people.add('过宇谭');
people.add('黄伦');
for (const person of people) {
    console.log(person)
}
// console.log(people);

const students = new Set(['小和尚','老仙人','翻车手'])
students.add('黄委员')
console.log(students)