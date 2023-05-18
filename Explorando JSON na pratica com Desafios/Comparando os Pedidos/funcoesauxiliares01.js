let cont = 0;

const valores = ["Renan", "Massa", 45.0, "Bianca", "Kibe", 8.0];

function gets(){
    const valor = valores[cont];
    cont = cont + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

