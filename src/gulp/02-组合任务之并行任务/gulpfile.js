const { parallel } = require('gulp')

const foo = done => {
  setTimeout(() => {
    console.log('foo');
    done();
  }, 1000)
}

const bar = done => {
  setTimeout(() => {
    console.log('bar');
    done();
  }, 1000)
}

const foobar = parallel(foo, bar)

exports.foobar = foobar