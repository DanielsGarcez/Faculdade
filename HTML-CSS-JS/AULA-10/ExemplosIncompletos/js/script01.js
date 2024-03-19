function alteraTitulo(){
    let texto = document.querySelector("#titulo").value;
    document.querySelector("#tit").innerHTML = texto;

    //  Alterar prioridades CSS
    document.querySelector("#tit").style.color = "blue";
    document.querySelector("#tit").style.fontSize = "50pt";
}

function criaTabela(){
	let lin = document.querySelector("#linha").value;
    let col = document.querySelector("#coluna").value;
    let conteudo = "<table border = '1'>"

    //  Criar as linhas
    for (let i = 1; i <= lin; i++){
        conteudo + "<tr>";

        //  Criar colunas
        for (let j = 1; j <= col; j++){
            conteudo += "<td>" + i + "," + j + "</td>";
        }
        conteudo += "</tr>";
    }
    conteudo += "</table>";
    document.querySelector("#tab").innerHTML = conteudo;
}
document.querySelector("#button").onclick = alteraTitulo;
document.querySelector("#button2").onclick = criaTabela;