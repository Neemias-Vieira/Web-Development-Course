//  Crie uma função capaz de retornar um número aleatório dentro de
//  um intervalo determinado por parâmetros min(mínimo) e max(máximo).

function randomNumber(){
    let min = Number(prompt("Insira o número mínimo"));
    let max = Number(prompt("Insira o número máximo"));

    return Math.floor(Math.random() * ((max - min) + 1) + min);
}


console.log(randomNumber());