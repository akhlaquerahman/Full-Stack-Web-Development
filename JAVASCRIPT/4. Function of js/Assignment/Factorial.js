/*          12.Write a function called factorial that takes a parameter n and returns the 
            of n. (Factorial of n is the product of all positive integers less than 
            or equal to n.)                                                                 */

function Factorial(Num){
    let factorial = 1

    for(let i = 1; i <=Num; i++){
        factorial *= i              //factorial=>i*1=1,fact=>1*1=1,fact=>2*1=2,fact=>3*2=6,fact=>4*6=24,fact=>5*24=120,
    }
        
    return factorial
}

console.log(`The factorial Series Is : ${Factorial(5)}`)

/*              Output
The factorial Series Is : 120

*/
    