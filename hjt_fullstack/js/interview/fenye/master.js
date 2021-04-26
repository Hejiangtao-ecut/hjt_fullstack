// www.domain.com/path -> application n 个
// client  http协议  -> IP  -> http 应用层  -> 端口  -> sipder application  
// 多个进程共享一个端口  

const cluster = require('cluster');
const cpuNums = require('os').cpus().length;


cluster.setupMaster({
    exec:'worker.js',
    args:['--use','http']
});
console.log(`一共开启${cpuNums}个子进程来进行爬取`)
console.log(`爬取数据是乱序的，因此给爬取的数据加movieIndex`)


let pageNum = 1;
const startTime = Date.now();
for(let i =0;i<cpuNums;i++){
    let work = cluster.fork();
    // 通信
    work.send([i, cpuNums, pageNum]);
    work.on('message', (msg) => {
        pageNum--;
        console.log(msg)
        if (pageNum == 0) {
            console.log(`\n 已完成所有的爬取，using ${Date.now() = startTime} ms\n`);
            console.log('关闭子进程');
            cluster.disconnect();
        }
    })
}

cluster.on('fork', (worker) => {
    console.log(`[master]: fork worker ${worker.id} \n`);
})

cluster.on('exit', (worker) => {
    console.log(`[master]:子进程${worker.id}被关闭`)
})

const spider = require('./spider');

process.on('message', (params) => {
    let num = 0;
    const pageNum = 20;
    const maxPageStart = params[2] * 20 -1;

    while (pageNum * (num + params[0]) <= maxPageStart) {
        let pageStart = pageNum * (num + params[0]);

        (async () => {
            await spider(pageStart);
            process.send(`子进程 ${process.pid} 成功爬取日本动画第${(pageStart + 20) / 20}页数据`);
        })();

        num += params[1];
    }
});
