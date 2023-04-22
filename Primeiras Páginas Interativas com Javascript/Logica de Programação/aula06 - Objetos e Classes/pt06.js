
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade} `);
    }
}

const vitor = new Pessoa();
vitor.nome = "Vitor J Guerra";
vitor.idade = 18;

const renan = new Pessoa();
renan.nome = "Renam J Paula";
renan.idade = 30;

vitor.descrever();
renan.descrever();
