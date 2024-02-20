// ⚠Desafio 17

// Escreva uma lógica que sorteie os números da loteria de 1 a 25
// Devem ser sorteados 15 números aleatoriamente
// Apresente o resultado de forma ordenada


function draw() {
    const maxValue = 25;
    const minValue = 1;
    let draw; 
    let drawList = [];
    for (let i = 0; i < 15; i++){
        draw = parseInt(Math.random() * ((maxValue - minValue) + 1) + minValue)
        drawList.push(draw);
    }
    drawList.sort((a, b) => a - b);
    drawList = drawList.join(" - ");
    return drawList
}

function draw2(){

    let arrayNumbers = Array.from({ length: 25}, (value, index) => index + 1)
    .sort(() => Math.random() - 0.5)
    .filter((value, index) => index < 15)
    .sort((a, b) => a - b);

    arrayNumbers = arrayNumbers.join(" - ")

    return arrayNumbers
} 


console.log(draw());
console.log(" \n\n ");
console.log(draw2());