const myArray = Array("A", 1, () => "function");

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.join("_"));

const myName = "Neemias";
console.log(myName.split("").reverse().join(""));

const arrayTechs = ["HTML", "CSS", "Git"];

arrayTechs.push("JavaScript"); // add ao final do array
arrayTechs.push("Vou ser removido"); 
console.log(arrayTechs);



//  FIFO (First IN, First OUT), o primeiro a entrar é o primeiro a sair, é uma lógica de fila.
// Então quando for adicionar, coloca nas primeiras casas do array. E quando for retirar, apaga das últimas 

//  LIFO (Last IN, first OUT) o último a ser colocado é o primeiro a ser retirado
// Quando colocamos pratos em um escorredor, vamos retirar do que estar mais perto da borda, ou seja, o último a ser colocado



arrayTechs.pop(); // Exclui do final do array
console.log(arrayTechs);

const removeItem = arrayTechs.pop();
console.log(removeItem + " foi removido com sucesso!");

const removeItemSTART = arrayTechs.shift(); // Exclui do começo do array
console.log(removeItemSTART + " foi removido com sucesso!");

console.log(arrayTechs);

arrayTechs.unshift("React.JS");
arrayTechs.unshift("SQL");

console.log(arrayTechs);

console.log(arrayTechs.includes("JavaScript"));

console.log(arrayTechs.indexOf("Git")); // Qual o índice de "**"? (ATENÇÃO: se ele não encontrar um índice que corresponda a "**", ele vai retornar -1) EXEMPLO EM BAIXO
console.log(arrayTechs.indexOf("GIT")); // -1

console.log(arrayTechs.keys());

    // slice = fatiamento
console.log(myName.slice(1)); // se colocado um número, ele apaga o índice do número
console.log(myName.slice(0, 3)); // se colocado dois números, ele preserva o índice de um a outro

console.log(arrayTechs);
console.log(arrayTechs.slice(-3, -1)); //  Inverte a ordem quando for negativo (1 é exclusivo)


    // (x, y) o x é onde começa e o y a quantidade de casas a partir do x (x é incluso), estes serão deletados
    // (x, y, "change") faz o mesmo que (x, y), e substitui o y pelo valor string
    // (x) ele conta a partir do indice 0, e vai até o x. Este periodo é salvo e exlui o resto
console.log(arrayTechs.splice(2)); 
console.log(arrayTechs); // o splice remomoveu o índice indicado

console.log(myArray.concat(arrayTechs)); // concatena os arrays