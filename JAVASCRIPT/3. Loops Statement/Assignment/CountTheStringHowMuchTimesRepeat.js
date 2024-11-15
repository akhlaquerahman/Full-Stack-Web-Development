
let str = "akhlaque"


let charToCount = "a"


let count = 0;


for (let i = 0; i < 7; i++) {
    
    if (str[i] === charToCount) {
        count++; 
    }
}


console.log(`The character '${charToCount}' appears ${count} times in the given string.`);
