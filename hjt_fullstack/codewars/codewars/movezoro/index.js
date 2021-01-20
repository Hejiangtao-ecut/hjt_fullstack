var moveZeros = function (arr) {
    // TODO: Program me
    let i = 0;
    while(arr.indexOf(0) > -1){
        arr.splice(arr.indexOf(0),1);
        i++;
        
    }
    for(;i>0;i--){
        arr.push(0);
    }
    return arr;
  }

console.log(moveZeros([1,0,2,0]))