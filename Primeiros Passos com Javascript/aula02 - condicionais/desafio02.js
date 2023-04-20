const precoEtanol = 3.39;
const precoGasolina = 4.88;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 12;
const distanciaKm = 200;

var litrosConsumidos = distanciaKm / kmPorLitro;
var gastoTotal;

if (tipoCombustivel === 'etanol') {
    gastoTotal = litrosConsumidos * precoEtanol;
    console.log('R$' + gastoTotal.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    gastoTotal = litrosConsumidos * precoGasolina;
    console.log('R$' + gastoTotal.toFixed(2));
} else {
    console.log('Valores Inválidos');
}

