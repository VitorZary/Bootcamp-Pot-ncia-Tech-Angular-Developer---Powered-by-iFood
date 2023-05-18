const { gets, print } = require('./funcoesauxiliares01');

const pedidos = [
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  },
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  },
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  }
];

//TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
const pedido = pedidos.reduce(function(accumulator, currentValue){
  if(currentValue.distancia < accumulator.distancia){
    return currentValue;
  }else{
    return accumulator;
  }
});


//TODO: Imprima a saída de acordo com o enunciado deste desafio.
print(`O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}`);