class Turma{

    professor;
    curso;
    alunos = [];

    constructor(professor, curso) {
        this.professor= professor;
        this.curso = curso;
      }
      
    adicionarAluno(aluno) { this.alunos.push(aluno); }

}