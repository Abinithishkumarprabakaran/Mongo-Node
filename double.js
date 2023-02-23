// console.log("Hello World")

// const dbl = (n) => n * 2 ;
// console.log(dbl(10))

// console.log(document)
// console.log(window)

// console.log(global) // only works in node.js

// console.log(process.argv)  // argv -> argument values

const dbl = (n) => n * 2 ;
// console.log(dbl(10))

console.log(dbl(process.argv[2]))

