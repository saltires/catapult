const fs = require('fs')
// 方式1 回调函数
exports.callback = done => {
  setTimeout(() => {
    console.log('回调函数');
    done()
  }, 1000)
}

// 方式2 promise
exports.promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise')
      resolve()
    }, 1000)
  })
}

const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

// 方式3 async-await
exports.async = async () => {
  await pro
  console.log('async await')
}

// 方式4 Nodejs Stream
exports.stream = () => {
  const read = fs.createReadStream('./test.txt')
  const write = fs.createWriteStream('./test1.txt')

  read.pipe(write)
  return read
}

/**
 * 为什么 gulp 支持 返回 Nodejs Stream 来创建异步任务
 * 其实原理在于 gulp 监听了 stream 的 end 事件，当 stream 的 end 事件触发后，也就表示这个 stream 流工作结束了
 * 代码类似如下： 
 */
exports.stream1 = done => {
  const read = fs.createReadStream('./test.txt')
  const write = fs.createWriteStream('./test1.txt')

  read.pipe(write)
  read.on('end', () => {
    done()
  })
}

/**
 * 如上四种方式中，哪种最为常用
 * gulp 作为构建系统，最常打交道的便是文件流，因此，第四种方式是最为常用的
 */