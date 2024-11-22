function LargestNumber(a,b,c){
    if(a<b && a<c){
        return a;
        }
        else if(b<a && b<c){
            return b;
        }
        else if(c < a && c< b) {
            return c;
        }
        else{
            console.log("These Number Are Equal")
        }
}

console.log(`It Is The Smallest Number ${LargestNumber(11,12,3)}`)