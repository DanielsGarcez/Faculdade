"use strict";

window.addEventListener("load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let v1, v2, resul

                v1 = Number(document.getElementById("n1").value);
                v2 = Number(document.getElementById("n2").value);
                
                if(v2 == 1){
                    resul = (v1);
                    console.log("Uma parcela: " + resul);
                    document.getElementById("resul").value = resul;
                }

                if(v2 == 2){
                   resul = (v1 / v2) + 0.03;
                   console.log("Duas parcelas: " + resul);
                   document.getElementById("resul").value = resul;
                }

                if(v2 == 4){
                    resul = (v1 / v2) + 0.07;
                    console.log("Nenhuma parcela: " + resul);
                    document.getElementById("resul").value = resul;
                }
            }
        );
    }
);