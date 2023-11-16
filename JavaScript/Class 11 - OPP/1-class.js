//  Paradigma
//  Métodos (Funções)
//  Atributos (Variáveis)
//  Entidades do mundo real
//  this => (SCOPE)
class Brush {
    constructor(color, height){
        this.colorName = color;
        this.height = height;
    }

    action(){
        return "Escreve";
    }

}

const blueBrush = new Brush("Blue", 10);
const redBrush = new Brush("Red", 12);
console.log(blueBrush.colorName);
console.log(redBrush.colorName);

console.log(blueBrush.height);
console.log(redBrush.height);

console.log(blueBrush.action());