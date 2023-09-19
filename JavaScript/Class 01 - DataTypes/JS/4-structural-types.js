//Object

let nameStudent = "Neemias";
let age = 17;
let profession = "Web Developer; Seller";

console.log(`Name of the student: ${nameStudent}`);
console.log(`Student age: ${age}`);
console.log(`Student profession: ${profession}`);


// As variaveis criadas nas linhas 3, 4, 5 são a respeito do mesmo objeto porém não estão interligadas
// Então vamos criar um objeto

let student = {
    name: "Neemias",
    age: 17,
    profession: "Web Developer, Seller",
    action: () => "Estudou" //Função
}

console.log(student); // Mostra todos os objetos de 'student' 
console.log(`Name: ${student.name}`); // Mostra somente o objeto selecionado
console.log(`Age: ${student.age}`);
console.log(`Profession: ${student.profession}`);

console.log(student.action());


// Exmplo de objeto com pokemon

let pokemon = {
    name: "Blastoise",
    level: 30,
    type: "water",
    attack: () => "Pound", //Função
    special: () => "Hydropump", //Função
}

console.log("");
console.log("POKEMON EXAMPLE");

console.log(`Pokemon Name: ${pokemon.name}`);
console.log(`Pokemon Level: ${pokemon.level}`);
console.log(`Pokemon Type: ${pokemon.type}`); 
console.log(`Action: ${pokemon.attack()}`); 
console.log(`Action: ${pokemon.special()}`); 


// Array (Vectorc)

let pokedex = ["Charmander", 6, "Bulbsaour", 5, "Squirtle", 4];

console.log("");
console.log("ARRAY");
console.log(pokedex);
console.log(typeof (pokedex));
console.log(pokedex[0]); // charmander


// Vamos amarrar o nome e level

let pokemons = [
    ["Charmander", 6],
    ["Bulbasour", 5],
    ["Squirtle", 4]
]

console.log("");
console.log("ARRAY COM OUTRO DENTRO");
console.log(pokemons[0]);
console.log(pokemons[2]);
console.log(pokemons[1][0]);


// Não está semântico, ao invés de ser um array bidimensional vamos criar um array de objetos

let pokemons2 = [

    {
        name: "Charmander", 
        level: 6
    },
    {
        name: "Bulbasour",
        level: 5
    },
    {
        name: "Squirtle",
        level: 4
    }

]

console.log("");
console.log("ARRAY COM OBJETOS");
console.log(pokemons2[0]);
console.log(pokemons2[2]);
console.log(pokemons2[1][0]);
console.log(pokemons2[0].name);
console.log(pokemons2[0].level);
