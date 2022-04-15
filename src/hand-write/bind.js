const foo = {
  name: 'saltire',
  age: 26
}

Symbol.BIND = Symbol('bind')

Function.prototype._bind = function(that, ...args) {
  const _this = this
  that = that || {}

  return function(...argument) {
    const params = args.concat(argument)
    that[Symbol.BIND] = _this
    const ret = eval(`that[Symbol.BIND](${params})`)
    Reflect.deleteProperty(that, Symbol.BIND)

    return ret
  } 
}

function bar(...args) {
  console.log(this.name + this.age + args)

  return 'y'
}

const bar_temp = bar._bind(foo, '1', '2')

console.log(bar_temp('3'))