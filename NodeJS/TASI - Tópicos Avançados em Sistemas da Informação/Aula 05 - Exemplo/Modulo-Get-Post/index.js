const express = require('express');
const app = express();
const port = 8081
const path = require('path');
const basePath = path.join(__dirname,'html')

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log("servidor executado");
})