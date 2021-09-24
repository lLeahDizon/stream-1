const fs = require('fs')
const stream = fs.createWriteStream('./big_file.txt')

for (let i = 0; i < 100000; i++) {
  stream.write(`这是第 ${i} 行内容，我们需要很多很多的内容\n`)
}

stream.end()
console.log('done')
