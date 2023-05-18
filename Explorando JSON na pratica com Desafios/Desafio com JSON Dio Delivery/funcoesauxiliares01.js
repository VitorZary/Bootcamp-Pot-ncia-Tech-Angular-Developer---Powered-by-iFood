let cont = 0;

const valores = ["João", "Rua B, 456", 2, "Hamburguer", 15, "Batata frita", 8];

function gets(){
    const valor = valores[cont];
    cont = cont + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

