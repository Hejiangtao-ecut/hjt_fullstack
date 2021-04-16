var color = 'blue'; 
function getColor() { 
 let color = 'red'; 
 { 
 let color = 'green'; 
 return color; 
 } 
}
console.log(getColor()) // green
console.group('第一层');
  console.group('第二层');

    console.log('error');
    console.error('error');
    console.warn('error');

  console.groupEnd(); 
console.log("第一层");
console.groupEnd();

const arr= [ 
    { num: "1"},
    { num: "2"}, 
    { num: "3" }
];
console.table(arr);

const obj= {
a:{ num: "1"},
b:{ num: "2"},
c:{ num: "3" }
};
console.table(obj);