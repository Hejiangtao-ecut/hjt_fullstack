const dogs = new Map();
const friends = new Map();
friends.set('黄委员','华灯');
friends.set('何江涛','鸡毛');

friends.forEach((val,key)=>console.log(val,key));

for (const [key,val] of friends) {
    console.log(key,val);
}

const [a,b] = [1,2];
console.log(a,b)

