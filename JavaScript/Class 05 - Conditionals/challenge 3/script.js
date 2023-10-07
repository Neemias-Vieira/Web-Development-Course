//⚠️Desafio 12

// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

try {
    const temperature = "15 c";
    const temperatureConverted = degreeConvert(temperature);
    console.log(`${temperature.split(" ").join("").toUpperCase()} = ${temperatureConverted}`);
  } catch (error) {
    console.error(error);
  }

  function degreeConvert(degree) {

    degree = degree.split(" ").join("");
    degree = Array.from(degree);
    const scaleDegree = degree.pop().toUpperCase();
    degree = Number(degree.join(""));
    
    if (isNaN(degree)) throw new Error("Valor inválidoValor inválido! Insira conforme exemplo: 10F ou 20C.");

    switch(scaleDegree){
        case "C":
          return convertToFahrenheit(degree);
        
        case "F":
          return convertToCelsius(degree);

        default:
            throw new Error("Escala não identificada");

    }

    function convertToFahrenheit(celsius) {

         if (celsius >= -273.15) {
          
          return ((celsius * 1.8) + 32).toLocaleString("pt-BR") + "F"
         } 
         else {
          throw new Error("O valor é menor que 0 absoluto")
         }
      }

      function convertToCelsius(fahrenheit) {
        
           if (fahrenheit >= -273.15) {

            return (fahrenheit - 32) / 1.8;
           } 
           else {
            throw new Error("O valor é menor que 0 absoluto")
           }
        }
    return (`${newDegree} ${scaleDegree}`)
  }

  