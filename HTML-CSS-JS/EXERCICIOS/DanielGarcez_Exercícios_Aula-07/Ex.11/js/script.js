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
                        resul = resul + i;
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