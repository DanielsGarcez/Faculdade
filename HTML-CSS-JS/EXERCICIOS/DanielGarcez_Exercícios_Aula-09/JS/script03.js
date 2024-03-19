"use strict";

let rgms = [];
let nomes = [];
let notas_p = [];
let notas_exer = [];
let notas_proj = [];
let notas_reg = [];

function cadastrarAluno() {
  let nome = document.getElementById('nome').value;
  let rgm = document.getElementById('rgm').value;
  let notaParcial = parseFloat(document.getElementById('notaParcial').value);
  let notaExercicios = parseFloat(document.getElementById('notaExercicios').value);
  let notaProjeto = parseFloat(document.getElementById('notaProjeto').value);
  let notaRegimental = parseFloat(document.getElementById('notaRegimental').value);

  if (nome && rgm && !isNaN(notaParcial) && !isNaN(notaExercicios) && !isNaN(notaProjeto) && !isNaN(notaRegimental)) {
    rgms.push(rgm);
    nomes.push(nome);
    notas_p.push(notaParcial);
    notas_exer.push(notaExercicios);
    notas_proj.push(notaProjeto);
    notas_reg.push(notaRegimental);

    limparCampos();
  } else {
    alert('Preencha todos os campos corretamente!');
  }
}

function exibirDados() {
  let tabela = document.getElementById('dadosAlunos');
  tabela.innerHTML = '';

  for (let i = 0; i < nomes.length; i++) {
    let notaFinal = calcularNotaFinal(notas_p[i], notas_exer[i], notas_proj[i], notas_reg[i]);
    let conceito = obterConceito(notaFinal);

    let linha = tabela.insertRow();
    linha.innerHTML = `
      <td>${nomes[i]}</td>
      <td>${rgms[i]}</td>
      <td>${notas_p[i]}</td>
      <td>${notas_exer[i]}</td>
      <td>${notas_proj[i]}</td>
      <td>${notas_reg[i]}</td>
      <td class="nota-final">${notaFinal}</td>
      <td class="conceito ${conceito.toLowerCase()}">${conceito}</td>
    `;
  }
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('rgm').value = '';
  document.getElementById('notaParcial').value = '';
  document.getElementById('notaExercicios').value = '';
  document.getElementById('notaProjeto').value = '';
  document.getElementById('notaRegimental').value = '';
}

function calcularNotaFinal(nota_p, nota_exer, nota_proj, nota_reg) {
  return nota_p + nota_exer + nota_proj + nota_reg;
}

function obterConceito(notaFinal) {
  if (notaFinal >= 7) {
    return 'Aprovado';
  } else if (notaFinal >= 4) {
    return 'Avaliação Final';
  } else {
    return 'Reprovado';
  }
}
