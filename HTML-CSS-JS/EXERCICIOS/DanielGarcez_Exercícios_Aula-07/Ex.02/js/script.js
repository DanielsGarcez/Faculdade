"use strict";

window.addEventListener("load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let num

                num = Number(parseInt(document.getElementById("numero").value));

                if(num % 2 != 0){
                    console.log("Impar");
                    document.getElementById("resul").value = "Impar";
                }
                else{
                    console.log("Par");
                    document.getElementById("resul").value = "Par";
                }
            }
        );
    }
);