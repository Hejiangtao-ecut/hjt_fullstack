const fs = require('fs');
fs.readFile('./img/timg.jpg',function(err,date){//读取文件
    console.log(err);
    if(err){
        throw new Error(err)
        return;
    }
    console.log(date.toString())//将二进制流转换为文本
})