const fs  = require('fs')
const read = fs.createReadStream('./test.txt', {
  highWaterMark: 2
})

const data = []

read.on('data', (chunk) => {
  data.push(chunk)
})

read.on('end', () => {
  console.log(data.length)
  console.log(Buffer.concat(data).toString())
})