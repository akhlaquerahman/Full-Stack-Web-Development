const factorial = (a) => {
    if (a<0){
        return "Factorial is not defined for negative numbers"
    }

        let result = 1
        for (let i = 1; i <= a; i++) {
            result *= i;
        }
        return result

}

console.log(factorial(2))