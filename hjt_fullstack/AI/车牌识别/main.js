// console.log('AI','来了')

// node 引入模块关键字
const AipOciClient = require('baidu-aip-sdk').ocr;//图像识别

//  1. 读入文件 I/O操作 从硬盘中读入内存中
const fs = require('fs');// 内置模块 文件系统 fileSystem
const APP_ID = "23078066";
const API_KEY = "ou5tKlBCqR9glxZ7DYNG1QGN";
const Secret_Key = "ArmU16GraiBECxdU7PpNvne6e772uq1V";

const client = new AipOciClient(APP_ID, API_KEY, Secret_Key);
const immage = fs.readFileSync("./image/demo.jpg").toString("base64");
const options = {};
options["multi_detect"] = "true"

client
    .licensePlate(immage, options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })