const spider = require('./spider');

spider(0)
    .then(data => {
        console.log(data);
    })