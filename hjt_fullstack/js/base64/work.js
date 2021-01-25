this.addEventListener('message', (e) => { //消息监听
    console.log(e);
    postMessage('you say', e);
})