"use strict";
let nro=[];
function insereInicio(num){
    //insere valor no inicio do vetor
    nro.unshift(num);
    alert("Número armazenado com sucesso!")
}
function mostrar(){
    let txt = ""; //string vazia
    let i;
    for(i = 0; i < nro.length; i++){
        txt += i + " - " + nro[i] + "<br>";
    }
    return txt;
}
function insereFim(num){
    //insere valor no final do vetor
    nro.push(num);
    alert("Número armazenado com sucesso!")
}
function retiraFim(){
    //retira valor no final do vetor
    nro.pop();
    alert("Número removido com sucesso!")
}
function retiraInicio(){
    //retira valor inicio do vetor
    nro.shift(num);
    alert("Número removido com sucesso!")
}



//eventos dos botões
let btnInicio = document.querySelector("#inicio");
btnInicio.addEventListener("click", function(){
    let n = Number(document.querySelector("#valor").value);
    insereInicio(n);
});

let btnExibir = document.querySelector("#mostrar");
btnExibir.addEventListener("click", function(){
    let valores = mostrar();
    document.querySelector("#texto").innerHTML = valores;
    
});
let btnFim = document.querySelector("#fim");
btnFim.addEventListener("click", function(){
    let n = Number(document.querySelector("#valor").value);
    insereFim(n);
});

let btnRetiraF = document.querySelector("#retiraf");
btnRetiraF.addEventListener("click", retiraFim);

let btnRetiraI = document.querySelector("#retirai");
btnRetiraF.addEventListener("click", retiraInicio);
