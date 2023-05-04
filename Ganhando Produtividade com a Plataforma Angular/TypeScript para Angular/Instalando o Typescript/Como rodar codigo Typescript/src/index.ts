type herois = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: herois){
    console.log(pessoa);
}

printaObjeto({
    name: "bruce wayne",
    vulgo: "batman",
});

