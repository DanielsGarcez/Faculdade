"use strict";

function textoMaiusculo(){
    let texto = document.querySelector("#texto").value;
    let conteudo = texto.toUpperCase();
    console.log(conteudo);
    document.querySelector("#id_div").innerHTML = conteudo;
}

function textoSeparado(){
    let texto = document.querySelector("#texto").value;
    let separado = texto.split(' ');
    let conteudo = separado.join('<br>');
    console.log(conteudo);
    document.querySelector("#id_div").innerHTML = conteudo;
}

let btnSeparar = document.querySelector("#separar");
btnSeparar.addEventListener("click", textoSeparado);

let btnMaiusculo = document.querySelector("#maiuscula");
btnMaiusculo.addEventListener("click", textoMaiusculo);



const texticulo = "semen";
console.log(texticulo.split('-'));
