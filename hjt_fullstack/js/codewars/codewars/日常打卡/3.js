var arr1 = []
let count=0;
for (var i = 65; i < 91; i++,count++) {
    arr1[count] = String.fromCharCode(i);
}
console.log(arr1[Math.floor(Math.random()*26)])