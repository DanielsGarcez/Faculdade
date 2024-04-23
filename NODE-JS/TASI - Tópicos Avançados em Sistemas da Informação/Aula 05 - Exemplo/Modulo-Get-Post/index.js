const express = require('express');
const app = express();
const port = 8081
const path = require('path');
const basePath = path.join(__dirname,'html')

var checkAuth =function (req, res, next){
    req.authStatus = false;
    if(req.authStatus){
    console.log('Está logado, pode continuar');
    next()
    }else{
        console.log('Não está logado, faça o login para continuar!');
    }
}
app.use(checkAuth);


app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log("servidor executado");
})
