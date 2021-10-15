const express = require('express');
const app = express();
app.listen(1001, _ => {
    console.log("1001");
});

app.use(express.static('./'));