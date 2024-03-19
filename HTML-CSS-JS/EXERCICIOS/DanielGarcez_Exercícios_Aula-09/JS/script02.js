"use strict";

// Adiciona event listeners aos botões numéricos e operadores
let buttons = document.querySelector('input[type="button"]');
    buttons.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.value);
    });
});

// Adiciona event listener ao botão "="
document.querySelector('input[value="="]').addEventListener('click', calcular);

// Adiciona event listener ao botão "C"
document.querySelector('input[value="C"]').addEventListener('click', limpar);

// Adiciona event listener ao botão "^"
document.querySelector('input[value="^"]').addEventListener('click', potencia);

// Adiciona event listener ao botão "round"
document.querySelector('input[value="round"]').addEventListener('click', arredondar);

// Adiciona event listener ao botão "√"
document.querySelector('input[value="√"]').addEventListener('click', raiz);

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function limpar() {
    document.getElementById('display').value = '';
}

function calcular() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}

function potencia() {
    let base = prompt('Digite a base:');
    let exponent = prompt('Digite o expoente:');
    let result = Math.pow(parseFloat(base), parseFloat(exponent));
    alert('Resultado da potência: ' + result);
}

function arredondar() {
    let number = prompt('Digite o número:');
    let rounded = Math.round(parseFloat(number));
    alert('Número arredondado: ' + rounded);
}

function raiz() {
    let number = prompt('Digite o número:');
    let squareRoot = Math.sqrt(parseFloat(number));
    alert('Raiz quadrada: ' + squareRoot);
}