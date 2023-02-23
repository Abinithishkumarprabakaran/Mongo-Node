console.log("Celsius to Farenheit")

// ( C * 9/5 ) + 32

const c = process.argv[2];
const f = ( c * (9/5)) + 32
console.log("Farenheit is " + f);