// let s = 'abc';
// console.log( s.split("").reverse().join("") );
let s = ['ab','b','c'];
console.log(s.toString().replace(/,/g,' '));
console.log(s[0].length);

function spinWords(str){
    //TODO Have fun :)
    let s = str.split(' ');
    for(let i=0;i<s.length;i++){
      if(s[i].length>4){
        s[i]=s[i].split("").reverse().join("");
      }
    }
    str = s.toString().replace(/,/g,' ');
    return str;
}

console.log(spinWords('hello tommmm'))