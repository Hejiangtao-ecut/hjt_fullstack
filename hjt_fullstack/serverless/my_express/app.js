const express = require('express');
const app = express()

app.get('/', () => {
    console.log('Home');
    res.send("hello");
})
// app.listen(3003, () => {
    
// })

module.export = app;