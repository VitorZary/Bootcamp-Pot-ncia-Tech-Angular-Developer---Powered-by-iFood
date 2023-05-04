type herois = {
    name: string;
    vulgo: string;
}

function printaObjetos(pessoa: herois){
    console.log(pessoa);
}

// isso printa um objeto
printaObjetos({
    name: "bruce wayne",
    vulgo: "batman",
});

