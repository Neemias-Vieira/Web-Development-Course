const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

const arraySorted = arrayNumbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
});

const arraySorted2 = arrayNumbers.sort((a, b) => a - b);

console.log(arraySorted.join("-"));
console.log(arrayNumbers.join("-"));
console.log(arraySorted2.join("-"));

const arrayNames = ["João", "antônio", "Moisés", "Ismael", "Isaque"];

console.log(arrayNames.sort((a, b) => {

    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

}));

const arrayNames2 = ["João", "antônio", "Moisés", "Érick", "Isaque"];

console.log(arrayNames2.sort((a, b) => a.localeCompare(b)));