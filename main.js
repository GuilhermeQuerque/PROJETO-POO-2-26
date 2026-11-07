let turmas = [];

function listarAluno() {
  Interface.listar(turmas);
}

function btnSalvar() {
  let a = Interface.salvar();
  if (a !== null && a !== undefined) {
    turmas.push(a);
  }
}

function cadastroAluno() {
  Interface.cadastrar();
}

function salvarTurma(){
  Interface.salvarTurma();
}