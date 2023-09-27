// Declare uma função para converter velocidade de m/s para km/h
// Solicite a velocidade via prompt e passe como argumento
// Execute a função e escreva o resultado

function MsToKmh(speed){
    return speed * 3.6
}

const userSpeed= prompt("Digite a quantidade de metros pecorridos em 1 segundo:");
const convertedSpeed = MsToKmh(userSpeed);
document.write(convertedSpeed + "km/h");

