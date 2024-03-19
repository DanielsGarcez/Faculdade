"use strict";

window.addEventListener( "load",
    function(){
        let btnSoma = document.getElementById("soma");
        let btnSubst = document.getElementById("subst");
        let btnMulti = document.getElementById("multi");
        let btnDivis = document.getElementById("divis");

        btnSoma.addEventListener("click",
            function(){
                let n1, n2, soma

                n1 = Number(document.getElementById("n1").value);
                n2 = Number(document.getElementById("n2").value);

                soma = n1 + n2
                console.log("Soma: "+soma);
                document.getElementById("result").value = soma;
            }
        );
        btnSubst.addEventListener("click",
            function(){
                let n1, n2, subst

                n1 = Number(document.getElementById("n1").value);
                n2 = Number(document.getElementById("n2").value);

                subst = n1 - n2
                console.log("substração: "+subst);
                document.getElementById("result").value = subst;
            }
        );
        btnMulti.addEventListener("click",
            function(){
                let n1, n2, multi

                n1 = Number(document.getElementById("n1").value);
                n2 = Number(document.getElementById("n2").value);

                multi = n1 * n2
                console.log("Multiplicação: "+multi);
                document.getElementById("result").value = multi;
            }
        );
        btnDivis.addEventListener("click",
            function(){
                let n1, n2, divis

                n1 = Number(document.getElementById("n1").value);
                n2 = Number(document.getElementById("n2").value);

                divis = n1 / n2
                console.log("Divisão: "+divis);
                document.getElementById("result").value = divis;
            }
        );
    }
);