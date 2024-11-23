/*          14.Create a function called Fibonacci that takes a parameter n and returns an 
            array containing the first n numbers in the Fibonacci series.                  */

            function Febonacci(Num){
                
                let a = 1
                let b = 0

                console.log("Febonacci Series :")
                console.log(b)

                for(let i=1; i<=Num; i++){
                    let febonaci=a+b;            //febonacci=>0,1,febo.=>0+1=1,febo.=>1+1=2,febo.=>2+1=3,febo.=>3+1=4
                                                 //febonacci=>0,1,1,2,3,4,5,6...
                    console.log(`${febonaci}  `)
                    a=b;
                    b=febonaci;
                }
            }
            Febonacci(8)
            

 /*              Output
 
            Febonacci Series :
            0
            1  
            1  
            2  
            3  
            5  
            8  
            13  
            21  
            
                        */