//funções
function addNumber(x: number, y: number): number{
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function CallToPhone(phone: number | string): number | string{
    return phone;
}

async function getDataBase(id: number): Promise<number | string> {
    return "felipe";
}

let soma: number = addNumber(4, 7);

console.log();
