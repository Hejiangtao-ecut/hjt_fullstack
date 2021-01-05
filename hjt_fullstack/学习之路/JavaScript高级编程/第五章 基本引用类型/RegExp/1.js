// let pattern = /.at/;
let pattern = /.at/g;
let text = "cat,mat,sat,att";
let rep = pattern.exec(text);

console.log(rep.index);
console.log(rep[0]);

rep = pattern.exec(text);
console.log(rep[0]);

rep = pattern.exec(text);
console.log(rep[0]);

rep = pattern.exec(text);
console.log(rep[0]);

let text1 = "today is a sunny day";
let rep2 = /.unny/g;
if(rep2.test(text1)){
    console.log(RegExp.input);
    console.log(RegExp.leftContext);
    console.log(RegExp.rightContext);
    console.log(RegExp.lastMatch); 
    console.log(RegExp.lastParen);
}