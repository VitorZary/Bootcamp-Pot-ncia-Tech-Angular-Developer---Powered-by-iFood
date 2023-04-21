/*
    1) Uma sala contem 5 alunos e para cada aluno for sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets, print } = require('./funcoesauxiliares01');

const quantidadadeAlunos = gets();

let maiorValorEncontrado = -999999;

for (let i = 0; i < quantidadadeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print('Maior valor: ' + maiorValorEncontrado);