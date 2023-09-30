// const userAge = prompt("Qual a sua idade?");
const userAge = 170;

if(userAge >= 16 && userAge <= 17 || userAge > 70){
    console.log("Voto facultativo!");
}
else if(userAge >= 18 && userAge <= 70){
    console.log("Voto obrigatório!");
}
else{
    console.log("Não poderá votar ainda!");
}