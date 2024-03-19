"use strict";

window.addEventListener("load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let n1, n2, resul

                n1 = Number(document.getElementById("base").value);
                n2 = Number(document.getElementById("altura").value);

                resul = n1 * n2
                document.getElementById("resul").value = resul;
            }   
        );
    }
);