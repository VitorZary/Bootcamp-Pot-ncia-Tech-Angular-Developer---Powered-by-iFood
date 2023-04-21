
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = 'teste';
        this.idade = 20;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade} `);
    }
}

const vitor = new Pessoa();

const renan = new Pessoa();

vitor.descrever();
renan.descrever();
