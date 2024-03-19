"use strict";

window.addEventListener( "load",
    function(){
        let btn = document.getElementById("botao");

        btn.addEventListener("click",
            function(){
                let sal,nome,regis,impost,result

                regis = Number(document.getElementById("registro").value);
                nome = String(document.getElementById("nome").value);
                sal = Number(document.getElementById("salario").value);

                console.log(sal)
                if(sal < 1434){
                    console.log("0% (isento)");
                    document.getElementById("imposto").value = result;
                }
                else{
                    if(sal >= 1434, sal < 2150){
                        console.log("7,5%");
                        impost = sal * 0.075;
                        result = sal + impost;
                        document.getElementById("imposto").value = result;
                    }
                    else{
                        if(sal >= 2150, sal < 2866){
                            console.log("15%");
                            impost = sal * 0.15;
                            result = sal + impost;
                            document.getElementById("imposto").value = result;
                        }
                        else{
                            if(sal >= 2866, sal < 3582){
                            console.log("22,5%");
                            impost = sal * 0.225;
                            result = sal + impost;
                            document.getElementById("imposto").value = result;
                            }
                            else{
                                if(sal >= 3582){
                                    console.log("27,5%");
                                    impost = sal * 0.275;
                                    result = sal + impost;
                                    document.getElementById("imposto").value = result;
                                }
                            }
                        }
                    }
                }
            }
        );
    }
);