const { series } = require('gulp')

const foo = done => {
  setTimeout(() => {
      console.log('foo 任务已完成')
      done()
  }, 1000)
}
const bar = done => {
  setTimeout(() => {
      console.log('bar 任务已完成')
      done()
  }, 1000)
}

exports.foobar = series(foo, bar)
