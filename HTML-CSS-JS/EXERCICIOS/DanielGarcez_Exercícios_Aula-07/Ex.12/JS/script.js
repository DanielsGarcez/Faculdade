"use strict";

let btn, lucky, num, tentou, jogar;

btn = document.getElementById("botao");
lucky = Math.round(Math.random()*100);
tentou = 0;

btn.addEventListener("click",
    function(){
        num = Number(document.getElementById("chute").value);
        console.log("Número da Sorte: " + lucky)

        if(num != lucky){
            console.log("Você errou...")
            
            if(num < lucky){
                console.log("O número é maior que "+num+'.');
                alert("O número é maior que "+num+'.')
                tentou += 1;
                console.log("Tentativas: "+tentou+'.');
            }
            else if(num > lucky){
                console.log("O número é menor que "+num+'.');
                alert("O número é menor que "+num+'.')
                tentou += 1;
                console.log("Tentativas: "+tentou+'.');

            }
        }
        else{
            console.log("PARABÉNS! Você acertou!");
            tentou += 1;
            console.log("Tentativas: "+tentou+'.');
            alert("PARABÉNS! Você acertou em "+tentou+" tenativas.");

            jogar = confirm("Deseja jogar novamente?");

            if(jogar = true){
                lucky = Math.round(Math.random()*100);
                tentou = 0;
            }
        }
    }
);