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

let soma: number = addNumber(4, 7);

console.log(CallToPhone(1133112456));
