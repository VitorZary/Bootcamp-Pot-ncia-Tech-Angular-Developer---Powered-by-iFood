/*
    2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. 
*/

const listaNumeros = [1, 4, 5, 6, 7, 8, 9, 12, 25, 87, 65, 44, 56, 0];

for (let i = 0; i < listaNumeros.length; i++) {

    if (listaNumeros[i] % 2 === 0) {
        console.log(listaNumeros[i]);
    }

}