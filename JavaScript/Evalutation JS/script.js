// Avaliação JavaScript
// Questão 1 (Data Types):
//     Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object


// Questão 2 (Operators):
//     Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;


// Questão 3 (Functions):
//     Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.


// Questão 4 (Data Manipulation):
//     Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.


// Questão 5 (for):
//     Liste todos os valores do array criado na questão anterior ultilizando o for.


// Questão 6 (while):
//     Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:


// Questão 7 (if):
//     Crie uma lógica para verificar se o motorista foi multado
//     A infração pode ser por velocidade alta (quando ultrapassar a máxima)
//     E por velocidade baixa ( quando estiver inferior à metade da máxima )
//     A velocidade da pista é de 60km/h


// Questão 8 (array methods):
//     Uma empresa vai dar 10% de aumento para seus funcionários
//     Abaixo tem a lista com todos os salários atuais de cada um deles
//     Apresente os novos salários e o novo total em folha dessa empresa



// 1°
const operators = () => {
    const number = Number(12);
const string = String(number);
const boolean = true;
const functioon = ()=> {}
const array = [];
const objeto = [
    {Nome: "Neemias"},
    {Idade: 17}
]


console.log("1° questão");
console.log(number);
console.log(typeof(number));
console.log(string);
console.log(typeof(string));
console.log(boolean);
console.log(typeof(boolean));
console.log(functioon);
console.log(typeof(functioon));
console.log(array);
console.log(typeof(array));
console.log(objeto);
console.log(typeof(objeto));
console.log(`\n\n`);

}
operators();

//2°
const arrayNumber = [12, 3, 144];

const soma = () => {
    return arrayNumber[0] + arrayNumber[1];
}
const subtração = () => {
    return arrayNumber[0] - arrayNumber[1];
}
const multiplicação = () => {
    return arrayNumber[0] * arrayNumber[1];
}
const divisão = () => {
    return arrayNumber[0] / arrayNumber[1];
}
const restoDivisão = () => {
    return arrayNumber[0] % arrayNumber[1];
}
const raiz = () => {
    return Math.sqrt(arrayNumber[2]);
}


console.log("2° questão");
console.log(soma());
console.log(subtração());
console.log(multiplicação());
console.log(divisão());
console.log(restoDivisão());
console.log(raiz());
console.log(`\n\n`);


// 3°
const test = (entrada) => {
    return `JavaScript ${entrada}`
}

console.log("3° questão");
console.log(test(2));
console.log(`\n\n`);


// 4°
const array = [1, 2, 3];
const lifoFifo = () => {
    console.log(`${array} "INICIAL"`);

    array.pop();
    console.log(`${array} "EXCLUIDO FINAL"`);

    array.shift()
    array.unshift("outro");
    console.log(`${array} "ADICIONADO COMEÇO"`);
}

console.log("4° questão");
lifoFifo();
console.log(`\n\n`);


// 5°
const listArray = () => {
    for (let i = 0; i < array.length; i++){
        console.log(`${array[i]}`);
    }
}


console.log("5° questão");
listArray();
console.log(`\n\n`);


// 6°
let i = 0;

while (i <= 500){
    if (i < 200 && i>=400) {
        document.write(`${i} <br>`);        
    }
i++
}

console.log("6° questão");
console.log(`\n\n`);


// 7°
const velocidadeMotorista = 29;
const maxVelocidade = 60;
const minVelocidade = maxVelocidade/2;

const detran = () => {
    if (velocidadeMotorista > maxVelocidade || velocidadeMotorista < minVelocidade) {
        return `Multado pela velocidade de ${velocidadeMotorista}km/h`
    }else{
        return `Você estava de acordo com a velocidade da via (60km/h)`
    }
}

console.log("7° questão");
console.log(detran());
console.log(`\n\n`);


// 8°
const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const aumento = () => {
    let newAumento = [];
    let aumentoIndividual;
    const porcentagemAumento = 0.10;
    let count = 0;

    for (let i = 0; i < salary.length; i++) {
        aumentoIndividual = salary[i] + (salary[i] * porcentagemAumento);
        newAumento.push(aumentoIndividual); 
        count += aumentoIndividual
    }
    return {newAumento, count};
}

console.log("8° questão");
console.log(aumento());
console.log(`\n\n`);