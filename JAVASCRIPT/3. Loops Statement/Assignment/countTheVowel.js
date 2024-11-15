let vowel = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


let count = 0

for(let i=0; i<=25; i++){

    if(vowel[i]=="A") {
        count++;
    }

    if(vowel[i]=="E") {
        count++;
    }

    if(vowel[i]=="I") {
        count++;
    }

    if(vowel[i]=="O") {
        count++;
    }

    if(vowel[i]=="U") {
        count++;
    }

}

console.log(count)