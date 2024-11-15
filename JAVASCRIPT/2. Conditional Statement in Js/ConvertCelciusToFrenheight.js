let celcius=45


// Convert Celsius to Fahrenheit
let fahrenheit = (celcius * 9/5) + 32;

// Display the converted temperature
console.log(`Temperature in Fahrenheit: ${fahrenheit}°F`);


if(0 > celcius ){
    console.log("This Cold")
}
else if( 100 >= celcius){
    console.log("This is Hot")
}