/**
 * @author HJT
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */

const isTypeof = (o,type) =>{
    //补丁
    // if(typeof o === type)
    //     return typeof 0 === type;    // number string ...
    // else{
    //     var stringType = Object.prototype.toString.call(o);
    //     switch(stringType){
    //         case "[object String]":  return 'string';
    //         case "[object Number]":  return 'number';
    //         case "[object Boolean]": return 'boolean';
    //         case "[object Date]":    return 'date';
    //         case "[object Array]":   return 'array';
    //         case "[object RegExp]":  return 'regexp';
    //         case "[object Object]":  return 'object';
    //         }
    // }
    if(['number','boolean','function','strinng'].indexOf(type)>0){
        return typeof o === type;
    }else{
        return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0;
    }
}
// let a = 1;
// console.log(isTypeof(a,'number'));
let arr = [1,2,3];
console.log(isTypeof(arr,'array'));
