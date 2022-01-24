function sum(a, b, c) {
  return a + b + c
}

function curry(func) {
  return function fn(...args) {
    if (func.length > args.length) {
      return function() {
        return fn(...args.concat([...arguments]))
      }
    }

    return func(...args)
  }
}

const curried = curry(sum)

console.log(curried(1)(2)(3))
