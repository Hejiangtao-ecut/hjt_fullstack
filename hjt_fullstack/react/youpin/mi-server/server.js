const express =require('express');
const app=express();
const fs = require('fs');
app.listen(3002,()=>{
    console.log('server is OK');
});
function pReadFile(filePath){
    return new Promise((resolve,reject)=>{
        fs.ReadFile(filePath,'utf8',(err,data)=>{

        })
    })
}
//我们如果把product.json 返回给用户?
app.use()