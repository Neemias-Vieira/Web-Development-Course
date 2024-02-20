// Contrua uma lógica para dizer se um número é par ou ímpar
// Receba o número desejado do usuário via prompt
// Escreve na tela o número  e se ele é par ou ímpar

let num = Number(prompt("Digite um número"));
let result = (num % 2) == 0 ? "par" : "ímpar";
document.write(`${num} é ${result}`)