// Crie uma função para calcular o fatorial de um número
// Solicite o número ao usuário via prompt
// Escreva (write) na tela o resultado

function calculateFactor(number) {
    if (number === 0 || number === 1) return 1;
    return number * calculateFactor(number - 1);
  }
  
  const userNum = Number(prompt("Digite um número para calcular seu fatorial:"));
  
  document.write(`O fatorial de ${userNum} é: ${calculateFactor(userNum)}`);