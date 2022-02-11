const fsPromise = require('fs').promises
const fs = require('fs')

// 01 同步方式
fs.copyFileSync('foo.txt', 'bar.txt')

// 02 异步方式之Promise
fsPromise.copyFile('foo.txt', 'bar.txt').then(res => console.log('拷贝成功'))

// 03 异步方式之回调函数
fs.copyFile('foo.txt', 'bar.txt', err => console.log('拷贝成功'))