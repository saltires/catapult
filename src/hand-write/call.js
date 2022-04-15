const foo = {
  name: 'gg',
  age: 20
}

Symbol.CALL = Symbol('call')

Function.prototype._call = function(that, ...args) {
  that = that || {}
  that[Symbol.CALL] = this
  const ret = eval(`that[Symbol.CALL](${args})`)
  Reflect.deleteProperty(that, Symbol.CALL)

  return ret
}

function bar(...args) {
  console.log(this.name + this.age + args)
  return 'y'
}

console.log(bar._call(foo, 1, 2, 3))