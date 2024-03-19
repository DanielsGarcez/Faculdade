"use strict";
//evento de carregamento da página
window.addEventListener("load",
    function(){
        let btn = document.getElementById("botao");
        //evento click do botão
        btn.addEventListener("click",
            function(){
                let v1, v2, soma;
                v1 = Number(document.getElementById("n1").value);
                v2 = Number(document.getElementById("n2").value);
                soma = v1 + v2;
                //escreve o resultado no formulário
                document.getElementById("resul").value = soma;
                //escreve o resultado na tag html
                document.getElementById("historico").innerHTML += "<strong>"+soma+"</strong><br>";
            }
        );
    }
);