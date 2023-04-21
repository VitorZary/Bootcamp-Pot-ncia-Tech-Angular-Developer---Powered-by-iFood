/*

2) O imc - Indice de Massa Corporal é um criterio da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do imc:
imc = peso / (altura * altura)

Elabore um algoritmo que dado um peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

imc em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 Obesidade Grave;
*/

function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
        return "Obeso";
    } else if (imc >= 40) {
        return "Obesidade Grave";
    }
}

function main(){
    const peso = 72;
    const altura = 1.72;

    const imc = calcularImc(peso, altura);

    console.log(imc);
    console.log(classificarImc(imc));
}

const main2 = main;
console.log(main2);

main2();
