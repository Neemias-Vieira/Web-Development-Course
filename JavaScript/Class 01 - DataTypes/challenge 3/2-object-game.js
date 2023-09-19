//  Crie um programa para cadastrar Jogo
//  Solicite ao usuário o nome, o gênero e o ano de lançamento do mesmo.
//  Em seguida monte um objeto contendo essas informações e imprima as características no console


const name = prompt("Qual o nome do seu jogo?")
const gender = prompt("Qual o gênero do seu jogo?")
const releaseYear = prompt("Qual o ano de lançamento do seu jogo?")

let game = {
    name,
    gender,
    releaseYear
}

console.log(game)
console.log(game.name) 
console.log(game.gender) 
console.log(game.releaseYear) 