//  Solicite 2 numeros e apresente:
//  As operações e os resultados escrevendo no documento (função write)
//  Crie constantes e atribua as operações de:
// +, -, *, /, %, ** e raiz para os números solicitados.

const n1 = Number(prompt("Digite o primeiro número"));
const n2 = Number(prompt("Digite o segundo número"));

document.write(`A soma de ${n1} e ${n2} = ${n1 + n2}<br>`);

document.write(`A subtração de ${n1} e ${n2} = ${n1 - n2}<br>`);

document.write(`A multiplicação de ${n1} e ${n2} = ${n1 * n2}<br>`);

document.write(`A divisão de ${n1} e ${n2} = ${n1 / n2}<br>`);

document.write(`O resto da divisão de ${n1} e ${n2} = ${n1 % n2}<br>`);

document.write(`A potência de ${n1} elevado a ${n2} = ${n1 ** n2}<br>`);

document.write(`A raiz ${n1} de ${n2} = ${n2 ** (1/n1)}<br>`);