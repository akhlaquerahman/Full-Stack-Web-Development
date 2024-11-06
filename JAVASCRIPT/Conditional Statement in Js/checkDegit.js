

let num = 5




if (num >= -9 && num <= 9) {
    console.log("The number is a one-digit number.");
} else if ((num >= -99 && num <= -10) || (num >= 10 && num <= 99)) {
    console.log("The number is a two-digit number.");
} else if ((num >= -999 && num <= -100) || (num >= 100 && num <= 999)) {
    console.log("The number is a three-digit number.");
} else {
    console.log("The number is more than three digits or not within the range checked.");
}