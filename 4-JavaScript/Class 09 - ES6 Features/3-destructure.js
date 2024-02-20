const numbers = [1, 21, 32, 43];

console.log(numbers); // (4) [1, 21, 32, 43]

//  spread
console.log(...numbers); // 1 21 32 43

console.log(Math.max(numbers)); // ERRO(NaN) pois o Math.max espera uma lista escrita sem ser um array
console.log(Math.max(...numbers)); // então vamos colocar fora de um array

//  destructure
const array = ["A", "B"];
const [item1, item2, item3] = array;
console.log(array);
console.log(item1);
console.log(item2);

// Rest
function showArray(array, ...items){
    console.log(array);
    console.log(items);
    console.log(...items);
}
showArray(array, "X", "Y", "Z");