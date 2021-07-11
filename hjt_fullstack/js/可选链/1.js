const people = {}

// console.log(people); // {}
// console.log(people.family); // undefined
// console.log(people.family.number); // ERROR

// console.log(people.family.numbers);
// console.log(people && people.family && people.family.numbers || '不存在');
// console.log(people?.family?.numbers);
console.log(people.family?.number ?? '不存在');

// console.log(demo?.name);
// function demo() {
//     console.log('demo');
// }
