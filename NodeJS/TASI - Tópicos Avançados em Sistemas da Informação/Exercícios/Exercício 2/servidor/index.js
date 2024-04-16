const express = require("express");
const app = express();

// Rota principal
app.get("/", function(req, resp){
    resp.send("Selecione um quiz:<br> <a href='/quiz-banco-de-dados'>Quiz de Banco de Dados</a><br> <a href='/quiz-programacao-orientada-a-objetos'>Quiz de Programação Orientada a Objetos</a><br> <a href='/quiz-html-css-javascript'>Quiz de HTML, CSS e JavaScript</a>");
});

// Rota quiz de Banco de Dados
app.get("/quiz-banco-de-dados", function(req, resp){
    resp.sendFile(__dirname + "/html/quiz_banco_de_dados.html");
});

// Rota quiz de Programação Orientada a Objetos
app.get("/quiz-programacao-orientada-a-objetos", function(req, resp){
    resp.sendFile(__dirname + "/html/quiz_programacao_orientada_a_objetos.html");
});

// Rota quiz de HTML, CSS e JavaScript
app.get("/quiz-html-css-javascript", function(req, resp){
    resp.sendFile(__dirname + "/html/quiz_html_css_javascript.html");
});

// Inicie o servidor
app.listen(8081, function(){
    console.log("SERVIDOR OK");
});
