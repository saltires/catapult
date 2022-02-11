const { series } = require('gulp')

const foo = done => {
  const rand = Math.ceil(Math.random() * 10)
  setTimeout(() => {
      if (rand % 2 === 0) {
          console.log('foo 任务已完成')
          done()
      } else {
          console.log('foo 任务执行失败')
          done(new Error('err info'))
      }
  }, 1000)
}

const bar = done => {
  setTimeout(() => {
      console.log('bar 任务已完成')
      done()
  }, 1000)
}

const foobar = series(foo, bar)

exports.foobar = foobar

/**
 * 在前端构建体系中，一系列存在先后顺序的任务组成串行任务是较为常见的模式
 * 例如，项目发布这项任务就依赖于项目打包构建，如果项目打包构建都失败了，又何谈项目部署发布呢
 * 因此，在串行任务中，如果前置任务没有正常完成，后续任务自动中断执行是一个很常见的需求
 */