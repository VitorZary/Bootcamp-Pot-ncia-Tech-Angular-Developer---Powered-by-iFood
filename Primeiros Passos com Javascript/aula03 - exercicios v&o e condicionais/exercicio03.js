/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const precoEtiqueta = 75;

const tipoPagamento = "Acima de duas vezes";

var precoFinal;


if (tipoPagamento === "À vista Débito") {
    precoFinal = precoEtiqueta - ((10 / 100) * precoEtiqueta);
} else if (tipoPagamento === "À vista no Dinheiro" || tipoPagamento === "PIX") {
    precoFinal = precoEtiqueta - ((15 / 100) * precoEtiqueta);
} else if (tipoPagamento === "Em duas vezes") {
    precoFinal = precoEtiqueta;
} else if (tipoPagamento === "Acima de duas vezes") {
    precoFinal = precoEtiqueta + ((10 / 100) * precoEtiqueta);
}

console.log("O preço final é: R$" + precoFinal.toFixed(2));
