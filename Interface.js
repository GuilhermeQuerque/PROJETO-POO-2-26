class Interface {
    constructor() {}
  
    static salvar() {
      let nome = document.getElementById('nome').value;
      let n1 = Number(document.getElementById('n1').value);
      let n2 = Number(document.getElementById('n2').value);
      let n3 = Number(document.getElementById('n3').value);    
      let selectTurma = document.getElementById('select-turma');
      let indexTurmaSelecionada = selectTurma.value;

    if (indexTurmaSelecionada === "") {
      alert("Por favor, selecione uma turma primeiro!");
      return;
    }
      let a1 = new Aluno(nome, n1, n2, n3);
      let m = a1.gerarMedia(n1, n2, n3);
      a1.gerarEstado(m);
  
      alert('aluno cadastrado');
      return a1;
    }


    static atualizarSelectTurmas(Turma) {
      const select = document.getElementById('select-turma');
      
      if (!select) return;
      Turma.forEach((turma, index) => {
        const option = document.createElement('option');
        option.value = index; 
        
        option.textContent = `${turma.curso} - Prof. ${turma.professor}`;
        
        select.appendChild(option);
      });
    }
    
    static salvarTurma() {
      let professor = document.getElementById('professor').value;
      let curso = document.getElementById('curso').value;
      
      if (!curso || !professor) {
        alert("Preencha o nome do curso e do professor!");
        return;
      }

      let t1 = new Turma(professor, curso);

      turmas.push(t1);

      document.getElementById('curso').value = '';
      document.getElementById('professor').value = '';
      alert("Turma cadastrada com sucesso!");

      Interface.atualizarSelectTurmas(turmas);

    }
  
    static listar(turma) {
      const btnCadastrar = document.getElementById('btn-cadastrar');
      const tabCadastrar = document.getElementById('tab-cadastrar');
      const btnListar = document.getElementById('btn-listar');
      const tabListar = document.getElementById('tab-listar');
      const btnTurma = document.getElementById('btn-turma');
      const tabTurma = document.getElementById('tab-turma');
    
      btnListar.classList.add('active');
      btnCadastrar.classList.remove('active');
      if (btnTurma) btnTurma.classList.remove('active');
    
      tabListar.classList.add('active');
      tabCadastrar.classList.remove('active');
      if (tabTurma) tabTurma.classList.remove('active');
  
      let lista = '<table>';
      lista += '<tr><th>Nome</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Média</th><th>Situação</th></tr>';  
      for (let i = 0; i < turma.length; i++) {
        lista +=
          '<tr>' +
          '<td>' + turma[i].getNome() + '</td>' +
          '<td>' + turma[i].getNota1() + '</td>' +
          '<td>' + turma[i].getNota2() + '</td>' +
          '<td>' + turma[i].getNota3() + '</td>' +
          '<td>' + turma[i].media.toFixed(2) + '</td>' +
          '<td>' + turma[i].estado + '</td>' +
          '</tr>';
      }
  
      lista += '</table>';
      document.getElementById('alunos').innerHTML = lista;
    }


    static cadastrar() {
      const btnCadastrar = document.getElementById('btn-cadastrar');
      const tabCadastrar = document.getElementById('tab-cadastrar');
      const btnListar= document.getElementById('btn-listar');
      const tabListar = document.getElementById('tab-listar');
      const btnTurma = document.getElementById('btn-turma');
      const tabTurma = document.getElementById('tab-turma');
    
      btnCadastrar.classList.add('active');
      btnListar.classList.remove('active');
      if (btnTurma) btnTurma.classList.remove('active');
    
      tabCadastrar.classList.add('active');
      tabListar.classList.remove('active');
      if (tabTurma) tabTurma.classList.remove('active');
    }

    static mostrarAbaTurmas() {
      const btnCadastrar = document.getElementById('btn-cadastrar');
      const tabCadastrar = document.getElementById('tab-cadastrar');
      const btnListar = document.getElementById('btn-listar');
      const tabListar = document.getElementById('tab-listar');
      const btnTurma = document.getElementById('btn-turma');
      const tabTurma = document.getElementById('tab-turma');
    
      // Ativa o botão da Turma e desativa os outros
      btnTurma.classList.add('active');
      btnCadastrar.classList.remove('active');
      btnListar.classList.remove('active');
    
      // Mostra o conteúdo da Turma e esconde os outros
      tabTurma.classList.add('active');
      tabCadastrar.classList.remove('active');
      tabListar.classList.remove('active');
    }
  }