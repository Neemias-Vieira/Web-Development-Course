//  Binary

let n1 = 2;
let n2 = 3;

console.log(" ");
console.log("//////////4-TYPES//////////");
console.log("************BINARY************");
console.log(n1 + n2); //5
console.log("text" + n2); //text3
console.log(2 + 3); //5


//  Unary

console.log("");
console.log("************UNARY************");
console.log(++n1); //3
console.log(n1); //3
console.log(n1++); //3
console.log(typeof n1); //number


//  Ternary
//  Estrutura. Se test for TRUE a primeira opção será seguida, senão a segunda opção será seguida 
//                                   {test ? true : false}

console.log("");
console.log("************TERNARY************");
console.log(3 > n2 ? "verdadeiro" : "falso"); //falso
console.log(3 > 4 ? "verdadeiro" : "falso"); //falso
console.log(3 != 4 ? "verdadeiro" : "falso"); //verdadeiro

console.log(3 < 4 ? `3 é menor que 4` : `3 é maior que 4`); //3 é menor que 4
console.log(3 > 4 ? `3 é maior que 4` : `3 é menor que 4`); //3 é menor que 4
console.log(3 != 4 ? "verdadeiro" : "falso"); //verdadeiro

const average = 2;
console.log(average >= 7 ? "Aprovado" : "Reprovado"); //reprovado



// |             TRUTHY          |       FALSY          |
// |                             |                      |
// |     1, 1.5, -1              |       0              |
// |     " ", "0", "false"       |       ""             |
// |     {}                      |       null           |
// |     []                      |       undefined      |
// |     Infinity, -Infinity     |       NaN            |

console.log(" ");
console.log("************EXAMPLES************");
console.log(-1 ? "true" : "false"); //true
console.log("" ? "true" : "false"); //false
console.log("0" ? "true" : "false"); //true
console.log({} ? "true" : "false"); //true
console.log(null ? "true" : "false"); //false
console.log(-Infinity ? "true" : "false"); //true