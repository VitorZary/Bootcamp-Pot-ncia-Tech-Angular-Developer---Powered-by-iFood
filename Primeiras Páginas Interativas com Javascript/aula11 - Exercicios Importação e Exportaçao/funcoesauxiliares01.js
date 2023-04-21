let cont = 0;

const valores = [10, 5, 50, 10, 98, 23, 25, 78, 100, 47, 56];

function gets(){
    const valor = valores[cont];
    cont = cont + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

