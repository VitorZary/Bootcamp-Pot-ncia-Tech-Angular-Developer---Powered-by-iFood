const { gets, print } = require('./funcoesauxiliares01');

const pedido = {
  cliente: gets(),
  endereco: gets(),
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets();
  const precoItem = parseFloat(gets());
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let totalCalculado = 0;
for (let index = 0; index < quantidadeItens; index++) {
  totalCalculado = totalCalculado + pedido.itens[index].preco;
}
totalCalculado += pedido.taxaEntrega;

//TODO: Imprima a saída no padrão descrito neste desafio.
print(`Pedido: ${pedido.cliente}`);
print(`Endereco de entrega: ${pedido.endereco}`);
print(`Total: R$ ${totalCalculado.toFixed(2)}`);