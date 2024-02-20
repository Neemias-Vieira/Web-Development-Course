let num = "Global"; // let change (Deixe mudar)
const PI = 3.14; // constant (constante)

console.log(num); // Global

{
    console.log(num); // Global / ele procura no local e não acha uma variável 'num', então procura no global e encontra
}

{
    let num = "local"; //pode atualizar ou criar uma nova let, pois let é transformável
    //PI = 5; // Não será possivel fazer isso pois não pode atualziar o valor de uma constante
    const PI = 5; // Então criaremos uma nova const de mesmo nome, porém ela foi criado de forma LOCAL e não GLOBAL

    console.log(num); // Local
    console.log(PI); // 5

}

console.log(num); // Global

num = "new value"; // Atualizando a let

console.log(num); // "new value"

console.log(PI); // 3.14
