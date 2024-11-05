
/*
const name = "Akhlaque"

name = "fahad"

*/

// Error Explanation:
// The variable name is declared using const, which means it is a constant variable.
// In JavaScript, const variables cannot be reassigned once they have been assigned a value.
// Attempting to assign a new value to a const variable (in this case, trying to set name to "fahad") will result in a TypeError.

let name = "Akhlaque"; // Use 'let' to allow reassignment

name = "fahad"; // Now this is valid

console.log(name); // Output: "fahad"
