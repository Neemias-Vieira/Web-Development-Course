const arrayNumbers = [2, 4, 6, 8];

console.log(arrayNumbers.reduce((a, b) =>{

    return a+b; // 20

}));

console.log(arrayNumbers.reduce((prevValue, currentValue) => {

     return prevValue + currentValue;

}), 100);

const shoppingCart = [

    {product: "Arroz", amount: 2, price: 20},
    {product: "Café", amount: 3, price: 40},
    {product: "Feijão", amount: 4, price: 60},

]

console.log(shoppingCart.reduce((prevValue, currentValue) => {

    return prevValue + currentValue.price;

}, 0));// este 0 é o setar do prev value

console.log(shoppingCart.reduce((prevValue, currentValue) => {

    return prevValue + currentValue.price * currentValue.amount;

}, 0));