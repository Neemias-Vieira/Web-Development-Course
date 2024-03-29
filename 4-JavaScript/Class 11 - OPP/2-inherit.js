class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

class Dog extends Animal{
    constructor(name, race){
        super(name);            // IMPORTANT
        this.race = race;
    }

}

const animal = new Animal("Spike", 15);
console.log(animal.name, animal.weight);

const dog = new Dog("Spike", "Doberman");

console.log(dog.race);
console.log(dog.name);