"use strict";

window.addEventListener( "load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let num, cod, desc, resul

                num = Number(document.getElementById("valor").value);
                cod = Number(parseInt(document.getElementById("codigo").value));

                switch(cod){
                    case 1:
                        console.log("À  vista 10% de desconto");
                        desc = num * 0.1;
                        resul = num - desc;
                        document.getElementById("resul").value = resul;
                        document.getElementById("descrição").innerHTML = "À  vista 10% de desconto";
                        break;
                    case 2:
                        console.log("Cartão 5% de desconto");
                        desc = num * 0.05;
                        resul = num - desc;
                        document.getElementById("resul").value = resul;
                        document.getElementById("descrição").innerHTML = "Cartão 5% de desconto";
                        break;
                    case 3:
                        console.log("Parcelado 10% de aumento");
                        desc = num * 0.1;
                        resul = num + desc;
                        document.getElementById("resul").value = resul;
                        document.getElementById("descrição").innerHTML = "Parcelado 10% de aumento";
                        break;
                }


            }
        );
    }
);