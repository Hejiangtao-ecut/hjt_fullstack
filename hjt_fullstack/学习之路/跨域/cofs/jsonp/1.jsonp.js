$.ajax({
    url: 'http://127.0.0.1:8001/list',
    methods: 'get',
    dataType: 'jsonp', // 走 jsonp 的请求，不设置这个默认会走 ajax 的请求
    success: res => { // 成功的回调
        console.log(res);
    }
});