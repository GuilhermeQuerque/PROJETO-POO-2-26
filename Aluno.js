class Aluno {
  //definido o nome e as notas dos alunos como privado sendo requisitado usando get e set.
  #nome;
  #nota1;
  #nota2;
  #nota3;
  estado;
  media;

  constructor(nome, nota1, nota2, nota3) {
    this.#nome = nome;
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }

  gerarMedia() {
    let m = (this.getNota1() + this.getNota2() + this.getNota3()) / 3;
    this.media = m;
    return m;
  }

  gerarEstado() {
    let media=this.gerarMedia();
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }

  getNome() {
    return this.#nome;
  }
  setNome(nome) {
    this.#nome = nome;
  }
  
  getNota1() {
    return this.#nota1;
  }
  setNota1(nota1){
    this.#nota1 = nota1;
  }

  getNota2(){
    return this.#nota2;
  }
  setNota2(nota2){
    this.#nota2=nota2;
  }

  getNota3(){
    return this.#nota3;
  }
  setNota3(nota3){
    this.#nota3 = nota3;
  }

}