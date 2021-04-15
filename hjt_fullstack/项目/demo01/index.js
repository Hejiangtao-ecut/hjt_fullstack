const axios = require('axios');

axios.get('http://musicapi.leanapp.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
        .then((res) => {
            console.log(res.data)
        })


