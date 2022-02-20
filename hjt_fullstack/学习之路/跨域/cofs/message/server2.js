const express = require('express');
const app = express();
app.listen(1002, _ => {
    console.log("1002");
});

app.use(express.static('./')); 