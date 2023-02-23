const os = require('os')

console.log( `Free Memory ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB` );

console.log( `Total Memory ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB` );

console.log( `OS Version ${os.version()}`)

console.log( `CPU ${os.cpus()}` )