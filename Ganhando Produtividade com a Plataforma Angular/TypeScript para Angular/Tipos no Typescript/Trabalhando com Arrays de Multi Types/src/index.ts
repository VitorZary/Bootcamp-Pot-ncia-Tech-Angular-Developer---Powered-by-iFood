
//tipos primitivos: boolean, number, string
    let ligado: boolean = false;
    let nome: string = "vitor";
    let idade: number = 30;
    let altura: number = 1.90;


//tipos especiais, null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = "";

//objeto - sem previsibilidade
let produto: object = {
    name: "felipe",
    cidade: "sp",
    idade: 30,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
}

/**
 * arrays
 */
let dados: string[] = ["vitor", "ana", "paulo"];
let dados2: Array<string> = ["vitor", "ana", "paulo"];

let infos: (string | number)[] = ["felipe", 30];
