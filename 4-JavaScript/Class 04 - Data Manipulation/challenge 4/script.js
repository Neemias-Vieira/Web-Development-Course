//  Crie uma função que remova um elemento específico de um Array
//  Insira o nome do elemento e o array via parâmetros
// Retorne o array com valor atualizado

function delElementsArray(element, array, length) {

    const index = String(array.indexOf(element));

    if (index > 0 && index <= length) {
        array.splice(index, 1);
    }

    return array;
}

const techs = ["HTML", 10, "CSS", 20, "JavaScript", 30];
const numberIndexes = techs.length - 1;
console.log(numberIndexes);

console.log(delElementsArray("CSS", techs, numberIndexes)); // ['HTML', 10, 20, 'JavaScript, 30']