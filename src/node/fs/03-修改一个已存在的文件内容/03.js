const fsPromise = require('fs').promises
const fs = require('fs')

// 01 同步方式
fs.writeFileSync('./foo.txt', 'txt hello')

// 02 异步之promise
fsPromise.writeFile('./foo.txt', 'txt hello').then((res) => {
  console.log('异步之promise：' + '文件创建成功')
})

// 03 异步之回调
fs.writeFile('./foo.txt', 'txt hello', {
  encoding: 'utf8'
}, (err, res) => {
  console.log('异步之回调：' + '文件创建成功')
})