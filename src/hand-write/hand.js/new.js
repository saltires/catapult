function foo(Con, ...arg) {
  const obj = Object.create(null)
  obj.__proto__ = Con.prototype
  Con.apply(obj, [Con, ...arg])
  return obj
}