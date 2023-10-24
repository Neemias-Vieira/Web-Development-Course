const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

const arraySorted = arrayNumbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
});

const arraySorted2 = arrayNumbers.sort((a, b) => a - b);

console.log(arraySorted.join("-"));
console.log(arrayNumbers.join("-"));
console.log(arraySorted2.join("-"));

const arrayNames = ["Heber", "Abraão", "Ismael", "Isaac", "Palestina", "Israel"];

console.log(arrayNames.sort((a, b) => {

    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

}));

const arrayNames2 = ["João", "antônio", "Moisés", "Érick", "Isaque"];

console.log(arrayNames2.sort((a, b) => a.localeCompare(b)));
console.log(arrayNames2.sort((a, b) => String(a).localeCompare(b)));


    //  24/10/2023
const arrayAnime = [

    {name: "Z", year: 1800},
    {name: "Dragon Ball", year: 1984},
    {name: "Jaspion", year: 1985},
    {name: "Cavaleiros dos Zodíaco", year: 1994},
    {name: "Naruto", year: 1997},
    {name: "Digimon", year: 1999},

];

console.table(
    arrayAnimes.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
  );
  
  console.table(arrayAnimes.sort((a, b) => a.year - b.year));