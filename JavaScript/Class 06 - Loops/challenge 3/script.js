// ⚠Desafio 15

// Crie um jogo que adivinhe um número de 1 a 10
// O jogo encerra quando acertar o número e apresenta quantas tentativas levou
// O programa deve ser encerrado caso o usuário clique em cancelar

function closeWindow() {
    window.close(); 
  }

function divination(){

    const numberSecret = parseInt((Math.random()*10)+1); 
    let number;
    let myArray;
    let i = 0;

    do {
        number = prompt("Adivinhe o número");

        if (number === null) {
        alert ("Função cancelada pelo usuário.");
        return;
        }
        number = Number(number)
        if (number > 0 || number < 11) {
            i++;
        }else{
            alert (`${number} é um número inválido, por favor clique novamente em "COMEÇAR" e digite um número de 1 e 10`);
            return;
        }

    }while (number != numberSecret);

    alert (`Você teve ${i} tentativas para acertar o número ${numberSecret}`);
    return;
}
