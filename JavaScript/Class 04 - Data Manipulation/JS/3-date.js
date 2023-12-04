// new: left-hand-side expression
let dateNow = new Date();
let date1 = new Date("2023-12-1 12:03:24");
let date2 = new Date("2023-12-3 12:03:24");

console.log((date2 - date1) / 1000 / 60 / 60 / 24 + " dias");
console.log(0.25 * 24 + "h");
console.log(dateNow);

console.log(" ");

console.log(dateNow);
console.log(date1);

console.log(dateNow.getDay() + 1); // day 0-6, dom-sab
console.log(dateNow.getDate()); // day of month
console.log(dateNow.getMonth()); // 0-11,  OBS: 0 = january
console.log(dateNow.getMonth() + 1);
console.log(dateNow.getFullYear()); //year XXXX EX: 2023

console.log(" ");
console.log(dateNow.setDate(dateNow.getDate() + 30));
console.log(dateNow.setMonth(dateNow.getMonth() + 1));
console.log(dateNow.setFullYear(dateNow.getFullYear()));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

console.log(dateNow.setHours(dateNow.getHours()));
console.log(dateNow.setMinutes(dateNow.getMinutes()));
console.log(dateNow.setSeconds(dateNow.getSeconds()));
console.log(dateNow.setMilliseconds(dateNow.getMilliseconds()));

// Quando dia e mês for menor que 10 o número aparece sem o 0 a esquerda EX: 1
// Vamos colocar padstart(2, "0"), mas é de string então iremos tranformar para string
let dateNow2 = new Date();
let day = String(dateNow2.getDate()).padStart(2, "0");
let month = String(dateNow2.getMonth() + 1).padStart(2, "0");
let year = dateNow2.getFullYear();

console.log(" ");
console.log(`${day}/${month}/${year}`);

console.log(
  dateNow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  })
);

console.log(
  dateNow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);
