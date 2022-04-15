const foo = {
  name: 'saltire',
  age: 26
}

Symbol.APPLY = Symbol('apply')

Function.prototype._apply = function(that, ...args) {
  that = that || {}

  that[Symbol.APPLY] = this

  const ret = eval(`that[Symbol.APPLY](${args})`)

  Reflect.deleteProperty(that, Symbol.APPLY)

  return ret
}

function bar(...args) {
  console.log(this.name + this.age + args)
  return 'y'
}

console.log(bar._apply(foo, '1', '2'))