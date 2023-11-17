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



//  Class after day 17/11/2023

class Pokemon{
    constructor(name, level){
        this.name = name;
        this.level = level;
        this.health = 100;
    }

    attack() {
        console.log(`${this.name} atacou!!`);
    }

    damage(effective, damage = 20) {
        if(effective){
            this.health -= 20 * 1.3;
        }
        else{
            this.health -= damage;
        }
    }
}

const charmander =  new Pokemon("Charmander", 5);
const squirtle =  new Pokemon("Squirtle", 4);
const bulbassaur =  new Pokemon("Bulbassaur", 3);

console.log(charmander.name);
console.log(charmander.level);

console.log(squirtle.name);
console.log(squirtle.level);

console.log(bulbassaur.name);
console.log(bulbassaur.level);

squirtle.attack();

console.log(bulbassaur.name, bulbassaur.name);
bulbassaur.damage();
console.log(bulbassaur.name, bulbassaur.level);

bulbassaur.damage(20);
console.log(bulbassaur.health);
bulbassaur.damage(30);
console.log(bulbassaur.health);


const effective = true;
console.log();