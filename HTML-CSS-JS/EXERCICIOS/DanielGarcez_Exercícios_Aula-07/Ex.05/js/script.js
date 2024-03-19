"use strict";

window.addEventListener("load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let n1, n2, n3, media

                n1 = Number(document.getElementById("nota1").value);
                n2 = Number(document.getElementById("nota2").value);
                n3 = Number(document.getElementById("nota3").value);

                media = (n1 + n2 + n3) /3;

                if(media >= 6){
                    console.log("APROVADO");
                    document.getElementById("resul").value = "APROVADO";
                }
                if(media >= 3, media < 6){
                    console.log("EXAME");
                    document.getElementById("resul").value = "EXAME";
                }
                if(media < 3){
                    console.log("REPROVADO");
                    document.getElementById("resul").value = "REPROVADO";
                }
                
                console.log(media);
            }
        );
    }
);