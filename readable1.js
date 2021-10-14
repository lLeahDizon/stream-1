const {Readable: Readable1} = require('stream')

const inStream = new Readable1()

inStream.push('ABCDEFGHIJKLM')
inStream.push('NOPQRSTUVWXYZ')

inStream.push(null)

inStream.pipe(process.stdout)
