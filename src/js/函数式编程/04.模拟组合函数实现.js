const lodash = require('lodash')

function square(n) {
  return n * n;
}

function autoAdd(n) {
  return n + 1
}

function flowRight(...funcs) {
  return function(...args) {
    return funcs.reduce((previous, current, index, arr) => {
      if (Array.isArray(previous)) {
        return current(...previous)
      } 
      return current(previous)
    }, args)
  }
}

var addSquare = lodash.flowRight(square, autoAdd, lodash.add);
console.log(addSquare(1, 2))