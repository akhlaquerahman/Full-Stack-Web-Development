let a=5

let b=7

let c=6

result=a < b > c

console.log(result)


// output
// false



// Guess the Output:
// The output will be false.

// Explanation:
// This is because of how JavaScript evaluates comparison expressions.

// Order of Evaluation: The expression a < b > c is evaluated from left to right due to how JavaScript handles comparison operators.
// First Comparison (a < b):
// 5 < 7 is true.
// Next Comparison (true > c):
// After a < b is evaluated as true, the expression now becomes true > 6.
// In JavaScript, true is converted to the number 1 when used in a numeric comparison.
// So, 1 > 6 is evaluated, which is false.