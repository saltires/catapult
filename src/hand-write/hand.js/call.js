Function.prototype._call = function(that, ...args) {
  if (typeof that !== 'object' && typeof that !== 'function') return

  Symbol.CALL = Symbol()
  that[Symbol.CALL] = this
  const ret = eval(`that[Symbol.CALL](${args})`)
  Reflect.deleteProperty(that, Symbol.CALL)
  Reflect.deleteProperty(Symbol, 'CALL')

  return ret
}

const foo = {
  name: 'saltire',
  age: 20
}

function bar(time) {
  console.log(this.name + this.age + time)
}

bar.call(foo, 300)