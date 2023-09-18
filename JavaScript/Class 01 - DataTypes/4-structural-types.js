//Object

let nameStudent = "Neemias";
let age = 17;
let profession = "Web Developer; Seller";

console.log(`Name of the student: ${nameStudent}`);
console.log(`Student age: ${age}`);
console.log(`Student profession: ${profession}`);

// As variaveis criadas nas linhas 3, 4, 5 são a respeito do mesmo objeto porém não estão interligadas
// Então vamos criar um objeto

let studant = {
    name: "Neemias",
    age: 17,
    profession: "Web Developer, Seller"
}

console.log(student); // Mostra todos os objetos de 'student' 
console.log(student.name); // Mostra somente o objeto selecionado
console.log(student.age);
console.log(student.profession);