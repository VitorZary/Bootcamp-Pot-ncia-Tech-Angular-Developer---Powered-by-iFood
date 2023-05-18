let cont = 0;

const valores = ["Pizza Mania", 4.0, "Sabor Oriental", 4.0, "Restaurante da Joana", 4.0];

function gets(){
    const valor = valores[cont];
    cont = cont + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

