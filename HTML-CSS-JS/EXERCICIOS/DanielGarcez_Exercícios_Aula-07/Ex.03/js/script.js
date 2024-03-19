"use strict";

window.addEventListener( "load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let n1, n2

                n1 = Number(parseInt(document.getElementById("num1").value));
                n2 = Number(parseInt(document.getElementById("num2").value));

                if(n1<n2){
                    console.log(n1+" é menor que "+n2);
                    document.getElementById("resul").value = n1+" é menor que "+n2;
                }
                else{
                    if(n1>n2){
                        console.log(n1+" é maior que "+n2);
                        document.getElementById("resul").value = n1+" é maior que "+n2;
                    }
                    else{
                        console.log(n1+" é igual a "+n2);
                        document.getElementById("resul").value = n1+" é igual a "+n2;
                    }
                }

            }
        );
    }
);