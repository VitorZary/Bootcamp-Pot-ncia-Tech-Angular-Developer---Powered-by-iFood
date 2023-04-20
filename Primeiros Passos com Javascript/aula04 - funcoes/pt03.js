
/*
    Função é um trecho de código que pode ser invocado varias vezes passando parâmetros se necessário
*/

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));