const Largest = [10,12,45,35,62,70]
let Largest2 = Largest[0]
for(let i=0; i<Largest.length; i++){
    if(Largest[i] > Largest2){
        Largest2 = Largest[i]
    }
}
console.log(Largest2)              