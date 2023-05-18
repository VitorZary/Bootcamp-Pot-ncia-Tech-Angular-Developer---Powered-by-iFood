let cont = 0;

const valores = ["Renan", "Risoto", 2.8, "Fernanda", "Bolo", 1.2, "Arthur", "Esfiha", 4.9];

function gets(){
    const valor = valores[cont];
    cont = cont + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

