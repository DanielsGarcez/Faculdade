//1 – CRIE UM PROGRAMA QUE LEIA 05 VALORES E IMPRIMA ELES EM ORDEM CRESCENTE.
"use strict";

let numeros = [];

for(let n=0; n<5; n++){
    let num = prompt("Digite o "+(n+1)+"° número: ");
    numeros[n] = num;
}
console.log(numeros);
alert("Números Desordenados: "+numeros+".");

function ordenar(vet = []){
    if(vet == null) return false;
    for(let i=0; i<vet.length -1; i++){
        for(let j=0; j<vet.length-1-i; j++){
            if(vet[j] > vet[j+1]){
                let aux = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aux;
            }
        }
    }
    return true;
}

ordenar(numeros);

alert("Números Ordenados: "+numeros+".");