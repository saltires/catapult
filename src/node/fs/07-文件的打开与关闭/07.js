const fs = require('fs')

fs.open('./foo.txt', 'r+', (err, fd) => {
  console.log('fs:' + fd)
  fs.close(fd, (err) => {
    console.log('文件关闭成功')
  })
})

/**
 * 为什么在已存在 readFile、writeFile 等前提下，node 还存在 open、close、read、write 等看似无用（不被开发者直接使用）的 API
 * readFile、writeFile 等 API 在进行读取和写入操作时，都是一次性将数据读取到内存中，或者从内存中一次性将数据写入到磁盘中
 * 在文件较小时，这并不会有什么问题，但是当读取和写入的文件很大时，这种方法是行不通的。
 * 与此相反，边读边写，边写边读这种流水式读取写入方式才是最具安全和性能 
 * 实际上，在任何系统任何平台的文件操作中，stream 都是主流
 */