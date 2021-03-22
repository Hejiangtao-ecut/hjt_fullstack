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
    let user = "2737988958@qq.com";
    let pass = "jrbklzbcpcjvdhbd"; //授权码
    let xiaohei = "1471867575@qq.com"
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
        from: `智启哥哥的迷妹<${user}>`, // sender address
        to: `亲爱的智启哥哥<${to}>`,
        subject: "给智启哥哥的一封信",
        text: words
      })
      console.log("发送成功");
}

function infoout(words){
        // console.log("第",i+1,"封邮件")
        console.log("内容为：",words)
    }

// for(;i<200;i++){
    
    
    //  getWords()
    // .then(res =>{
    //     // console.log("第"+(i+1)+"封邮件")
    //     infoout(res.data)
    //     sendMail(res.data)
    //     // console.log(res.data)
          
    // }) 
// }
   

// sendMail();
// 定时器
// schedule.scheduleJob({hour:12,minute:00},function(){
//     console.log("启动任务" + new Data());
//     getWords()
//     .then(res =>{
//         // console.log(res.data)
//         sendMail(res.data)
//     })
// })
function timesend(){
    getWords()
    .then(res =>{
        // console.log("第"+(i+1)+"封邮件")
        infoout(res.data)
        sendMail(res.data)
    }) 
}
// setInterval(timesend(),1000)
setInterval(() => {
    getWords()
    .then(res =>{
        // let str = "草泥马草泥马草泥马草泥马"
        infoout(res.data);
        sendMail(res.data);
    }) 
    
}, 10000);