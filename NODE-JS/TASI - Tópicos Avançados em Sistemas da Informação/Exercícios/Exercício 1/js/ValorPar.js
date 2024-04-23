//4 – CRIE UM PROGRAMA QUE LEIA UM VALOR E INFORME SE ELE É PAR.
"use strict";

let num = parseInt(prompt("Insira um valor: "));

if(num % 2 == 0){
    alert(num+" é Par.")
}else{
    alert(num+" é Impar.")
}