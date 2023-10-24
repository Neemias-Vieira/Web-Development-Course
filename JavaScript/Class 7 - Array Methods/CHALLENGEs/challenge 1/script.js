// ⚠Desafio 17

// Escreva uma lógica que sorteie os números da loteria de 1 a 25
// Devem ser sorteados 15 números aleatoriamente
// Apresente o resultado de forma ordenada
alert(draw());

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
