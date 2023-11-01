const myTitle = document.querySelector("h1");
const myContainer = document.querySelector(".container");

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

myTitle.innerText = "Document Object Model" //Insere apenas texto
myTitle.innerHTML = "<i>Document Object Model</i>" //insere um texto com uma tag
myTitle.innerHTML = "Document Object Model"

myTitle.style.color = "#f8e209"; //"style" é para colocar css, coloca-se "." e em seguida escolhe a propriedade e o valor da mesma
myTitle.style.backgroundColor = "#000"; 
myTitle.style.textShadow = "1px 1px 2px black"; 

const boxesNodeList1 =  document.getElementsByClassName(".box"); // HTMLCollection

const boxesNodeList2 =  document.querySelectorAll(".box"); // NodeList
console.log(boxesNodeList2.forEach((value) => {value.style.color = "orange"}));

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumber () {
    result.innerHTML = Number(num1.value) + Number(num2.value);
}
sumButton.addEventListener("click", sumNumber)