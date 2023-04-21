
const numero = 5;

const numeroDivisivelPor5 =  (numero % 5) === 0;

if (numero == 0) {
    console.log("O numero é invalido");
} else if (numeroDivisivelPor5) {
    console.log("O numero é divisivel por 5");
} else {
    console.log("O numero NÃO é divisivel por 5");
}

