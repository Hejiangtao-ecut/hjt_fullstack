function pattern(n){
    var output="";
        //being coder
      for(let i=1;i<n;i++){
        for(let j=1;j<n;j++){
            if(i>9){
                output += "  ";
            }else{
                output += " ";
            }
        }
        output +=`${i}\n`
      }
      for(let i=1;i<n;i++){
        output +=`${i}`;
      }
      for(let i=n;i>0;i--){
        output +=`${i}`;
      }
      output +="\n";
      for(let i=n-1;i>0;i--){
        for(let j=1;j<n;j++){
          output += " ";
        }
        output +=`${i}\n`
      }
    return output;
}
console.log(pattern(13))