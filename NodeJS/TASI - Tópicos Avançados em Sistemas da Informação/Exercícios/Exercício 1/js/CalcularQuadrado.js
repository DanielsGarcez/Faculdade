//2- CRIE UM PROGRAMA QUE LEIA 03 VALORES E CALCULE O QUADRADO
"use strict";

let numeros = [];
let quadrado = [];

for(let i=0; i<3; i++){
    let num = prompt("Digite o "+(i+1)+"° número: ");
    numeros[i] = num;
    let result = num * num;
    quadrado[i] = result
}
console.log(numeros);
console.log(quadrado);

alert("Os valores ao quadrado de "+numeros+", são respectivamente "+quadrado+".");