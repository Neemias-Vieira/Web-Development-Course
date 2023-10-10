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
        number = Number(prompt("Adivinhe o número"));

        if (number === 0) {
        alert ("Função cancelada pelo usuário.");
        return;
        }

        i++

    }while (number != numberSecret);

    alert (`Você teve ${i} tentativas para acertar o número ${numberSecret}`);
    return;
}
