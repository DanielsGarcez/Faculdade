"use strict";
document.querySelector("#btn1").addEventListener("click", // querySelector precisa de "#" ou "."
    function(){
        let info = document.querySelector("#texto").value;
        inverter(info);
        inserirSimbolo(info, "*");        
    }
);

function inverter(str){
    console.log(str.length); // qtde de caracteres
    let saida = ""; // string vazia
    for(let i = str.length - 1; i >= 0; i--){
        saida += str[i].toUpperCase(); // caractere em maiúsulo
    }
    console.log(saida);
}

function inserirSimbolo(str, simbolo){
    let saida="";
    for(let i = 0; i < str.length; i++){
        saida += str[i] + simbolo; // "saida += ..." -> saida = saida + ...
    }
    console.log(saida);
}