# Novas implementações
Seguindo o modelo de Estórias do Usuário, tente implementar no seu sistema as seguintes funcionalidades:

- Como usuário do sistema, eu gostaria que fossem exibidas as 3 notas do Aluno, além de sua média e situação (Aprovado, Reprovado ou Recuperação).
- Como administrador do Sistema, eu gostaria que as notas do Aluno fossem privadas e acessadas apenas via get e set.
- Como usuário do sistema, eu gostaria que existisse o cadastro de Turmas. Uma turma tem professor, nome do curso e um conjunto de alunos. Os alunos serão depois cadastrados nas turmas existentes. Logo, não deve ser possível cadastrar um Aluno antes de ter uma Turma.
- Como usuário do sistema, eu gostaria de editar as notas de um aluno na tela de exibição dos Alunos.

## oque temos ##

* Alternância de telas entre as abas *Cadastrar* e *Listar Alunos*.
* Formulário com campos de *Nome*, *Nota 1*, *Nota 2* e *Nota 3*.
* Classe `Aluno` com atributo privado `#nome`, métodos `getNome()` e `setNome()`, além de cálculo de média e situação.
* Classe `Interface` com métodos estáticos para ler o formulário, trocar de aba e montar a tabela.
* Tabela de exibição com estilo visual (`tabStyle.css`) mostrando *Nome*, *Média* e *Situação*.
* Arquivo `main.js` gerenciando o array global `turma = []`.

## O que falta implementar ##

1. **Privatizar as notas na classe Aluno com Get e Set**
   Em `Aluno.js`, transformar `nota1`, `nota2` e `nota3` em campos privados adicionando `#` na frente (`#nota1`, `#nota2`, `#nota3`), salvar os valores no construtor com `this.#nota1 = nota1` e criar os métodos `getNota1()`, `setNota1()`, `getNota2()`, `setNota2()`, `getNota3()` e `setNota3()`.

2. **Exibir as 3 notas individuais na tabela de alunos**
   Em `Interface.js`, adicionar as colunas `<th>Nota 1</th>`, `<th>Nota 2</th>` e `<th>Nota 3</th>` no cabeçalho da tabela do método `listar()` e puxar os valores de cada aluno usando `aluno.getNota1()`, `aluno.getNota2()` e `aluno.getNota3()` dentro das células `<td>`.

3. **Criar cadastro de Turma e bloquear aluno sem turma cadastrada**
   Criar o arquivo `Turma.js` com a classe contendo professor, nome do curso e lista de alunos; adicionar novos inputs de turma e botão no `index.html`; e no `Interface.js` criar uma verificação que dispara um `alert("Cadastre uma turma primeiro!")` e impede salvar o aluno se o array de turmas estiver vazio.

4. **Adicionar botão e função para editar as notas de um aluno**
   Em `Interface.js`, adicionar uma coluna `<th>Ações</th>` com um botão `<button onclick="editarAluno(i)">Editar</button>` em cada linha da tabela; e no `main.js`, criar a função `editarAluno(i)` que recebe as novas notas via `prompt()`, aplica com `setNota()`, recalcula a média e recarrega a tabela na tela.