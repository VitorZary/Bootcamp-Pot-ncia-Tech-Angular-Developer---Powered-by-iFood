/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilomentro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar esse percurso.
*/

class Carro {
    marca;
    cor;
    GastoMedioporKm;

    constructor(marca, cor, GastoMedioporKm) {
        this.marca = marca;
        this.cor = cor;
        this.GastoMedioporKm = GastoMedioporKm;
    }

    calcularGastoDePercurso(distancia, precoGasolina) {
        const litrosGastos = distancia * this.GastoMedioporKm;
        console.log(`O carro da marca ${this.marca} de cor ${this.cor} gastou: R$` + (litrosGastos * precoGasolina).toFixed(2) + ' no percurso.');
    }
}

(function () {

    const carro1 = new Carro('Chevrolet', 'branca', 1/10);
    console.log(carro1);

    carro1.calcularGastoDePercurso(100, 5.79);

    const palio = new Carro('Fiat', 'preta', 1/10);

    palio.calcularGastoDePercurso(70, 5.00);

})();