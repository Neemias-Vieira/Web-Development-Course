//  Crie uma função capaz de retornar um número aleatório dentro de
//  um intervalo determinado por parâmetros min(mínimo) e max(máximo).

let menor = Number(prompt("digite o mínimo"));
let maior = Number(prompt("digite o máximo"));

const sorteio = () => {
    
    return (Math.floor(Math.random() * (maior - menor + 1)) + menor);
     
}

document.write(sorteio());