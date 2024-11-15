

let num = 4
let power = 3


let result = 1;


for (let i = 1; i <= power; i++) {
    result *= num;  // Multiply the result by the base for each loop iteration
}

// Output the result
console.log(`${num} raised to the power of ${power} is: ${result}`);
