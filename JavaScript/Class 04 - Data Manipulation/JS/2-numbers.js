let num1 = 2.50355635635;
let num2 = 93445678623279783654567832948298;

console.log(num1); // R = 2.50355635635
console.log(parseInt(num1)); // R = 2
console.log(num2); // R = 9.344567862327979e+31
console.log(parseInt(num2)); // R = 9 
console.log(parseFloat(num2)); // R = 9.344567862327979e+31



    // length so vai funcionar com variável string, então tranforma
console.log(String(num2).length); // R = 21
console.log(String(num1).replace(".",",")); // R = 2,50355635635

    // toFixed transforma automaticamente para string, é mais prático para diminuir casas pós vírgula e colocar ','
console.log(num1.toFixed(2).replace(".",",")); // R = 2,50

console.log(`R$ ${2.435446683.toFixed(2).replace(".",",")}`); // R = R$ 2,44


    // Transforme em moeda de forma mais fácil, codigo das moedas abaixo
    //https://en.wikipedia.org/wiki/ISO_4217
console.log(num1.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl",
})); // R = R$ 2,50


num1 = -2.434576;
console.log(num1); // R = -2.434576
console.log(Math.abs(num1)); // R = 2.434576

const numbers = [2, 3, 6, 2, 7, 98, 3, 2, 54, 76, 3];

console.log(Math.max(2, 3)); // R = 3
console.log(Math.min(2, 3)); // R = 2

    // "..." é para pegar os valores do array e colocar no parentese, como na linha abaixo de sua utilização
console.log(Math.max(...numbers)); // R = 98
console.log(Math.max(2, 3, 6, 2, 7, 98, 3, 2, 54, 76, 3)); // R = 98


    // número PI
console.log(Math.PI); // R = 3.141592653589793

    // número de Euler
console.log(Math.E); // R = 2.718281828459045

    // de 0 a 10, porém não chega a 10 pois o Math.random só vai de 0 a 0.99
console.log(Math.random()*10); // R = resultado aleátorio pois está sendo sorteado

    // Math.round de 0.1 a 0.4 arredonda para baixo, e de 0.5 a 0.9 arredonda para cima
console.log(Math.round(2.4)); // R = 2
console.log(Math.round(2.5)); // R = 3

    // Então vamos pegar o resultado de Math.random e e tranformar com o Math.round
console.log(Math.round(Math.random()*10)); // R = resultado aleátorio pois está sendo sorteado

    // Arredondando para o número principal ex: 2.5 = 2
console.log(Math.floor(2.543)); // R = 2

console.log(Math.ceil(2.543)); // R = 2
console.log(Math.floor(2.543)); // R = 2

