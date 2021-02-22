function originalNumbers(finalNumbers,turns){
  //coding and coding..
  let num = [].concat(finalNumbers);
  for(let i = 0;i<turns;i++){
    for(let j = 0;j<finalNumbers.length;j++){
      let n = 0;
      for(let x = 0 ;x < finalNumbers.length;x++){
        if(x!=j){
          n += finalNumbers[x];
        }
      }
      num[j] = (n-finalNumbers[j]*(finalNumbers.length-2))/(finalNumbers.length - 1);
    }
    finalNumbers = [].concat(num);
  }
  return num;
}

console.log(originalNumbers([1248,1226,1204,1182],3))