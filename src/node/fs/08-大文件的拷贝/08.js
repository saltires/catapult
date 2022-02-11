const fs = require('fs')
const buf = Buffer.alloc(10)
const BUffSIZE = buf.length
let readOffset = 0

fs.open('a.txt', 'r', (err, rfd) => {
  fs.open('b.txt', 'w', (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, BUffSIZE, readOffset, (err, readBytes) => {
        if (!readBytes) {
          fs.close(rfd, (err) => {})
          fs.close(wfd, err => {})
          console.log('复制完毕！')
          return 
        }
        readOffset += readBytes
        fs.write(wfd, buf, 0, readBytes, (err) => {
          next()
        })
      })
    }
    next()
  })
})