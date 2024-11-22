function generateRange(start, end) {
    
    let range = [];
    
    
    for (let i = start; i <= end; i++) {
        range=range+i;
    }
    
    
    return range;
}


console.log(generateRange(1, 5)); // Output: [1, 2, 3, 4, 5]
console.log(generateRange(3, 3)); // Output: [3]
console.log(generateRange(7, 10)); // Output: [7, 8, 9, 10]
