const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;//图像识别

//  1. 读入文件 I/O操作 从硬盘中读入内存中
const fs = require('fs');// 内置模块 文件系统 fileSystem
const APP_ID = "23077961";
const API_KEY = "GQKTbPxvGfyFcfWpTGQjEzns";
const Secret_Key = "cAQmRNiOZGx1eVUvkXsmDmxSDRYZx05y";

const client = new ApiImageClassifyClient(APP_ID, API_KEY, Secret_Key);

const img = fs.readFileSync("./pic/timg.jpg").toString("base64");
client
    .advancedGeneral(img)//通用识别类接口
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })