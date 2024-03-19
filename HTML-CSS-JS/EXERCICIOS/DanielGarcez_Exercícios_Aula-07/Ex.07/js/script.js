"use strict";

window.addEventListener( "load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let n1, n2, sexo, resul

                n1 = Number(document.getElementById("altura").value);
                n2 = Number(document.getElementById("peso").value);
                sexo = String(document.getElementById("sexo").value);

                resul = n2 / (n1*n1)
                console.log(resul)
                console.log(sexo)

                if((sexo == "Feminino")||(sexo == "feminino")||(sexo == "Masculino")||(sexo == "masculino")){
                    
                    if((sexo == "Masculino")||(sexo == "masculino")){
                        if (resul < 20.7){
                            console.log("Abaixo do peso: "+resul);
                            document.getElementById("IMC").value = "Abaixo do peso";
                            }
                            else if (resul < 26.4){
                            console.log("Peso normal: "+resul);
                            document.getElementById("IMC").value = "Peso normal";
                            }
                            else if (resul < 27.8){
                            console.log("Marginalmente acima do peso: "+resul);
                            document.getElementById("IMC").value = "Marginalmente acima do peso";
                            }
                            else if (resul < 31.1){
                            console.log("Acima do peso ideal: "+resul);
                            document.getElementById("IMC").value = "Acima do peso ideal";
                            }
                            else{
                            console.log("Obeso: "+resul);
                            document.getElementById("IMC").value = "Obeso";
                        }
                    }
                    

                    if((sexo == "Feminino")||(sexo == "feminino")){
                        if (resul < 19.1){
                            console.log("Abaixo do peso: "+resul);
                            document.getElementById("IMC").value = "Abaixo do peso";
                            }
                            else if (resul < 25.8){
                            console.log("Peso normal: "+resul);
                            document.getElementById("IMC").value = "Peso normal";
                            }
                            else if (resul < 27.3){
                            console.log("Marginalmente acima do peso: "+resul);
                            document.getElementById("IMC").value = "Marginalmente acima do peso";
                            }
                            else if (resul < 32.3){
                            console.log("Acima do peso ideal: "+resul);
                            document.getElementById("IMC").value = "Acima do peso ideal";
                            }
                            else{
                            console.log("Obeso: "+resul);
                            document.getElementById("IMC").value = "Obeso";
                        }
                    }
                }
                else{
                    alert("Sexo invalido ou não definido")
                }
            }
        );
    }
);