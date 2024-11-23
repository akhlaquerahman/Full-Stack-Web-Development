/*      13.Create a function called check Prime that takes a parameter n and returns 
        true if n is a prime number, and false otherwise.                               */

        function checkPrime(n) {
            
            let check = 0
            for(let i=1; i<=n; i++){
                if(n%i==0){
                    check++;
                }
            }
            if(check==2){
                return true
            }
            else{
                return false
            }
        }
        
        // Example usage:
        console.log(checkPrime(2));  // Output: true
        console.log(checkPrime(4));  // Output: false
        console.log(checkPrime(17)); // Output: true
        console.log(checkPrime(1));  // Output: false
        console.log(checkPrime(29)); // Output: true
        