
function triangle(a,b,c){
    if(a == b && b == c){
        console.log("The triangle is equilateral");
        }
        
    else if(a == b || b  == c || a == c )  {
        console.log("The triangle is isosceles");
    }

    else if(a != b && b != c && a != c){
        console.log("The triangle is scalene")
    }
   
}

triangle(4,4,4)