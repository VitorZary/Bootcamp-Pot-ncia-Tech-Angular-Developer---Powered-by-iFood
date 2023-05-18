let cont = 0;

const valores = ["Leo", "Rua DIO, 12", 92, "1234-5678"];

function gets(){
    const valor = valores[cont];
    cont = cont + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

