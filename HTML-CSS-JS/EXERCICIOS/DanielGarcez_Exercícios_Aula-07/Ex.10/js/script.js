"use strict";

window.addEventListener( "load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let num, i, resul;

                num = Number(document.getElementById("num").value);
                i = num;
                resul = 1;

                while(i > 1){
                    if(i != 1){
                        resul = resul * i;
                        i = i-1;
                        console.log("i: "+i);
                    }
                }
                if(i = 1){
                    console.log("resul: "+resul);
                    document.getElementById("result").value = resul;
                }
            }
        );
    }
);


/*
    10. Calcular o fatorial de N. 

    Ex: 5! = 5x4x3x2x1 -> 20x3x2x1 -> 60x2x1 -> 120x1 = 120
    
    N é digitado pelo usuário em um campo de texto e o resultado será exibido em outro campo.
*/