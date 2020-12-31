// requier 关键字，引入库
// const fs =  require('fs');//文件系统，内置模块
const nodemailer = require('nodemailer'); //第三方库
const {default:Axios} = require('axios');
// const schedule = require('node-schedule');
// // 模块语法 module
// const modA = require('./a.js') //相对地址
// console.log(modA.add(1,2));
// fs.re
// async(异步函数) + await
// 获取情话
function getWords(){
    const url = 'https://chp.shadiao.app/api.php';
    return Axios.get(url);

}
// 发邮件
async function sendMail(words){
    let user = "1471867575@qq.com";
    let pass = "cjchjtjqmpxdhbhj"; //授权码
    let to = "1193757570@qq.com"
    let transporter = nodemailer.createTransport({
        host:"smtp.qq.com",
        port:587,
        secure:false,
        auth:{
            user:user,
            pass:pass
        }
    })
    let info = await transporter.sendMail({
        from: `<${user}>`, // sender address
        to: `<${to}>`,
        subject: "土味小情话",
        text: words
      })
      console.log("发送成功");
}

    getWords()
    .then(res =>{
        // console.log(res.data)
        sendMail(res.data)
    }) 


// sendMail();
// schedule.scheduleJob({hour:12,minute:00},function(){
//     console.log("启动任务" + new Data());
//     getWords()
//     .then(res =>{
//         // console.log(res.data)
//         sendMail(res.data)
//     })
// })
    