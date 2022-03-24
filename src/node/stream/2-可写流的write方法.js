// const fs = require('fs')

// const foo = fs.createWriteStream('test1.txt')

// foo.write(Buffer.from('hello'), (err) => { console.log(err) })

// 假设上述当前目录下没有 test1.txt，上述代码执行后，当前目录中便会生成 test1.txt 
// 并且其内容为 hello，write 方法是一个消费数据的过程，例如在这里，消费的方向就是把数据存到了磁盘文件里