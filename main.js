let turma=[];
let turmas = [];

//evento a ser carregado assim que iniciar a página para ter uma turma padrão de testes
// document.addEventListener("DOMContentLoaded", () => {
//   let padrao = new Turma("doido", "bixo");
//   turmas.push(padrao);
//   Interface.atualizarSelectTurmas(turmas);
// });



function listarAluno() {
  Interface.listar(turma);
}

function btnSalvar() {
  let a = Interface.salvar();
  if (a !== null && a !== undefined) {
    turma.push(a);
  }
}

function cadastroAluno() {
  Interface.cadastrar();
}


function editarAluno(i){
  let entrada = prompt("Digite as 3 notas separadas por vírgula (ex: 7.5, 8, 6.2):");

  if (!entrada){ return;}


    let notas = entrada.split(',').map(n => parseFloat(n.trim()) || 0);

    turma[i].setNota1(notas[0] || 0);
    turma[i].setNota2(notas[1] || 0);
    turma[i].setNota3(notas[2] || 0);

    turma[i].gerarMedia();
    alert(JSON.stringify(turma[0], null, 4));
    this.listarAluno();
    this.gerarEstado();

}


function salvarTurma(){
  Interface.salvarTurma();
}