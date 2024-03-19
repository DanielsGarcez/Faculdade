"use stritc";

//caixa de confirmação
let resposta = confirm("Deseja continuar? ");
console.log(resposta);

//caixa de entrada de dados
let nome = prompt("Digite o seu nome:");
console.log(nome);

let sobrenome = prompt("Digite seu sobrenome:");
console.log(sobrenome);

//contatenação
let completo = nome + " " + sobrenome;
console.log(completo);

//interpolação
let ncompleto = `${nome} ${sobrenome}`;
console.log(ncompleto);