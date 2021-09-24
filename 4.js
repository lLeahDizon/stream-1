const fs = require('fs')

const s = fs.createReadStream('./big_file.txt')

console.log(s)
