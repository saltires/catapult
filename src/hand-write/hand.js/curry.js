function curry(func) {
  return function next(...args) {
    if (args.length < func.length) {
      return function() {
        const params = args.concat(Array.from(arguments))
        return next(...params)
      }
    }

    return func.apply(func, args)
  }
}

const sum = function(a, b, c) {
  return a + b + c
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1, 2, 3))