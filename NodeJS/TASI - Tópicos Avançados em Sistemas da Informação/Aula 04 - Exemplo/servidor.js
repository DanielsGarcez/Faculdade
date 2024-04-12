var http = require('http');

http.createServer(function(req, res){
    res.end ("Aula de Servidor Local");

}).listen(8081);
console.log("O servidor está ok");