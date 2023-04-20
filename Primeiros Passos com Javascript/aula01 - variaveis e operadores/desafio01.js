const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitro;
const gastoTotal = litrosConsumidos * precoCombustivel;

console.log("O valor que vai ser gasto na viagem é de: R$" + gastoTotal.toFixed(2));