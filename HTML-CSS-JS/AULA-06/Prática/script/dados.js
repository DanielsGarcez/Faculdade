// Evento de Carregamento da página
"Use strict";

// addEventListener = Disparador de evento
window.addEventListener("load",
    function(){
        let btn = this.document.getElementById("botao");
        //evento click
        btn.addEventListener("click",
            function(){
                let v1,v2,soma;
                v1 = Number(document.getElementById("n1").value);
                v2 = Number(document.getElementById("n2").value);
                soma = v1 + v2;

                // escreve o resultado no formulário
                document.getElementById("resul").value = soma;
                console.log("O valor da soma é "+ soma);

                // escreve o resultado na tag html
                document.getElementById("historico").innerHTML += "<strong>"+soma+"<strong><br>";
            }   
        );
    }
);