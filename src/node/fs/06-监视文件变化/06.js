const fs = require('fs')

fs.watchFile('foo.txt', {
  interval: 20
}, (curr, prev) => {
  console.log(curr)
  console.log(prev)
  // mtime是指文件的修改时间，因此，如果当前时间和之前时间的mtime不一样，说明文件被修改了
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了')
  }
})