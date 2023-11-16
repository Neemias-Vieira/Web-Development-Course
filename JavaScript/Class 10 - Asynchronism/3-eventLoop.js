//  Task
setTimeout(() => {
    console.log(2);
}, 2000);

//  Call Stack
console.log(1);

//  Microtask
queueMicrotask(() => {
    console.log(3);
});

//  Microtask
Promise.resolve().then(() => {
    console.log(4);
});

//  Ordem de saída: 1; 3; 4; 2



for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
