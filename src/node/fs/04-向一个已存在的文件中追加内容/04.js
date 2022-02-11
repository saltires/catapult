const fs = require('fs')
const fsPromise = require('fs').promises

// // 01 同步方式
// fs.appendFileSync('./bar.txt', 'hello world')

// // 02 异步之Promise模式
// fsPromise.appendFile('./bar.txt', 'hello world').then(res => {
//   console.log('追加成功')
// })

// // 03 异步之回调模式
// fs.appendFile('./bar.txt', 'hello world', (err, res) => {
//   console.log('追加成功')
// })

// 04 使用writeFile追加
fs.writeFile('./bar.txt', 'hello world', {
  flag: 'a+'
}, err => console.log(err))