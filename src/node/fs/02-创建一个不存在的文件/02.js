const fsPromise = require('fs').promises
const fs = require('fs')

// 01 同步方式
fs.writeFileSync('./foo.txt', 'hello txt')

// 02 异步之Promise
fsPromise.writeFile('./foo.txt', 'hello txt').then(res => console.log('创建文件成功')) 

// 03 异步之回调
fs.writeFile('./foo.txt', 'hello txt', 'utf8', (err, res) => console.log('创建文件成功'))