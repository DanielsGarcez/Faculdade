function alteraTamanho(){
	let t = document.querySelector("#tam").value;
    document.querySelector("#texto").style.fontSize = t + "pt";
}

function mudaCor(cor){
	document.querySelector("#texto").style.color = cor;
}

function mudaFundo(cor){
	document.querySelector("#texto").style.backgroundColor = cor;
}

function alteraTamanhoDiv(){
	let c = document.querySelector("#comp").value;
    document.querySelector("#texto").style.width = c;
}

let obj1 = document.querySelector("#btn1");
obj1.addEventListener("click", alteraTamanho);

let obj2 = document.querySelector("#btn2");
obj2.addEventListener("click", function(){
    mudaCor("red");
});

let obj3 = document.querySelector("#btn3");
obj3.addEventListener("click", function(){
    mudaCor("blue");
});


let obj4 = document.querySelector("#btn4");
obj4.addEventListener("click", function(){
    mudaFundo("black");
});;

let obj5 = document.querySelector("#btn5");
obj5.addEventListener("click", function(){
    mudaFundo("yellow");
});;

let obj6 = document.querySelector("#btn6");
obj6.addEventListener("click", alteraTamanhoDiv)
						
