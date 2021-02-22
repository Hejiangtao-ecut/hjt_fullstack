/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 */
function squareDigits(num){
    //may the code be with you
    let s = num.tostring();
    let ss = "";
    for(i=0 ;i<s.lenth() ;i++){
      let sss = s[i];
      sss.parseInt();
      ss = ss + (sss*sss).toString;
    }
    console.log(ss);
  }