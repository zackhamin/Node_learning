const os = require('os')

//Get the platform
console.log(os.platform())

//CPU Arch
console.log(os.arch())

//CPU core info
console.log(os.cpus())

//Free memory
console.log(os.freemem())

//Total memory  
console.log(os.totalmem())

//Home directoru
console.log(os.homedir())

//Uptime
console.log(os.uptime())