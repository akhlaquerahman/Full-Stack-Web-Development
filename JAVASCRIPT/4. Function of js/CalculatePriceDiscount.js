function discount(price,discount=10){
    let discountedPrice = (price * discount)/100
    let finalPrice = price - discountedPrice
    return finalPrice
}

console.log(discount(100))

/*      Output

        90
                    */