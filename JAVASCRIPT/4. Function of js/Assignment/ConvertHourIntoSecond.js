function ConvertHourIntoSecond(a){
    let Hour = a
    let minnute = Hour * 60
    let Second = minnute * 60

    return Second
}

console.log(`The Second is in Hour = ${ConvertHourIntoSecond(2)}`)


