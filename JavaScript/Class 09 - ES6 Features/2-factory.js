// Factory (Creational Design Pattern)

function person(name, age){
    return{
        name: name,
        age: age,
        canDrive: age >= 18,
        status: () => {
            if (age >= 18) {
                return `Pode dirigir`;
            }else{
                return `Não pode dirigir`
            }
        },
    };
}

console.log(person("emanuel", 30));
console.log(person("neemias", 17));
console.log(person("luiza", 19));
console.log(person("neemias", 17).status());