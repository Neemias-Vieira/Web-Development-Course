// String Manipulation

// Prototype (Chain)

let myName = "Neemias";

console.log(myName.__proto__); // String { "" }

console.log(myName.length); // 7

console.log(myName[1]); // e

console.log(myName.toLocaleUpperCase()); // NEEMIAS



let phrase = "I'm a Web Developer"; 

console.log(phrase.split(" ")); // Array(4) [ "I'm", "a", "Web", "Developer" ]

console.log(phrase.split(" ")[2]); // Web

console.log(phrase.split(" ").join("-")); // I'm-a-Web-Developer

console.log(phrase.split("").reverse()); // Array(19) [ "r", "e", "p", "o", "l", "e", "v", "e", "D", " ", … ]

console.log(phrase.split("").reverse().join("")); // repoleveD beW a m'I {ESTE É MUITO IMPORTANTE}



console.log(phrase.replace("Web", "JavaScript")); // I'm a JavaScript Developer

console.log(phrase.indexOf("W")); // 6



phrase = "   I'm a Web Developer   ";

console.log(phrase); //   I'm a Web Developer   

console.log(phrase.trim()); // I'm a Web Developer



phrase = phrase.trim();

console.log(phrase.substring(5)); // Web Developer



//case-sensitive
console.log(phrase.includes("web")); // false

console.log(phrase.includes("Web")); // true

console.log(phrase.includes("web") ? "test verdadeiro" : "Test Falso"); // true

console.log("Web" == "web"); // false

console.log(phrase.toLocaleLowerCase().includes("web")); // true

console.log(phrase.toLocaleLowerCase().includes("web") ? "texto verdadeiro" : "Texto Falso"); // true



const consoles = {
    log : () => {
        return "imprimir"
    }
}
console.log(consoles.log());