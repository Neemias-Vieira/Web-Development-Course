let count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}

for (let count = 0; count <= 60; count++) {
    console.log(`é: ${count}`);
    
}

const myArray = ["A", 2, {}, () => {}];

for (let i = 0; i < myArray.length; i++){
    console.log(`${i + 1}° vez: ${i}`);

}

const arrayBiDi = [
    ["A", "B", "C", "D"],

    [1, 2, 3],

    [4, 5, "6"]
];
console.log(arrayBiDi);
console.log(arrayBiDi[0][1]);

for(let i = 0; i < arrayBiDi.length; i++){
    console.log(arrayBiDi[i]);

    for(let j = 0; j < arrayBiDi[i].length; j++){

        console.log(arrayBiDi[j]);
    }
        
}

// of == "ov" != "off"
for(const i of myArray){
    console.log(i);
}

for(const i of myArray){
    console.log(i);

    for(const j of i){
        
        console.log(i);
    }
}

//pecorre o índice
for (const i in object) {
    console.log(i);
    console.log(myArray[i]); // Assim você tem o valor
}

for(let i = 0; i < arrayBiDi.length; i++){

    for(let j = 0; j < arrayBiDi.length[i]; j++){

        console.log(arrayBiDi[i][j]);
    
    }
}