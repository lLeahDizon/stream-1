const fs = require('fs')

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 1000000
  write()

  function write() {
    let ok = true
    do {
      i--
      if (i === 0) {
        writer.write(data, encoding, callback)
      } else {
        ok = writer.write(data, encoding)
        if (ok === false) {
          console.log('不能再写了')
        }
      }
    } while (i > 0 && ok)
    if (i > 0) {
      writer.once('drain', ()=>{
        console.log('干涸了')
        write()
      })
    }
  }
}

const writer = fs.createWriteStream('./big_file.txt')

writeOneMillionTimes(writer,'hello world')
