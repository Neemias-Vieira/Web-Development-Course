let factorial = prompt("please, insert a number");

try{calcFactorial(factorial)
}catch(error){
    console.error(error);
}


function calcFactorial(number) {
    let result = 1;
    let limite = number;

    for(let i = 1; i <=  limite; i++){
        result = result * number;
        number--
    }
    document.write(`${factorial}! = ${result}`);
}