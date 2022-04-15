Function.prototype._bind = function(that, ...args) {
  Symbol.BIND = Symbol()
  that[Symbol.BIND] = this
  return function(...argu) {
    const params = args.concat(argu)
    const ret = eval(`that[Symbol.BIND](${params})`)
    Reflect.deleteProperty(that, Symbol.BIND)
    Reflect.deleteProperty(Symbol, 'BIND')
    
    return ret
  }
}

var foo = {
  name: 'saltire',
  age: 20
}

function bar(time1, time2) {
  console.log(this.name + this.age + time1 + time2)
}

bar._bind(foo, 100)(200)