const fs = require('fs')
const fsPromise = require('fs').promises

// 01 同步方式
console.log('同步方式：' + fs.readFileSync('./test.txt', {
  encoding: 'utf8'
}))

// 02 异步方式之promise
fsPromise.readFile('./test.txt', {
  encoding: 'utf8'
}).then(res => console.log('异步方式之promise：' + res))

// 03 异步方式之回调
fs.readFile('./test.txt', {
  encoding: 'utf8'
}, (err, res) => console.log('异步方式之回调：' + res))