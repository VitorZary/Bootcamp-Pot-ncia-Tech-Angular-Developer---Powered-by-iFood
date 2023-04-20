/* 

1)Faça um programa que:
Criar uma função que escreve meu nome
Criar uma função que verifique se sou maior de idade
*/

function imprimirNome(nome) {
    return 'Meu nome é: ' + nome;
}

function verificarMaiorDeIdade(idade) { 
    if (idade < 18) {
        console.log(imprimirNome("Vitor") + ' e sou menor de idade');
    } else {
        console.log(imprimirNome("Vitor") + ' e sou maior de idade');
    }
}

(function () {
    verificarMaiorDeIdade(13);

})();