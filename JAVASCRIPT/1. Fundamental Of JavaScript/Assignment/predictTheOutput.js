
console.log(5 == "5")

console.log(5 === "5")


// 1. == (Loose Equality Operator):
// The == operator checks for equality of values but does not consider the type of the values. If the types are different, JavaScript performs type coercion to convert them to a common type before comparing.
// 2. === (Strict Equality Operator):
// The === operator checks for both value and type equality. If the types of the values are different, it will return false without performing any type conversion.
// Example Analysis:
// Given the code:

// javascript code

// console.log(5 == "5");   // Loose equality
// console.log(5 === "5");  // Strict equality