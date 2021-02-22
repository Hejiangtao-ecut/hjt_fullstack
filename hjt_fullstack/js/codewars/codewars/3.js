function rgb(r, g, b){
    // complete this function
    let num = [r,g,b];
    let s = new String();
    if(r>255){
        r = 255;
    }else if(r<=9){
        r = 0;
        s += '0';
        console.log(s)
    }
    s += r.toString(16);
    return s;
  }

  console.log(rgb(5, 0, 0))