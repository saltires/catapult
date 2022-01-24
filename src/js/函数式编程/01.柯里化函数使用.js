const lodash = require('lodash')

function sum(a, b, c) {
  return a + b + c
}

const curried = lodash.curry(sum)

console.log('curried(1)(2)(4) 的结果是：', curried(1)(2)(4))
// curried(1)(2)(4) 的结果是： 7