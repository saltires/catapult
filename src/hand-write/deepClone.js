function deepClone(obj) {
  if (typeof obj !== 'object') return obj

  let ret = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    ret[key] = deepClone(obj[key])
  }

  return ret
}

const a = {
  x: '123',
  b: {
    name: 'knight'
  },
  c: () => console.log(123)
}

console.log(deepClone(a))